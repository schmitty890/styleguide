(function($){

  //the MarkdownEditor Module controls custom functionality for the markdown forms
  var MarkdownEditor = (function() {
    var simplemde = new SimpleMDE({
      element: document.getElementById("markdown-edit-section")
    });

    // ajax call to get the most recently saved object from text file
    var getMostRecentlySavedMarkdown = function() {
      var id = window.location.pathname;
      // console.log(id);
      var url = '/api/markdown';
      if(id !== '/') {
        url += id;  
      }
      
      // console.log(url);
      // ajax call with post method with new markdown data above so we can save it on the server
      $.ajax(url, {
        type: "GET"
      }).done(function(data) {
        // data is recieved back from the server from app.get('/api/markdown/:category?/:path?'
        // get the last object in the array - the most recently saved object
        var mostRecentMarkdown = {
          markdown: data.slice(-1)[0].markdown,
          time: data.slice(-1)[0].created_at,
          nbkID: data.slice(-1)[0].nbkID
        }
        // var mostRecentMarkupVersion = data.slice(-1)[0].markdown;
        // var mostRecentCreated = data.slice(-1)[0].created_at;
        console.log(mostRecentMarkdown);
        // render the value with simplemde
        simplemde.value(mostRecentMarkdown.markdown);
        $('.fa.fa-eye.no-disable').trigger('click'); // toggle the preview mode @TODO: find option in simplemde library that toggles this. https://github.com/sparksuite/simplemde-markdown-editor
        $('.markdown-message').html('');
        $('.markdown-message').html('Last updated: ' + moment(mostRecentMarkdown.time).fromNow() + ' by ' + mostRecentMarkdown.nbkID);
      });
    }

    //this init function initializes the functions ran
    var eventHandlerAndSaveMarkdown = function() {
      // attach event handler for markdown save button, on click
      $(document).on("click", ".markdown-save-button", function(event) {
        // prevent default
        event.preventDefault();
        var nbkID = $('.markdown-nbk-id').val();
        var commitMessage = $('.markdown-commit-message').val();
        if(nbkID === '' || commitMessage === '') {
          console.log('fill out your values');
          $('.markdown-message').html('');
          $('.markdown-message').html('<div>Enter your nbk id and your "commit" message</div>');
          $('.markdown-nbk-id, .markdown-commit-message').css('border', '3px solid red');
        } else {
          var markdownValue = simplemde.value();

          // console.log(markdownValue);
          var newMarkdown = {
            markdown: markdownValue,
            created_at: moment().format("YYYY-MM-DD HH:mm:ss"),
            path: 'markdown' + window.location.pathname,
            nbkID: nbkID,
            commitMessage: commitMessage
          };
          // console.log(newMarkdown);
          // ajax call with post method with new markdown data above so we can save it on the server
          $.ajax("/markdown/new", {
            type: "POST",
            data: newMarkdown
          }).then(function() {
            // once done, log new markdown added and reload the location
            // console.log("Your markdown has been saved!");
            $('.markdown-message').html(`
                <div class="msg msg--state-success" role="alert" aria-live="assertive">
                  <div class="msg__icon" aria-label="Success"></div>
                  <div class="msg__body">
                    <p class="msg__title">Saved!</p>
                    <p class="msg__message">you have saved your document. double check to ensure your changes are visable. if not, someone may have overwritten your changes :( its always a good idea that once you ahve your markdown ready, to copy your mardown, refresh the page, and edit and paste in your markup, to ensure you don't overwrite someone elses changes.</p>
                  </div>
                </div>
              `);

            // setTimeout(function() {
            //   $('.markdown-section .markdown-message').html('');
            // }, 5000);
            $('.fa.fa-eye.no-disable').trigger('click'); // toggle the preview mode @TODO: find option in simplemde library that toggles this. https://github.com/sparksuite/simplemde-markdown-editor
            $('.editor-toolbar').toggle();
            // location.reload();
          });          
        }
      });
    }

    var eventHandlers = function() {
      $(document).on("click", ".edit-markdown-button", function(event) {
        event.preventDefault();
        $('.fa.fa-eye.no-disable').trigger('click'); // toggle the preview mode @TODO: find option in simplemde library that toggles this. https://github.com/sparksuite/simplemde-markdown-editor
        $('.editor-toolbar').toggle();
      });
    }


    //this init function initializes the functions ran
    var init = function() {
      getMostRecentlySavedMarkdown();
      eventHandlerAndSaveMarkdown();
      eventHandlers();
    }

    //return the init function, assign it to init so it can be used outside of this Module as Test.init();
    return {
      init: init
    }
  })();

  //how we call the MarkdownEditor Module to execute its functions
  MarkdownEditor.init();


})(jQuery);
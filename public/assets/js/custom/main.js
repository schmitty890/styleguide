




$(function() {

  // Add a has to the url when the user clicks on the section header, this allows for ease of sharing links
  var AddIDToURL = (function() {

    //another function private to Module
    const bindClicks = function() {
      $(document).on('click', '.anchor-link', function() {
        var id = $(this).attr('id');
        window.location.hash = '';
        window.location.hash = id;
      });
    };

    // this init function initializes the functions to be executed
    const init = function() {
      bindClicks();
    };

    //return the init function, assign it to init so it can be used outside of this Module as AddIDToURL.init();
    return {
      init: init
    }
  })();

  //how we call the AddIDToURL Module to execute its functions
  AddIDToURL.init();


  // Add a has to the url when the user clicks on the section header, this allows for ease of sharing links
  var AddIsActiveClassToNavigation = (function() {
    const checkURL = function() {
      var path = location.pathname.split('/')[1];
      $('.c-header__nav-container').find(`[data-attr='${path}']`).addClass('is-active');
    };

    // this init function initializes the functions to be executed
    const init = function() {
      checkURL();
    }

    return {
      init: init
    }
  })();

  AddIsActiveClassToNavigation.init();



  
  $('.styleguide-code').each(function( index ) {
    // console.log( index + ": " + $( this ).html() );
    var code = $(this).html();
    // $(this).siblings('.code-snippet').css('border', '5px solid red');
    var html = Prism.highlight(code, Prism.languages.html);
    // $(this).siblings('.code-to-copy').append(html);
    $(this).next('.code-snippet').find('.code-to-copy').append(html);
  });

  // new Clipboard('#test');
  var clipboard = new ClipboardJS('.copy', {
    target: function(trigger) {
      return trigger.previousElementSibling;
    }
  });
  clipboard.on('success', function(e) {
      console.info('Action:', e.action);
      console.info('Text:', e.text);
      console.info('Trigger:', e.trigger);

      e.clearSelection();
  });
  clipboard.on('error', function(e) {
      console.error('Action:', e.action);
      console.error('Trigger:', e.trigger);
  });



});














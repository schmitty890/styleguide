
var code = $('.styleguide-code').first().html();

console.log(code);


// $('.target').append(html);

var html = Prism.highlight(code, Prism.languages.html);


console.log(html);
$('.test').append(html);



new Clipboard('#test');

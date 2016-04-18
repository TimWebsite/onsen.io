document.addEventListener('DOMContentLoaded', function(){

  // Dropdown
  var dropdown = $('.dropdown:not(#main-nav .dropdown)');
  var extensions = ['Pure JavaScript', 'Angular 1', 'Angular 2', 'React'].filter(function(e) {
    return e != dropdown.html();
  });
  dropdown.append('<ul>' + extensions.map(function(e) { return '<li><a>' + e + '</a></li>'; }).join('') + '</ul>');


  // tabs and navigation
  var tabs = $('.tabs a');
  tabs.click(function(e){
    e.preventDefault();
    var id = location.hash = this.href.split('#')[1];
  });

  window.onhashchange = function(e){
    e && e.preventDefault();
    var hash = location.hash.slice(1);
    if (hash) {
      $('.tab-contents > div').each(function (i) {
        tabs.eq(i).toggleClass('selected', this.id == hash)
        $(this).toggleClass('selected', this.id == hash);
      });
    } else {
      location.hash = tabs[0].href.split('#')[1];
    }
  };
  window.onhashchange();

  $('[href=#]').click(function(e) {
    e.preventDefault();
  });


  // Code
  $('pre code').each(function() {
    var lines = this.innerHTML.trim().split('\n');
    var l = lines[lines.length - 1].match(/^\s*/)[0].length; // indent length
    this.innerHTML = lines.map(function(e) {
      return '<span class="line">' + e.replace(RegExp('^\\s{' + l + '}'), '') + '</span>';
    }).join('\n');
  });
});
// Generated by CoffeeScript 1.4.0
(function() {
  var App;

  App = {};

  App.setup = function() {};

  App.tabs = function(options) {
    return options.tab.on('click', function(e) {
      var el, show;
      e.preventDefault();
      el = $(this);
      show = el.attr('href');
      options.tab.removeClass('is-active');
      el.addClass('is-active');
      options.content.removeClass('is-visible');
      return $(show).addClass('is-visible');
    });
  };

  this.App = App;

  jQuery(function($) {
    App.setup();
    return App.tabs({
      tab: $('.tab a'),
      content: $('.tabs-content')
    });
  });

}).call(this);

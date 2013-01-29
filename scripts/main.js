window.tylerdavis = {
  Models: {},
  Collections: {},
  Views: {},

  init: function() {
    // TODO - Server posts response
    this.converter = new Markdown.Converter();
    this.appview = new this.Views.applicationView();
  }
};

$(document).ready(function(){
  tylerdavis.init();
});

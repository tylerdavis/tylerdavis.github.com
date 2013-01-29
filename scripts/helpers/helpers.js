tylerdavis.helpers = {

  template : function (template) {
    var source = $(template).html();
    return Handlebars.compile(source);
  },

}
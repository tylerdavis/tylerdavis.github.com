tylerdavis.Views.Blog = Backbone.View.extend({

  className : 'blog-container',

  template : function (template) {
    var source = $(template).html();
    return Handlebars.compile(source);
  },


  initialize : function () {
    var t = this;
    this.collection = new tylerdavis.Collections.Posts();
    this.collection.fetch({
      success : function (response) {
        t.render();
      }
    });
  },

  render : function () {
    this.collection.forEach(this.addOne, this);
  },

  addOne : function (element, index, list) {
    var postView = new tylerdavis.Views.postView({ model: element });
    this.$el.append(postView.el);
  }
});
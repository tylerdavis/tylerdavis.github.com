tylerdavis.Views.Section = Backbone.View.extend({

  template : tylerdavis.helpers.template,

  initialize : function () {
    this.className = this.options.section + '-container';
  },

  render : function () {
    var html = this.template('#' + this.options.section + '-template');
    this.$el.html(html);
  }
});

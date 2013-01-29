tylerdavis.Views.postView = Backbone.View.extend({

	tagName: 'article',
	className: 'post',

	template: function (template, context) {
		var source = $(template).html();
		var compiledTemplate = Handlebars.compile(source);
		return compiledTemplate(context);
	},

	initialize : function () {
		var attributes = this.model.toJSON();
		attributes.body = tylerdavis.converter.makeHtml(attributes.body);
		var html = this.template('#post-template', attributes);
		this.$el.html(html);
	},

	render : function () {
	},

	remove: function() {
		this.$el.remove();
	}

});

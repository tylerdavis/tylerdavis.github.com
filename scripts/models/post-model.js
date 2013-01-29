tylerdavis.Models.Post = Backbone.Model.extend({

	initialize : function () {
		this.set({ 'created' : new Date() });
		this.set({ 'last_edit' : new Date() });
		self = this;
		this.on('change', function () {
			self.set({ 'last_edit' : new Date() });
		});
	},

	sync : function (method, model, options) {
		var params = _.extend({
			type: 'GET',
			dataType: 'jsonp',
			url: 'http://evening-sea-5256.herokuapp.com/post' + this.model.id + '.js'
		}, options);

		return $.ajax(params);
  }
});

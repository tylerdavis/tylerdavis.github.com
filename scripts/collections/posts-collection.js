tylerdavis.Collections.Posts = Backbone.Collection.extend({

  model : tylerdavis.Models.Post,

  sync : function (method, model, options) {
		var params = _.extend({
			type: 'GET',
			dataType: 'jsonp',
			url: 'http://tmd.io/posts.js'
		}, options);

		return $.ajax(params);
  }
});

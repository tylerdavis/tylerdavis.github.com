tylerdavis.Collections.Posts = Backbone.Collection.extend({

  model : tylerdavis.Models.Post,

  sync : function (method, model, options) {
		var params = _.extend({
			type: 'GET',
			dataType: 'jsonp',
			url: 'http://evening-sea-5256.herokuapp.com/posts.js'
		}, options);

		return $.ajax(params);
  }
});

tylerdavis.Views.applicationView = Backbone.View.extend({

	initialize : function () {
		this.router = new tylerdavis.Router();
		Backbone.history.start();
	}
});

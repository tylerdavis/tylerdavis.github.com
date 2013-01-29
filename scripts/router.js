tylerdavis.Router = Backbone.Router.extend({
	routes : {
		''              : 'about',
		'resume'        : 'resume',
		'portfolio'     : 'portfolio',
		'blog'          : 'blog',
    'blog/post/:id' : 'post',
		'contact'       : 'contact'
	},

	about : function () {
		this.renderSection('about');
	},

	resume : function () {
		this.renderSection('resume');
	},

	portfolio : function () {
		this.renderSection('portfolio');
	},

	blog : function () {
    blog = new tylerdavis.Views.Blog();
    $('.container').html(blog.el);
    $('.nav li').removeClass('active');
    $('.blog').addClass('active');
	},

  post : function (id) {
    var posts = new tylerdavis.Collections.Posts();
    posts.reset(tylerdavis.posts);
    var post = posts.get(id);
    var view = new tylerdavis.Views.postView({ model : post });
    $('.container').html(view.el);
  },

	contact : function () {
		console.log('contact link hit');
	},

  renderSection : function (section) {
    // console.log(section + ' view triggered.');
    if ( section === 'about' ||  section === 'resume' ||  section === 'portfolio' ||  section === 'blog') {
      var view = new tylerdavis.Views.Section({ section : section});
      view.render();
      $('.container').html(view.el);
      // Update nav bar
      $('.nav li').removeClass('active');
      $('.' + section).addClass('active');
    }
  }
});
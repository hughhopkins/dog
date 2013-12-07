Posts = new Meteor.Collection('posts');

Meteor.methods({
	post: function(postAttributes) {
		var user = Meteor.user(),
			postWithSameLink = Posts.findOne({url: postAttributes.url});

		// ensure the user is fricking logged in

		if (!user)
			throw new Meteor.Error(401, "you need to login to post a new dog");

		// ensure the post as a good title
		if (!postAttributes.title)
			throw new Meteor.Error(422, 'please fill in a good title');

		// check that are no exisiting post with the same link

		if (postAttributes.url && postWithSameLink) {
			throw new Meteor.Error(302, 'This link has already been posted', postWithSameLink._id);
		}

		// pick out the whitelisted keys
		var post = _.extend(_.pick(postAttributes, 'url', 'title', 'message'), {
			title: postAttributes.title + (this.isSimulation ? '(client)' : '(server)'),
			userId: user._id,
			author: user.username,
			submitted: new Date().getTime()
		});
		// wait for 5 seconds
		if (! this.isSimulation) {
			var Future = Npm.require('fibers/future');
			var future = new Future();
			Meteor.setTimeout(function() {
				future.return();
			}, 5 * 1000);
			future.wait();
		}

		var postId = Posts.insert(post);

		return postId;
	}
});
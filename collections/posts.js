Posts = new Meteor.Collection('posts');
Posts.allow({
	insert: function(userId, doc) {
		// only allow posting if you are dman logged in
		return !! userId;
	}
});
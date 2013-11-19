Meteor.subscribe('posts');

Template.leaderboard.posts = function () {
  return Posts.find({}, {sort: {score: -1, name: 1}});
};

Template.postSidebar.selected_name = function () {
	var post = Posts.findOne(Session.get("selected_postItem"));
	return post && post.name;
};

Template.postItem.selected = function () {
  return Session.equals("selected_postItem", this._id) ? "selected" : '';
};

Template.postSidebar.events({
  'click input.inc': function () {
    Posts.update(Session.get("selected_postItem"), {$inc: {score: 5}});
  }
});

Template.post.events ({
	'click': function () {
		Session.set("selected_postItem", this._id);
	}
});
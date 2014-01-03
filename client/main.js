/* is now removed because router is handeling it:

Meteor.subscribe('posts'); 

*/

/* none of the below works 

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
    console.log("upvote - Template.postSidebar.events");

  }
});

Template.post.events ({
	'click': function () {
		Session.set("selected_postItem", this._id);
		console.log("mouseClick - Template.post.events");

	}
});

*/
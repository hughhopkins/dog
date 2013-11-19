Template.postItem.helpers({
  domain: function() {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  }
});

Template.leaderboard.selected_item = function () 
      var player = Players.findOne(Session.get("selected_player"));
  return player && player.name;
 };

Template.postItem.selected = function () {
	return Session.equals("selected_item", this._id) ? "selected": '';
};


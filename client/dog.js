Players = new Meteor.Collection("players");

if (Meteor.isClient) {
  Template.leaderboard.players = function () {
    return Players.find({}, {sort: {score: -1, name: 1}});
  };

  Template.leaderboard.selected_name = function () {
    var player = Players.findOne(Session.get("selected_player"));
    return player && player.name;
  };

  Template.leaderboard.info = function () {
    var player = Players.findOne(Session.get("selected_player"));
    return player && player.info;
  };

  Template.player.selected = function () {
    return Session.equals("selected_player", this._id) ? "selected" : '';
  };

  Template.leaderboard.events({
    'click input.inc': function () {
      Players.update(Session.get("selected_player"), {$inc: {score: 10}});
    }
  });

  Template.player.events({
    'click': function () {
      Session.set("selected_player", this._id);
    }
  });
}


if (Meteor.isServer) {
  Meteor.startup(function () {
    if (Players.find().count() === 0) {
      var names = ["Frank",
                  "Sheba",
                  "Jasmine",
                  "Beethoven",
                  "Lassie",
                  "Snoopy"];
      for (var i = 0; i < names.length; i++)
        Players.insert({name: names[i], score: Math.floor(Random.fraction()*10)*5});
    }
      var infos = ["Pug",
                  "Labrador",
                  "Rhodesian Ridgeback",
                  "Border Terrier",
                  "Dachshund",
                  "Staffordshire Bull Terrier"];
        Players.insert({info: infos});
  });
}
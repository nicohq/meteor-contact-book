Groups = new Meteor.Collection('groups');

Groups.allow({
    insert: function(userID) {
        return !!userId;
    }
});

Meteor.methods({
    createGroup: function(group) {
        var user = Meteor.user(),
            groupWithTheSameName = Groups.find({
                group: group
            });

        if(group === groupWithTheSameName) {
            new Meteor.Error(302,
                'Error, find the group with the same name',
                groupWithTheSameName._id);
        }

        var newGroup = _.extend(_.pick(group, 'group'), {
            userId: user._id,
            created: new Date().getTime()
        });

        var groupID = Groups.insert(newGroup);

        return groupID;
    }
});
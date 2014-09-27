Groups = new Meteor.Collection('groups');

Groups.allow({
    insert: function(userId) {
        return !!userId;
    }
});

Meteor.methods({
    createGroup: function(group) {
        var user = Meteor.user(),
            groupWithTheSameName = Groups.find({
                group: group
            });

        //If group exist
        if(group === groupWithTheSameName) {
            throw new Meteor.Error(302,
                'Error, find the group with the same name',
                groupWithTheSameName._id);
        }

        // If empty string
        if(group.group == '') throw new Meteor.Error(422, 'Please fill in a group name');

        var newGroup = _.extend(_.pick(group, 'group'), {
            userId: user._id,
            created: new Date().getTime()
        });

        var groupID = Groups.insert(newGroup);

        return groupID;
    }
});
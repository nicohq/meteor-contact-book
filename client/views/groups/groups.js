// Subscribe on groups
// Check if groups ready == groupsHandle.ready()
// var groupsHandle = Meteor.subscribe('groups', function() {
//     if (!Session.get('group_id')) {
//         var groups = Groups.findOne({}, {
//             sort: {group: 1}
//         });
//     }
// });


Template.groupsList.helpers({
    isSelected: function() {
        return Session.equals('group_id', this._id) ? 'selected' : '';
    }
});

Template.groupsList.events({
    'change #group': function(e) {
        var selected = $(e.target).val();
        Session.set('group_id', selected);
    }
});
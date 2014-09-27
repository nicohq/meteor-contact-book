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
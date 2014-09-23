Template.contactPage.helpers({
    gavatar: function() {
        return util.getGavatar(this.email, 160);
    },
    group: function() {
        var group = Groups.findOne(this.groupID);
        return group ? group.group : 'Not selected';
    }
});


Template.contactPage.events({
    'click [data-remove="contact"]': function(e) {
        e.preventDefault();
        Contacts.remove(this._id);
        Router.go('/');
    }
});
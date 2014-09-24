Template.contactItem.helpers({
    gavatar: function() {
        return util.getGavatar(this.email, 30);
    },
    isActive: function() {
        // Add active class to selected contacts
        return Session.equals('selected_contact', this._id) ? 'active' : '';
    }
});

Template.contactItem.events({
    'click .contact-control-delete': function(e) {
        if (confirm("Delete this Contact?")) {
            e.preventDefault();
            Contacts.remove(this._id);
            Router.go('/');
        }
    }
});
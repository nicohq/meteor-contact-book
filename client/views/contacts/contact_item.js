Template.contactItem.helpers({
    fullname: function() {
        return this.firstName + ' ' + this.lastName;
    },
    gavatar: function() {
        console.log(util.getGavatar(this.email, 30) + ' ' + this.lastName);
        return util.getGavatar(this.email, 30);
    }
});

Template.contactItem.events({
    'click .contact-control-delete': function(e) {
        e.preventDefault();
        Contacts.remove(this._id);
    }
});
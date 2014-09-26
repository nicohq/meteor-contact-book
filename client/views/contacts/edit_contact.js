Template.editContact.helpers({
    isSelected: function () {
        var contactID = Session.get('selected_contact'),
            contactGroupID = Contacts.findOne(contactID).groupID;

        return this._id === contactGroupID ? 'selected' : '';
    }
});

Template.editContact.events({
    'submit form': function(e) {
        e.preventDefault();

        var contact = {
            ID: this._id,
            firstName: util.clearStr($(e.target).find('[name=first-name]').val()),
            lastName: util.clearStr($(e.target).find('[name=last-name]').val()),
            email: $(e.target).find('[name=user-email]').val(),
            phone: $(e.target).find('[name=user-tel]').val(),
            groupID: $(e.target).find('[name="group-list"]').val()
        }

        Meteor.call('editContact', contact, function(error, id) {
            if (error) return newError(error);

            Router.go('contactPage', {_id: id});
        });
    }
});
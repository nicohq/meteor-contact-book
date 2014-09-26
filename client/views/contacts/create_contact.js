Template.createContact.events({
    'submit form': function(e) {
        e.preventDefault();

        var contact = {
            firstName: util.clearStr($(e.target).find('[name=first-name]').val()),
            lastName: util.clearStr($(e.target).find('[name=last-name]').val()),
            email: $(e.target).find('[name=user-email]').val(),
            phone: $(e.target).find('[name=user-tel]').val(),
            groupID: $(e.target).find('[name="group-list"]').val()
        }

        // str Trim + validation

        Meteor.call('newContact', contact, function(error, id) {
            if (error) return newError(error);

            Router.go('contactPage', {_id: id});
        });
    }
});

Template.createGroup.events({
    'submit form': function(e) {
        e.preventDefault();

        var groupName = $(e.target).find('[name=group-name]').val();

        var group = {
            group: groupName
        }

        Meteor.call('createGroup', group, function(error, id) {
            if (error) return newError(error);

            Router.go('/');
        });
    }
});
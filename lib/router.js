Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function() {
        return Meteor.subscribe('contacts');
    }
});

Router.map(function() {
    this.route('contactsList', {path: '/'});
    this.route('contactPage', {
        path: '/contacts/:_id',
        data: function() {return Contacts.findOne(this.params._id)}
    });
    this.route('createContact', {path: '/new-contact'});
    this.route('createGroup', {path: '/new-group'});
});

// var mustBeSignedIn = function(pause) {
//     AccountsEntry.signInRequired(this, pause);
// };

// Router.onBeforeAction(mustBeSignedIn, 'loading');

Router.onBeforeAction('loading');
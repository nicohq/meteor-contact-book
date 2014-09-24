Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function() {
        return Meteor.subscribe('contacts', Meteor.userId());
    }
});

var setSessionUserID = function(id) {
    return Session.set('selected_contact', id);
}

Router.map(function() {
    this.route('home', {path: '/'});
    this.route('contactPage', {
        path: '/contacts/:_id',
        data: function() {return Contacts.findOne(this.params._id)},
        onAfterAction: function() {
            setSessionUserID(this.params._id);
        }
    });
    this.route('createContact', {path: '/new-contact'});
    this.route('createGroup', {path: '/new-group'});
    this.route('editContact', {
        path: '/edit-contact/:_id',
        data: function() {return Contacts.findOne(this.params._id)},
        onAfterAction: function() {
            setSessionUserID(this.params._id);
        }
    });
    this.route('404', {path: '/*'});
});

// var mustBeSignedIn = function(pause) {
//     AccountsEntry.signInRequired(this, pause);
// };

// Router.onBeforeAction(mustBeSignedIn, 'loading');

Router.onBeforeAction('loading');
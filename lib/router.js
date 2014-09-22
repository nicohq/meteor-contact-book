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
});

Router.onBeforeAction('loading');

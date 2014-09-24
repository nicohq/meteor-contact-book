// Contacts subscribe
// Meteor.subscribe('contacts'); ==> Move in lib/router.js

 //--> Move in /groups/groups.js

Session.set('group_id', null);
Session.set('selected_contact', null);

Tracker.autorun(function (){
    Meteor.subscribe('groups', Meteor.userId());
});
// Auth settings
//

Meteor.startup(function() {
    AccountsEntry.config({
        wrapLinks: true, // wrap links in li tag
        homeRoute: '/', // MUST BE SET - redirect to this path after sign-out
        dashboardRoute: '/', // MUST BE SET - redirect to this path after sign-in
        emailToLower: true,
        passwordSignupFields: 'EMAIL_ONLY'
    });
});


// Register global template helpers
UI.registerHelper('groups', function(){
    return Groups.find({
        userId: Meteor.userId()
    });
});

UI.registerHelper('fullname', function(){
    return util.capitalizeAll(this.firstName, this.lastName);
});
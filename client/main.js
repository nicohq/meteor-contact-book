// Contacts subscribe
// Meteor.subscribe('contacts'); ==> Move in lib/router.js


// Auth settings
//

Meteor.startup(function() {
    AccountsEntry.config({
        passwordSignupFields: 'EMAIL_ONLY',
        wrapLinks: true, // wrap links in li tag
        homeRoute: '/sign-in', // MUST BE SET - redirect to this path after sign-out
        dashboardRoute: '/' // MUST BE SET - redirect to this path after sign-in
    });
});
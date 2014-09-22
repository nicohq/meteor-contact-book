// Contacts subscribe
// Meteor.subscribe('contacts'); ==> Move in lib/router.js

Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY'
});
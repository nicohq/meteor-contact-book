// Pub short contacts
Meteor.publish('contacts', function() {
    return Contacts.find();
});

// Pub detailed contact info
//
Meteor.publish('contact', function(id){
    return Contacts.findOne(id);
});

// Pub Groups
//

Meteor.publish('groups', function(){
    return Groups.find();
});
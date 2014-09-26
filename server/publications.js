// Pub short contacts
Meteor.publish('contacts', function(loggedUserID) {
    if(Contacts.find({owner: loggedUserID}).count() === 0) {
        //Insert default test contact
        Contacts.insert({
            firstName: 'delete',
            lastName: 'me',
            email: 'test@test.com',
            phone: '111-11-11',
            owner: loggedUserID,
            group: Groups.findOne()._id
        });
    }

    return Contacts.find({
        owner: loggedUserID
    });
});

// Pub detailed contact info
// ---in this case, its makes no sens=(
// Meteor.publish('contact', function(id){
//     return Contacts.findOne(id);
// });

// Pub Groups
//

Meteor.publish('groups', function(loggedUserID){
    // Check if we have a default group ('All contact')
    if(Groups.find({userId: loggedUserID}).count() === 0) {
        //Insert default group 'All contacts'
        Groups.insert({
            userId: loggedUserID,
            group: 'All contacts',
            showAll: true,
            created: new Date().getTime()
        });
    }

    return Groups.find({
        userId: loggedUserID
    });
});
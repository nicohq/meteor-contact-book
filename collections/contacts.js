Contacts = new Meteor.Collection('contacts');

Contacts.allow({
    insert: function(userId) {
        return !!userId;
    },
    remove: function(userId) {
        return !!userId;
    }
});

Meteor.methods({
    newContact: function(contactAttr) {
        var user = Meteor.user(),
            postWithSameEmail = Contacts.findOne({
                owner: user._id,
                email: contactAttr.email
            });

        // If user loged
        if (!user)
            throw new Meteor.Error(401, "You need to login to post new stories");

        // Check first && last name !== ''
        if (!contactAttr.firstName && !contactAttr.lastName)
            throw new Meteor.Error(422, 'Please fill in a name');

        // Check if we have a contact with the same email
        if (contactAttr.email && postWithSameEmail) {
            throw new Meteor.Error(302,
                'This email has already been posted',
                postWithSameEmail._id);
        }

        // Prepare contacts fields
        var contact = _.extend(_.pick(contactAttr, 'firstName', 'lastName', 'email', 'phone', 'groupID'), {
            owner: user._id,
            submitted: new Date().getTime()
        });

        var contactId = Contacts.insert(contact);

        return contactId;
    },

    editContact: function(contactAttr) {
        var user = Meteor.user();

        if(contactAttr.email === '') return new Meteor.Error(422, 'Please fill the email');

        // If user loged
        if (!user)
            throw new Meteor.Error(401, "You need to login to post new stories");

        // Check first && last name !== ''
        if (!contactAttr.firstName && !contactAttr.lastName)
            throw new Meteor.Error(422, 'Please fill in a name');

        // Prepare contacts fields
        var contact = _.pick(contactAttr, 'firstName', 'lastName', 'email', 'phone', 'groupID');

        var contactID = contactAttr.ID;

        Contacts.update(contactID, {
            $set: contact
        });

        return contactID;
    }
});

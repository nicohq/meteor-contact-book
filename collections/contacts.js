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
                email: contactAttr.email
            });

        // Удостоверимся что пользователь залогинен
        if (!user)
            throw new Meteor.Error(401, "You need to login to post new stories");

        // Проверим что у поста есть заголовок
        if (!contactAttr.firstName && !contactAttr.lastName)
            throw new Meteor.Error(422, 'Please fill in a name');

        // Проверим что нет других постов с таким же линком
        if (contactAttr.email && postWithSameEmail) {
            throw new Meteor.Error(302,
                'This link has already been posted',
                postWithSameEmail._id);
        }

        // Выберем поля разрешенные для публикации
        var contact = _.extend(_.pick(contactAttr, 'firstName', 'lastName', 'email', 'phone'), {
            userId: user._id,
            author: user.username,
            submitted: new Date().getTime()
        });

        var contactId = Contacts.insert(contact);

        return contactId;
    }
});


if (Contacts.find().count() === 0) {
    Contacts.insert({
        firstName: 'Sacha',
        lastName: 'Greif',
        phone: '4687-4687-46',
        email: 'test@gmail.com'
    });

    Contacts.insert({
        firstName: 'Tim',
        lastName: 'Snakes',
        phone: '4687-4687-46',
        email: 'smakes@gmail.com'
    });

    Contacts.insert({
        firstName: 'Nico',
        lastName: 'Trygub',
        phone: '555-55-55',
        email: 'bestnico@gmail.com'
    });
}

Accounts.onCreateUser(function(options, user) {
    Groups.insert({
        userId: user._id,
        group: 'All contacts',
        created: new Date().getTime()
    });
    if (options.profile) user.profile = options.profile;
    return user;
});

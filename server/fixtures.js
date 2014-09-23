if (Contacts.find().count() === 0) {
    Contacts.insert({
        firstName: 'Sacha',
        lastName: ' Greif',
        email: 'test@gmail.com'
    });

    Contacts.insert({
        firstName: 'Tim',
        lastName: ' Snakes',
        email: 'smakes@gmail.com'
    });

    Contacts.insert({
        firstName: 'Nico',
        lastName: ' Trygub',
        email: 'bestnico@gmail.com'
    });
}

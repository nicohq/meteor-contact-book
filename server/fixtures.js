if (Contacts.find().count() === 0) {
    Contacts.insert({
        fullname: 'Sacha Greif',
        url: 'http://sachagreif.com/introducing-telescope/'
    });

    Contacts.insert({
        fullname: 'Tom Coleman',
        url: 'http://meteor.com'
    });

    Contacts.insert({
        fullname: 'Tom Coleman',
        url: 'http://themeteorbook.com'
    });
}

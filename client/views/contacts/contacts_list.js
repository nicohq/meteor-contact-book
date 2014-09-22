var contactsData = [
    {
        fullname: 'Nico Trygub',
        url: 'http://google.com'
    },
    {
        fullname: 'Allan Raikes',
        url: 'http://google.com'
    },
    {
        fullname: 'Jessy Pinkman',
        url: 'http://google.com'
    },
    {
        fullname: 'Josh Brook',
        url: 'http://google.com'
    }
];

Template.contactsList.helpers({
    contacts: contactsData
});
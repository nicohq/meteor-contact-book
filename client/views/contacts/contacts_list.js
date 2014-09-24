Template.contactsList.helpers({
    contacts: function() {
        var groupID = Session.get('group_id');
        //if (!groupID) return {}; // return none
        if (!groupID) return Contacts.find(); // return none

        // All contact
        var meteorGroup = Groups.findOne(groupID);
        if (meteorGroup.showAll) return Contacts.find(); //Pub all contacts

        return Contacts.find({
            groupID: groupID
        });
    }
});
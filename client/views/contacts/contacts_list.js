Template.contactsList.helpers({
    contacts: function() {
        // Search query
        var query = Session.get('search_query');
        if(query) {
            return Contacts.find({
                $or: [{'firstName': { $regex: query, $options: 'i' }},
                      {'lastName': { $regex: query, $options: 'i' }}]
            });
        }

        // Group filter (select)
        var groupID = Session.get('group_id'),
            meteorGroup = Groups.findOne(groupID);
        if (!groupID ||
             meteorGroup.showAll) return Contacts.find(); // return all contacts

        return Contacts.find({
            groupID: groupID
        });
    }
});
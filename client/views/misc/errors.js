// Local error collection
Errors = new Meteor.Collection(null);

newError = function(message) {
    Errors.insert({
        message: message,
        shown: false
    });
    Session.set('active_error', true);
}

deleteErrors = function() {
    Errors.remove({shown: true});
}

Template.errors.helpers({
    errors: function() {
        return Errors.find();
    },

    isActive: function() {
        return Session.get('active_error') ? 'active' : '';
    }
});


Template.error.events({
    'click .close-error': function (e) {
        Errors.remove(this._id);
        Session.set('active_error', null);
    }
});

Template.error.rendered = function() {
    var error = this.data;
    Meteor.setTimeout(function() {
        Errors.update(error._id, {
            $set: {
                shown: true
            }
        });
    }, 250);
};

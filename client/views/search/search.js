var debounceQuery = _.debounce(function(e){
    var value = $(e.target).val();
    Session.set('search_query', !value ? null : value);
}, 300);

Template.search.events({
    'keydown, change #main-search': function(e) {
       debounceQuery(e);
    }
});
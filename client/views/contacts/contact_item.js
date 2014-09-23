Template.contactItem.helpers({
    domain: function() {
        var a = document.createElement('a');
        a.href = this.url;
        return a.hostname;
    },
    gavatar: function() {
        // var email = 'nico_t@ukr.net';
        // var md5 = CryptoJS.MD5(email);
        // return 'https://www.gravatar.com/avatar/' + md5;
        return util.getGavatar('nico_t@ukr.net', 30);
    }
});
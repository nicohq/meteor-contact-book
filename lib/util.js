util = (function(){
    function strTrim(str) {
        return str.replace(/^[\s\xA0]+|[\s\xA0]+$/g, '');
    }

    function gavatar(email, size) {
        var md5 = CryptoJS.MD5(strTrim(email).toLowerCase());
        return 'https://www.gravatar.com/avatar/' + md5 + (!size ? '' : '?size=' + size);
    }

    return {
        trim: strTrim,
        getGavatar: gavatar
    }
})();
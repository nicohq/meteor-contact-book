util = (function(){
    function strTrim(str) {
        if((typeof str) != 'string') return false;
        return str.replace(/^[\s\xA0]+|[\s\xA0]+$/g, '');
    }

    function gavatar(email, size) {
        var md5 = CryptoJS.MD5(strTrim(email).toLowerCase());
        return 'https://www.gravatar.com/avatar/' + md5 + (!size ? '' : '?size=' + size);
    }

    function capitalize(str) {
        if((typeof str) != 'string') return false;
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    function capitalizeAll() {
        var args = Array.prototype.slice.call(arguments);
        return args.map(capitalize).join(' ');
    }

    function pretifyStr(str) {
        var trimed = strTrim(str);
        return capitalize(trimed);
    }

    return {
        trim: strTrim,
        getGavatar: gavatar,
        capitalize: capitalize,
        capitalizeAll: capitalizeAll,
        pretifyStr: pretifyStr
    }
})();
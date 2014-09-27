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

    function clearStr(str) {
        var trimed = strTrim(str);
        return capitalize(trimed);
    }

    function validate(data, regxp) {
        return (data != '' && regxp.test(data));
    }

    function validateEmail(email) {
        var regxp = /^[-\+\w.]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{1,5}$/;
        return validate(email, regxp);
    }

    function validateName(str) {
        var regxp = /^((([а-яА-Яa-zA-Z-]){3,40})[\s]*?){1,4}$/;
        return validate(str, regxp);
    }

    function validateTel(tel) {
        var regxp = /^([-\+\d()\s]+){9}/;
        return validate(tel, regxp);
    }

    return {
        trim: strTrim,
        getGavatar: gavatar,
        capitalize: capitalize,
        capitalizeAll: capitalizeAll,
        clearStr: clearStr,
        validateEmail: validateEmail,
        validateTel: validateTel
    }
})();
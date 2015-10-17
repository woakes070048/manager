Crypto = {
    encrypt: function (input) {
        return CryptoJS.AES.encrypt(input, Meteor.settings.passphrase).toString();
    },
    decrypt: function (input) {
        return CryptoJS.AES.decrypt(input, Meteor.settings.passphrase).toString(CryptoJS.enc.Utf8);
    }
};

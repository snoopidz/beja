/* remove space from string */
function trimString(str) {
	return str.replace(/^\s+/, '').replace(/\s+$/, ''); 
}

/* global CryptoJS 
* https://github.com/evgenyneu/aes-crypto-web
*/
var aesCrypto = {};

(function (obj) {
	'use strict';

	obj.formatter = {
		prefix: '',
		stringify: function (params) {
			var str = this.prefix;
			str += params.salt.toString();
			str += params.ciphertext.toString();
			return str;
		},
		parse: function (str) {
			var params = CryptoJS.lib.CipherParams.create({}),
			prefixLen = this.prefix.length;

			if (str.indexOf(this.prefix) !== 0) { return params; }

			params.ciphertext = CryptoJS.enc.Hex.parse(str.substring(16 + prefixLen));
			params.salt = CryptoJS.enc.Hex.parse(str.substring(prefixLen, 16 + prefixLen));
			return params;
		}
	};

	obj.encrypt = function (text, password) {
		try {
			return CryptoJS.AES.encrypt(text, password, { format: obj.formatter }).toString();
		} catch (err) { return ''; }
	};

	obj.decrypt = function (text, password) {
		try {
			var decrypted = CryptoJS.AES.decrypt(text, password, { format: obj.formatter });
			return decrypted.toString(CryptoJS.enc.Utf8);
		} catch (err) { return ''; }
	};
}(aesCrypto));

/* Cookies Consent Notice */ 

var ckBox=document.querySelector("#ckBox"),ckAcptBtn=document.querySelector("#ckAcptBtn"),ckErrMes="Cookie can't be set! Please unblock this site from the cookie setting of your browser.";if(null!=ckBox){ckAcptBtn.onclick=()=>{document.cookie="CookieConsentByFineshop=Accepted; max-age=2592000; path=/",document.cookie?ckBox.classList.add("acptd"):alert(ckErrMes)};let e=document.cookie.indexOf("CookieConsentByFineshop=Accepted");-1!=e?ckBox.classList.add("hidden"):ckBox.classList.remove("hidden")} ;


/*]]>*/

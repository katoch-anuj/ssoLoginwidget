/*! JSSO Crosswalk v0.3.1 | Sachin Garg | (c) Times Internet Ltd */

export class JssoCrosswalk {

	constructor(channel, platform) {
		this.channel = channel;
		this.platform = platform;
		this.ssoBaseUrl = 'https://jssodev.indiatimes.com/sso/crossapp/identity/web/';
		this.socialappBaseUrl = 'https://devsocialappsintegrator.indiatimes.com/socialsite/crossapp/web/';
		this.sdkVersion = '0.3.1';
		this.csrfToken = this.getCookie("jsso_crosswalk_csrfToken_" + this.channel);
		this.ssec = this.getCookie("jsso_crosswalk_ssec_" + this.channel);
		this.tksec = this.getCookie("jsso_crosswalk_tksec_" + this.channel);

		this.UNAUTHORIZED_ACCESS_RESPONSE = {
			"code": 404,
			"message": "UNAUTHORIZED_ACCESS",
			"status": "FAILURE",
			"data": null
		};

		this.CONNECTION_ERROR_RESPONSE = {
			"code": 503,
			"message": "CONNECTION_ERROR",
			"status": "FAILURE",
			"data": null
		};

		this.CONNECTION_TIMEOUT_RESPONSE = {
			"code": 504,
			"message": "CONNECTION_TIMEOUT",
			"status": "FAILURE",
			"data": null
		};

		this.INVALID_MOBILE = {
			"code": 402,
			"message": "INVALID_MOBILE",
			"status": "FAILURE",
			"data": null
		};

		this.INVALID_EMAIL = {
			"code": 403,
			"message": "INVALID_EMAIL",
			"status": "FAILURE",
			"data": null
		};

		this.INVALID_REQUEST = {
			"code": 413,
			"message": "INVALID_REQUEST",
			"status": "FAILURE",
			"data": null
		};

		this.INVALID_PASSWORD = {
			"code": 417,
			"message": "INVALID_PASSWORD",
			"status": "FAILURE",
			"data": null
		};

		var channelCookies = this.getChannelCookies();
		if (channelCookies.login != "" && channelCookies.daily == "") {
			this.getValidLoggedInUser();
		}
	}


	asyncJssoCall(api, data, callback) {
		this.asyncCall(this.ssoBaseUrl + api, data, callback);
	}


	asyncSocialappCall(api, data, callback) {
		this.asyncCall(this.socialappBaseUrl + api, data, callback);
	}


	asyncCall(apiUrl, data, callback) {
		var x = new XMLHttpRequest();
		x.open('POST', apiUrl);
		x.timeout = 30000;

		x.withCredentials = true;
		x.setRequestHeader("content-type", "application/json");
		x.setRequestHeader("channel", this.channel);
		x.setRequestHeader("platform", this.platform);
		x.setRequestHeader("sdkVersion", this.sdkVersion);
		x.setRequestHeader("IsJssoCrosswalk", "true");
		x.setRequestHeader("csrfToken", this.csrfToken);
		x.setRequestHeader("ssec", this.ssec);
		x.setRequestHeader("tksec", this.tksec);
		x.responseType = 'json';

		x.onload = function() {
			var response = x.response;
			//console.log(response);
			if (typeof response == "string") {
				response = JSON.parse(response);
			}

			if (!response || !response.code) {
				this.deleteChannelCookies();
				if(callback) callback(this.UNAUTHORIZED_ACCESS_RESPONSE);
				return;
			}

			if (response.code == 404) {
				this.deleteChannelCookies();
				if(callback) callback(response);
				return;
			}

			if (x.getResponseHeader('csrfToken'))
				this.csrfToken = x.getResponseHeader('csrfToken');

			if (x.getResponseHeader("ssec"))
				this.ssec = x.getResponseHeader("ssec");

			if (x.getResponseHeader("tksec"))
				this.tksec = x.getResponseHeader("tksec");
			
			if(callback) return callback(response);
		}.bind(this);
		
		x.onerror = function() {
			if(callback) return callback(this.CONNECTION_ERROR_RESPONSE);
		}.bind(this);

		x.ontimeout = function() {
			if(callback) return callback(this.CONNECTION_TIMEOUT_RESPONSE);
		}.bind(this);

		x.send(JSON.stringify(data));
	}


	getValidLoggedInUser(callback) {
		this.asyncJssoCall("loggedInUser", {}, function(response) {
			if(response.code == 200) {
				this.createChannelCookies();
			}
			if(callback) return callback(response);
		}.bind(this));
	}


	checkUserExists(identifier, callback) {
		this.asyncJssoCall("checkUserExists", {'identifier' : identifier}, callback);
	}


	registerUser(firstName, lastName, gender, dob, email, mobile, password, isSendOffer, termsAccepted, shareDataAllowed, timespointsPolicy, callback) {
		if(!email && !mobile) return callback(this.INVALID_REQUEST);
		if(email && !this.isValidEmail(email)) return callback(this.INVALID_EMAIL);
		if(mobile && !this.isValidMobile(mobile)) return callback(this.INVALID_MOBILE);
		if(!this.isValidPassword(password)) return callback(this.INVALID_PASSWORD);
		this.asyncJssoCall("registerUser", { 'firstName' : firstName,
										'lastName' : lastName,
										'gender' : gender,
										'dob' : dob,
										'email' : email,
										'mobile' : mobile,
										'password' : password,
										'isSendOffer' : isSendOffer,
										'termsAccepted' : termsAccepted,
										'shareDataAllowed' : shareDataAllowed,
										'timespointsPolicy' : timespointsPolicy }, callback);
	}


	registerUserRecaptcha(firstName, lastName, gender, dob, email, mobile, password, isSendOffer, recaptcha, termsAccepted, shareDataAllowed, timespointsPolicy, callback) {
		if(!email && !mobile) return callback(this.INVALID_REQUEST);
		if(email && !this.isValidEmail(email)) return callback(this.INVALID_EMAIL);
		if(mobile && !this.isValidMobile(mobile)) return callback(this.INVALID_MOBILE);
		if(!this.isValidPassword(password)) return callback(this.INVALID_PASSWORD);
		this.asyncJssoCall("registerUserRecaptcha", { 'firstName' : firstName,
										'lastName' : lastName,
										'gender' : gender,
										'dob' : dob,
										'email' : email,
										'mobile' : mobile,
										'password' : password,
										'isSendOffer' : isSendOffer,
										'recaptcha' : recaptcha,
										'termsAccepted' : termsAccepted,
										'shareDataAllowed' : shareDataAllowed,
										'timespointsPolicy' : timespointsPolicy }, callback);
	}


	resendMobileSignUpOtp(mobile, ssoid, callback) {
		if(!this.isValidMobile(mobile)) return callback(this.INVALID_MOBILE);
		this.asyncJssoCall("resendSignUpOtp", {'mobile' : mobile, 'ssoid' : ssoid}, callback);
	}


	resendEmailSignUpOtp(email, ssoid, callback) {
		if(!this.isValidEmail(email)) return callback(this.INVALID_EMAIL);
		this.asyncJssoCall("resendSignUpOtp", {'email' : email, 'ssoid' : ssoid}, callback);
	}


	verifyMobileSignUp(mobile, ssoid, otp, callback) {
		if(!this.isValidMobile(mobile)) return callback(this.INVALID_MOBILE);
		this.asyncJssoCall("verifySignUpOTP", {'mobile' : mobile, 'ssoid' : ssoid, 'otp' : otp}, function(response) {
			if(response.code == 200) {
				this.createChannelCookies();
			}
			if(callback) return callback(response);
		}.bind(this));
	}


	verifyEmailSignUp(email, ssoid, otp, callback) {
		if(!this.isValidEmail(email)) return callback(this.INVALID_EMAIL);
		this.asyncJssoCall("verifySignUpOTP", {'email' : email, 'ssoid' : ssoid, 'otp' : otp}, function(response) {
			if(response.code == 200) {
				this.createChannelCookies();
			}
			if(callback) return callback(response);
		}.bind(this));
	}


	verifyMobileLogin(mobile, password, callback) {
		if(!this.isValidMobile(mobile)) return callback(this.INVALID_MOBILE);
		this.asyncJssoCall("verifyLoginOtpPassword", {'mobile' : mobile, 'password' : password}, function(response) {
			if(response.code == 200) {
				this.createChannelCookies();
			}
			if(callback) return callback(response);
		}.bind(this));
	}


	verifyEmailLogin(email, password, callback) {
		if(!this.isValidEmail(email)) return callback(this.INVALID_EMAIL);
		this.asyncJssoCall("verifyLoginOtpPassword", {'email' : email, 'password' : password}, function(response) {
			if(response.code == 200) {
				this.createChannelCookies();
			}
			if(callback) return callback(response);
		}.bind(this));
	}


	facebookLogin(code, facebookRedirectUri, callback) {
		this.asyncSocialappCall("facebookLogin", {'code' : code, 'facebookRedirectUri' : facebookRedirectUri}, function(response) {
			if(response.code == 200) {
				this.createChannelCookies();
			}
			if(callback) return callback(response);
		}.bind(this));
	}


	googleplusLogin(code, googleplusRedirectUri, callback) {debugger
		this.asyncSocialappCall("googleplusLogin", {'code' : code, 'googleplusRedirectUri' : googleplusRedirectUri}, function(response) {
			if(response.code == 200) {
				this.createChannelCookies();
			}
			if(callback) return callback(response);
		}.bind(this));
	}


	linkedinLogin(code, linkedinRedirectUri, callback) {
		this.asyncSocialappCall("linkedinLogin", {'code' : code, 'linkedinRedirectUri' : linkedinRedirectUri}, function(response) {
			if(response.code == 200) {
				this.createChannelCookies();
			}
			if(callback) return callback(response);
		}.bind(this));
	}


	getUserProfile(callback) {
		this.asyncJssoCall("getUserProfile", {}, callback);
	}


	getUserDetails(callback) {
		this.asyncJssoCall("getUserDetails", {}, callback);
	}


	getMobileLoginOtp(mobile, callback) {
		if(!this.isValidMobile(mobile)) return callback(this.INVALID_MOBILE);
		this.asyncJssoCall("getLoginOtp", {'mobile' : mobile}, callback);
	}


	getEmailLoginOtp(email, callback) {
		if(!this.isValidEmail(email)) return callback(this.INVALID_EMAIL);
		this.asyncJssoCall("getLoginOtp", {'email' : email}, callback);
	}


	updateUserProfile(firstName, lastName, gender, dob, city, termsAccepted, shareDataAllowed, callback) {
		this.asyncJssoCall("updateUserProfile", {'firstName' : firstName,
											'lastName' : lastName,
											'gender' : gender,
											'dob' : dob,
											'city' : city,
											'termsAccepted' : termsAccepted,
											'shareDataAllowed' : shareDataAllowed}, callback);
	}


	getMobileForgotPasswordOtp(mobile, callback) {
		if(!this.isValidMobile(mobile)) return callback(this.INVALID_MOBILE);
		this.asyncJssoCall("getForgotPasswordOtp", {'mobile' : mobile}, callback);
	}


	getEmailForgotPasswordOtp(email, callback) {
		if(!this.isValidEmail(email)) return callback(this.INVALID_EMAIL);
		this.asyncJssoCall("getForgotPasswordOtp", {'email' : email}, callback);
	}


	verifyMobileForgotPassword(mobile, otp, password, confirmPassword, callback) {
		if(!this.isValidMobile(mobile)) return callback(this.INVALID_MOBILE);
		if(!this.isValidPassword(password)) return callback(this.INVALID_PASSWORD);
		this.asyncJssoCall("verifyForgotPassword", { 'mobile' : mobile,
												'otp' : otp,
												'password' : password,
												'confirmPassword' : confirmPassword }, callback);
	}


	verifyEmailForgotPassword(email, otp, password, confirmPassword, callback) {
		if(!this.isValidEmail(email)) return callback(this.INVALID_EMAIL);
		if(!this.isValidPassword(password)) return callback(this.INVALID_PASSWORD);
		this.asyncJssoCall("verifyForgotPassword", { 'email' : email,
												'otp' : otp,
												'password' : password,
												'confirmPassword' : confirmPassword }, callback);
	}


	loginMobileForgotPassword(mobile, otp, password, confirmPassword, callback) {
		if(!this.isValidMobile(mobile)) return callback(this.INVALID_MOBILE);
		if(!this.isValidPassword(password)) return callback(this.INVALID_PASSWORD);
		this.asyncJssoCall("loginForgotPassword", { 'mobile' : mobile,
												'otp' : otp,
												'password' : password,
												'confirmPassword' : confirmPassword }, function(response) {
			if(response.code == 200) {
				this.createChannelCookies();
			}
			if(callback) return callback(response);
		}.bind(this));
	}


	loginEmailForgotPassword(email, otp, password, confirmPassword, callback) {
		if(!this.isValidEmail(email)) return callback(this.INVALID_EMAIL);
		if(!this.isValidPassword(password)) return callback(this.INVALID_PASSWORD);
		this.asyncJssoCall("loginForgotPassword", { 'email' : email,
												'otp' : otp,
												'password' : password,
												'confirmPassword' : confirmPassword }, function(response) {
			if(response.code == 200) {
				this.createChannelCookies();
			}
			if(callback) return callback(response);
		}.bind(this));
	}


	signOutUser(callback) {
		this.asyncJssoCall("signOutUser", {}, function(response) {
			this.deleteChannelCookies();
			if(callback) return callback(response);
		}.bind(this));
	}


	updateMobile(mobile, callback) {
		if(!this.isValidMobile(mobile)) return callback(this.INVALID_MOBILE);
		this.asyncJssoCall("updateMobile", {'mobile' : mobile}, callback);
	}


	verifyMobile(mobile, otp, callback) {
		if(!this.isValidMobile(mobile)) return callback(this.INVALID_MOBILE);
		this.asyncJssoCall("verifyMobile", {'mobile' : mobile, 'otp' : otp}, callback);
	}


	addAlternateEmail(email, callback) {
		if(!this.isValidEmail(email)) return callback(this.INVALID_EMAIL);
		this.asyncJssoCall("addAlternateEmail", {'email' : email}, callback);
	}


	verifyAlternateEmail(email, otp, callback) {
		if(!this.isValidEmail(email)) return callback(this.INVALID_EMAIL);
		this.asyncJssoCall("verifyAlternateEmail", {'email' : email, 'otp' : otp}, callback);
	}


	linkFacebook(code, redirectUri, callback) {
		this.asyncJssoCall("linkSocial", {'oauthSiteId' : 'facebook', 'oauthCode' : code, 'redirectUri' : redirectUri}, callback);
	}


	linkGoogleplus(code, redirectUri, callback) {
		this.asyncJssoCall("linkSocial", {'oauthSiteId' : 'googleplus', 'oauthCode' : code, 'redirectUri' : redirectUri}, callback);
	}


	linkLinkedin(code, redirectUri, callback) {
		this.asyncJssoCall("linkSocial", {'oauthSiteId' : 'linkedin', 'oauthCode' : code, 'redirectUri' : redirectUri}, callback);
	}


	delinkSocial(source, callback) {
		this.asyncJssoCall("delinkSocial", {'oauthSiteId' : source}, callback);
	}


	setPassword(newPass, confirmPass, callback) {
		if(!this.isValidPassword(newPass)) return callback(this.INVALID_PASSWORD);
		this.asyncJssoCall("setPassword", {'newPassword' : newPass, 'confirmPassword' : confirmPass}, callback);
	}


	changePassword(oldPass, newPass, confirmPass, callback) {
		if(!this.isValidPassword(newPass)) return callback(this.INVALID_PASSWORD);
		this.asyncJssoCall("changePassword", {'oldPassword' : oldPass, 'newPassword' : newPass, 'confirmPassword' : confirmPass}, callback);
	}


	changePrimaryEmail(emailId, callback) {
		if(!this.isValidEmail(emailId)) return callback(this.INVALID_EMAIL);
		this.asyncJssoCall("changePrimaryEmail", {'emailId' : emailId}, callback);
	}


	facebookLoginAccessToken(accessToken, facebookRedirectUri, callback) {
		this.asyncSocialappCall("facebookLogin", {'accessToken' : accessToken, 'facebookRedirectUri' : facebookRedirectUri}, function(response) {
			if(response.code == 200) {
				this.createChannelCookies();
			}
			if(callback) return callback(response);
		}.bind(this));
	}


	linkFacebookAccessToken(accessToken, redirectUri, callback) {
		this.asyncJssoCall("linkSocial", {'oauthSiteId' : 'facebook', 'accessToken' : accessToken, 'redirectUri' : redirectUri}, callback);
	}


	socialImageUpload(oauthSiteId, callback) {
		this.asyncJssoCall("socialImageUpload", {'oauthSiteId' : oauthSiteId}, callback);
	}


	updateProfilePic(file, callback) {
		var apiUrl = this.ssoBaseUrl + "uploadProfilePic";
		var formData = new FormData(this);
		formData.append('datafile', file);

		var x = new XMLHttpRequest();
		x.open('POST', apiUrl);
		x.timeout = 30000;
		x.withCredentials = true;
		x.setRequestHeader("channel", this.channel);
		x.setRequestHeader("platform", this.platform);
		x.setRequestHeader("sdkVersion", this.sdkVersion);
		x.setRequestHeader("IsJssoCrosswalk", "true");
		x.setRequestHeader("csrfToken", this.csrfToken);
		x.setRequestHeader("ssec", this.ssec);
		x.setRequestHeader("tksec", this.tksec);
		x.responseType = 'json';

		x.onload = function() {
			var response = x.response;
			//console.log(response);
			if (typeof response == "string") {
				response = JSON.parse(response);
			}

			if (!response || !response.code) {
				this.deleteChannelCookies();
				if(callback) callback(this.UNAUTHORIZED_ACCESS_RESPONSE);
				return;
			}

			if (response.code == 404) {
				this.deleteChannelCookies();
				if(callback) callback(response);
				return;
			}

			if (x.getResponseHeader('csrfToken'))
				this.csrfToken = x.getResponseHeader('csrfToken');

			if (x.getResponseHeader("ssec"))
				this.ssec = x.getResponseHeader("ssec");

			if (x.getResponseHeader("tksec"))
				this.tksec = x.getResponseHeader("tksec");
			
			if(callback) return callback(response);
		}.bind(this);
		
		x.onerror = function() {
			if(callback) return callback(this.CONNECTION_ERROR_RESPONSE);
		}.bind(this);

		x.ontimeout = function() {
			if(callback) return callback(this.CONNECTION_TIMEOUT_RESPONSE);
		}.bind(this);

		x.send(formData);
	}


	registerOnlyMobile(firstName, lastName, gender, mobile, termsAccepted, shareDataAllowed, timespointsPolicy, callback) {
		if(!mobile) return callback(this.INVALID_REQUEST);
		if(mobile && !this.isValidMobile(mobile)) return callback(this.INVALID_MOBILE);
		this.asyncJssoCall("registerOnlyMobile", { 'firstName' : firstName,
													'lastName' : lastName,
													'gender' : gender,
													'mobile' : mobile,
													'termsAccepted' : termsAccepted,
													'shareDataAllowed' : shareDataAllowed,
													'timespointsPolicy' : timespointsPolicy }, callback);
	}


	truecallerLogin(mobile, callback) {
		if(!mobile) return callback(this.INVALID_REQUEST);
		if(mobile && !this.isValidMobile(mobile)) return callback(this.INVALID_MOBILE);
		this.asyncJssoCall("truecallerLogin", { 'mobile' : mobile }, callback);
	}


	truecallerVerify(requestId, callback) {
		if(!requestId) return callback(this.INVALID_REQUEST);
		this.asyncJssoCall("truecallerVerify", {'requestId' : requestId}, function(response) {
			if(response.code == 200) {
				this.createChannelCookies();
			}
			if(callback) return callback(response);
		}.bind(this));
	}


	addAlternateEmailTrap(email, password, alterEmail, callback) {
		if(!this.isValidEmail(email)) return callback(this.INVALID_EMAIL);
		this.asyncJssoCall("addAlternateEmailIdTrap", {'email' : email, 'password' : password, 'alterEmail' : alterEmail}, callback);
	}


	verifyAlternateEmailTrap(email, password, alterEmail, otp, callback) {
		if(!this.isValidEmail(email)) return callback(this.INVALID_EMAIL);
		this.asyncJssoCall("verifyAlternateEmailIdTrap", {'email' : email, 'password' : password, 'alterEmail' : alterEmail, 'otp' : otp}, callback);
	}


	addAlternateMobileTrap(email, password, alterMobile, callback) {
		if(!this.isValidEmail(email)) return callback(this.INVALID_EMAIL);
		this.asyncJssoCall("addAlternateEmailIdTrap", {'email' : email, 'password' : password, 'alterMobile' : alterMobile}, callback);
	}


	verifyAlternateMobileTrap(email, password, alterMobile, otp, callback) {
		if(!this.isValidEmail(email)) return callback(this.INVALID_EMAIL);
		this.asyncJssoCall("verifyAlternateMobileTrap", {'email' : email, 'password' : password, 'alterMobile' : alterMobile, 'otp' : otp}, callback);
	}


	deleteAccount(password, callback) {
		this.asyncJssoCall("deleteUser", {'password' : password}, callback);
	}


	getChannelDetails(channel, ru, callback) {
		this.asyncJssoCall("channelDetails", {'channel' : channel, 'ru' : ru}, callback);
	}


	gpOneTapLogin(token, callback) {
		this.asyncJssoCall("gpOneTap", {'token' : token}, function(response) {
			if(response.code == 200) {
				this.createChannelCookies();
			}
			if(callback) return callback(response);
		}.bind(this));
	}


	verifyMobileLoginGdpr(mobile, password, termsAccepted, shareDataAllowed, timespointsPolicy, callback) {
		if(!this.isValidMobile(mobile)) return callback(this.INVALID_MOBILE);
		this.asyncJssoCall("verifyLoginOtpPasswordGdpr", { 'mobile' : mobile,
															'password' : password,
															'termsAccepted' : termsAccepted,
															'shareDataAllowed' : shareDataAllowed,
															'timespointsPolicy' : timespointsPolicy }, function(response) {
			if(response.code == 200) {
				this.createChannelCookies();
			}
			if(callback) return callback(response);
		}.bind(this));
	}


	verifyEmailLoginGdpr(email, password, termsAccepted, shareDataAllowed, timespointsPolicy, callback) {
		if(!this.isValidEmail(email)) return callback(this.INVALID_EMAIL);
		this.asyncJssoCall("verifyLoginOtpPasswordGdpr", { 'email' : email,
															'password' : password,
															'termsAccepted' : termsAccepted,
															'shareDataAllowed' : shareDataAllowed,
															'timespointsPolicy' : timespointsPolicy }, function(response) {
			if(response.code == 200) {
				this.createChannelCookies();
			}
			if(callback) return callback(response);
		}.bind(this));
	}


	updateUserPermissions(termsAccepted, shareDataAllowed, timespointsPolicy, callback) {
		this.asyncJssoCall("updateUserPermissions", { 'termsAccepted' : termsAccepted,
														'shareDataAllowed' : shareDataAllowed,
														'timespointsPolicy' : timespointsPolicy }, callback);
	}


	createChannelCookies() {
		var now = new Date();
		var midnight = new Date(now);
		midnight.setHours(24, 0, 0, 0);
		this.createCookie("jsso_crosswalk_login_" + this.channel, "true", 30*24*60*60*1000);
		this.createCookie("jsso_crosswalk_daily_" + this.channel, "true", midnight - now);
		this.createCookie("jsso_crosswalk_csrfToken_" + this.channel, this.csrfToken, 30*24*60*60*1000);
		this.createCookie("jsso_crosswalk_ssec_" + this.channel, this.ssec, 30*24*60*60*1000);
		this.createCookie("jsso_crosswalk_tksec_" + this.channel, this.tksec, 30*24*60*60*1000);
	}


	getChannelCookies() {
		var channelCookies = {};
		channelCookies.login = this.getCookie("jsso_crosswalk_login_" + this.channel);
		channelCookies.daily = this.getCookie("jsso_crosswalk_daily_" + this.channel);
		return channelCookies;
	}


	deleteChannelCookies() {
		this.deleteCookieByName("jsso_crosswalk_login_" + this.channel);
		this.deleteCookieByName("jsso_crosswalk_daily_" + this.channel);
		this.deleteCookieByName("jsso_crosswalk_csrfToken_" + this.channel);
		this.deleteCookieByName("jsso_crosswalk_ssec_" + this.channel);
		this.deleteCookieByName("jsso_crosswalk_tksec_" + this.channel);
	}


	getCookie(cname) {
		var name = cname + "=";
		var decodedCookie = decodeURIComponent(document.cookie);
		var ca = decodedCookie.split(';');
		for(var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	}


	deleteCookieByName(name) {
		document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
	}


	createCookie(name, value, expiryInMillis) {
		var now = new Date();
		var expireTime = now.getTime() + expiryInMillis;
		now.setTime(expireTime);
		document.cookie = name + "=" + value + "; expires=" + now.toGMTString() + "; path=/";
	}


	isValidEmail(email) {
		var re = /^(([^<>()\[\]\\.,;:\s@"]+([^<>()\[\]\\,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}


	isValidMobile(mobile) {
		var re = /^(((\+?\(91\))|0|((00|\+)?91))-?)?[7-9]\d{9}$/;
		return re.test(String(mobile));
	}


	isValidPassword(password) {
		password = String(password);
		var re1 = /.*[a-z]+.*/;
		var re2 = /.*[!@#$%^&*()]+.*/;
		var re3 = /.*[0-9]+.*/;

		if(password.length < 6 || password.length > 14)
			return false;

		if(re1.test(password) && re2.test(password) && re3.test(password))
			return true;

		return false;
	}
}
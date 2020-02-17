 import {createHTMLTemplate} from "../template/ssoTemplate.js";
 import {JssoCrosswalk} from "./jsso_crosswalk_0.3.1.js";

setTimeout(function(){
	(function(){
			var channelData = "",
			ssoMethods = {},
			jsso = "",
			channelName = "",
			configParam = {},
			socialCallback = "",
			loggedInUserProfile={},
			 emailOnly = "",
			 mobileOnly = "",
			 emailMobileOTP = "",
			 emailMobileNoOTP = "",
			 inputIdentifier = "",
			ru = "";






//index......

// var jsso = new JssoCrosswalk("tlogin", "WEB");
// var channelData = {};
// var registerUserSsoid = "";
// var  = {};
// var tempSocialCode = "";
// var baseUrl = "https://jssostg.indiatimes.com/tlogin2/";
// //var baseUrl = "https://localhost:9009/";
// var fbRedirectUri = baseUrl + "fbLoginPage.html";
// var gpRedirectUri = baseUrl + "gpLoginPage.html";
// var fbInitiateUri = "https://www.facebook.com/v2.7/dialog/oauth?client_id=1607426726038643&scope=email%2Cuser_birthday%2Cuser_hometown&redirect_uri=" + fbRedirectUri;
// var gpInitiateUri = "https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=750080981887-o16u6fhhghj37p377hqlgadijaq5re7q.apps.googleusercontent.com&scope=email%20https://www.googleapis.com/auth/plus.login&access_type=online&redirect_uri=" + gpRedirectUri;
// var fbReinitiateUri = "https://www.facebook.com/dialog/oauth?client_id=1607426726038643&auth_type=rerequest&scope=email%2Cuser_birthday%2Cuser_hometown&redirect_uri=" + fbRedirectUri;

// var email = "";
// var mobile = "";
// var identifier = "";
// var loginWithPermissionsFlag=0;

// function show(id) {
//   document.getElementById(id).style.display = 'block';
// }

// function hide(id) {
//   document.getElementById(id).style.display = 'none';
// }

// function reportError(response) {
//   alert(response.code + ": " + response.message);
// }

// function printErrorMsg(docs, msg) {
//   var length = docs.length;

//   for (i = 0; i < length; i++) {
//     docs[i].innerHTML = msg;
//   }
// }

// function continueWithEmailCallback() {
//   // hide('fb-div');
//   // hide('google-div');
//   hide('socialLoginList');
//   hide('emailMobile-div');
//   hide('signIn-div-error');
//   hide('signIn-div-error2');
//   show('signIn-div');
//   show('allSignInOptions-div');
//   show('signUpOtion');
//   return;
// }

// function showAllSignInOptions() {
//   // show('fb-div');
//   // show('google-div');
//   show('socialLoginList')
//   show('emailMobile-div');
//   show('signUpOtion');
//   hide('signIn-div');
//   hide('signUp-div');
//   hide('loginWithOtp');
//   hide('setPassword-all-error');
//   hide('setPassword-div');
//   hide('allSignInOptions-div');
// }

// function showSignUpCallback() {
//   // hide('fb-div');
//   // hide('google-div');
//   hide("socialLoginList")
//   hide('emailMobile-div');
//   hide('signIn-div');
//   hide('loginWithOtp');
//   hide('signUp-div-error');
//   hide('setPassword-all-error');
//   hide('signUpOtion');
//   show('signUp-div');
//   show('allSignInOptions-div');
// }

// function loginWithOtpCallback() {
//   var identifier = document.getElementById("login_identifier").value;
//   if (isValidEmailMobile(identifier)) {
//     // hide('signIn-div');
//     // show('loginWithOtp');
//     // hide('loginWithOtp-error');
//     document.getElementById('otpLogin').value = '';
//     getLoginOtp(identifier);
//   } else {
//     show('emailMobile-error');
//   }
// }

// function signInUsingOtp() {
//   identifier = document.getElementById("login_identifier").value;
//   var otp = document.getElementById("otpLogin").value;

//   console.log("identifier is: " + identifier);
//   console.log("otp is: " + otp);

//   if (jsso.isValidEmail(identifier)) {
//     jsso.verifyEmailLogin(identifier, otp, function(response) {
//       if (response.code != 200) {
//         show("loginWithOtp-error");
//         // reportError(response);
//         return;
//       }
//       successfulLoginRedirect(response.data);

//     });
//   } else if (jsso.isValidMobile(identifier)) {
//     jsso.verifyMobileLogin(identifier, otp, function(response) {
//       if (response.code != 200) {
//         show("loginWithOtp-error");
//         // reportError(response);
//         return;
//       }

//       successfulLoginRedirect(response.data);

//     });
//   } else {
//     console.log("Invalid Email/Mobile");
//   }
// }

// function getLoginOtp(identifier) {
//   // var identifier = document.getElementById("identifier").value;

//   if (jsso.isValidEmail(identifier)) {
//     jsso.getEmailLoginOtp(identifier, function(response) {
//       if (response.code != 200) {
//         // reportError(response);
//         if (response.code == 405 || response.code == 407)
//           show('signIn-div-error2');
//         // reportError(response);
//         console.log("ERROR code apart from 405 and 407");
//         return;
//       }
//       hide('signIn-div');
//       show('loginWithOtp');
//       hide('loginWithOtp-error');

//     });
//   } else if (jsso.isValidMobile(identifier)) {
//     jsso.getMobileLoginOtp(identifier, function(response) {
//       if (response.code != 200) {
//         // reportError(response);
//         if (response.code == 406 || response.code == 408)
//           show('signIn-div-error2');
//         // reportError(response);
//         console.log("ERROR code apart from 406 and 408");
//         return;
//       }
//       hide('signIn-div');
//       show('loginWithOtp');
//       hide('loginWithOtp-error');

//     });
//   }
// }


// function checkUserExists(identifier) {
//   jsso.checkUserExists(identifier, function(response) {
//     if (response.data.statusCode == 213 || response.data.statusCode == 212) {
//       hide('signIn-div-error2');
//       if(response.data.shareDataAllowed == null || response.data.shareDataAllowed == "0" || response.data.termsAccepted == null || response.data.termsAccepted == "0" ) {
//         show('sso-permissions-div');
//         loginWithPermissionsFlag=5;
//       }
//       return;
//     } else {
//         show('signIn-div-error2');
//       return;
//     }

//   });
// }

// function verifySignInCallback() {
//     if (loginWithPermissionsFlag == 5) {
//             verifyLoginWithPermissions();
//     } else {
//             verifyLogin();

//     }
// }

// function verifyLogin() {
//   var identifier = document.getElementById("login_identifier").value;
//   var password = document.getElementById("password_input_login").value;

//   if (jsso.isValidEmail(identifier)) {
//     jsso.verifyEmailLogin(identifier, password, function(response) {
//       if (response.code != 200) {
//         // show("signIn-div-error");
//         // reportError(response);
//         if (response.code == 405 || response.code == 407)
//           show('signIn-div-error2');
//         // reportError(response);
//         console.log("ERROR code apart from 405 and 407");
//         return;
//       }
//       successfulLoginRedirect(response.data);

//     });
//   } else if (jsso.isValidMobile(identifier)) {
//     jsso.verifyMobileLogin(identifier, password, function(response) {
//       if (response.code != 200) {
//         // show("signIn-div-error");
//         // reportError(response);
//         if (response.code == 406 || response.code == 408)
//           show('signIn-div-error2');
//         // reportError(response);
//         console.log("ERROR code apart from 406 and 408");
//         return;
//       }

//       successfulLoginRedirect(response.data);

//     });
//   }
// }

// function verifyLoginWithPermissions() {
//   var identifier = document.getElementById("login_identifier").value;
//   var password = document.getElementById("password_input_login").value;
//   var shareDataAllowed = document.getElementById("shareDataAllowed-login").checked;
//   var myTimes = document.getElementById("myTimesPolicy-login").checked;
//   var agePrivacy = document.getElementById("agePrivacy-login").checked;
//   console.log("agePrivacy or not: " + agePrivacy);
//   if (!agePrivacy) {
//       show('tNc-login-error');
//       return;
//   } else {
//       agePrivacy = '1';
//       hide('tNc-login-error');
//       if (!shareDataAllowed) {
//           show('dataSharing-login-error');
//           return;
//         } else {
//           shareDataAllowed = '1';
//           hide('dataSharing-login-error');

//           if (myTimes)
//               myTimes='1';
//           else
//               myTimes='0';
//           if (jsso.isValidEmail(identifier)) {
//             jsso.verifyEmailLoginGdpr(identifier, password, agePrivacy, shareDataAllowed, myTimes, function(response) {
//               if (response.code != 200) {
//                 // show("signIn-div-error");
//                 // reportError(response);
//                 if (response.code == 405 || response.code == 407)
//                   show('signIn-div-error2');
//                 // reportError(response);
//                 console.log("ERROR code apart from 405 and 407");
//                 return;
//               }
//               successfulLoginRedirect(response.data);

//             });
//           } else if (jsso.isValidMobile(identifier)) {
//             jsso.verifyMobileLoginGdpr(identifier, password, agePrivacy, shareDataAllowed, myTimes, function(response) {
//               if (response.code != 200) {
//                 // show("signIn-div-error");
//                 // reportError(response);
//                 if (response.code == 406 || response.code == 408)
//                   show('signIn-div-error2');
//                 // reportError(response);
//                 console.log("ERROR code apart from 406 and 408");
//                 return;
//               }

//               successfulLoginRedirect(response.data);

//             });
//           }
//         }
//     }
// }

// function registerUser() {
//   console.log("RegisterUser is called");
//   var shareDataAllowed = document.getElementById("shareDataAllowed").checked;
//   var myTimes = document.getElementById("myTimesPolicy").checked;
//   var agePrivacy = document.getElementById("agePrivacy").checked;
//   console.log("agePrivacy or not: " + agePrivacy);
//   if (!agePrivacy) {
//     //show('tNc-error');
//     return;
//   } else {
//     agePrivacy = '1';
//     if (!shareDataAllowed) {
//         // show('dataSharing-error');
//         return;
//       } else {
//         shareDataAllowed = '1';
//         if (myTimes)
//             myTimes='1';
//         else
//             myTimes='0';
//         var gender = "";
//         var dob = "";
//         var firstName = document.getElementById("firstName").value;
//         var lastName = document.getElementById("lastName").value;
//         // var gender = document.getElementById("gender").value;
//         var password = document.getElementById("passwordSignUpConf").value;
//         email = document.getElementById("emailID").value;
//         mobile = document.getElementById("mobileNo").value;
//         console.log("Password set is: " + password + " Email set is: " + email + " Mobile set is: " + mobile);

//         jsso.registerUser(firstName, lastName, gender, dob, email, mobile, password, false , agePrivacy, shareDataAllowed, myTimes, function(response) {

//           if (response.code != 200) {
//             console.log("not 200");
//             // show('signUp-div-error');
//             console.log(response.code + ": " + response.message);
//             var el=document.getElementById("password").classList.add("show")
//             // reportError(response);
//             return;
//           }
//           registerUserSsoid = response.data.ssoid;
//           console.log("SSOId given...");

//           // hide('signUp-div');
// //          show('loginWithOtp');
//            // show('registerOtp-div');

//         });
//       }
//     }
// }
function registeruserCb(){

}
function registerUser(){
	var firstName = document.getElementById("firstName") ? document.getElementById("firstName").value:"",
		lastName = document.getElementById("lastName") ? document.getElementById("lastName").value : "",
	//  gender = document.getElementById("gender").value,
		password = document.getElementById("passwordSignUpConf") ? document.getElementById("passwordSignUpConf").value : "",
		email = document.getElementById("emailID") ? document.getElementById("emailID").value : "",
		mobile = document.getElementById("mobileNo") ? document.getElementById("mobileNo").value :"",
		gender = document.getElementById("gender") ? document.getElementById("gender").value :"",
		dob = document.getElementById("dob") ? document.getElementById("dob").value :"",
		shareDataAllowed = document.getElementById("shareDataAllowed").checked,
		policy = document.getElementById("myTimesPolicy").checked,
		termsAccepted = document.getElementById("agePrivacy").checked,
		isSendOffer = false;
		if(email && emailValidation(email) && !mobile){
			jsso.registerUser(firstName, lastName, gender, dob, email, mobile, password, isSendOffer, termsAccepted, shareDataAllowed, policy,registeruserCb)
		}
		else if(mobile && mobileValidation(mobile) && !email){
			jsso.registerUser(firstName, lastName, gender, dob, email, mobile, password, isSendOffer, termsAccepted, shareDataAllowed, policy,registeruserCb)
		}
		else if((email && emailValidation(email)) && (mobile && mobileValidation(mobile))){
			jsso.registerUser(firstName, lastName, gender, dob, email, mobile, password, isSendOffer, termsAccepted, shareDataAllowed, policy,registeruserCb)
		}
}


// function verifyRegisterUser() {
//   // var identifier = document.getElementById("identifier").value;
//   var otp = document.getElementById("otpRegister").value;
//   console.log("Verify user details:" + mobile);
//   console.log("Verify user details:" + otp);

//   if (jsso.isValidEmail(mobile)) {
//     jsso.verifyEmailSignUp(mobile, registerUserSsoid, otp, function(response) {
//       if (response.code != 200) {
//         show("registerOtp-div-error");
//         // reportError(response);
//         return;
//       }
//             successfulLoginRedirect(response.data);

//       hide('registerOtp-div');
//       show('allSignInOptions-div');
//     });
//   } else if (jsso.isValidMobile(mobile)) {
//     jsso.verifyMobileSignUp(mobile, registerUserSsoid, otp, function(response) {
//       if (response.code != 200) {
//         show("registerOtp-div-error");
//         // reportError(response);
//         return;
//       }
//             successfulLoginRedirect(response.data);

//       hide('registerOtp-div');
//       show('allSignInOptions-div');
//     });
//   }
// }


// function resendRegisterUserOtp() {
//   var identifier = document.getElementById("identifier").value;

//   if (jsso.isValidEmail(identifier)) {
//     jsso.resendEmailSignUpOtp(identifier, registerUserSsoid, function(response) {
//       if (response.code != 200) {
//         reportError(response);
//         return;
//       }

//     });
//   } else if (jsso.isValidMobile(identifier)) {
//     jsso.resendMobileSignUpOtp(identifier, registerUserSsoid, function(response) {
//       if (response.code != 200) {
//         reportError(response);
//         return;
//       }

//     });
//   }
// }

// function setNewPasswordCallback() {
//   identifier = document.getElementById("login_identifier").value;
//   console.log("identifier is: " + identifier);
//   if (isValidEmailMobile(identifier)) {
//     // hide('signIn-div');
//     // show('setPassword-div');
//     getForgotPasswordOtp(identifier);
//   } else {
//     show('emailMobile-error');
//   }
// }



// function getForgotPasswordOtp(identifier) {
//   // var identifier = document.getElementById("identifier").value;

//   if (jsso.isValidEmail(identifier)) {
//     jsso.getEmailForgotPasswordOtp(identifier, function(response) {
//       if (response.code != 200) {
//         if (response.code == 405 || response.code == 407)
//           show('signIn-div-error2');
//         // reportError(response);
//         console.log("ERROR code apart from 405 and 407");
//         return;
//       }
//       hide('signIn-div');
//       show('setPassword-div');
//     });
//   } else if (jsso.isValidMobile(identifier)) {
//     jsso.getMobileForgotPasswordOtp(identifier, function(response) {
//       if (response.code != 200) {
//         if (response.code == 406 || response.code == 408)
//           show('signIn-div-error2');
//         // reportError(response);
//         console.log("ERROR code apart from 406 and 408");
//         return;
//       }
//       hide('signIn-div');
//       show('setPassword-div');
//     });
//   } else {
//     console.log("Please enter valid email/mobile")
//   }
// }


// function loginForgotPasswordCallback() {
//   // var identifier = document.getElementById("identifier").value;
//   console.log("identifier is: " + identifier);
//   var otp = document.getElementById("otpSetPwd").value;
//   var password = document.getElementById("passwordForgot").value;
//   var confirmPassword = document.getElementById("passwordForgotConf").value;

//   if (jsso.isValidEmail(identifier)) {
//     jsso.loginEmailForgotPassword(identifier, otp, password, confirmPassword, function(response) {
//       if (response.code != 200) {
//         show('setPassword-all-error');
//         // reportError(response);
//         return;
//       }
//       successfulLoginRedirect(response.data);

//     });
//   } else if (jsso.isValidMobile(identifier)) {
//     jsso.loginMobileForgotPassword(identifier, otp, password, confirmPassword, function(response) {
//       if (response.code != 200) {
//         show('setPassword-all-error');
//         // reportError(response);
//         return;
//       }
//       successfulLoginRedirect(response.data);

//     });
//   } else {
//     console.log("Please enter valid Email or Mobile.");
//   }
// }

// function doesBrowserSupportChildTabInteraction(){
// 	return ! ( navigator.userAgent.match('CriOS') || navigator.userAgent.match('Windows Phone') ) ;
// 	//return false;
// }

// function socialLogin(oauthSiteId){
// 	var initurl;
// 	if(oauthSiteId == "facebook"){
// 		initurl = fbInitiateUri + '&state=' + JSON.stringify(channelData);
// 	}
// 	if(oauthSiteId == "googleplus"){
// 		initurl = gpInitiateUri + '&state=' + JSON.stringify(channelData);
// 	}
// 	// var url = "login/socialLogin?channel="+channelName+"&oauthsiteid="+oauthSiteId;
// 	var url=initurl;
// 	// var src=$("#src").val();
// 	// var src="";
	
// 	// if(src!=null && (src=="app" || src=="web" || src=="wap")){
//  //            url = url + '&src=' + src;
//  //    }
	
// 	// if(ru && ru.length > 0 && doesBrowserSupportChildTabInteraction() && "app" != src) {
// 		if(ru && ru.length > 0 && doesBrowserSupportChildTabInteraction() ) {
// 		url = url+"&display=popup";
// 		window.open(url,"login","scrollbars=1,width=670,height=380");
// 	} else if(ru && ru.length > 0){
// 		url = url  + "&ru=" + encodeURIComponent(ru);
// 		window.location.href=url;
// 	} else {
// 		//window.location.href=url;
// 		url = url+"&display=popup";
// 		window.open(url,"login","scrollbars=1,width=670,height=380");
// 	}
// }

// function initiateFacebookLoginCallback() {
// 	socialLogin("facebook");
//   // window.location = fbInitiateUri + '&state=' + JSON.stringify(channelData);
// }


// function initiateGoogleplusLoginCallback() {
// 	socialLogin("googleplus");
//   //window.location = gpInitiateUri + '&state=' + JSON.stringify(channelData);
// }


// function reinitiateFacebookLogin() {
//   window.location = fbReinitiateUri + '&state=' + JSON.stringify(channelData);
// }


// function facebookLogin() {debugger
//   jsso.facebookLogin(tempSocialCode, fbRedirectUri, function(response) {
//     if (response.code == 4413) {
//       hide("waitState");
//       show("retryState");
//     } else if (response.code != 200) {
//       hide("waitState");
//       show("oauthErrorState");
//     } else {
//       successfulLoginRedirect(response.data);
//     }
//   });
// }


// function googleplusLogin() {debugger
//   jsso.googleplusLogin(tempSocialCode, gpRedirectUri, function(response) {debugger
//     if (response.code != 200) {
//       hide("waitState");
//       show("oauthErrorState");
//     } else {
//       successfulLoginRedirect(response.data);
//     }
//   });
// }

// function checkValidIdentifierCallback(event) {
// 	var identifier=event.target.value;
//   isValidEmailMobile(identifier);
//   checkUserExists(identifier);
// }

// function isValidEmailMobile(identifier) {

//   if (jsso.isValidEmail(identifier)) {
//     hide('emailMobile-error');
//     console.log(identifier + ": Email is valid.");
//     return true;
//   } else if (jsso.isValidMobile(identifier)) {
//     hide('emailMobile-error');
//     console.log(identifier + ": Mobile is valid.");
//     return true;
//   } else {
//     show('emailMobile-error');
//     console.log(identifier + ": Email or Mobile is inValid.");
//     return false;
//   }
// }

// function isValidEmail(event) {
// 	var identifier=event.target.value;
//   if (jsso.isValidEmail(identifier)) {
//     hide('emailReg-error');
//     console.log(identifier + ": Email is valid.");
//     return true;
//   } else {
//     show('emailReg-error');
//     console.log(identifier + ": Email is inValid.");
//     return false;
//   }
// }

// function isValidMobile(event) {
//  var identifier=event.target.value
//   if (jsso.isValidMobile(identifier)) {
//     hide('mobileReg-error');
//     console.log(identifier + ": Mobile is valid.");
//     return true;
//   } else {
//     show('mobileReg-error');
//     console.log(identifier + ": Mobile is inValid.");
//     return false;
//   }
// }

// // function isValidEmail(email) {
// //   // var email = document.getElementById('emailID').value;
// //   console.log("EMAIL is: " + email);
// //   var docs = document.getElementsByClassName('emailErrors');
// //
// //   if (jsso.isValidEmail(email)) {
// //     var len = document.getElementsByClassName('emailErrors').length;
// //     console.log("length is: " + len);
// //     docs[0].innerHTML = "";
// //     // document.getElementsByClassName('emailErrors').innerHTML = "";
// //   } else {
// //     // docs.innerHTML = {"Please enter Valid Email ID"};
// //     // docs.every(printErrorMsg("Please enter Valid Email ID"));
// //     // document.getElementsByClassName('emailErrors').innerHTML = "Please enter Valid Email ID";
// //   }
// // }
// //
// // function isValidMobile(mobile) {
// //   // var mobile = document.getElementById('mobileNo').value;
// //   console.log("PHONE is: " + mobile);
// //   if (jsso.isValidMobile(mobile)) {
// //     document.getElementById('mobileError').innerHTML = "";
// //   } else {
// //     document.getElementById('mobileError').innerHTML = "Please enter Valid Mobile no.";
// //   }
// // }


// function logout() {
//   jsso.signOutUser(function(response) {
//     if (response.code != 200) {
//       reportError(response);
//       return;
//     }
//     window.location.href = "./index.html";

//   });
// }


// function getDataForChannel() {
//   jsso.getChannelDetails(channelName, ru, function(response) {
//     if (response.code != 200) {
//       window.location.href = "./index.html?channel=nbt";
//       return;
//     }
//     channelData = response.data;
//     //document.getElementById("channelRu").value = channelData.ru;
//     document.getElementById("channelName").innerHTML = channelData.name;
//     //document.getElementById("channelLogo").style.background = "url('" + channelData.logo + "') no-repeat";
//     document.getElementById("channelLogo").src = channelData.logo;
//     //ru = channelData.ru;
//   });
// }


// function successfulLoginRedirect(loginData) {
//   if (!ru)
//     ru = baseUrl + "index.html";

//   var ruUrl = new URL(ru);
//   ruUrl.searchParams.append('tempCode', loginData.tksec);
//   window.location.href = ruUrl.href;
// }


function checkIfUserLoggedIn() {
  jsso.getUserProfile(function(response) {
    if (response.code == 200) {
    	renderTemplate(configParam);
    	bindEventListeners();
      loggedInUserProfile = response.data;
      //var loggedInUserName=document.getElementById("loggedInUserName");
      
      //loggedInUserName.textContent=("Continue  as " + loggedInUserProfile.firstName);

      // show('loggedInUser');
      // show('switchUser');
      // hide("socialLoginList")
    }
    else {
    	renderTemplate(configParam);
      // showAllSignInOptions();
      // bindEventListeners();
      // getDataForChannel();
    }
  });
}


// function continueLoggedInUser() {
//   jsso.getValidLoggedInUser(function(response) {
//     if (response.code != 200) {
//       switchUserCallback();
//     }
//     else {
//       successfulLoginRedirect(response.data);
//     }
//   });
// }


// function switchUserCallback() {
//   jsso.signOutUser(function(response) {
//     hide('loggedInUser');
//     hide('switchUser');
//     showAllSignInOptions();
//   });
// }


//index



		//addScript("https://jssocdnstg.indiatimes.com/crosswalk/jsso_crosswalk_0.3.1.js");
		// function jsoloadCallBack() {
		// 	
		// 	checkIfUserLoggedIn();
		// 	getChannelData();
		// }
			// Loading js dynamically
		// function addScript (script,type){
		// 	var sc = document.createElement("script");
		// 	sc.type = "text/javascript";
		// 	if(type){
		// 		script[type] = true;
		// 	}
		// 	sc.onload = jsoloadCallBack;
		// 	sc.defer=1;
		// 	sc.src = script;
		// 	var sc1=document.getElementsByTagName("script")[0];
		// 	sc1.parentNode.insertBefore(sc, sc1);
		// }
		// Loading css dynamically
		function addCss(href){
		    var link  = document.createElement('link');
		    link.rel  = 'stylesheet';
		    link.type = 'text/css';
		    link.href = href;
		    document.getElementsByTagName('head')[0].appendChild(link);
		}	
		addCss("./src/css/sso.css")

		//event Listener
		function eventListener(element,event,callback,bubble=false){
			element.addEventListener(event,callback,bubble)
		}

		//xhr object 
		function sendRequest(url,callback,postData){
			var xhr = new XMLHttpRequest();
			var method=postData?"POST":"GET";
			xhr.open(method, url, true);
			xhr.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					callback(this)
				}else{

				}
			};
			xhr.send(postData);
		}

		// getUrlParamters
		function getUrlParam(parameter, defaultvalue){
		    var urlparameter = defaultvalue;
		    if(window.location.href.indexOf(parameter) > -1){
		        urlparameter = getUrlVars()[parameter];
		        }
		    return urlparameter;
		}
		function getUrlVars() {
		    var vars = {};
		    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		        vars[key] = value;
		    });
		    return vars;
		}
		
		function toggleClass(element){
			if(element.classList.contains("hide")){
				element.classList.remove("hide")
				element.classList.add("show")
			}
			else {
				element.classList.contains("show") && element.classList.remove("show")
				element.classList.add("hide")
			}
		}
		function enableContinue(){
			var el=document.getElementsByClassName("continueBtn")[0];
			el.classList.remove("btn-disable");
			el.removeAttribute("disabled")
		}
		function disableContinue(){
			var el=document.getElementsByClassName("continueBtn")[0];
			el.classList.add("btn-disable");
			el.setAttribute("disabled","true")
		}
		//fetch channel Details
		function getChannelData(){
			jsso.getChannelDetails(channelName, ru,function(response){
				if (response.code != 200) {
					return;
				}
				channelData = response.data;
			})
		}

		//check user status
		// function checkIfUserLoggedIn(){
		// 	jsso.getUserProfile(function(response){
		// 		 if (response.code == 200) {

		// 		 }
		// 		 renderTemplate(configParam);
		// 	})
		// }

	function emailValidation(value){
		return jsso.isValidEmail(value);

	}
	function checkUserExists(identifier,cb){
		jsso.checkUserExists(identifier,cb);
	}

	function getMobileLoginOtp(){
		jsso.getMobileLoginOtp();
	}
	function getEmailLoginOtp(){
		jsso.getEmailLoginOtp();
	}
	function mobileValidation(value){
		if(value.length==10){
			return(jsso.isValidMobile(value));	
		}	
	}
	function emailMobileValidation(identifier){
		return true;
	}

	// only email is enabled

	function emailOnlyCb(event){
		var value=event.target.value;
		var valid=emailValidation(value)
		//var valid=jsso.isValidEmail(value)
		if(valid){
			enableContinue()
			//checkUserExists(value,checkEmailUserCb)

		}else{
			disableContinue();
		}
	}

	function checkEmailUserCb(response){
		var status = response.data.status;
		var el = document.getElementsByClassName("pwd-section")[0];
		if(status=="VERIFIED_EMAIL"){
			toggleClass(el);
		}else{
			if(status =="UNREGISTERED_EMAIL"){
				var el=document.getElementById("signUp-div");
				toggleClass(el);
				var loginForm=document.getElementsByClassName("loginForm")[0];
				toggleClass(loginForm);
			}
		}
	}


	// only mobile otp is enabled

	function mobileOnlyCb(event){
		var value=event.target.value;
		var valid=mobileValidation(value);
		if(valid){
			enableContinue()
			//checkUserExists(value,checkMobileUserCb)
		}else{
			disableContinue()
			
		}
	}
	

	function checkMobileUserCb(response){
		// var status = response.data.status;
		var mobileNo=document.getElementById("mobileOnly").value;
		var el = document.getElementsByClassName("pwd-section")[0];
			//jsso.getMobileLoginOtp(mobileNo,mobileOTPCb);
		//if(status=="VERIFIED_MOBILE"){
			toggleClass(el)
		// }else{
		// 	if(status =="UNREGISTERED_MOBILE"){
		// 		toggleClass(el)
		// 	}
		// }
	}
	function mobileOTPCb(){

	}

	
	// email and mobile both allowed with otp
	function emailMobileOTPCb(event){
		var value=event.target.value;
		var valid=value.indexOf("@")>0 ? emailValidation(value) : mobileValidation(value);
		if(valid){
			enableContinue()
			//checkUserExists(value,showPwdOTPCb)
		}	else{
			disableContinue();
		}
	}

	function checkEmailMobileOtpUserCb(response){
		var status = response.data.status;
		if(status=="VERIFIED_MOBILE" || status=="VERIFIED_EMAIL"){
			var pwd=document.getElementsByClassName("pwd-section")[0];
			toggleClass(pwd);
		}else{
			if(status =="UNREGISTERED_MOBILE" || status =="UNREGISTERED_EMAIL"){
				var el=document.getElementById("signUp-div");
				toggleClass(el);
				var loginForm=document.getElementsByClassName("loginForm")[0];
				toggleClass(loginForm);
			// 	var pwd=document.getElementsByClassName("pwd-section")[0];
			// toggleClass(pwd);
			}
		}
	}

	
	// email and mobile both allowed but without otp
	function emailMobileNoOTPCb(event){
		var value = event.target.value
		var valid=value.indexOf("@")>0 ? emailValidation(value) : mobileValidation(value);
		if(valid){
			enableContinue();
		}else{
			disableContinue();
		}
	}
	function checkEmailMobileNoOtpUserCb(response){
		var status = response.data.status;
		if(status=="VERIFIED_MOBILE" || status=="VERIFIED_EMAIL"){
			var pwd=document.getElementsByClassName("pwd-section")[0];
			toggleClass(pwd);
		}else{
			if(status =="UNREGISTERED_MOBILE" || status =="UNREGISTERED_EMAIL"){
				var el=document.getElementById("signUp-div");
				toggleClass(el);
				var loginForm=document.getElementsByClassName("loginForm")[0];
				toggleClass(loginForm);
			}
		}
	}


	function verifyMobileCb(){

	}
	function verifyEmailCb(){

	}

	// Continue button
	function continueBtnCb(event){
		 inputIdentifier=document.getElementsByClassName("input-data")[0].value;
		 if(inputIdentifier.indexOf("@")>0 || configParam.email){
		 	document.getElementById("emailID").value=inputIdentifier;
		 	toggleClass(document.getElementsByClassName("email-id")[0])

		 }if(configParam.MobileNumber || inputIdentifier.indexOf("@")<0 ){
		 	document.getElementById("mobileNo").value=inputIdentifier;
		 	toggleClass(document.getElementsByClassName("mobile-no")[0])
		 }
		var password = document.getElementById("password").value;
		var cb="";
		if(emailOnly){
			cb = checkEmailUserCb;
		}
		else if(mobileOnly){
			cb = checkMobileUserCb
		}
		else if(emailMobileOTP){
			cb = checkEmailMobileOtpUserCb
		}
		else if(emailMobileNoOTP){
			cb = checkEmailMobileNoOtpUserCb
		}
		if((emailOnly )){
			if(!password){
				checkUserExists(inputIdentifier,cb);
			}else{
				jsso.verifyEmailLogin(inputIdentifier,password,verifyEmailCb)
			}
			//jsso.getEmailLoginOtp();

		}
		else if((mobileOnly ) ){
			if(!password){
				checkMobileUserCb();
				//checkUserExists(inputIdentifier,cb);
				jsso.getMobileLoginOtp(inputIdentifier);
			}else{
				jsso.verifyMobileLogin(inputIdentifier,password,verifyMobileCb)
			}
			
		}
		else if((emailMobileOTP || emailMobileNoOTP) ){
			if(!password){
				checkUserExists(inputIdentifier,cb);
			}
			else if(inputIdentifier.indexOf("@")>0){
				jsso.verifyEmailLogin(inputIdentifier,password,verifyEmailCb)
			}else{
				jsso.verifyMobileLogin(inputIdentifier,password,verifyMobileCb)
			}
		}
	}

	// Generate otp
	function generateOTPCb(event){
		inputIdentifier=document.getElementsByClassName("input-data")[0].value;
		if(mobileValidation(inputIdentifier)){
			jsso.getMobileLoginOtp(inputIdentifier);
		}
		else if(emailValidation(inputIdentifier)){
			jsso.getEmailLoginOtp(inputIdentifier);
		}
		event.target.innerHTML="Resend";
	}

	// Social login callBacks

	function FacebookLogin(channelData,socialCallback){
		//anupamFacebook("facebook",socialCallback)

	}
	function GoogleplusLogin(channelData,socialCallback){

	}
	function truecallerLogin(socialCallback){
		var el=document.getElementsByClassName("truecallerNo")[0];
			var value=el.value;
			toggleClass(el);
		jsso.truecallerLogin(value,function(response){
				if(response.code==200){
					var requestId=response.data.requestId;
					trueCallerrVerify(requestId)
				}
		})
	}
	function trueCallerrVerify(requestId){
		jsso.truecallerVerify(requestId,trueCallerCb)

	}
	function trueCallerCb(){

	}
	function linkedinLogin(channelData,socialCallback){

	}
	function getforgotPassword(){
		inputIdentifier = document.getElementsByClassName("input-data")[0].value;
		if(inputIdentifier.indexOf("@")>0 && emailValidation(inputIdentifier)){
			jsso.getEmailForgotPasswordOtp(inputIdentifier,function(response){

			})
		}else if(mobileValidation(inputIdentifier)){
			jsso.getMobileForgotPasswordOtp(inputIdentifier,function(response){

			})
		}
	}
		// SSO Methods start
		ssoMethods.init=function(ssoObj){
				channelName = ssoObj.channelName && ssoObj.channelName.toLowerCase() ;
				ru = ssoObj.ru;
				socialCallback=ssoObj.socialCallback;
				configParam={
				channelLogo:ssoObj.channelLogo?ssoObj.channelLogo:`src/img/${channelName}.png`,
				title:ssoObj.title?ssoObj.title:ssoObj.channelName,
				subTitle:ssoObj.subTitle || "",
				emailOnly:ssoObj.emailOnly || false,
				mobileOTP:ssoObj.mobileOTP || false,
				emailMobileOTP:ssoObj.emailMobileOTP || false,
				emailMobileNoOTP:ssoObj.emailMobileNoOTP || false,
				id : ssoObj.id,
				LoginType : ssoObj.LoginType || [],
				companyName : ssoObj.companyName || "India",
				email :  (ssoObj.signupForm && ssoObj.signupForm.email) ==false ?false :true,
				firstName : (ssoObj.signupForm && ssoObj.signupForm.firstName) ==false ?false : true,
				lastName : (ssoObj.signupForm && ssoObj.signupForm.lastName) ==false ?false : true,
				Password : (ssoObj.signupForm && ssoObj.signupForm.email) ==false ?false : true,
				MobileNumber : (ssoObj.signupForm && ssoObj.signupForm.MobileNumber) ==false ?false : true,	
				termsConditionLink : ssoObj.termsConditionLink || "",
				privacyPolicyLink : ssoObj.privacyPolicyLink || "",

				linkedin : ssoObj.linkedin ==false ? false:  true,
			    truecaller : ssoObj.truecaller ==false ? false:  true,
				email_password : ssoObj.email_password ==false ? false:  true,
				email_otp :  ssoObj.email_otp ==false ? false:  true,
				mobile_password : ssoObj.mobile_password ==false ? false:  true,
				mobile_otp : ssoObj.mobile_otp ==false ? false:  true
			}
			jsso = new JssoCrosswalk(channelName,"WEB");
			//checkIfUserLoggedIn();

			getChannelData();
			checkIfUserLoggedIn()	
		}
		function bindEventListeners(){
			// var googlebtn=document.getElementsByClassName("google")[0];
			// var emailPhonebtn=document.getElementsByClassName("email-phone")[0];
			// var showAllbtn=document.getElementsByClassName("show-all-option")[0];
			// var email=document.getElementsByClassName("email")[0];
			// var signIn=document.getElementsByClassName("sign-in")[0];
			emailOnly=document.getElementById("emailOnly");
			mobileOnly=document.getElementById("mobileOnly");
			emailMobileOTP=document.getElementById("emailMobileOTP");
			emailMobileNoOTP=document.getElementById("emailMobileNoOTP");
			var generateOtp=document.getElementById("generateOtp");
			var continueBtn=document.getElementsByClassName("continueBtn")[0]
			var registerbtn = document.getElementById("registerbtn");


			// Social Login
			var facebookbtn = document.getElementById("fb-div");
			var googlebtn = document.getElementById("google-div");
			var truecallerbtn = document.getElementById("truecaller-div");
			var linkedinbtn = document.getElementById("linkedin-div");


			// var emailbtn = document.getElementById("emailMobile-div");
			// var emailInput = document.getElementById("login_identifier");
			// var signInbtn = document.getElementById("signInbtn");
			 var showAllSignIn = document.getElementById("showAllSignIn");
			 var forgotPassword = document.getElementsByClassName("forgot-password")[0];
			// var signUplink = document.getElementById("signUplink");

			// var emailIdInput = document.getElementById("emailID");
			// var mobileNoInput = document.getElementById("mobileNo");
			// var loginWithOtpLink = document.getElementsByClassName("loginWithOtpLink");
			// var forgotPassword = document.getElementById("forgotPassword");
			// var switchUser = document.getElementById("switchUserLink");
			// var loginForgotPasswordbtn = document.getElementById("loginForgotPasswordbtn");
			// var loggedInUser = document.getElementById("loggedInUser");
			// var verifyRegisterUser = document.getElementById("verifyRegisterUser");
			// var resendRegisterUserOtp = document.getElementById("resendRegisterUserOtp");
			// var signInUsingOtp = document.getElementById("signInUsingOtp");

			// eventListener(googlebtn,"click",googleInitiateLoginCallback);
			// eventListener(emailPhonebtn,"click",continueWithEmailCallback);
			 eventListener(showAllSignIn,"click",showAllSignInCb);
			
			// eventListener(signIn,"click",verifySignInCallback);
			emailOnly && eventListener(emailOnly,"input",emailOnlyCb);
			mobileOnly && eventListener(mobileOnly,"input",mobileOnlyCb);
			emailMobileOTP && eventListener(emailMobileOTP,"input",emailMobileOTPCb)
			generateOtp && eventListener(generateOtp,"click",generateOTPCb);
			continueBtn && eventListener(continueBtn,"click",continueBtnCb);
			emailMobileNoOTP && eventListener(emailMobileNoOTP,"input",emailMobileNoOTPCb)
			registerbtn && eventListener(registerbtn,"click",registerUser);

			// eventListener for social Login
			facebookbtn && eventListener(facebookbtn,"click",FacebookLogin);
			googlebtn && eventListener(googlebtn,"click",GoogleplusLogin);
			truecallerbtn && eventListener(truecallerbtn,"click",truecallerLogin);
			linkedinbtn && eventListener(linkedinbtn,"click",linkedinLogin);
			forgotPassword && eventListener (forgotPassword,"click",getforgotPassword)
			//eventListener(emailbtn,"click",continueWithEmailCallback);
			// eventListener(emailInput,"blur",checkValidIdentifierCallback);
			// eventListener(showAll,"click",showAllSignInOptions);
			// eventListener(signInbtn,"click",verifySignInCallback);
			// eventListener(signUplink,"click",showSignUpCallback);
			// eventListener(emailIdInput,"blur",isValidEmail);
			// eventListener(mobileNoInput,"blur",isValidMobile);
			// eventListener(forgotPassword,"click",setNewPasswordCallback);
			// eventListener(loginForgotPasswordbtn,"click",loginForgotPasswordCallback);
			// eventListener(switchUser,"click",switchUserCallback);
			// eventListener(loggedInUser,"click",continueLoggedInUser);
			// eventListener(verifyRegisterUser,"click",verifyRegisterUser);
			// eventListener(resendRegisterUserOtp,"click",resendRegisterUserOtp);
			// eventListener(signInUsingOtp,"click",signInUsingOtp);

			// for(var i=0;i<loginWithOtpLink.length;i++){
			// 	eventListener(loginWithOtpLink[i],"click",loginWithOtpCallback);
			// }
			// var inputEl=document.getElementsByClassName("textinput");
			// for(var i=0;i<inputEl.length;i++){
			// 	eventListener(inputEl[i].querySelectorAll("input")[0] ,"change",function(event){
			// 		if(event.target.value!=""){
			// 			inputEl[i].classList.add("filled");
			// 		}else{
			// 			inputEl[i].classList.remove("filled")
			// 		}
			// 	})
			// }
			
		}

		// function googleInitiateLoginCallback()
		// {
		// 	sendRequest("https://www.google.com",function(){alert("hii")})
		// }
		// function continueWithEmailCallback(){
			
		// 	var loginSection=document.getElementsByClassName("login-section")[0];
		// 	var socialLogin=document.getElementsByClassName("social-login")[0];
		// 	loginSection.classList.remove("hide");
		// 	socialLogin.classList.add("hide");
		// }
		function showAllSignInCb(){
			var loginForm=document.getElementsByClassName("loginForm")[0];
			var signUp=document.getElementById("signUp-div");
			document.getElementsByClassName("input-data")[0].value="";
			toggleClass(loginForm);
			toggleClass(signUp);
		}
		function validEmailCallback(event){
			var email=event.target.value;
		}
		// function verifySignInCallback(){
		// 	var email = document.getElementsByClassName("email")[0].value;
		// 	var password = document.getElementsByClassName("password")[0].value;
		// 	jsso.verifyEmailLogin(email, password, function(response) {

		// 	})
		// }
		//sso methods end
			
		function renderTemplate(configParam){
			var temp=createHTMLTemplate(configParam);
			var el=document.getElementById(configParam.id)
			el.innerHTML=temp;

		}

		var methodList=window.sso.ev;
		if(methodList.length){
			for(var i=0;i<methodList.length;i++){
				var funct=methodList[i][0];
				var param=methodList[i][1];
				ssoMethods[funct](param)
			}
		}
		// window.sso=function(funct,ssoConfig){
		// 	ssoMethods[funct](ssoConfig);
		// }	
	})()	
},0)





















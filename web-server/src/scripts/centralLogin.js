 import {createHTMLTemplate} from "../template/ssoTemplate.js";
 // import {JssoCrosswalk} from "./jsso_crosswalk_0.3.1.js";
 import {JssoCrosswalk} from "./jsso_crosswalk_0.5.63.js";
 

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
			 emailAndMobile="",
			 emailMobileOTP = "",
			 emailMobileNoOTP = "",
			 inputIdentifier = "",
			 userMobileInfo="",
			 userEmailInfo="",
			 inputData="",
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

function resetAllField(){
	var el=document.getElementsByClassName("sign-with-otp")[0];
	hideSection(el,"show","hide");
	var el=document.getElementsByClassName("sign-with-pwd")[0]
	hideSection(el,"show","hide");
	var el=document.getElementsByClassName("confirmPwd")[0]
	hideSection(el,"show","hide");
	var el=document.getElementsByClassName("forgot-password")[0]
	hideSection(el,"show","hide");
	var el=document.getElementsByClassName("registerConfirmation")[0]
	hideSection(el,"show","hide");
	
	
}
function checkUserExists(identifier,UserExistsCb,userNotExistCb) {
  jsso.checkUserExists(identifier, function(response) {
    if (response.data.statusCode == 213 || response.data.statusCode == 212) {
      //hide('signIn-div-error2');
      UserExistsCb();
      if(response.data.shareDataAllowed == null || response.data.shareDataAllowed == "0" || response.data.termsAccepted == null || response.data.termsAccepted == "0" ) {
        //show('sso-permissions-div');
        loginWithPermissionsFlag=5;
      }
      return;
    } else {
       userNotExistCb()
      return;
    }

  });
}

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
	var el=document.getElementsByClassName("registerConfirmation")[0]
	
	toggleClass(el)
	
	var signUp=document.getElementById("signUp-div")
	toggleClass(signUp)
}
function signupInfoCb(event){

}
function registerUser(){
	// configParam.signupForm.Mandatory.indexOf("email")>-1
	// configParam.signupForm.Mandatory.indexOf("mobile")>-1

	var firstName = document.getElementById("firstName") ? document.getElementById("firstName").value:"",
		lastName = document.getElementById("lastName") ? document.getElementById("lastName").value : "",
	//  gender = document.getElementById("gender").value,
		password = document.getElementById("passwordSignUp") ? document.getElementById("passwordSignUp").value : "",
		confirmPwd=document.getElementById("confirmPassword") ? document.getElementById("confirmPassword").value : "",
		email = document.getElementById("emailID") ? document.getElementById("emailID").value : "",
		mobile = document.getElementById("mobileNumber") ? document.getElementById("mobileNo").value :"",
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
    	bindEventListeners();
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
		function enableBtn(el){
			//var el=document.getElementsByClassName("continueLoginBtn")[0];
			el.classList.remove("btn-disable");
			el.removeAttribute("disabled")
		}
		function disableBtn(el){
			//var el=document.getElementsByClassName("continueLoginBtn")[0];
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

	// function emailValidation(value){
	// 	return jsso.isValidEmail(value);

	// }
	// function checkUserExists(identifier,cb){
	// 	jsso.checkUserExists(identifier,cb);
	// }

	function getMobileLoginOtp(){
		jsso.getMobileLoginOtp();
	}
	function getEmailLoginOtp(){
		jsso.getEmailLoginOtp();
	}

	function mobileValidation(event,element){
		var value=event.target && event.target.value || event;
		var el=element || document.getElementsByClassName("continueLoginBtn")[0];
		var err=document.getElementsByClassName("inputError")[0]
		if(value.length==10){
			var valid=jsso.isValidMobile(value);
			if(valid){
				err.innerHTML="";
				enableBtn(el)
				return true
				//checkUserExists(value,checkMobileUserCb)
			}else{
				err.innerHTML="Please enter valid mobile number"
				disableBtn(el)
				return false
				
			}
		}else{
			disableBtn(el)
			return false
		}
	}
	function emailValidation(event,element){
		var value=event.target && event.target.value || event;
		var valid=jsso.isValidEmail(value)
		var el=element || document.getElementsByClassName("continueLoginBtn")[0];
		var err=document.getElementsByClassName("inputError")[0]
		//var valid=jsso.isValidEmail(value)
		if(valid){
			err.innerHTML="";
			enableBtn(el)
			return true
			//checkUserExists(value,checkEmailUserCb)

		}else{
			err.innerHTML="Please enter valid email address"
			disableBtn(el);
			return false
		}
	}
	// function mobileValidation(value){
	// 	if(value.length==10){
	// 		return(jsso.isValidMobile(value));	
	// 	}	
	// }
	function emailAndMobileValidation(event,el){
		if(event.target.value.indexOf("@")>0){
			emailValidation(event,el)
		}
		else{
			mobileValidation(event,el)
		}
	}
	// function checkemailAndMobileValidation(event){
	// 	emailAndMobileValidation(event,document.getElementsByClassName("signinBtn")[0])
	// }

	// only email is enabled


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
		var el=document.getElementsByClassName("continueLoginBtn")[0];
		var valid=value.indexOf("@")>0 ? emailValidation(value) : mobileValidation(value);
		if(valid){
			enableBtn(el)
			//checkUserExists(value,showPwdOTPCb)
		}	else{
			disableBtn(el);
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
		var el=document.getElementsByClassName("continueLoginBtn")[0];
		var valid=value.indexOf("@")>0 ? emailValidation(value) : mobileValidation(value);
		if(valid){
			enableBtn(el);
		}else{
			disableBtn(el);
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
	function hideLoginform(){
		var el=document.getElementsByClassName("loginForm")[0]
		toggleClass(el)
	}
	// function showAllSignInCb(){
	// 		var loginForm=document.getElementsByClassName("loginForm")[0];
	// 		var signUp=document.getElementById("signUp-div");
	// 		document.getElementsByClassName("input-data")[0].value="";
	// 		toggleClass(loginForm);
	// 		toggleClass(signUp);
	// 	}
		function initSignUp(event){
			hideLoginform();
			var signUp=document.getElementById("signUp-div");
			toggleClass(signUp);
			
			if(!event){
				var el=document.getElementsByClassName("newUser-error")[0];
				toggleClass(el)
			}

		}
		function UserExistsCb(){
			hideLoginform();
			 if(configParam.nonSocialLogin.loginCredentials[0].toLowerCase()=="password"){
				document.getElementsByClassName("user-pwd-info")[0].innerHTML=inputIdentifier
			
		 	// if(inputIdentifier.indexOf("@")>0 ){
		 		var el=document.getElementsByClassName("sign-with-pwd")[0];
				toggleClass(el)
				

			 	// document.getElementById("emailID").value=inputIdentifier;
			 	// toggleClass(document.getElementsByClassName("email-id")[0])

			 // }
			 // if( inputIdentifier.indexOf("@")<0 ){
			 // 	var el=document.getElementsByClassName("sign-with-pwd")[0];
				// toggleClass(el)
			 // 	// document.getElementById("mobileNo").value=inputIdentifier;
			 // 	// toggleClass(document.getElementsByClassName("mobile-no")[0])
			 // }
		 }else{
		 	if(inputIdentifier.indexOf("@")>0){
		 		jsso.getEmailLoginOtp(inputIdentifier);
		 	}else{
		 		jsso.getMobileLoginOtp(inputIdentifier);
		 	}
		 	document.getElementsByClassName("user-otp-info")[0].innerHTML=inputIdentifier
		 		// if(inputIdentifier.indexOf("@")>0 ){
		 		var el=document.getElementsByClassName("sign-with-otp")[0];
			toggleClass(el)
		 	// }
		 // 	if(inputIdentifier.indexOf("@")<0 ){
		 // 		var el=document.getElementsByClassName("sign-with-otp")[0];
			// toggleClass(el)
		 // 	}
		 }
		}
		function userNotExistCb(){
			initSignUp();

		}
	// Continue button
	function continueLoginBtnCb(event){
		inputIdentifier=document.getElementsByClassName("input-data")[0].value;
		if(inputIdentifier.indexOf("@")>0){
			userEmailInfo=inputIdentifier;
		}else{
			userMobileInfo=inputIdentifier;
		}
		checkUserExists(inputIdentifier,UserExistsCb,userNotExistCb);

		
		// if(inputIdentifier.indexOf("@")>0){
		// 	jsso.verifyEmailLogin(inputIdentifier,password,verifyEmailCb);
		// }else{
		// 	jsso.verifyMobileLogin(inputIdentifier,password,verifyMobileCb);
		// }

		// var signUp=document.getElementById("signUp-div");
		// 	toggleClass(signUp);
		// 	if(inputIdentifier.indexOf("@")>0){

		// 		document.getElementById("email").value=inputIdentifier;
		// 	}else{

		// 		document.getElementById("mobileNumber").value=inputIdentifier
		// 	}

		





		 
		// var password = document.getElementById("password").value;
		// var cb="";
		// if(emailOnly){
		// 	cb = checkEmailUserCb;
		// }
		// else if(mobileOnly){
		// 	cb = checkMobileUserCb
		// }
		// else if(emailMobileOTP){
		// 	cb = checkEmailMobileOtpUserCb
		// }
		// else if(emailMobileNoOTP){
		// 	cb = checkEmailMobileNoOtpUserCb
		// }
		// if((emailOnly )){
		// 	if(!password){
		// 		checkUserExists(inputIdentifier,cb);
		// 	}else{
		// 		jsso.verifyEmailLogin(inputIdentifier,password,verifyEmailCb)
		// 	}
		// 	//jsso.getEmailLoginOtp();

		// }
		// else if((mobileOnly ) ){
		// 	if(!password){
		// 		checkMobileUserCb();
		// 		//checkUserExists(inputIdentifier,cb);
		// 		jsso.getMobileLoginOtp(inputIdentifier);
		// 	}else{
		// 		jsso.verifyMobileLogin(inputIdentifier,password,verifyMobileCb)
		// 	}
			
		// }
		// else if((emailMobileOTP || emailMobileNoOTP) ){
		// 	if(!password){
		// 		checkUserExists(inputIdentifier,cb);
		// 	}
		// 	else if(inputIdentifier.indexOf("@")>0){
		// 		jsso.verifyEmailLogin(inputIdentifier,password,verifyEmailCb)
		// 	}else{
		// 		jsso.verifyMobileLogin(inputIdentifier,password,verifyMobileCb)
		// 	}
		// }
	}

function changeInputCb(event){
	emailAndMobileValidation(event,document.getElementsByClassName("signInBtn")[0])
	inputIdentifier=event.target.value;
	if(inputIdentifier.indexOf("@")>0){
		userEmailInfo=inputIdentifier;
	}else{
		userMobileInfo=inputIdentifier;
	}
	document.getElementsByClassName("user-otp-info")[0].innerHTML=inputIdentifier
	document.getElementsByClassName("user-pwd-info")[0].innerHTML=inputIdentifier
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
		jsso.socialLogin("FACEBOOK","1607426726038643")

	}
	function GoogleplusLogin(channelData,socialCallback){
		jsso.socialLogin("GOOGLEPLUS","1607426726038643")
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
		jsso.socialLogin("LINKEDIN","1607426726038643")
	}
	function getforgotPassword(){
		//api hit to get data of user
		var el=document.getElementsByClassName("forgot-password")[0];
			showSection(el,"hide","show");
		var el=document.getElementsByClassName("sign-with-pwd")[0];
			hideSection(el,"show","hide")
		var result="both";
		//var result="none";
		if(result=="none"){
			var el=document.getElementsByClassName("direct-otp")[0]
			showSection(el,"hide","show")
			if(inputIdentifier.indexOf("@")>0){
				jsso.getEmailForgotPasswordOtp(inputIdentifier)
			}else{
				jsso.getMobileForgotPasswordOtp(inputIdentifier);
			}

		}else{
			document.getElementsByClassName("select-mobile")[0].innerHTML=userMobileInfo
			document.getElementsByClassName("select-email")[0].innerHTML=userEmailInfo
			var el=document.getElementsByClassName("slectOtpGenPt")[0]
			showSection(el,"hide","show")
			inputIdentifier = document.getElementsByClassName("input-data")[0].value;	
		}
		
		// if(inputIdentifier.indexOf("@")>0 && emailValidation(inputIdentifier)){
		// 	jsso.getEmailForgotPasswordOtp(inputIdentifier,function(response){

		// 	})
		// }else if(mobileValidation(inputIdentifier)){
		// 	jsso.getMobileForgotPasswordOtp(inputIdentifier,function(response){

		// 	})
		// }
	}
	
	function showSection(element,initialClass,nextClass){
		if(element.classList.contains(initialClass)){
			element.classList.remove(initialClass)
			element.classList.add(nextClass)
		}
	}
	function hideSection(element,initialClass,nextClass){
		if(element.classList.contains(initialClass)){
			element.classList.remove(initialClass)
			element.classList.add(nextClass)
		}
	}
	function changeLoginVia(event){
		resetAllField()
		// var element=document.getElementsByClassName("switch-login")[0];
		var element=document.getElementsByClassName("loginForm")[0]
		showSection(element,"hide","show")
		if(event.target.classList.contains("changeInputInPwd")){
			//var el=document.getElementsByClassName("pwdFormBody")[0];
			var el=document.getElementsByClassName("sign-with-pwd")[0];
			hideSection(el,"show","hide")
		}
		else{
			// var el=document.getElementsByClassName("otpFormBody ")[0];
			var el=document.getElementsByClassName("sign-with-otp ")[0];
			hideSection(el,"show","hide");
		}
		el.classList.add("active")
	}
	// function enterOtp(event){
	// 	var element=document.getElementsByClassName("switch-login")[0];
	// 	var el2=document.getElementsByClassName("switch-heading")[0];
	// 	if(event.target.classList.contains("switchToPwd")){
	// 		var el=document.getElementsByClassName("sign-with-otp")[0];
	// 		hideSection(el,"show","hide")
	// 		showSection(element,"hide","show")
	// 		el2.innerHTML="Sign in with password "
	// 	}
	// 	else{
	// 		var el=document.getElementsByClassName("sign-with-pwd")[0];
	// 		hideSection(el,"show","hide");
	// 		showSection(element,"hide","show")
	// 		el2.innerHTML="Sign in with OTP "
	// 	}
	// }
	function disableResentLink(event){

	}
	function resendOtpCb(event){
		// var val=document.getElementsByClassName("otpPreference")[0].value
		var val=inputIdentifier;
		if(val.indexOf("@")>0){
			if(event.target.classList.contains("normal-resent")){
				jsso.getEmailLoginOtp(val,function(){})
			}else if(event.target.classList.contains("register-resent")){
				jsso.resendEmailSignUpOtp(val, registerUserSsoid, function(response) {
		     //  	if (response.code != 200) {
			    //     reportError(response);
			    //     return;
			    // }

		    });
			}else if(event.target.classList.contains("forgot-resent")){
				jsso.getEmailForgotPasswordOtp(val,function(){})
			}

		}else{

			if(event.target.classList.contains("normal-resent")){
				jsso.getMobileLoginOtp(val,function(){})
			}else if(event.target.classList.contains("register-resent")){
				jsso.resendMobileSignUpOtp(val, registerUserSsoid, function(response) {
			  // if (response.code != 200) {
			  //   reportError(response);
			  //   return;
			  // }

			});
			}else if(event.target.classList.contains("forgot-resent")){
				jsso.getMobileForgotPasswordOtp(val,function(){})
			}		
		}
	}
	function signInbtncb(event){
		checkUserExists(inputIdentifier,successCb,userNotExistCb)
		
	}
	function successCb(){
		// var el=document.getElementsByClassName("switch-login")[0];
		// toggleClass(el)
		var element=document.getElementsByClassName("active")[0];
		toggleClass(element)
		element.classList.remove("active")
		if(element.classList.contains("sign-with-otp")){
			if(inputIdentifier.indexOf("@")>0){
				getMobileLoginOtp(inputIdentifier)
			}else{
				getEmailLoginOtp(inputIdentifier)
			}
		}
	}

	function switchToPwdCb(event){
		var el=document.getElementsByClassName("sign-with-pwd")[0];
		toggleClass(el)
		var el=document.getElementsByClassName("sign-with-otp")[0];
		toggleClass(el)
		document.getElementsByClassName("user-pwd-info")[0].innerHTML=inputIdentifier
	}

	function switchToOtpCb(event){

		if(inputIdentifier.indexOf("@")>0){
			jsso.getEmailLoginOtp(inputIdentifier)
		}else{
			jsso.getMobileLoginOtp(inputIdentifier)
		}
		var el=document.getElementsByClassName("sign-with-pwd")[0];
		toggleClass(el)
		var el=document.getElementsByClassName("sign-with-otp")[0];
		toggleClass(el)
		document.getElementsByClassName("user-otp-info")[0].innerHTML=inputIdentifier
	}

	function forgetContinueCb(event){
		// var el=document.getElementsByClassName("sign-with-otp")[0];
		// document.getElementsByClassName("resetHeading")[0].innerHTML="Forgot Password";
		// document.getElementsByClassName("switchToPwd")[0].classList.add("hide");
		// document.getElementsByClassName("otpSubmit")[0].classList.add("resetPassword");

		// toggleClass(el);
		// var element=document.getElementsByClassName("forgot-password")[0];
		// toggleClass(element)
		event.target.classList.add("submitOtp")
		var el=document.getElementsByClassName("slectOtpGenPt")[0]
		var el2=document.getElementsByClassName("direct-otp")[0]
		toggleClass(el);
		toggleClass(el2);
	}

	function submitInfoCb(event){
		if(event.target.classList.contains("resetPassword")){
			if(inputIdentifier.indexOf("@")>0){

			}else{
				jsso.verifyMobileForgotPassword(inputIdentifier)
			}
			toggleClass(document.getElementsByClassName("otpFormBody")[0]);
			
			toggleClass(document.getElementsByClassName("passwordSection")[0]);
		}else{

		}

	}
	function pwdOtpCb(event){
		if(event.target.value){
				if(event.target.classList.contains("otpPreference")){
				enableBtn(document.getElementsByClassName("otpSubmit")[0])
			}else{
				enableBtn(document.getElementsByClassName("pwdSubmit")[0])
			}
		}else{
			disableBtn(document.getElementsByClassName("otpSubmit")[0])
			disableBtn(document.getElementsByClassName("pwdSubmit")[0])
		}
		
		
	}

	function selectRadio(event){
		var el=document.getElementsByClassName("circle");
		for(var i=0;i<el.length;i++){
			if(el[i].classList.contains("radio-check")){
				el[i].classList.remove("radio-check");
				el[i].classList.add("radio-uncheck")
			}

		}
		event.target.classList.remove("radio-uncheck")
		event.target.classList.add("radio-check")
	}

function resetPwdCb(){
	var el=document.getElementsByClassName("confirmPwd")[0];
	toggleClass(el);
	var el=document.getElementsByClassName("direct-otp")[0]
	
	toggleClass(el);
	
}
	function passwordValidation(event){
		if(event.target.classList.contains("signupPwd")){
			var index=1
		}
		else{
			var index=0;
		}
		var el=document.getElementsByClassName("password-strength")[index];
		var value=event.target.value;
		if(value.length){
			showSection(el,"hide","show");
		}else{
			hideSection(el,"show","hide");
		}
		var alpha = /^[A-Za-z0-9 ]+$/
		var numeric = /\d/
		var lowerCase = /.*[a-z].*/
		if(value.length>6){
			showSection(document.getElementsByClassName("chk1")[index],"uncheck","checked")
		}else{
			hideSection(document.getElementsByClassName("chk1")[index],"checked","uncheck")
		}
		if(lowerCase.test(value)){
			showSection(document.getElementsByClassName("chk2")[index],"uncheck","checked")
		}else{
			hideSection(document.getElementsByClassName("chk2")[index],"checked","uncheck")
		}
		if(numeric.test(value)){
			
			showSection(document.getElementsByClassName("chk3")[index],"uncheck","checked")
		}else{
			hideSection(document.getElementsByClassName("chk3")[index],"checked","uncheck")
		}
		if(!alpha.test(value)){
			
			showSection(document.getElementsByClassName("chk4")[index],"uncheck","checked")
		}else{
			hideSection(document.getElementsByClassName("chk4")[index],"checked","uncheck")
		}
	}
		// SSO Methods start
		ssoMethods.init=function(ssoObj){
			var defaultConfig={
				channelName:"timespoints",
				// channelLogo:"https://jsso.indiatimes.com/staticsso/1/images/nbt.png",
				channelLogo:"",
				title:"",
				//subTitle:"Login to <strong class='bold'>The Navbharat Times </strong> with your Times account",
				ru:"",
				id:"ssoLogin",
				companyName:"Times Points",
				LoginType:[
					{
						name:"Google",
						logoUrl:""
					},

					{
						name:"Facebook",
						label:"",
						logoUrl:""
					},
					{
						nonSocialLogin:{
							loginVia:["email","mobile"],
					 		loginCredentials:["password","otp"],
					 		loginPrefernce:"password"
					 	}
					},
					
					{
						name:"trueCaller",
						label:"",
						logoUrl:""
					},
					{
						name:"Linkedin",
						label:"",
						logoUrl:""
					},
						
				],
				socialCallback:cb,
				signupForm:{
					email:false,
					firstName:false,
					lastName:false,
					MobileNumber:false,
					mandatory:["email"],
					equalPref:true
				},
				termsConditionLink:"",
				privacyPolicyLink:"",
			}
			var ssoObj={...defaultConfig,...ssoObj};
				channelName = ssoObj.channelName && ssoObj.channelName.toLowerCase() ;
				ru = ssoObj.ru;
				socialCallback=ssoObj.socialCallback;
				for(var i=0;i<ssoObj.LoginType.length;i++){
					if(ssoObj.LoginType[i]["nonSocialLogin"]){
						var nonSocialLogin=ssoObj.LoginType[i]["nonSocialLogin"];
					}
				}
				configParam={
					channelLogo:ssoObj.channelLogo?ssoObj.channelLogo:`src/img/${channelName}.png`,
					title:ssoObj.title?ssoObj.title:ssoObj.channelName,
					subTitle:ssoObj.subTitle || "",
					id : ssoObj.id,
					LoginType : ssoObj.LoginType || [],
					companyName : ssoObj.companyName || "India",
					termsConditionLink : ssoObj.termsConditionLink || "",
					privacyPolicyLink : ssoObj.privacyPolicyLink || "",
					signupForm:ssoObj.signupForm,
					nonSocialLogin:nonSocialLogin,
					// emailOnly:ssoObj.emailOnly || false,
					// mobileOTP:ssoObj.mobileOTP || false,
					// emailMobileOTP:ssoObj.emailMobileOTP || false,
					// emailMobileNoOTP:ssoObj.emailMobileNoOTP || false,
					// email :  (ssoObj.signupForm && ssoObj.signupForm.email) ==false ?false :true,
					// firstName : (ssoObj.signupForm && ssoObj.signupForm.firstName) ==false ?false : true,
					// lastName : (ssoObj.signupForm && ssoObj.signupForm.lastName) ==false ?false : true,
					// Password : (ssoObj.signupForm && ssoObj.signupForm.email) ==false ?false : true,
					// MobileNumber : (ssoObj.signupForm && ssoObj.signupForm.MobileNumber) ==false ?false : true,	

					// linkedin : ssoObj.linkedin ==false ? false:  true,
				 //    truecaller : ssoObj.truecaller ==false ? false:  true,
					// email_password : ssoObj.email_password ==false ? false:  true,
					// email_otp :  ssoObj.email_otp ==false ? false:  true,
					// mobile_password : ssoObj.mobile_password ==false ? false:  true,
					// mobile_otp : ssoObj.mobile_otp ==false ? false:  true
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
			//emailAndMobile=document.getElementById("emailAndMobile");
			// emailOnly=document.getElementById("emailOnly");
			// mobileOnly=document.getElementById("mobileOnly");
			inputData=document.getElementsByClassName("input-data");
			// emailMobileOTP=document.getElementById("emailMobileOTP");
			// emailMobileNoOTP=document.getElementById("emailMobileNoOTP");
			var generateOtp=document.getElementById("generateOtp");
			var continueLoginBtn=document.getElementsByClassName("continueLoginBtn")[0]
			var registerbtn = document.getElementById("registerbtn");
			var signup = document.getElementById("signUpLink");
			
			var switchToPwd=document.getElementsByClassName("switchToPwd")[0];
			var switchToOtp=document.getElementsByClassName("switchToOtp")[0];
			var changeInput=document.getElementsByClassName("change-input");

			var userInput=document.getElementsByClassName("user-input")
			// Social Login
			var facebookbtn = document.getElementById("facebook-div");
			var googlebtn = document.getElementById("google-div");
			var truecallerbtn = document.getElementById("truecaller-div");
			var linkedinbtn = document.getElementById("linkedin-div");
			var passwordSignUp=document.getElementsByClassName("passwordSignUp");

			// var emailbtn = document.getElementById("emailMobile-div");
			// var emailInput = document.getElementById("login_identifier");
			 var signInbtn = document.getElementsByClassName("signInBtn")[0];
			 var showAllSignIn = document.getElementById("showAllSignIn");
			 var forgotPassword = document.getElementsByClassName("forgot-password")[0];
			 var forgetContinue=document.getElementsByClassName("forgetContinue")[0]
			 // var changeNumber=document.getElementsByClassName("changeNumber")[0];
			 var changelink=document.getElementsByClassName("changelink");
			 var resendOtp=document.getElementsByClassName("resend-otp-link");
			 var forgetPwdLink=document.getElementsByClassName("forget-password-link")[0];
			 var circle=document.getElementsByClassName("circle");
			 var submitInfo=document.getElementsByClassName("submitInfo");
			 var pwdOtp=document.getElementsByClassName("pwd-otp")
			 var signupInfo=document.getElementsByClassName("signupInfo");
			 var resetPwd=document.getElementsByClassName("resetPwd")[0];
			 circle && multipleEvent(circle,"click",selectRadio)
			 signInbtn && eventListener(signInbtn,"click",signInbtncb)
			 userInput && multipleEvent(userInput,"input",emailAndMobileValidation)
			 changeInput && multipleEvent(changeInput,"input",changeInputCb)
			 inputData && multipleEvent(inputData,"input",emailAndMobileValidation)
			 changelink && multipleEvent(changelink,"click",changeLoginVia)
			 forgetContinue && eventListener(forgetContinue,"click",forgetContinueCb)
			 submitInfo && multipleEvent(submitInfo,"click",submitInfoCb)
			 pwdOtp && multipleEvent(pwdOtp,"input",pwdOtpCb)
			 signupInfo && multipleEvent(signupInfo,"input",signupInfoCb)
			 resetPwd && eventListener(resetPwd,"click",resetPwdCb)
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
			 //eventListener(showAllSignIn,"click",showAllSignInCb);
			
			// eventListener(signIn,"click",verifySignInCallback);
			//signInbtn && eventListener(signInbtn,"click",signInbtncb);
			// changelink && eventListener(changeEmail,"click",changeLoginVia);
			// changeNumber && eventListener(changeNumber,"click",changeLoginVia);
			resendOtp && multipleEvent(resendOtp,"click",resendOtpCb);
			forgetPwdLink && eventListener(forgetPwdLink,"click",getforgotPassword);

			switchToPwd && eventListener(switchToPwd,"click",switchToPwdCb);
			switchToOtp && eventListener(switchToOtp,"click",switchToOtpCb);
			passwordSignUp && multipleEvent(passwordSignUp,"input",passwordValidation);
			// emailOnly && eventListener(emailOnly,"input",emailValidation);
			// mobileOnly && eventListener(mobileOnly,"input",mobileValidation);
			//emailAndMobile && eventListener(emailAndMobile,"input",emailAndMobileValidation);
			//userInput && eventListener(userInput,"input",checkemailAndMobileValidation);
			signup && eventListener(signup,"click",initSignUp)
			emailMobileOTP && eventListener(emailMobileOTP,"input",emailMobileOTPCb)
			generateOtp && eventListener(generateOtp,"click",generateOTPCb);
			continueLoginBtn && eventListener(continueLoginBtn,"click",continueLoginBtnCb);
			emailMobileNoOTP && eventListener(emailMobileNoOTP,"input",emailMobileNoOTPCb)
			registerbtn && eventListener(registerbtn,"click",registerUser);

			// eventListener for social Login
			facebookbtn && eventListener(facebookbtn,"click",FacebookLogin);
			googlebtn && eventListener(googlebtn,"click",GoogleplusLogin);
			truecallerbtn && eventListener(truecallerbtn,"click",truecallerLogin);
			linkedinbtn && eventListener(linkedinbtn,"click",linkedinLogin);
			// forgotPassword && eventListener (forgotPassword,"click",getforgotPassword)
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
		function multipleEvent(el,event,cb){
			for(var i=0;i<el.length;i++){
			 eventListener(el[i],event,cb)
			}
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





















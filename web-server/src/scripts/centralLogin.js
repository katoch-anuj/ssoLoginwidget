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
			 otp="",
			 registerUserSsoid="",
			 passwordEntered="",
			 confirmPwd="",
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
	var el=document.getElementsByClassName("forgot-password")[0]
	hideSection(el,"show","hide");
	var el=document.getElementsByClassName("registerConfirmation")[0]
	hideSection(el,"show","hide");
	var el=document.getElementsByClassName("slectOtpGenPt")[0];
	hideSection(el,"show","hide");
	var el=document.getElementsByClassName("direct-otp")[0];
	hideSection(el,"show","hide");
	var el=document.getElementsByClassName("nonSignupInfo");	
	emptyAllInput(el);
	var el=document.getElementsByClassName("pwd-otp");	
	emptyAllInput(el);
	var el=document.getElementsByClassName("nonSignupPwdSection")[0].querySelectorAll(".checked");
	for(var i=0;i<el.length;i++){
		hideSection(el[i],"checked","uncheck")
	}
	
}
function emptyAllInput(el){
	for(var i=0;i<el.length;i++){
		el[i].value="";
	}
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
      var el=document.getElementsByClassName("unRegistered")[0];
      document.getElementsByClassName("continueLoginBtn")[0].innerHTML="Verify"

      if(response.data.statusCode == 206){
      	el.innerHTML="Please verify your mobile number"
      }if(response.data.statusCode == 205){
      	el.innerHTML="Please verify your email"
      }
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

	var registerbtn=document.getElementById("registerbtn")
	var value=event.target.value;
	var elclass=event.target.classList;

	if(configParam.signupForm.Mandatory>1){
		if(jsso.isValidEmail(value) ){
			if(jsso.isValidMobile(value)){
				elclass.remove("signupError")
			}else{
				elclass.add("signupError")
			}
		}
	}else if(configParam.signupForm.Mandatory[0].toLowerCase()=="email"){
		if(elclass.contains("signupEmail")){
			if(jsso.isValidEmail(value)){
				elclass.remove("signupError")
			}else{
				elclass.add("signupError")
			}
		}
	}else if(configParam.signupForm.Mandatory[0].toLowerCase()=="mobile"){
		if(elclass.contains("signupNumber")){
			if(jsso.isValidMobile(value)){
				elclass.remove("signupError")
			}else{
				elclass.add("signupError")
			}
		}
	}
	if(!document.getElementsByClassName("sign-in-form")[0].querySelectorAll(".signupError")[0] && passwordValidation(event)){
		enableBtn(registerbtn);
	}else{
		disableBtn(registerbtn)
	}
}
function signUpUser(firstName, lastName, gender, dob, email, mobile, password, isSendOffer, termsAccepted, shareDataAllowed, policy,registeruserCb){
	jsso.registerUser(firstName, lastName, gender, dob, email, mobile, password, false , agePrivacy, shareDataAllowed, myTimes, function(response) {

          if (response.code != 200) {
            console.log("not 200");
            console.log(response.code + ": " + response.message);
            
            return;
          }
          registerUserSsoid = response.data.ssoid;
          registeruserCb()
          
        });
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
		mobile = document.getElementById("mobileNumber") ? document.getElementById("mobileNumber").value :"",
		gender = document.getElementById("gender") ? document.getElementById("gender").value :"",
		dob = document.getElementById("dob") ? document.getElementById("dob").value :"",
		// shareDataAllowed = document.getElementById("shareDataAllowed").checked,
		// policy = document.getElementById("myTimesPolicy").checked,
		termsAccepted = document.getElementById("terms").checked,
		isSendOffer = false;
		if(email && emailValidation(email) && !mobile){
			signUpUser(firstName, lastName, gender, dob, email, mobile, password, isSendOffer, termsAccepted, shareDataAllowed, policy,registeruserCb)
		}
		else if(mobile && mobileValidation(mobile) && !email){
			signUpUser(firstName, lastName, gender, dob, email, mobile, password, isSendOffer, termsAccepted, shareDataAllowed, policy,registeruserCb)
		}
		else if((email && emailValidation(email)) && (mobile && mobileValidation(mobile))){
			signUpUser(firstName, lastName, gender, dob, email, mobile, password, isSendOffer, termsAccepted, shareDataAllowed, policy,registeruserCb)
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
		function enableBtn(el){			el.classList.remove("btn-disable");
			el.removeAttribute("disabled")
		}
		function disableBtn(el){
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
		inputIdentifier=event.target.value;
		if(event.target.value.indexOf("@")>0){
			emailValidation(event,el)
		}
		else{
			mobileValidation(event,el)
		}
	}
	

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
		 		var el=document.getElementsByClassName("sign-with-pwd")[0];
				document.getElementsByClassName("user-pwd-info")[0].innerHTML=inputIdentifier
				toggleClass(el)
			
		 }else{
		 	var el=document.getElementsByClassName("sign-with-otp")[0];
			toggleClass(el)
		 	document.getElementsByClassName("user-otp-info")[0].innerHTML=inputIdentifier
		 	if(inputIdentifier.indexOf("@")>0){
		 		getEmailLoginOtp(inputIdentifier);
		 	}else{
		 		getMobileLoginOtp(inputIdentifier);
			}
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
	}

	// Generate otp
	function generateOTPCb(event){
		inputIdentifier=document.getElementsByClassName("input-data")[0].value;
		if(mobileValidation(inputIdentifier)){
			getMobileLoginOtp(inputIdentifier);
		}
		else if(emailValidation(inputIdentifier)){
			getEmailLoginOtp(inputIdentifier);
		}
		event.target.innerHTML="Resend";
	}

	// Social login callBacks

	function FacebookLogin(channelData,socialCallback){
		jsso.socialLogin("FACEBOOK","117787264903013",socialCallback)

	}
	function GoogleplusLogin(channelData,socialCallback){
		jsso.socialLogin("GOOGLEPLUS","103703403489-b4t4lt8mr05brqpcdrmsu0di54cmjv4f.apps.googleusercontent.com",socialCallback)
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
		el.querySelectorAll(".user-otp-info")[0].innerHTML=inputIdentifier

		var el=document.getElementsByClassName("sign-with-pwd")[0];
			hideSection(el,"show","hide")
		//var result="both";
		var result="none";
		if(result=="none"){
			var el=document.getElementsByClassName("direct-otp")[0]
			showSection(el,"hide","show")
			if(inputIdentifier.indexOf("@")>0){
				getEmailForgotPasswordOtp(ForgotEmailPwdCb)
			}else{
				getMobileForgotPasswordOtp(ForgotMobilePwdCb);
			}

		}else{
			document.getElementsByClassName("select-mobile")[0].innerHTML=userMobileInfo
			document.getElementsByClassName("select-email")[0].innerHTML=userEmailInfo
			var el=document.getElementsByClassName("slectOtpGenPt")[0]
			showSection(el,"hide","show")
			inputIdentifier = document.getElementsByClassName("input-data")[0].value;	
		}		
	}

	function ForgotMobilePwdCb(){

	}
	function ForgotEmailPwdCb(){

	}
	function getEmailForgotPasswordOtp(ForgotEmailPwdCb){
		jsso.getEmailForgotPasswordOtp(inputIdentifier,function(response){

		})
	}
	function getMobileForgotPasswordOtp(ForgotMobilePwdCb){
		jsso.getMobileForgotPasswordOtp(inputIdentifier,function(response){

		})
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
		var element=document.getElementsByClassName("loginForm")[0]
		showSection(element,"hide","show")
		
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
				getMobileLoginOtp(val,function(){})
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
	function termsCb(event){
		if(event.target.classList.contains("t-uncheck")){
			event.target.classList.remove("t-uncheck");
			event.target.classList.add("t-check");
		}else{
			event.target.classList.remove("t-check");
			event.target.classList.add("t-uncheck");
		}
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
		event.target.classList.add("submitOtp")
		var el=document.getElementsByClassName("slectOtpGenPt")[0]
		var el2=document.getElementsByClassName("direct-otp")[0]
		hideSection(el,"show","hide");
		toggleClass(el2);
	}

	function submitPwdOtpCb(event){
			if(inputIdentifier.indexOf("@")>0){
				verifyEmailLogin(verifiedEmailCb)
			}else{
				verifyMobileLogin(verifiedMobileCb)
			}

	}
function verifiedMobileCb(){

}
function verifiedEmailCb(){

}
	function verifyEmailLogin(verifiedEmailCb){
		var input = otp || passwordEntered;
		jsso.verifyEmailLogin(inputIdentifier,input,function(response){
			if (response.code != 200) {
				verifiedEmailCb()
			}
		})
	}
	function verifyMobileLogin(verifiedMobileCb){
		var input=otp || passwordEntered;
		jsso.verifyMobileLogin(inputIdentifier,input,function(response){
			if (response.code != 200) {
				verifiedMobileCb()
			}
		})
	}


	function pwdOtpCb(event){
		if(event.target.value){
				if(event.target.classList.contains("otpPreference")){
					otp=event.target.value
				enableBtn(document.getElementsByClassName("otpSubmit")[0])	
			}else if(event.target.classList.contains("pwdPrefernce")){
				passwordEntered=event.target.value;
				enableBtn(document.getElementsByClassName("pwdSubmit")[0])
			}else{
				otp=event.target.value;
			}
		}else{
			disableBtn(document.getElementsByClassName("otpSubmit")[0])
			disableBtn(document.getElementsByClassName("pwdSubmit")[0])
		}

		
		
	}

	function verifyUserCb(){
		var loginForm=document.getElementsByClassName("loginForm")[0];
		var footerImg=document.getElementsByClassName("footer-img")[0];
		var successPage=document.getElementsByClassName("successPage")[0]
		if(inputIdentifier.indexOf("@")>0){
			jsso.verifyEmailSignUp(inputIdentifier,registerUserSsoid,otp,function(){
				hideSection(footerImg,"show","hide");
				hideSection(loginForm,"show","hide");
				showSection(successPage,"hide","show")
			})
		}else{
			jsso.verifyMobileSignUp(inputIdentifier,registerUserSsoid,otp,function(){
				hideSection(footerImg,"show","hide");
				hideSection(loginForm,"show","hide");
				showSection(successPage,"hide","show")
			})
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

function submitResetPwdCb(){
	if(inputIdentifier.indexOf("@")>0){
		verifyEmailForgotPassword()
	}else{
		verifyMobileForgotPassword()
	}
}

function verifyEmailForgotPasswordCb(){
	var el=document.getElementsByClassName("password-changed")[0]
	toggleClass(el);
	var el=document.getElementsByClassName("forgot-password")[0]
	toggleClass(el);
}
function verifyMobileForgotPasswordCb(){
	var el=document.getElementsByClassName("password-changed")[0]
	toggleClass(el);
	var el=document.getElementsByClassName("forgot-password")[0]
	toggleClass(el);
}

function verifyEmailForgotPassword(){
	jsso.verifyEmailForgotPassword(inputIdentifier,otp,passwordEntered,confirmPwd,function(response){
		verifyEmailForgotPasswordCb()
	})
}
function verifyMobileForgotPassword(){
	jsso.verifyEmailForgotPassword(inputIdentifier,otp,passwordEntered,confirmPwd,function(response){
		verifyMobileForgotPasswordCb()
	})
}


function confirmPasswordValidation(confirmPwd){
	if(confirmPwd==passwordEntered){
		return true
	}else{
		return false
	}
}
function signInCb(){
	var loginForm=document.getElementsByClassName("loginForm")[0];
		toggleClass(loginForm);
	var el=document.getElementsByClassName("password-changed")[0]
	toggleClass(el);
}

function resetPwdValidation(){
	var btn=document.getElementsByClassName("submitResetPwd")[0];
	var otp=document.getElementsByClassName("forgot-password")[0].querySelectorAll(".otpText")[0].value;
	if(passwordValidation(event) && otp ){
		enableBtn(btn)
	}else{
		disableBtn(btn)
	}
}
	function passwordValidation(event,clear){
		var value=event.target.value;
		if(event.target.classList.contains("signupInfo")){
			var pwd=document.getElementsByClassName("signupPwdSection")[0];
			 passwordEntered=document.getElementsByClassName("signupPwd")[0].value;
		}
		else {
			passwordEntered=document.getElementsByClassName("nonSignupPwd")[0].value;
			var pwd=document.getElementsByClassName("nonSignupPwdSection")[0]
		}
		var element=pwd.querySelectorAll(".password-strength")[0];
		confirmPwd=pwd.querySelectorAll(".confirmPassword")[0].value;
		
		if(passwordEntered.length){
			showSection(element,"hide","show");
		}else{
			hideSection(element,"show","hide");
		}
		var alpha = /^[A-Za-z0-9 ]+$/
		var numeric = /\d/
		var lowerCase = /.*[a-z].*/

		if(passwordEntered.length>6){
			showSection(element.querySelectorAll(".chk1")[0],"uncheck","checked")
		}else{
			hideSection(element.querySelectorAll(".chk1")[0],"checked","uncheck")
		}
		if(lowerCase.test(passwordEntered)){
			showSection(element.querySelectorAll(".chk2")[0],"uncheck","checked")
		}else{
			hideSection(element.querySelectorAll(".chk2")[0],"checked","uncheck")
		}
		if(numeric.test(passwordEntered)){
			
			showSection(element.querySelectorAll(".chk3")[0],"uncheck","checked")
		}else{
			hideSection(element.querySelectorAll(".chk3")[0],"checked","uncheck")
		}
		if(!alpha.test(passwordEntered)){
			
			showSection(element.querySelectorAll(".chk4")[0],"uncheck","checked")
		}else{
			hideSection(element.querySelectorAll(".chk4")[0],"checked","uncheck")
		}
		
		if(!element.querySelectorAll(".uncheck")[0] && confirmPasswordValidation(confirmPwd) ){
			
			return true

		}else{
			
			return false
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
					nonSocialLogin:ssoObj.nonSocialLogin,
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
			inputData=document.getElementsByClassName("input-data")[0];
			// emailMobileOTP=document.getElementById("emailMobileOTP");
			// emailMobileNoOTP=document.getElementById("emailMobileNoOTP");
			var generateOtp=document.getElementById("generateOtp");
			var continueLoginBtn=document.getElementsByClassName("continueLoginBtn")[0]
			var registerbtn = document.getElementById("registerbtn");
			var signup = document.getElementById("signUpLink");
			
			var switchToPwd=document.getElementsByClassName("switchToPwd")[0];
			var switchToOtp=document.getElementsByClassName("switchToOtp")[0];
			

			var userInput=document.getElementsByClassName("user-input")
			// Social Login
			var facebookbtn = document.getElementById("facebook-div");
			var googlebtn = document.getElementById("google-div");
			var truecallerbtn = document.getElementById("truecaller-div");
			var linkedinbtn = document.getElementById("linkedin-div");
			//var passwordSignUp=document.getElementsByClassName("passwordSignUp");
			//var confirmPassword=document.getElementById("confirmPassword");
			//confirmPassword && eventListener(confirmPassword,"blur",confirmPasswordValidation)

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
			 var nonSignupInfo=document.getElementsByClassName("nonSignupInfo");
			 var submitResetPwd=document.getElementsByClassName("submitResetPwd")[0];
			 var verifyUser=document.getElementsByClassName("verifyUser")[0];
			 var terms=document.getElementsByClassName("terms");
			 var signIn=document.getElementsByClassName("signIn")[0];
			 signIn && eventListener(signIn,"click",signInCb)
			 verifyUser && eventListener(verifyUser,"click",verifyUserCb)
			 circle && multipleEvent(circle,"click",selectRadio)
			 signInbtn && eventListener(signInbtn,"click",signInbtncb)
			 userInput && multipleEvent(userInput,"input",emailAndMobileValidation)
			 
			 inputData && eventListener(inputData,"input",emailAndMobileValidation)
			 changelink && multipleEvent(changelink,"click",changeLoginVia)
			 forgetContinue && eventListener(forgetContinue,"click",forgetContinueCb)
			 submitInfo && multipleEvent(submitInfo,"click",submitPwdOtpCb)
			 pwdOtp && multipleEvent(pwdOtp,"input",pwdOtpCb)
			 signupInfo && multipleEvent(signupInfo,"input",signupInfoCb)
			 nonSignupInfo && multipleEvent(nonSignupInfo,"input",resetPwdValidation)
			 submitResetPwd && eventListener(submitResetPwd,"click",submitResetPwdCb)
			 terms && multipleEvent(terms,"click",termsCb)
			resendOtp && multipleEvent(resendOtp,"click",resendOtpCb);
			forgetPwdLink && eventListener(forgetPwdLink,"click",getforgotPassword);

			switchToPwd && eventListener(switchToPwd,"click",switchToPwdCb);
			switchToOtp && eventListener(switchToOtp,"click",switchToOtpCb);
			//passwordSignUp && multipleEvent(passwordSignUp,"input",passwordValidation);
			// mobileOnly && eventListener(mobileOnly,"input",mobileValidation);
			signup && eventListener(signup,"click",initSignUp)
			emailMobileOTP && eventListener(emailMobileOTP,"input",emailMobileOTPCb)
			generateOtp && eventListener(generateOtp,"click",generateOTPCb);
			//anuj
			// continueLoginBtn && eventListener(continueLoginBtn,"click",continueLoginBtnCb);
			inputData && eventListener(inputData,"blur",continueLoginBtnCb)
			emailMobileNoOTP && eventListener(emailMobileNoOTP,"input",emailMobileNoOTPCb)
			registerbtn && eventListener(registerbtn,"click",registerUser);

			// eventListener for social Login
			facebookbtn && eventListener(facebookbtn,"click",FacebookLogin);
			googlebtn && eventListener(googlebtn,"click",GoogleplusLogin);
			truecallerbtn && eventListener(truecallerbtn,"click",truecallerLogin);
			linkedinbtn && eventListener(linkedinbtn,"click",linkedinLogin);
			
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




















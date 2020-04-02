 
 import {createHTMLTemplate} from "../template/ssoTemplate.js";
 import {errCode} from "./errorCode.js";
 import {config} from "./config";
 //const webpackVariables = require('webpackVariables');

var assestPath=config[process.env.NODE_ENV];


	(function(){
			var channelData = "",
			ssoMainWrapper = "",
			ssoMethods = {},
			jsso = "",
			channelName = "",
			configParam = {},
			socialCallback = "",
			loggedInUserProfile={},
			 inputIdentifier = "",
			 userMobileInfo="",
			 userEmailInfo="",
			 inputData="",
			 otp="",
			 registerUserSsoid="",
			 passwordEntered="",
			 confirmPwd="",
			ru = "",
			verifyObject={};


function updateGTMDataLayer(obj) {
	var counter = 0;
	if(window.dataLayer){
		window.dataLayer.push(obj);
	}else{
		var interval=setInterval(function(){
			if(window.dataLayer){
				window.dataLayer.push(obj);
			}
			if(counter==configParam.gtmCheckCounter || window.dataLayer){
				clearInterval(interval);
				console.log("gtm not supported")
			}
			counter++;
		},1000)
	}
}
    
// function addCss(href){
//     var link  = document.createElement('link');
//     link.rel  = 'stylesheet';
//     link.type = 'text/css';
//     link.href = href;
//     document.getElementsByTagName('head')[0].appendChild(link);
// }
// addCss("./src/css/sso.css")

function addActive(el){
	ssoMainWrapper.querySelector(".active") && ssoMainWrapper.querySelector(".active").classList.remove("active");
	el.classList.add("active");
}


function eventListener(element,event,callback,bubble=false){
	element.addEventListener(event,callback,bubble)
}

function disableResentLink(event){

}	

function checkIfUserLoggedIn() {
	jsso.getValidLoggedInUser(function(response) {
		if (response.code == 200) {
			renderTemplate(configParam);
			bindEventListeners();
			loggedInUserProfile = response.data;
		}
		else {
			renderTemplate(configParam);
			bindEventListeners();
		}
	});
}
function getChannelData(){
	jsso.getChannelDetails(channelName, ru,function(response){
		if (response.code != 200) {
			return;
		}
		channelData = response.data;
	})
}

function resetAllField(){
	var el= ssoMainWrapper.querySelector(".sign-with-otp");
	hideSection(el,"show","hide");
	var el= ssoMainWrapper.querySelector(".sign-with-pwd");
	hideSection(el,"show","hide");
	var el= ssoMainWrapper.querySelectorAll(".forgot-password")[0]
	hideSection(el,"show","hide");
	var el= ssoMainWrapper.querySelectorAll(".slectOtpGenPt")[0];
	hideSection(el,"show","hide");
	var el= ssoMainWrapper.querySelectorAll(".direct-otp")[0];
	var verifyuser= ssoMainWrapper.querySelectorAll(".verify-user")[0]
	hideSection(verifyuser,"show","hide");
	hideSection(el,"show","hide");
	var el= ssoMainWrapper.querySelectorAll(".password-field");	
	emptyAllInput(el);
	var el= ssoMainWrapper.querySelectorAll(".pwd-otp");	
	emptyAllInput(el);
	var error=ssoMainWrapper.querySelectorAll(".signIn-error");
	for(var i=0;i<error.length;i++){
		error[i].innerHTML=""
	}
	var el=ssoMainWrapper.querySelectorAll(".nonSignupPwdSection")[0].querySelectorAll(".checked");
	for(var i=0;i<el.length;i++){
		hideSection(el[i],"checked","uncheck")
	}
	
}
function emptyAllInput(el){
	for(var i=0;i<el.length;i++){
		el[i].value="";
	}
}
//common function
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
	el.classList.remove("btn-disable");
	el.removeAttribute("disabled")
}

function disableBtn(el){
	el.classList.add("btn-disable");
	el.setAttribute("disabled","true")
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

function hideLoginform(){
	var el=ssoMainWrapper.querySelectorAll(".loginForm")[0]
	toggleClass(el)
}
function crossIconCb(){
	configParam.closeCallBack();
	updateGTMDataLayer({
		'event':ssoMainWrapper.querySelector(".active").querySelector(".modalTitle").innerHTML.toLowerCase()=="sign up"?'click_close_sgnup':'click_close_signin',
		'eventCategory':'SignIn',
		'eventAction':'click_close_signin',
		'eventLabel':ssoMainWrapper.querySelector(".active").querySelector(".modalTitle").innerHTML
	});
	console.log({
		'event':ssoMainWrapper.querySelector(".active").querySelector(".modalTitle").innerHTML.toLowerCase()=="sign up"?'click_close_sgnup':'click_close_signin',
		'eventCategory':'SignIn',
		'eventAction':'click_close_signin',
		'eventLabel':ssoMainWrapper.querySelector(".active").querySelector(".modalTitle").innerHTML
	})
}
function termsConditionLinkCb(){
	updateGTMDataLayer({
		'event':'click_terms_and_conditions',
		'eventCategory':'SingUp',
		'eventAction':'click_terms_and_conditions',
		'eventLabel':'NA'
	})
	console.log({
		'event':'click_terms_and_conditions',
		'eventCategory':'SingUp',
		'eventAction':'click_terms_and_conditions',
		'eventLabel':'NA'
	})
}
function eyeIconCb(){
	if(event.target.parentElement.querySelector(".password-field").getAttribute("type")=="password"){
 		event.target.parentElement.querySelector(".password-field").setAttribute("type","text");
	}else{
		event.target.parentElement.querySelector(".password-field").setAttribute("type","password");
	}
}
function resetOtpTimer(parentElement){
	var showLoader=parentElement.querySelector(".timerWrapper");
	var resendLink=parentElement.querySelector(".resend-otp-link");
	showSection( showLoader,"hide","show");
	hideSection(resendLink,"show","hide");
	setTimeout(function(){
			toggleClass(resendLink);
			toggleClass(showLoader)
		},configParam.resendOtpTimer*1000)
}

//jsso function 
function getMobileLoginOtp(identifier,parentElement){
	parentElement && resetOtpTimer(parentElement)
	var errElement=ssoMainWrapper.querySelector(".sign-with-otp").querySelector(".signIn-error")
	jsso.getMobileLoginOtp(identifier,function(response){
		if(response.code==200){
			errElement.innerHTML=""
		}else{
			errElement.innerHTML=errCode[response.code]
		}
	});
}
function getEmailLoginOtp(identifier,parentElement){
	parentElement && resetOtpTimer(parentElement)
	var errElement=ssoMainWrapper.querySelector(".sign-with-otp").querySelector(".signIn-error")
	jsso.getEmailLoginOtp(identifier,function(response){
		if(response.code==200){
			errElement.innerHTML=""
		}else{
			errElement.innerHTML=errCode[response.code]
		}
	});
}
function addCountryCode(){
	return "+91-"
}
//validation
function mobileValidation(errElement,errMsg,value){
	var mobile=addCountryCode()+value
	var valid=jsso.isValidMobile(mobile);
	if(valid){
		errElement.innerHTML="";
		return true
	}else{
		errElement.innerHTML=errMsg || "Please enter valid mobile number"
		return false	
	}
}

function emailValidation(errElement,errMsg,value){
	var valid=jsso.isValidEmail(value);
	if(valid){
		errElement.innerHTML="";
		return true
	}else{
		errElement.innerHTML=errMsg || "Please enter valid email address"
		return false
	}
}


function emailAndMobileValidation(event){
	var btn=ssoMainWrapper.querySelector(".continueLoginBtn");
		btn.innerHTML="Continue";
		inputIdentifier=event.target.value;
	var	name=event.target.name;
	var err=ssoMainWrapper.querySelector(".inputError")
	err.innerHTML="";
	var onlynumeric=new RegExp(/^[0-9]*$/);
	if(name=="emailAndMobile" ){
		if(inputIdentifier.indexOf("@")>0){
			enableBtn(btn);
		}else if(onlynumeric.test(inputIdentifier) && inputIdentifier.length==10 && mobileValidation(err,"",inputIdentifier)){
			inputIdentifier=addCountryCode()+inputIdentifier;
			enableBtn(btn);
		}else{
			disableBtn(btn)
		}
	}
	else if( name=="emailOnly" && inputIdentifier.indexOf("@")>0){
		enableBtn(btn)
	}
	else if(name=="mobileOnly" && inputIdentifier.length>=10 && mobileValidation(err,"",inputIdentifier) ){
			inputIdentifier=addCountryCode()+inputIdentifier;
			enableBtn(btn);
		}else{
				disableBtn(btn)
			}
}

// Continue button
function continueLoginBtnCb(event){

	if( inputIdentifier.indexOf("@")<0 ||  emailValidation(ssoMainWrapper.querySelector(".inputError"),"",inputIdentifier)){
		//var wrap=ssoMainWrapper.querySelector(".unverified");
		//hideSection(wrap,"show","hide");
		 //var otpSection=ssoMainWrapper.querySelector(".sign-with-otp");
		 //otpSection.querySelector(".switchToPwdLink") && otpSection.querySelector(".switchToPwdLink").classList.remove("hide");

		if(event.target.innerText.toLowerCase()=="continue"){
				//otpSection.querySelector(".otpSubmit").innerHTML=" Sign In";
			 	//otpSection.querySelector(".otpVerifyTitle").innerHTML="OTP has been sent to"
				checkUserExists(event,UserExistsCb,userNotExistCb);
			}else{
				// updateGTMDataLayer({
				// 	'event':'click_verify_&_signin',
				// 	'eventCategory':'SignIn',
				// 	'eventAction':'click_verify_&_signin',
				// 	'eventLabel':inputIdentifier
				// });
				// console.log({
				// 	'event':'click_verify_&_signin',
				// 	'eventCategory':'SignIn',
				// 	'eventAction':'click_verify_&_signin',
				// 	'eventLabel':inputIdentifier
				// })
				// hideLoginform();
				// addActive(otpSection)
				// toggleClass(otpSection)
			 // 	otpSection.querySelector(".switchToPwdLink").classList.add("hide");
			 // 	otpSection.querySelector(".user-otp-info").innerHTML=inputIdentifier
			 // 	otpSection.querySelector(".otpSubmit").innerHTML="Verify & Sign In";
			 // 	otpSection.querySelector(".otpSubmit").classList.add("verifyAndSignInBtn");
			 // 	otpSection.querySelector(".otpVerifyTitle").innerHTML="Enter Verification code sent to"
			 // 	if(inputIdentifier.indexOf("@")>0){
			 // 		getEmailLoginOtp(inputIdentifier,ssoMainWrapper.querySelector(".sign-with-otp").querySelector(".custom-input"));
			 // 	}else{
			 // 		getMobileLoginOtp(inputIdentifier,ssoMainWrapper.querySelector(".sign-with-otp").querySelector(".custom-input"));
				// }
			}	
	}else{
		disableBtn(event.target)
	}
}

//login
function UserExistsCb(){
	hideLoginform();
 	if(configParam.nonSocialLogin.loginWith[0].toLowerCase()=="password"){
	 		var el=ssoMainWrapper.querySelector(".sign-with-pwd");
			ssoMainWrapper.querySelector(".user-pwd-info").innerHTML=inputIdentifier
			toggleClass(el)
			addActive(el)
		
	 }else{
	 	var el=ssoMainWrapper.querySelectorAll(".sign-with-otp")[0];
		toggleClass(el)
		addActive(el)
	 	ssoMainWrapper.querySelectorAll(".user-otp-info")[0].innerHTML=inputIdentifier
	 	if(inputIdentifier.indexOf("@")>0){
	 		getEmailLoginOtp(inputIdentifier,ssoMainWrapper.querySelector(".sign-with-otp").querySelector(".custom-input"));
	 	}else{
	 		getMobileLoginOtp(inputIdentifier,ssoMainWrapper.querySelector(".sign-with-otp").querySelector(".custom-input"));
		}
 	}
}
function userNotExistCb(){
	initSignUp();
}

function initSignUp(event){
	if(event){
		updateGTMDataLayer({
			'event':'click_create_one',
			'eventCategory':'SingUp',
			'eventAction':'click_create_one',
			'eventLabel':'NA'
		})
		console.log({
			'event':'click_create_one',
			'eventCategory':'SingUp',
			'eventAction':'click_create_one',
			'eventLabel':'NA'
		})
	}
	hideLoginform();
	var signUp=ssoMainWrapper.querySelectorAll("#signUp-div")[0];
	addActive(signUp)
	toggleClass(signUp);
	if(inputIdentifier.indexOf("@")>0){
		signUp.querySelector(".email").value=inputIdentifier
	}
	else{
		signUp.querySelector(".mobilenumber").value=inputIdentifier
	}
	if(!event){
		var el=signUp.querySelectorAll(".newUser-error")[0];
		toggleClass(el)
	}
}

function checkUserExists(event,UserExistsCb,userNotExistCb) {
  	jsso.checkUserExists(inputIdentifier, function(response) {
      	var wrapper=ssoMainWrapper.querySelector(".unverified");
  		var errElement=wrapper.querySelector(".unverified-error");
      	//var btn=ssoMainWrapper.querySelectorAll(".continueLoginBtn")[0]
      	updateGTMDataLayer({
			'event':inputIdentifier.indexOf("@")>0?'click_continue_email':"click_conitnue_phonenumber",
			'eventCategory':'SignIn',
			'eventAction':inputIdentifier.indexOf("@")>0?'click_continue_email':'click_conitnue_phonenumber',
			'eventLabel':response.data.statusCode == 213 || response.data.statusCode == 212?"success":"falure,"+errCode[response.data.statusCode]
      	})
      	console.log({
			'event':inputIdentifier.indexOf("@")>0?'click_continue_email':"click_conitnue_phonenumber",
			'eventCategory':'SignIn',
			'eventAction':inputIdentifier.indexOf("@")>0?'click_continue_email':'click_conitnue_phonenumber',
			'eventLabel':response.data.statusCode == 213 || response.data.statusCode == 212?"success":"falure,"+errCode[response.data.statusCode]
      	})
    	if (response.data.statusCode == 213 || response.data.statusCode == 212) {
	      	UserExistsCb();
	      	// if(response.data.shareDataAllowed == null || response.data.shareDataAllowed == "0" || response.data.termsAccepted == null || response.data.termsAccepted == "0" ) {
	       //  	loginWithPermissionsFlag=5;
	      	// }   
    	}
    	// else if(response.data.statusCode == 206 || response.data.statusCode == 205){
	    //   	showSection(wrapper,"hide","show")
	    //   	addActive(wrapper)
	    //   	errElement.innerHTML=errCode[response.data.statusCode]
	    //   	event.target.innerHTML="Verify & Sign In"
	    // }
	    else {
	       userNotExistCb()
	      return;
	    }
 	});
}




function changeLoginVia(event){
	updateGTMDataLayer({
		'event':'click_change_for_verification',
		'eventCategory':'SignIn',
		'eventAction':'click_change_for_verification',
		'eventLabel':'inputIdentifier'
	});
	console.log({
		'event':'click_change_for_verification',
		'eventCategory':'SignIn',
		'eventAction':'click_change_for_verification',
		'eventLabel':'inputIdentifier'
	})
	resetAllField()
	var element=ssoMainWrapper.querySelectorAll(".loginForm")[0]
	showSection(element,"hide","show")	
}


function getforgotPassword(){
	//api hit to get data of user
	var forgotPwdSection=ssoMainWrapper.querySelector(".forgot-password");
		showSection(forgotPwdSection,"hide","show");
	forgotPwdSection.querySelector(".user-otp-info").innerHTML=inputIdentifier
	addActive(forgotPwdSection);
	var el=ssoMainWrapper.querySelector(".sign-with-pwd");
		hideSection(el,"show","hide")
	var result="none";
	if(result=="none"){
		updateGTMDataLayer({
			'event':'click_forgot_password',
			'eventCategory':'SignIn',
			'eventAction':'click_forgot_password',
			'eventLabel':inputIdentifier
		});
		console.log({
			'event':'click_forgot_password',
			'eventCategory':'SignIn',
			'eventAction':'click_forgot_password',
			'eventLabel':inputIdentifier
		})
		var el=forgotPwdSection.querySelector(".direct-otp");
		var customInput=el.querySelector(".custom-input")
		showSection(el,"hide","show")
		if(inputIdentifier.indexOf("@")>0){
			getEmailForgotPasswordOtp(customInput)
		}else{
			getMobileForgotPasswordOtp(customInput);
		}
	}else{
		var el=forgotPwdSection.querySelector(".slectOtpGenPt")
		showSection(el,"hide","show")
		inputIdentifier = ssoMainWrapper.querySelectorAll(".input-data")[0].value;	
	}		
}


function getEmailForgotPasswordOtp(customInput){
	resetOtpTimer(customInput)
	var errElement=ssoMainWrapper.querySelector(".forgot-password").querySelector(".signIn-error") 
	jsso.getEmailForgotPasswordOtp(inputIdentifier,function(response){
		if(response.code==200){
			errElement.innerHTML=""
		}else{
			errElement.innerHTML=errCode[response.code]
		}
	})
}
function getMobileForgotPasswordOtp(customInput){
	resetOtpTimer(customInput)
	var errElement=ssoMainWrapper.querySelector(".forgot-password").querySelector(".signIn-error") 
	jsso.getMobileForgotPasswordOtp(inputIdentifier,function(response){
		if(response.code==200){
			errElement.innerHTML=""
		}else{
			errElement.innerHTML=errCode[response.code]
		}
	})	
}

function forgetContinueCb(event){
	event.target.classList.add("submitOtp")
	var el=ssoMainWrapper.querySelectorAll(".slectOtpGenPt")[0]
	var el2=ssoMainWrapper.querySelectorAll(".direct-otp")[0]
	hideSection(el,"show","hide");
	toggleClass(el2);
}

function switchToPwdCb(event){
	updateGTMDataLayer({
		'event':'click_signin_with_password',
		'eventCategory':'SignIn',
		'eventAction':'click_signin_with_password',
		'eventLabel':'NA'
	})
	console.log({
		'event':'click_signin_with_password',
		'eventCategory':'SignIn',
		'eventAction':'click_signin_with_password',
		'eventLabel':'NA'
	})
	var el=ssoMainWrapper.querySelector(".sign-with-pwd");
	el.querySelector(".signIn-error").innerHTML="";
	el.querySelector(".user-pwd-info").innerHTML=inputIdentifier;
	el.querySelector(".pwd-otp").value="";
	toggleClass(el)
	addActive(el)
	var el=ssoMainWrapper.querySelector(".sign-with-otp");
	el.querySelector(".signIn-error").innerHTML="";
	toggleClass(el)
}

function switchToOtpCb(event){
	updateGTMDataLayer({
		'event':'click_signin_with_password',
		'eventCategory':'SignIn',
		'eventAction':'click_signin_with_password',
		'eventLabel':'NA'
	});
	console.log({
		'event':'click_signin_with_password',
		'eventCategory':'SignIn',
		'eventAction':'click_signin_with_password',
		'eventLabel':'NA'
	})
	if(inputIdentifier.indexOf("@")>0){
		getEmailLoginOtp(inputIdentifier,ssoMainWrapper.querySelector(".sign-with-otp").querySelector(".custom-input"))
	}else{
		getMobileLoginOtp(inputIdentifier,ssoMainWrapper.querySelector(".sign-with-otp").querySelector(".custom-input"))
	}
	var el=ssoMainWrapper.querySelectorAll(".sign-with-pwd")[0];
	el.querySelector(".signIn-error").innerHTML="";
	toggleClass(el)
	var element=ssoMainWrapper.querySelectorAll(".sign-with-otp")[0];
	element.querySelector(".signIn-error").innerHTML="";
	addActive(element)
	element.querySelector(".pwd-otp").value="";
	toggleClass(element)
	element.querySelector(".user-otp-info").innerHTML=inputIdentifier
}


function signInBtnCb(event){
	if(event.target.classList.contains("pwdSubmit")){
		var errElement=ssoMainWrapper.querySelector(".sign-with-pwd").querySelector(".signIn-error");
	}else{
		var errElement=ssoMainWrapper.querySelector(".sign-with-otp").querySelector(".signIn-error");
	}
	var input = otp || passwordEntered;
	if(inputIdentifier.indexOf("@")>0){
		jsso.verifyEmailLogin(inputIdentifier,input,function(response){
			if(event.target.classList.contains("verifyAndSignInBtn")){
		 		updateGTMDataLayer({
					'event':'click_verify_&_signin_after_entering_OTP',
					'eventCategory':'SignIn',
					'eventAction':'click_verify_&_signin_after_entering_OTP',
					'eventLabel':response.code == 200?"success":'failure,'+errCode[response.code]
				})
				console.log({
					'event':'click_verify_&_signin_after_entering_OTP',
					'eventCategory':'SignIn',
					'eventAction':'click_verify_&_signin_after_entering_OTP',
					'eventLabel':response.code == 200?"success":'failure,'+errCode[response.code]
				})
		 	}
		 	else{
		 		updateGTMDataLayer({
						'event':'click_signin_after_entering_password',
						'eventCategory':'SignIn',
						'eventAction':'click_signin_after_entering_password',
						'eventLabel':response.code == 200?"success":'failure,'+errCode[response.code]
					})
		 		console.log({
						'event':'click_signin_after_entering_password',
						'eventCategory':'SignIn',
						'eventAction':'click_signin_after_entering_password',
						'eventLabel':response.code == 200?"success":'failure,'+errCode[response.code]
					})
		 	}
			 if (response.code == 200) {
			 	errElement.innerHTML=""
				signInSucess()
			}else{
				errElement.innerHTML=errCode[response.code]
			}
		})
	}else{
		jsso.verifyMobileLogin(inputIdentifier,input,function(response){
			if(event.target.classList.contains("verifyAndSignInBtn")){
		 		updateGTMDataLayer({
					'event':'click_verify_&_signin_after_entering_OTP',
					'eventCategory':'SignIn',
					'eventAction':'click_verify_&_signin_after_entering_OTP',
					'eventLabel':response.code == 200?"success":'failure,'+errCode[response.code]
				})
				console.log({
					'event':'click_verify_&_signin_after_entering_OTP',
					'eventCategory':'SignIn',
					'eventAction':'click_verify_&_signin_after_entering_OTP',
					'eventLabel':response.code == 200?"success":'failure,'+errCode[response.code]
				})
		 	}else{
		 		updateGTMDataLayer({
					'event':'click_signin_after_entering_otp',
					'eventCategory':'SignIn',
					'eventAction':'click_signin_after_entering_otp',
					'eventLabel':response.code == 200?"success":'failure,'+errCode[response.code]
				})
				console.log({
					'event':'click_signin_after_entering_otp',
					'eventCategory':'SignIn',
					'eventAction':'click_signin_after_entering_otp',
					'eventLabel':response.code == 200?"success":'failure,'+errCode[response.code]
				})
		 	}
			 if (response.code == 200) {
			 	errElement.innerHTML=""
				signInSucess()
			}else{
				errElement.innerHTML=errCode[response.code]
			}
		})
	}
}



//sign up function
function termsCb(event){
	var element=event.currentTarget.querySelector(".checkTerms");
	var errElement=event.currentTarget.querySelector(".termsError");
	if(element.classList.contains("t-uncheck")){
		//event.currentTarget
		errElement.innerHTML="";
		element.classList.remove("t-uncheck");
		element.classList.add("t-check");
	}else{
		element.classList.remove("t-check");
		element.classList.add("t-uncheck");
	}
}
function registeruserCb(mobile,email){
	var el=ssoMainWrapper.querySelector("#signUp-div")
	toggleClass(el)
	var verifyuser=ssoMainWrapper.querySelector(".verify-user")
	addActive(verifyuser)
	toggleClass(verifyuser)
	var verifySection=verifyuser.querySelectorAll(".verifySection")
	resetOtpTimer(verifySection[0].querySelector(".custom-input"));
	verifySection[1] && resetOtpTimer(verifySection[1].querySelector(".custom-input"))
	if(configParam.signupForm.MandatoryVerifyVia.length==2){
		verifySection[0].querySelector(".user-otp-info").innerHTML=email;
		toggleClass(verifySection[0]);
		verifySection[1].querySelector(".user-otp-info").innerHTML=mobile;
		toggleClass(verifySection[1])
	}else if(configParam.signupForm.MandatoryVerifyVia[0].toLowerCase()=="email" && mobile){
			verifySection[0].querySelector(".user-otp-info").innerHTML=email;
			toggleClass(verifySection[0]);
			verifySection[1].querySelector(".user-otp-info").innerHTML=mobile;
			toggleClass(verifySection[1])
	}else if(configParam.signupForm.MandatoryVerifyVia[0].toLowerCase()=="email" && !mobile){
			verifySection[0].querySelector(".user-otp-info").innerHTML=email;
			toggleClass(verifySection[0]);
	}else if(configParam.signupForm.MandatoryVerifyVia[0].toLowerCase()=="mobile" && email){
			verifySection[0].querySelector(".user-otp-info").innerHTML=mobile;
			toggleClass(verifySection[0]);
			verifySection[1].querySelector(".user-otp-info").innerHTML=email;
			toggleClass(verifySection[1])
	}else if(configParam.signupForm.MandatoryVerifyVia[0].toLowerCase()=="mobile" && !email){
			verifySection[0].querySelector(".user-otp-info").innerHTML=mobile;
			toggleClass(verifySection[0]);
	}else if(configParam.signupForm.MandatoryVerifyVia[0].toLowerCase()=="emailormobile"){
		if(email && mobile){
			verifySection[0].querySelector(".user-otp-info").innerHTML=email;
			toggleClass(verifySection[0]);
			verifySection[1].querySelector(".user-otp-info").innerHTML=mobile;
			toggleClass(verifySection[1])
		}else if(email || mobile){
			verifySection[0].querySelector(".user-otp-info").innerHTML=email || mobile;
			toggleClass(verifySection[0]);
		}
	}
}
function removeErrorSignupform(event){
	event.currentTarget.querySelector(".error").innerHTML="";
}

function signupValidation(event){
	var el = ssoMainWrapper.querySelectorAll(".sign-up-field");
	var validMobile=true;
	var validEmail=true;
	var valid=true
	for(var i=0;i<el.length;i++){
		var inputField=el[i].querySelector("input");
		if(inputField){
			var value=inputField.value;
			if(inputField.getAttribute("data-required")=="required"){
				if(inputField.getAttribute("name")=="email" ){
					var errElement=el[i].querySelector(".email-error")
					 validEmail=emailValidation(errElement,"",value)
				}
				if(inputField.getAttribute("name")=="mobilenumber"){
					var errElement=el[i].querySelector(".mobilenumber-error")
					 validMobile=mobileValidation(errElement,"",value)
					
				}
				if(validEmail && validMobile){
					valid=true
				}else{
					valid=false
				}
				if(inputField.getAttribute("name")=="firstname" && !value){
					var errElement=el[i].querySelector(".firstname-error");
						errElement.innerHTML="Please enter the first name";
						valid=false
				}
				if(inputField.getAttribute("name")=="lastname" && !value){
					var errElement=el[i].querySelector(".lastname-error");
						errElement.innerHTML="Please enter the last name";
						valid=false;
				}
				if(inputField.getAttribute("name")=="password"){
					var errElement=el[i].querySelector(".password-error");
					if(el[i].querySelector(".password-strength").querySelector(".uncheck") ){
					errElement.innerHTML="Please enter  valid password";
					valid=false
					}else{
						errElement.innerHTML=""
					}	
				}	
			}
			
		}
		else if(el[i].querySelector(".checkTerms").classList.contains("t-uncheck")){
			valid=false
			var errElement=el[i].querySelector(".error").innerHTML="Please select the checkbox";

		}else{
			var errElement=el[i].querySelector(".error").innerHTML="";
		}
	}
	
	return valid;
}




function signUpUser(event,firstName, lastName, gender, dob, email, mobile, password, isSendOffer,recaptcha, termsAccepted, shareDataAllowed,timespointsPolicy){
	if(configParam.signupForm.recaptcha){
		jsso.registerUserRecaptcha(firstName, lastName, gender, dob, email, mobile, password, isSendOffer, recaptcha, termsAccepted, shareDataAllowed, timespointsPolicy, function(response){
			updateGTMDataLayer({
				'event':'click_sign_up',
				'eventCategory':'SingUp',
				'eventAction':'click_sign_up',
				'eventLabel':response.code==200?"success":"failure,"+errCode[response.code]
			})
			console.log({
				'event':'click_sign_up',
				'eventCategory':'SingUp',
				'eventAction':'click_sign_up',
				'eventLabel':response.code==200?"success":"failure,"+errCode[response.code]
			})
			if (response.code != 200) {
				console.log("not 200");
				console.log(response.code + ": " + response.message);
				ssoMainWrapper.querySelector(".signup-error").innerHTML=errCode[response.code];
				return;
			}
	      	else{
	      		enableBtn(event.target);
	      		registerUserSsoid = response.data.ssoid;
	      		registeruserCb( mobile,email)
	      	}
		})
	}
	else if(configParam.signupForm.signupVia[0].toLowerCase()=="password"){
		jsso.registerUser(firstName, lastName, gender, dob, email, mobile, password, isSendOffer , termsAccepted,shareDataAllowed, timespointsPolicy, function(response) {
			updateGTMDataLayer({
				'event':'click_sign_up',
				'eventCategory':'SingUp',
				'eventAction':'click_sign_up',
				'eventLabel':response.code==200?"success":"failure,"+errCode[response.code]
			})
			console.log({
				'event':'click_sign_up',
				'eventCategory':'SingUp',
				'eventAction':'click_sign_up',
				'eventLabel':response.code==200?"success":"failure,"+errCode[response.code]
			})
			if (response.code != 200) {
				console.log("not 200");
				console.log(response.code + ": " + response.message);
				ssoMainWrapper.querySelector(".signup-error").innerHTML=errCode[response.code];
				return;
			}
	      	else{
	      		enableBtn(event.target);
	      		registerUserSsoid = response.data.ssoid;
	      		registeruserCb(mobile,email)
	      	}
	    });

	}else if(configParam.signupForm.signupVia[0].toLowerCase()=="otp" && !configParam.signupForm.signUpFields["Email"] ){
    	jsso.registerOnlyMobile(firstName, lastName, gender, mobile, termsAccepted, shareDataAllowed, timespointsPolicy, function(response){
    		updateGTMDataLayer({
				'event':'click_sign_up',
				'eventCategory':'SingUp',
				'eventAction':'click_sign_up',
				'eventLabel':response.code==200?"success":"failure,"+errCode[response.code]
			})
			console.log({
				'event':'click_sign_up',
				'eventCategory':'SingUp',
				'eventAction':'click_sign_up',
				'eventLabel':response.code==200?"success":"failure,"+errCode[response.code]
			})
    		if (response.code != 200) {
				console.log("not 200");
				console.log(response.code + ": " + response.message);
				ssoMainWrapper.querySelector(".signup-error").innerHTML="error"
				return;
			}
	      	else{
	      		enableBtn(event.target);
	      		registerUserSsoid = response.data.ssoid;
	      		registeruserCb(mobile)
	      	}
    	})
	}
}
  

function registerUser(event){
	disableBtn(event.target);
	if(signupValidation()){
		enableBtn(event.target)
		var signInform=ssoMainWrapper.querySelector(".sign-in-form");
		var email = signInform.querySelector(".email") ? signInform.querySelector(".email").value : "",
			mobile = signInform.querySelector(".mobilenumber") ? signInform.querySelector(".mobilenumber").value :"",
			firstName = signInform.querySelector(".firstname") ? signInform.querySelector(".firstname").value:configParam.signupForm.defaultFirstName,
			lastName = signInform.querySelector(".lastName") ? signInform.querySelector(".lastName").value : "",
			password = signInform.querySelector(".signupPwd") ? signInform.querySelector(".signupPwd").value : "",
			gender = signInform.querySelector(".gender") ? signInform.querySelector(".gender").value :"",
			dob = signInform.querySelector(".dob") ? signInform.querySelector(".dob").value :"",
			termsAccepted = "1",
			shareDataAllowed = "1",
			policy = "1",
			isSendOffer = false;
			userEmailInfo=email;
			userMobileInfo=mobile;
			if(mobile.indexOf("+")>=0){
				mobile=mobile;
			}else if(mobile){
				mobile=addCountryCode()+mobile;
			}
			
			signUpUser(event,firstName, lastName, gender, dob, email, mobile, password, isSendOffer,recaptcha, termsAccepted, shareDataAllowed,policy)	
	}else{
		enableBtn(event.target)
	}

}


function checkPassword(event){
	passwordEntered=event.target.value;
	var pwdError=ssoMainWrapper.querySelector(".nonSignupPwdSection").querySelector(".password-error");
		pwdError.innerHTML="";
		ssoMainWrapper.querySelector(".nonSignupPwdSection").querySelector(".passwordInfo").classList.remove("error");
	
	var btn="";
	if(event.target.classList.contains("signupPwd")){
		var pwd=ssoMainWrapper.querySelector(".signupPwdSection");
	}
	else{
		var pwd=ssoMainWrapper.querySelector(".nonSignupPwdSection");
		 btn=ssoMainWrapper.querySelector(".submitResetPwd");
	}
	var pwdStrength=pwd.querySelector(".password-strength");
	passwordValidation(pwdStrength);
	if(!pwdStrength.querySelectorAll(".uncheck")[0] && otp ){
		btn && enableBtn(btn)
	}else{
		btn && disableBtn(btn)
	}

}

function passwordValidation(pwdStrength){
	if(passwordEntered.length){
		showSection(pwdStrength,"hide","show");
	}else{
		hideSection(pwdStrength,"show","hide");
	}
	var alpha = /^[A-Za-z0-9 ]+$/
	var numeric = /\d/
	var lowerCase = /.*[a-z].*/

	if(passwordEntered.length>6){
		showSection(pwdStrength.querySelector(".chk1"),"uncheck","checked")
	}else{
		hideSection(pwdStrength.querySelector(".chk1"),"checked","uncheck")
	}
	if(lowerCase.test(passwordEntered)){
		showSection(pwdStrength.querySelector(".chk2"),"uncheck","checked")
	}else{
		hideSection(pwdStrength.querySelector(".chk2"),"checked","uncheck")
	}
	if(numeric.test(passwordEntered)){
		showSection(pwdStrength.querySelector(".chk3"),"uncheck","checked")
	}else{
		hideSection(pwdStrength.querySelector(".chk3"),"checked","uncheck")
	}
	if(!alpha.test(passwordEntered)){
		showSection(pwdStrength.querySelector(".chk4"),"uncheck","checked")
	}else{
		hideSection(pwdStrength.querySelector(".chk4"),"checked","uncheck")
	}
}

function signInCb(){
	updateGTMDataLayer({
		'event':'click_signin',
		'eventCategory':'SignIn',
		'eventAction':'click_signin',
		'eventLabel':ssoMainWrapper.querySelector(".password-changed").querySelector(".forgot-pwd-heading")
	});
	console.log({
		'event':'click_signin',
		'eventCategory':'SignIn',
		'eventAction':'click_signin',
		'eventLabel':ssoMainWrapper.querySelector(".password-changed").querySelector(".forgot-pwd-heading")
	})
	
	var loginForm=ssoMainWrapper.querySelector(".loginForm");
		toggleClass(loginForm);
	var el=ssoMainWrapper.querySelector(".password-changed")
	toggleClass(el);
}
	

function resendOtpCb(event){
	var customInput=event.target.parentElement;
	customInput.querySelector(".pwd-otp").value="";
	var val=customInput.previousElementSibling.querySelector(".user-otp-info").innerHTML
	var errElement=customInput.nextElementSibling
	if(val.indexOf("@")>0){
		if(event.target.classList.contains("otpResentLink")){
			updateGTMDataLayer({
				'event':'click_resend_otp_signin',
				'eventCategory':'SignIn',
				'eventAction':'click_resend_otp_signin',
				'eventLabel':ssoMainWrapper.querySelector(".sign-with-otp").querySelector(".sign-in-Heading").innerHTML
			})
			console.log({
				'event':'click_resend_otp_signin',
				'eventCategory':'SignIn',
				'eventAction':'click_resend_otp_signin',
				'eventLabel':ssoMainWrapper.querySelector(".sign-with-otp").querySelector(".sign-in-Heading").innerHTML
			})
			getEmailLoginOtp(val,customInput)
		}else if(event.target.classList.contains("verifyResentLink")){
			updateGTMDataLayer({
				'event':'click_resend_otp_signup',
				'eventCategory':'SingUp',
				'eventAction':'click_resend_otp_signup',
				'eventLabel':val
			})
			console.log({
				'event':'click_resend_otp_signup',
				'eventCategory':'SingUp',
				'eventAction':'click_resend_otp_signup',
				'eventLabel':val
			})
			resetOtpTimer(customInput)
			
			jsso.resendEmailSignUpOtp(val, registerUserSsoid, function(response) {
				if(response.code==200){
					errElement.innerHTML=""
				}else{
					errElement.innerHTML=errCode[response.code]
				}		
			});
		}else if(event.target.classList.contains("forgotResentLink")){
			updateGTMDataLayer({
				'event':'click_resend_otp_signin',
				'eventCategory':'SignIn',
				'eventAction':'click_resend_otp_signin',
				'eventLabel':ssoMainWrapper.querySelector(".forgot-password").querySelector(".forgot-pwd-heading").innerHTML
			})
			console.log({
				'event':'click_resend_otp_signin',
				'eventCategory':'SignIn',
				'eventAction':'click_resend_otp_signin',
				'eventLabel':ssoMainWrapper.querySelector(".forgot-password").querySelector(".forgot-pwd-heading").innerHTML
			})
			//var errElement=ssoMainWrapper.querySelector(".direct-otp").querySelector(".signIn-error")
			getEmailForgotPasswordOtp(customInput)
		}
	}else{
		if(event.target.classList.contains("otpResentLink")){
			updateGTMDataLayer({
				'event':'click_resend_otp_signup',
				'eventCategory':'SingUp',
				'eventAction':'click_resend_otp_signup',
				'eventLabel':val
			})
			console.log({
				'event':'click_resend_otp_signup',
				'eventCategory':'SingUp',
				'eventAction':'click_resend_otp_signup',
				'eventLabel':val
			})
			updateGTMDataLayer({
				'event':'click_resend_otp_signin',
				'eventCategory':'SignIn',
				'eventAction':'click_resend_otp_signin',
				'eventLabel':ssoMainWrapper.querySelector(".sign-with-otp").querySelector(".sign-in-Heading").innerHTML
			})
			console.log({
				'event':'click_resend_otp_signin',
				'eventCategory':'SignIn',
				'eventAction':'click_resend_otp_signin',
				'eventLabel':ssoMainWrapper.querySelector(".sign-with-otp").querySelector(".sign-in-Heading").innerHTML
			})
			getMobileLoginOtp(val,customInput)
		}else if(event.target.classList.contains("verifyResentLink")){
			resetOtpTimer(customInput)
			// var errElement=ssoMainWrapper.querySelector(".verify-user").querySelector(".signIn-error")
			jsso.resendMobileSignUpOtp(val, registerUserSsoid, function(response) {
			 	if(response.code==200){
			 		errElement.innerHTML=""
				}else{
					errElement.innerHTML=errCode[response.code]
				}
			});
		}else if(event.target.classList.contains("forgotResentLink")){
			updateGTMDataLayer({
				'event':'click_resend_otp_signin',
				'eventCategory':'SignIn',
				'eventAction':'click_resend_otp_signin',
				'eventLabel':ssoMainWrapper.querySelector(".forgot-password").querySelector(".forgot-pwd-heading").innerHTML
			})
			console.log({
				'event':'click_resend_otp_signin',
				'eventCategory':'SignIn',
				'eventAction':'click_resend_otp_signin',
				'eventLabel':ssoMainWrapper.querySelector(".forgot-password").querySelector(".forgot-pwd-heading").innerHTML
			})
			getMobileForgotPasswordOtp(customInput)		
		}
	}
}
window.JssoLoginCompleteCallback=function(response){
	if(response.code==200){
			signInSucess()
		}
}
//social Login
function FacebookLogin(channelData){
	jsso.socialLogin("FACEBOOK",configParam.facebookClientId)
	updateGTMDataLayer({
		'event':'signin_with_facebook',
		'eventCategory':'SignIn',
		'eventAction':'signin_with_facebook',
		'eventLabel':'NA'
	})
	console.log({
		'event':'signin_with_facebook',
		'eventCategory':'SignIn',
		'eventAction':'signin_with_facebook',
		'eventLabel':'NA'
	})
			
}
function GoogleplusLogin(channelData){
	jsso.socialLogin("GOOGLEPLUS",configParam.googleClientId)
	updateGTMDataLayer({
		'event':'signin_with_google',
		'eventCategory':'SignIn',
		'eventAction':'signin_with_google',
		'eventLabel':'NA'
	});
	console.log({
		'event':'signin_with_google',
		'eventCategory':'SignIn',
		'eventAction':'signin_with_google',
		'eventLabel':'NA'
	});
	
}
// function truecallerLogin(socialCallback){
// 	var el=ssoMainWrapper.querySelector(".truecaller")
// toggleClass(el);

// 	var el=ssoMainWrapper.querySelectorAll(".truecallerNo")[0];
// 		var value=el.value;
// 		toggleClass(el);
// 	jsso.truecallerLogin(value,function(response){
// 			if(response.code==200){
// 				var requestId=response.data.requestId;
// 				trueCallerrVerify(requestId)
// 			}
// 	})
// }
// function trueCallerVerify(requestId){
// 	jsso.truecallerVerify(requestId,trueCallerCb)

// }
// function trueCallerCb(){
// }
function linkedinLogin(channelData,socialCallback){
	jsso.socialLogin("LINKEDIN","1607426726038643")
}

function pwdOtpCb(event){
	otp="";
	var otpLength="";
	var errElement=event.target.parentElement.parentElement.nextElementSibling;
		errElement.innerHTML="";
	var pwdError=ssoMainWrapper.querySelector(".nonSignupPwdSection").querySelector(".password-error");
		pwdError.innerHTML="";
	ssoMainWrapper.querySelector(".nonSignupPwdSection").querySelector(".passwordInfo").classList.remove("error");
	var onlynumeric=new RegExp(/^[0-9]*$/);
	if(event.target.value){
		if(event.target.classList.contains("otpInput")){

			if(!onlynumeric.test(event.target.value)){
				event.target.value=event.target.value.substring(0,event.target.value.length-1)
			}
				if(event.target.value.length>6 ){
					event.target.value=event.target.value.substring(0,event.target.value.length-1)
				}
			otp=event.target.value;

			enableBtn(ssoMainWrapper.querySelector(".otpSubmit"))	
		}else if(event.target.classList.contains("pwdPrefernce")){
			passwordEntered="";
			passwordEntered=event.target.value;
			enableBtn(ssoMainWrapper.querySelector(".pwdSubmit"))
		}else if(event.target.classList.contains("verifyInput")){
			var component=ssoMainWrapper.querySelector(".verify-user").querySelectorAll(".verifyInput");
			if(!onlynumeric.test(event.target.value)){
				event.target.value=event.target.value.substring(0,event.target.value.length-1)
			}
				if(event.target.value.length>6 ){
					event.target.value=event.target.value.substring(0,event.target.value.length-1)
				}
			if(component.length==2){
				var validP1=component[0].getAttribute("data-valid"),
					validP2=component[1].getAttribute("data-valid")
				if(validP1=="required" && validP2=="required"){
					if(component[0].value && component[1].value){
						enableBtn(ssoMainWrapper.querySelector(".verifyBtn"))	
					}
				}else if(validP1=="optional" && validP2=="optional"){
					if(component[0].value || component[1].value){
						enableBtn(ssoMainWrapper.querySelector(".verifyBtn"))	
					}
				}else if(event.target.getAttribute("data-valid")=="required" ){
					enableBtn(ssoMainWrapper.querySelector(".verifyBtn"))	
				}	
			}else if(event.target.getAttribute("data-valid")=="required" ){
				enableBtn(ssoMainWrapper.querySelector(".verifyBtn"))	
			}
		}
		else if(event.target.classList.contains("forgotInput")){
			var btn=ssoMainWrapper.querySelector(".submitResetPwd");
				if(ssoMainWrapper.querySelector(".nonSignupPwd").value){
					enableBtn(btn)
				}else{
					disableBtn(btn)
				}
				if(!onlynumeric.test(event.target.value)){
					event.target.value=event.target.value.substring(0,event.target.value.length-1)
				}
			if(event.target.value.length>6){
					event.target.value=event.target.value.substring(0,event.target.value.length-1)
				}
			otp=event.target.value;
		}
	}else{
		disableBtn(ssoMainWrapper.querySelector(".otpSubmit"))
		disableBtn(ssoMainWrapper.querySelector(".pwdSubmit"))
		disableBtn(ssoMainWrapper.querySelector(".verifyBtn"))
	}	
}
function skipLinkCb(){
	updateGTMDataLayer({
		'event':'click_skip',
		'eventCategory':'SingUp',
		'eventAction':'click_skip_signup',
		'eventLabel':inputIdentifier
	})
	console.log({
		'event':'click_skip',
		'eventCategory':'SingUp',
		'eventAction':'click_skip_signup',
		'eventLabel':inputIdentifier
	})
	var loginForm=ssoMainWrapper.querySelector(".loginForm");
	var footerImg=ssoMainWrapper.querySelector(".sso-footer-img");
	var ssoSuccessPage=ssoMainWrapper.querySelector(".ssoSuccessPage");
	var component=ssoMainWrapper.querySelector(".verify-user");
	verifySuccessCb(component,footerImg,loginForm,ssoSuccessPage);
}
function verifySuccessCb(component,footerImg,loginForm,ssoSuccessPage){
	if(configParam.showSuccessScreen){
		showSection(ssoSuccessPage,"hide","show")
		addActive(ssoSuccessPage);
		hideSection(footerImg,"show","hide");
		hideSection(loginForm,"show","hide");
		hideSection(component,"show","hide");

	}else{
		signInSucess()
		
	}
}
function verifyfailure(){

}
function verifyUserCb(event){
	disableBtn(event.target);
	var loginForm=ssoMainWrapper.querySelector(".loginForm");
	var footerImg=ssoMainWrapper.querySelector(".sso-footer-img");
	var ssoSuccessPage=ssoMainWrapper.querySelector(".ssoSuccessPage");
	var component=ssoMainWrapper.querySelector(".verify-user");
	var verifyInput=component.querySelectorAll(".verifyInput");
	var userOtp=component.querySelectorAll(".user-otp-info");
	var errElement=component.querySelectorAll(".signIn-error");
	var skipLink=component.querySelector(".skipLink");
	function verifyMobileSignUpPromise(mobile, ssoid, otp){
		return new Promise(function (resolve,reject){
			jsso.verifyMobileSignUp(mobile, ssoid, otp, function(response){
				resolve(response);
			})
		})
	}
	function verifyEmailSignUpPromise(email, ssoid, otp){
		return new Promise(function (resolve,reject){
			jsso.verifyEmailSignUp(email, ssoid, otp, function(response){
				resolve(response);
			})
		})
	}
	// if(verifyInput.length==2){
		for(var i=0;i<verifyInput.length;i++){
			if(userOtp[i].innerHTML.indexOf("@")>0 && verifyInput[i].value && !verifyInput[i].getAttribute("disabled")){
				verifyObject["email"]={};
				verifyObject["email"]["id"]=userOtp[i].innerHTML;
				verifyObject["email"]["value"]=verifyInput[i].value;
				verifyObject["email"]["element"]=verifyInput[i];
				verifyObject["email"]["errElement"]=component.querySelectorAll(".signIn-error")[i];
				verifyObject["email"]["resendLink"]=component.querySelectorAll(".verifyResentLink")[i];
				verifyObject["email"]["greentick"]=component.querySelectorAll(".green-tick")[i];


			}else if(verifyInput[i].value && !verifyInput[i].getAttribute("disabled")){
				verifyObject["mobile"]={}
				verifyObject["mobile"]["number"]=userOtp[i].innerHTML;
				verifyObject["mobile"]["value"]=verifyInput[i].value;
				verifyObject["mobile"]["element"]=verifyInput[i];
				verifyObject["mobile"]["errElement"]=component.querySelectorAll(".signIn-error")[i];
				verifyObject["mobile"]["resendLink"]=component.querySelectorAll(".verifyResentLink")[i];
				verifyObject["mobile"]["greentick"]=component.querySelectorAll(".green-tick")[i];
			}
		}
		var subHeading=ssoMainWrapper.querySelector(".success-subHeading");
		if(Object.keys(verifyObject).length==2){
			Promise.all([verifyMobileSignUpPromise(verifyObject.mobile.number,registerUserSsoid,verifyObject.mobile.value),verifyEmailSignUpPromise(verifyObject.email.id,registerUserSsoid,verifyObject.email.value)]).then(function(response){
				enableBtn(event.target)
				//first promise
				updateGTMDataLayer({
						'event':'click_verify_signup',
						'eventCategory':'SingUp',
						'eventAction':'click_verify_signup',
						'eventLabel':{"mobile":(response[0].code==200)?"success":"failure,"+errCode[response[0].code],
							"email":(response[1].code==200)?"success":"failure,"+errCode[response[1].code]
						}
					})
				console.log({
						'event':'click_verify_signup',
						'eventCategory':'SingUp',
						'eventAction':'click_verify_signup',
						'eventLabel':{"mobile":(response[0].code==200)?"success":"failure,"+errCode[response[0].code],
							"email":(response[1].code==200)?"success":"failure,"+errCode[response[1].code]
						}
					})
				if(response[0].code==200 && response[1].code==200){
					subHeading.innerHTML="You are now registered with TimesPoints and your user id is:"+verifyObject.mobile.number+"/"+verifyObject.email.id
				}
				else if(response[0].code==200 && response[1].code!=200){
					subHeading.innerHTML="You are now registered with TimesPoints and your user id is:"+verifyObject.mobile.number
				}else if(response[1].code==200 && response[0].code!=200){
					subHeading.innerHTML="You are now registered with TimesPoints and your user id is:"+verifyObject.email.id
				}
				if(response[0].code==200){
					verifyObject.mobile.errElement.innerHTML=""
					verifyObject.mobile.element.setAttribute("disabled",true)
					showSection(verifyObject.mobile.greentick,"hide","show")
					hideSection(verifyObject.mobile.resendLink,"show","hide")
					delete(verifyObject.mobile);
					if(!(configParam.signupForm.MandatoryVerifyVia.length==2)&& (configParam.signupForm.MandatoryVerifyVia[0].toLowerCase()=="mobile")||(configParam.signupForm.MandatoryVerifyVia[0].toLowerCase()=="emailormobile")){
						showSection(skipLink,"hide","show")
					}
				}else{
					verifyObject.mobile.errElement.innerHTML=errCode[response[0].code]
				}
				//second promise
				if(response[1].code==200){
					verifyObject.email.errElement.innerHTML=""
					verifyObject.email.element.setAttribute("disabled",true)
					showSection(verifyObject.email.greentick,"hide","show")
					hideSection(verifyObject.email.resendLink,"show","hide")
					delete(verifyObject.email)
					if(!(configParam.signupForm.MandatoryVerifyVia.length==2) && (configParam.signupForm.MandatoryVerifyVia[0].toLowerCase()=="email")||(configParam.signupForm.MandatoryVerifyVia[0].toLowerCase()=="emailormobile")){
						showSection(skipLink,"hide","show")
					}
				}else{
					verifyObject.email.errElement.innerHTML=errCode[response[1].code]
				}
				if(response[0].code==200 && response[1].code==200){
					
					verifySuccessCb(component,footerImg,loginForm,ssoSuccessPage);
				}
			})		

		//when only  email field is to be validated	
	}else if(verifyObject["email"]){
		

		verifyEmailSignUpPromise(verifyObject.email.id,registerUserSsoid,verifyObject.email.value).then(function(response){
			enableBtn(event.target)
			updateGTMDataLayer({
			'event':'click_verify_signup',
			'eventCategory':'SingUp',
			'eventAction':'click_verify_signup',
			'eventLabel':{"email":(response.code==200)?"success":"failure,"+errCode[response.code]
			}
		})
		console.log({
			'event':'click_verify_signup',
			'eventCategory':'SingUp',
			'eventAction':'click_verify_signup',
			'eventLabel':{"email":(response.code==200)?"success":"failure,"+errCode[response.code]
			}
		})
			if(response.code==200){
				if(subHeading.innerHTML){
					subHeading.append("/"+verifyObject.email.id)
				}else{
					subHeading.innerHTML="You are now registered with TimesPoints and your user id is:"+verifyObject.email.id
				}
				verifyObject.email.errElement.innerHTML=""
				verifySuccessCb(component,footerImg,loginForm,ssoSuccessPage)
			}else{
				// if(!configParam.signupForm.MandatoryVerifyVia.length==2 && configParam.signupForm.MandatoryVerifyVia=="mobile"){
				// 	showSection(skipLink,"hide","show")
				// }
				verifyObject.email.errElement.innerHTML=errCode[response.code]
			}

		})
		//when only  mobile field is to be validated	
	}else if(verifyObject["mobile"]){
		
		verifyMobileSignUpPromise(verifyObject.mobile.number,registerUserSsoid,verifyObject.mobile.value).then(function(response){
			enableBtn(event.target)
			updateGTMDataLayer({
			'event':'click_verify_signup',
			'eventCategory':'SingUp',
			'eventAction':'click_verify_signup',
			'eventLabel':{"mobile":(response.code==200)?"success":"failure,"+errCode[response.code]}
		})
		console.log({
			'event':'click_verify_signup',
			'eventCategory':'SingUp',
			'eventAction':'click_verify_signup',
			'eventLabel':{"mobile":(response.code==200)?"success":"failure,"+errCode[response.code]}
		})
			if(response.code==200){
				if(subHeading.innerHTML){
					subHeading.append("/"+verifyObject.mobile.number)
				}else{
					subHeading.innerHTML="You are now registered with TimesPoints and your user id is:"+verifyObject.mobile.number
				}
				verifyObject.mobile.errElement.innerHTML=""
				verifySuccessCb(component,footerImg,loginForm,ssoSuccessPage)
			}else{
				//showSection(skipLink,"hide","show")
				verifyObject.mobile.errElement.innerHTML=errCode[response.code]
			}
		})
	}
}


//forgot password
function submitResetPwdCb(){
	if(inputIdentifier.indexOf("@")>0){
		verifyEmailForgotPassword()
	}else{
		verifyMobileForgotPassword()
	}
}

function verifyEmailForgotPasswordCb(){
	var el=ssoMainWrapper.querySelectorAll(".password-changed")[0]
	toggleClass(el);
	var el=ssoMainWrapper.querySelectorAll(".forgot-password")[0]
	toggleClass(el);
}
function verifyMobileForgotPasswordCb(){
	var el=ssoMainWrapper.querySelectorAll(".password-changed")[0]
	toggleClass(el);
	var el=ssoMainWrapper.querySelectorAll(".forgot-password")[0]
	toggleClass(el);
}

function verifyEmailForgotPassword(){
	var pwdError=ssoMainWrapper.querySelector(".nonSignupPwdSection").querySelector(".password-error");
	jsso.verifyEmailForgotPassword(inputIdentifier,otp,passwordEntered,passwordEntered,function(response){
		
		if(response.code==200){
			updateGTMDataLayer({
			'event':'click_continue_after_entering_new_password',
			'eventCategory':'SignIn',
			'eventAction':'click_continue_after_entering_new_password',
			'eventLabel':'Password Changed Successfully '//or dynamic error'
		});
			console.log({
			'event':'click_continue_after_entering_new_password',
			'eventCategory':'SignIn',
			'eventAction':'click_continue_after_entering_new_password',
			'eventLabel':'Password Changed Successfully '//or dynamic error'
		});
			verifyEmailForgotPasswordCb()
		}else if(response.code==418){
			pwdError.innerHTML="";
			ssoMainWrapper.querySelector(".nonSignupPwdSection").querySelector(".passwordInfo").classList.add("error")
		}
		else{
			updateGTMDataLayer({
				'event':'click_continue_after_entering_new_password',
				'eventCategory':'SignIn',
				'eventAction':'click_continue_after_entering_new_password',
				'eventLabel':errCode[response.code]
			});
			console.log({
				'event':'click_continue_after_entering_new_password',
				'eventCategory':'SignIn',
				'eventAction':'click_continue_after_entering_new_password',
				'eventLabel':errCode[response.code]
			});
			pwdError.innerHTML=errCode[response.code]
		}
		
	})
}
function verifyMobileForgotPassword(){
	var pwdError=ssoMainWrapper.querySelector(".nonSignupPwdSection").querySelector(".password-error");
	jsso.verifyMobileForgotPassword(inputIdentifier,otp,passwordEntered,passwordEntered,function(response){
		if(response.code==200){
			updateGTMDataLayer({
			'event':'click_continue_after_entering_new_password',
			'eventCategory':'SignIn',
			'eventAction':'click_continue_after_entering_new_password',
			'eventLabel':'Password Changed Successfully '//or dynamic error'
		});
			console.log({
			'event':'click_continue_after_entering_new_password',
			'eventCategory':'SignIn',
			'eventAction':'click_continue_after_entering_new_password',
			'eventLabel':'Password Changed Successfully '//or dynamic error'
		});
			verifyEmailForgotPasswordCb()
		}else if(response.code==418){
			pwdError.innerHTML="";
			ssoMainWrapper.querySelector(".nonSignupPwdSection").querySelector(".passwordInfo").classList.add("error")
		}
		else{
			updateGTMDataLayer({
				'event':'click_continue_after_entering_new_password',
				'eventCategory':'SignIn',
				'eventAction':'click_continue_after_entering_new_password',
				'eventLabel':errCode[response.code]
			});
			console.log({
				'event':'click_continue_after_entering_new_password',
				'eventCategory':'SignIn',
				'eventAction':'click_continue_after_entering_new_password',
				'eventLabel':errCode[response.code]
			});
			pwdError.innerHTML=errCode[response.code]
		}
		
	})
}

function selectRadio(event){
	var el=ssoMainWrapper.querySelectorAll(".circle");
	for(var i=0;i<el.length;i++){
		if(el[i].classList.contains("radio-check")){
			el[i].classList.remove("radio-check");
			el[i].classList.add("radio-uncheck")
		}

	}
	event.target.classList.remove("radio-uncheck")
	event.target.classList.add("radio-check")
}


function MobileNumberRestriction(event){
	inputIdentifier=event.target.value;
	if(inputIdentifier.length>10){
		event.target.value=inputIdentifier.substring(0,inputIdentifier.length-1)
	}
}

function signInSucess(event){
	if(event && event.target){
		updateGTMDataLayer({
			'event':'click_continue_registered_with_'+configParam.channelName,
			'eventCategory':'SingUp',
			'eventAction':'click_continue_registered',
			'eventLabel':configParam.channelName
		})
		console.log({
			'event':'click_continue_registered_with_'+configParam.channelName,
			'eventCategory':'SingUp',
			'eventAction':'click_continue_registered',
			'eventLabel':configParam.channelName
		})
	}
	if(configParam.ru){
		window.location.href=configParam.ru;
	}else{
		configParam.signInCallback();
	}
}
	



	// SSO Methods start
		ssoMethods.init=function(ssoObj){
			var mq = window.matchMedia("screen and (max-width: 680px)");
			var tempSocialLogin={
				"Google":{
					"logoUrl":assestPath.staticPath+"/src/img/google.png",
					"label":"with Google"
				},
				"Facebook":{
					"logoUrl":assestPath.staticPath+"/src/img/fb.png",
					"label":"with facebook"
				},
				"TrueCaller":{
					"logoUrl":assestPath.staticPath+"/src/img/truecaller.png",
					"label":"with Truecaller"
				},
				"Twitter":{
					"logoUrl":assestPath.staticPath+"/src/img/twitter.png",
					"label":"with Twitter"
				}

			}
			var defaultConfig={
				gtmCheckCounter:3,
				resendOtpTimer:10,
				isMobileView: mq.matches,
				channelName:"timespoints",
				showSuccessScreen:true,
				// channelLogo:"https://jsso.indiatimes.com/staticsso/1/images/nbt.png",
				channelLogo:"",
				title:"",
				subTitle:"",
				//subTitle:"Login to <strong class='bold'>The Navbharat Times </strong> with your Times account",
				ru:"",
				//companyName:"Times Points",
				nonSocialLogin:{
					loginVia:["email","mobile"],
			 		loginWith:["password","otp"],
			 	},
				signupForm:{
					signUpFields:{
						"Email":{
							placeholder:"Enter email",
							required:true
						},
						"MobileNumber":{
							placeholder:"enter mobile number",
							required:true
						},
					},
					signupVia:["Password"],
					MandatoryVerifyVia:["emailorMobile"]
				},
				termsConditionLink:"",
				privacyPolicyLink:"",
				defaultSelected:true
			}
			if(ssoObj.signupForm){

			}else{
				
			}
			if(ssoObj.socialLogin){
				if(ssoObj.socialLogin.length){
					for (var i=0;i<ssoObj.socialLogin.length;i++){
						var type=ssoObj.socialLogin[i].type;
						ssoObj.socialLogin[i].logoUrl=ssoObj.socialLogin[i].logoUrl || tempSocialLogin[type].logoUrl;
						ssoObj.socialLogin[i].label=ssoObj.socialLogin[i].label || tempSocialLogin[type].label;
						ssoObj[type.toLowerCase()+"ClientId"]=ssoObj.socialLogin[i].clientId;
						
					}
				}
			}
			else{
					ssoObj["socialLogin"]=[]
				}
			configParam={...defaultConfig,...ssoObj};
			configParam.staticPath=assestPath.staticPath;
				channelName = ssoObj.channelName && ssoObj.channelName.toLowerCase() ;
				ru = ssoObj.ru;
				socialCallback=ssoObj.socialCallback;
				var jsointerval=setInterval(function(){
					if(window.JssoCrosswalkWidget){
						jsso = new JssoCrosswalk(channelName,"WEB");
						checkIfUserLoggedIn()	
						clearInterval(jsointerval);
					}	
				},1000)
			
			//if configuration like clientId will be maintained by sso
			//getChannelData();
			
		}
		function bindEventListeners(){
			ssoMainWrapper=document.getElementsByClassName("ssoMainWrapper")[0];

			var inputData=ssoMainWrapper.querySelectorAll(".input-data")[0];
			var continueLoginBtn=ssoMainWrapper.querySelectorAll(".continueLoginBtn")[0];
			var signup = ssoMainWrapper.querySelectorAll("#signUpLink")[0];
			var changelink=ssoMainWrapper.querySelectorAll(".changelink");
			var forgetPwdLink=ssoMainWrapper.querySelectorAll(".forget-password-link")[0];
			var switchToOtpLink=ssoMainWrapper.querySelectorAll(".switchToOtpLink")[0];
			var signInBtn=ssoMainWrapper.querySelectorAll(".signInBtn");
			var resendOtp=ssoMainWrapper.querySelectorAll(".resend-otp-link");
			var submitResetPwd=ssoMainWrapper.querySelectorAll(".submitResetPwd")[0];
			var registerbtn = ssoMainWrapper.querySelectorAll("#registerbtn")[0];
			var switchToPwdLink=ssoMainWrapper.querySelectorAll(".switchToPwdLink")[0];
			var pwdOtp=ssoMainWrapper.querySelectorAll(".pwd-otp");
			var passwordField=ssoMainWrapper.querySelectorAll(".password-field");
			var signIn=ssoMainWrapper.querySelector(".signIn");
			var successBtn=ssoMainWrapper.querySelector(".successBtn");
			var MobileNumber=ssoMainWrapper.querySelector(".mobilenumber");
			var crossIcon=ssoMainWrapper.querySelector(".cross-icon")
			var skipLink=ssoMainWrapper.querySelector(".skip");
			var termsConditionLink=ssoMainWrapper.querySelector(".termsConditionLink")
			//for futire reference
			var forgetContinueBtn=ssoMainWrapper.querySelectorAll(".forgetContinueBtn")[0]
			var circle=ssoMainWrapper.querySelectorAll(".circle");
			var terms=ssoMainWrapper.querySelectorAll(".terms");

			var eyeIcon=ssoMainWrapper.querySelectorAll(".eye-icon");
			var facebookbtn = ssoMainWrapper.querySelectorAll("#facebook-div")[0];
			var googlebtn = ssoMainWrapper.querySelectorAll("#google-div")[0];
			var truecallerbtn = ssoMainWrapper.querySelectorAll("#truecaller-div")[0];
			var linkedinbtn = ssoMainWrapper.querySelectorAll("#linkedin-div")[0];

			 var verifyUser=ssoMainWrapper.querySelectorAll(".verifyBtn")[0];

			 var signUpfield=ssoMainWrapper.querySelectorAll(".sign-up-field");

			 eyeIcon && multipleEvent(eyeIcon,"click",eyeIconCb)
			 termsConditionLink && eventListener(termsConditionLink,"click",termsConditionLinkCb)
			 crossIcon && eventListener(crossIcon,"click",crossIconCb)
			skipLink && eventListener(skipLink,"click",skipLinkCb)
			MobileNumber && eventListener(MobileNumber,"input",MobileNumberRestriction)
			inputData && eventListener(inputData,"input",emailAndMobileValidation);
			continueLoginBtn && eventListener(continueLoginBtn,"click",continueLoginBtnCb);
			signup && eventListener(signup,"click",initSignUp)
			changelink && multipleEvent(changelink,"click",changeLoginVia)
			forgetPwdLink && eventListener(forgetPwdLink,"click",getforgotPassword);
			switchToOtpLink && eventListener(switchToOtpLink,"click",switchToOtpCb);
			signInBtn && multipleEvent(signInBtn,"click",signInBtnCb);
			resendOtp && multipleEvent(resendOtp,"click",resendOtpCb);
			submitResetPwd && eventListener(submitResetPwd,"click",submitResetPwdCb)
			registerbtn && eventListener(registerbtn,"click",registerUser);
			
			signUpfield && multipleEvent(signUpfield,"input",removeErrorSignupform);
			switchToPwdLink && eventListener(switchToPwdLink,"click",switchToPwdCb);
			pwdOtp && multipleEvent(pwdOtp,"input",pwdOtpCb)
			passwordField && multipleEvent(passwordField,"input",checkPassword)
			signIn && eventListener(signIn,"click",signInCb)
			successBtn && eventListener(successBtn,"click",signInSucess)
			//for future
			forgetContinueBtn && eventListener(forgetContinueBtn,"click",forgetContinueCb)
			circle && multipleEvent(circle,"click",selectRadio);

			//sign up events
			terms && multipleEvent(terms,"click",termsCb)
			facebookbtn && eventListener(facebookbtn,"click",FacebookLogin);
			googlebtn && eventListener(googlebtn,"click",GoogleplusLogin);
			truecallerbtn && eventListener(truecallerbtn,"click",truecallerLogin);
			linkedinbtn && eventListener(linkedinbtn,"click",linkedinLogin);
			 verifyUser && eventListener(verifyUser,"click",verifyUserCb)

			
			
		}
		function multipleEvent(el,event,cb){
			for(var i=0;i<el.length;i++){
			 eventListener(el[i],event,cb)
			}
		}
			
		function renderTemplate(configParam){
			var temp=createHTMLTemplate(configParam);
			var el=document.getElementById(configParam.element)
			el.innerHTML=temp;

		}

		var methodList=window.ssoWidget.ev;
		if(methodList && methodList.length){
			for(var i=0;i<methodList.length;i++){
				var funct=methodList[i][0];
				var param=methodList[i][1];
				ssoMethods[funct](param)
			}
		}
		window.ssoWidget=function(funct,ssoConfig){
			ssoMethods[funct](ssoConfig);
		}

	})()	





















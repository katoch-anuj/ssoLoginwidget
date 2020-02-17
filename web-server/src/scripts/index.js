// var jsso = new JssoCrosswalk("tlogin", "WEB");
var channel = "";
var ru = "";
var channelData = {};
var registerUserSsoid = "";
var loggedInUserProfile = {};
var tempSocialCode = "";
var baseUrl = "https://jssostg.indiatimes.com/tlogin2/";
var fbRedirectUri = baseUrl + "fbLoginPage.html";
var gpRedirectUri = baseUrl + "gpLoginPage.html";
var fbInitiateUri = "https://www.facebook.com/v2.7/dialog/oauth?client_id=1607426726038643&scope=email%2Cuser_birthday%2Cuser_hometown&redirect_uri=" + fbRedirectUri;
var gpInitiateUri = "https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=750080981887-o16u6fhhghj37p377hqlgadijaq5re7q.apps.googleusercontent.com&scope=email%20https://www.googleapis.com/auth/plus.login&access_type=online&redirect_uri=" + gpRedirectUri;
var fbReinitiateUri = "https://www.facebook.com/dialog/oauth?client_id=1607426726038643&auth_type=rerequest&scope=email%2Cuser_birthday%2Cuser_hometown&redirect_uri=" + fbRedirectUri;

var email = "";
var mobile = "";
var identifier = "";
var loginWithPermissionsFlag=0;

function show(id) {
  document.getElementById(id).style.display = 'block';
}

function hide(id) {
  document.getElementById(id).style.display = 'none';
}

function reportError(response) {
  alert(response.code + ": " + response.message);
}

function printErrorMsg(docs, msg) {
  var length = docs.length;

  for (i = 0; i < length; i++) {
    docs[i].innerHTML = msg;
  }
}

function continueWithEmail() {
  hide('fb-div');
  hide('google-div');
  hide('emailMobile-div');
  hide('signIn-div-error');
  hide('signIn-div-error2');
  show('signIn-div');
  show('allSignInOptions-div');
  show('signUpOtion');
  return;
}

function showAllSignInOptions() {
  show('fb-div');
  show('google-div');
  show('emailMobile-div');
  show('signUpOtion');
  hide('signIn-div');
  hide('signUp-div');
  hide('loginWithOtp');
  hide('setPassword-all-error');
  hide('setPassword-div');
  hide('allSignInOptions-div');
}

function showSignUp() {
  hide('fb-div');
  hide('google-div');
  hide('emailMobile-div');
  hide('signIn-div');
  hide('loginWithOtp');
  hide('signUp-div-error');
  hide('setPassword-all-error');
  hide('signUpOtion');
  show('signUp-div');
  show('allSignInOptions-div');
}

function loginWithOtp() {
  var identifier = document.getElementById("login_identifier").value;
  if (isValidEmailMobile(identifier)) {
    // hide('signIn-div');
    // show('loginWithOtp');
    // hide('loginWithOtp-error');
    document.getElementById('otpLogin').value = '';
    getLoginOtp(identifier);
  } else {
    show('emailMobile-error');
  }
}

function signInUsingOtp() {
  identifier = document.getElementById("login_identifier").value;
  var otp = document.getElementById("otpLogin").value;

  console.log("identifier is: " + identifier);
  console.log("otp is: " + otp);

  if (jsso.isValidEmail(identifier)) {
    jsso.verifyEmailLogin(identifier, otp, function(response) {
      if (response.code != 200) {
        show("loginWithOtp-error");
        // reportError(response);
        return;
      }
      successfulLoginRedirect(response.data);

    });
  } else if (jsso.isValidMobile(identifier)) {
    jsso.verifyMobileLogin(identifier, otp, function(response) {
      if (response.code != 200) {
        show("loginWithOtp-error");
        // reportError(response);
        return;
      }

      successfulLoginRedirect(response.data);

    });
  } else {
    console.log("Invalid Email/Mobile");
  }
}

function getLoginOtp(identifier) {
  // var identifier = document.getElementById("identifier").value;

  if (jsso.isValidEmail(identifier)) {
    jsso.getEmailLoginOtp(identifier, function(response) {
      if (response.code != 200) {
        // reportError(response);
        if (response.code == 405 || response.code == 407)
          show('signIn-div-error2');
        // reportError(response);
        console.log("ERROR code apart from 405 and 407");
        return;
      }
      hide('signIn-div');
      show('loginWithOtp');
      hide('loginWithOtp-error');

    });
  } else if (jsso.isValidMobile(identifier)) {
    jsso.getMobileLoginOtp(identifier, function(response) {
      if (response.code != 200) {
        // reportError(response);
        if (response.code == 406 || response.code == 408)
          show('signIn-div-error2');
        // reportError(response);
        console.log("ERROR code apart from 406 and 408");
        return;
      }
      hide('signIn-div');
      show('loginWithOtp');
      hide('loginWithOtp-error');

    });
  }
}


function checkUserExists(identifier) {
  jsso.checkUserExists(identifier, function(response) {
    if (response.data.statusCode == 213 || response.data.statusCode == 212) {
      hide('signIn-div-error2');
      if(response.data.shareDataAllowed == null || response.data.shareDataAllowed == "0" || response.data.termsAccepted == null || response.data.termsAccepted == "0" ) {
        show('sso-permissions-div');
        loginWithPermissionsFlag=5;
      }
      return;
    } else {
        show('signIn-div-error2');
      return;
    }

  });
}

function verifySignIn() {
    if (loginWithPermissionsFlag == 5) {
            verifyLoginWithPermissions();
    } else {
            verifyLogin();

    }
}

function verifyLogin() {
  var identifier = document.getElementById("login_identifier").value;
  var password = document.getElementById("password_input_login").value;

  if (jsso.isValidEmail(identifier)) {
    jsso.verifyEmailLogin(identifier, password, function(response) {
      if (response.code != 200) {
        // show("signIn-div-error");
        // reportError(response);
        if (response.code == 405 || response.code == 407)
          show('signIn-div-error2');
        // reportError(response);
        console.log("ERROR code apart from 405 and 407");
        return;
      }
      successfulLoginRedirect(response.data);

    });
  } else if (jsso.isValidMobile(identifier)) {
    jsso.verifyMobileLogin(identifier, password, function(response) {
      if (response.code != 200) {
        // show("signIn-div-error");
        // reportError(response);
        if (response.code == 406 || response.code == 408)
          show('signIn-div-error2');
        // reportError(response);
        console.log("ERROR code apart from 406 and 408");
        return;
      }

      successfulLoginRedirect(response.data);

    });
  }
}

function verifyLoginWithPermissions() {
  var identifier = document.getElementById("login_identifier").value;
  var password = document.getElementById("password_input_login").value;
  var shareDataAllowed = document.getElementById("shareDataAllowed-login").checked;
  var myTimes = document.getElementById("myTimesPolicy-login").checked;
  var agePrivacy = document.getElementById("agePrivacy-login").checked;
  console.log("agePrivacy or not: " + agePrivacy);
  if (!agePrivacy) {
      show('tNc-login-error');
      return;
  } else {
      agePrivacy = '1';
      hide('tNc-login-error');
      if (!shareDataAllowed) {
          show('dataSharing-login-error');
          return;
        } else {
          shareDataAllowed = '1';
          hide('dataSharing-login-error');

          if (myTimes)
              myTimes='1';
          else
              myTimes='0';
          if (jsso.isValidEmail(identifier)) {
            jsso.verifyEmailLoginGdpr(identifier, password, agePrivacy, shareDataAllowed, myTimes, function(response) {
              if (response.code != 200) {
                // show("signIn-div-error");
                // reportError(response);
                if (response.code == 405 || response.code == 407)
                  show('signIn-div-error2');
                // reportError(response);
                console.log("ERROR code apart from 405 and 407");
                return;
              }
              successfulLoginRedirect(response.data);

            });
          } else if (jsso.isValidMobile(identifier)) {
            jsso.verifyMobileLoginGdpr(identifier, password, agePrivacy, shareDataAllowed, myTimes, function(response) {
              if (response.code != 200) {
                // show("signIn-div-error");
                // reportError(response);
                if (response.code == 406 || response.code == 408)
                  show('signIn-div-error2');
                // reportError(response);
                console.log("ERROR code apart from 406 and 408");
                return;
              }

              successfulLoginRedirect(response.data);

            });
          }
        }
    }
}

function registerUser() {
  console.log("RegisterUser is called");
  var shareDataAllowed = document.getElementById("shareDataAllowed").checked;
  var myTimes = document.getElementById("myTimesPolicy").checked;
  var agePrivacy = document.getElementById("agePrivacy").checked;
  console.log("agePrivacy or not: " + agePrivacy);
  if (!agePrivacy) {
    show('tNc-error');
    return;
  } else {
    agePrivacy = '1';
    if (!shareDataAllowed) {
        show('dataSharing-error');
        return;
      } else {
        shareDataAllowed = '1';
        if (myTimes)
            myTimes='1';
        else
            myTimes='0';
        var gender = "";
        var dob = "";
        var firstName = document.getElementById("firstName").value;
        var lastName = document.getElementById("lastName").value;
        // var gender = document.getElementById("gender").value;
        var password = document.getElementById("passwordSignUpConf").value;
        email = document.getElementById("emailID").value;
        mobile = document.getElementById("mobileNo").value;
        console.log("Password set is: " + password + " Email set is: " + email + " Mobile set is: " + mobile);

        jsso.registerUser(firstName, lastName, gender, dob, email, mobile, password, false , agePrivacy, shareDataAllowed, myTimes, function(response) {

          if (response.code != 200) {
            console.log("not 200");
            show('signUp-div-error');
            console.log(response.code + ": " + response.message);
            // reportError(response);
            return;
          }
          registerUserSsoid = response.data.ssoid;
          console.log("SSOId given...");

          hide('signUp-div');
//          show('loginWithOtp');
           show('registerOtp-div');

        });
      }
    }
}


function verifyRegisterUser() {
  // var identifier = document.getElementById("identifier").value;
  var otp = document.getElementById("otpRegister").value;
  console.log("Verify user details:" + mobile);
  console.log("Verify user details:" + otp);

  if (jsso.isValidEmail(mobile)) {
    jsso.verifyEmailSignUp(mobile, registerUserSsoid, otp, function(response) {
      if (response.code != 200) {
        show("registerOtp-div-error");
        // reportError(response);
        return;
      }
            successfulLoginRedirect(response.data);

      hide('registerOtp-div');
      show('allSignInOptions-div');
    });
  } else if (jsso.isValidMobile(mobile)) {
    jsso.verifyMobileSignUp(mobile, registerUserSsoid, otp, function(response) {
      if (response.code != 200) {
        show("registerOtp-div-error");
        // reportError(response);
        return;
      }
            successfulLoginRedirect(response.data);

      hide('registerOtp-div');
      show('allSignInOptions-div');
    });
  }
}


function resendRegisterUserOtp() {
  var identifier = document.getElementById("identifier").value;

  if (jsso.isValidEmail(identifier)) {
    jsso.resendEmailSignUpOtp(identifier, registerUserSsoid, function(response) {
      if (response.code != 200) {
        reportError(response);
        return;
      }

    });
  } else if (jsso.isValidMobile(identifier)) {
    jsso.resendMobileSignUpOtp(identifier, registerUserSsoid, function(response) {
      if (response.code != 200) {
        reportError(response);
        return;
      }

    });
  }
}

function setNewPassword() {
  identifier = document.getElementById("login_identifier").value;
  console.log("identifier is: " + identifier);
  if (isValidEmailMobile(identifier)) {
    // hide('signIn-div');
    // show('setPassword-div');
    getForgotPasswordOtp(identifier);
  } else {
    show('emailMobile-error');
  }
}



function getForgotPasswordOtp(identifier) {
  // var identifier = document.getElementById("identifier").value;

  if (jsso.isValidEmail(identifier)) {
    jsso.getEmailForgotPasswordOtp(identifier, function(response) {
      if (response.code != 200) {
        if (response.code == 405 || response.code == 407)
          show('signIn-div-error2');
        // reportError(response);
        console.log("ERROR code apart from 405 and 407");
        return;
      }
      hide('signIn-div');
      show('setPassword-div');
    });
  } else if (jsso.isValidMobile(identifier)) {
    jsso.getMobileForgotPasswordOtp(identifier, function(response) {
      if (response.code != 200) {
        if (response.code == 406 || response.code == 408)
          show('signIn-div-error2');
        // reportError(response);
        console.log("ERROR code apart from 406 and 408");
        return;
      }
      hide('signIn-div');
      show('setPassword-div');
    });
  } else {
    console.log("Please enter valid email/mobile")
  }
}


function loginForgotPassword() {
  // var identifier = document.getElementById("identifier").value;
  console.log("identifier is: " + identifier);
  var otp = document.getElementById("otpSetPwd").value;
  var password = document.getElementById("passwordForgot").value;
  var confirmPassword = document.getElementById("passwordForgotConf").value;

  if (jsso.isValidEmail(identifier)) {
    jsso.loginEmailForgotPassword(identifier, otp, password, confirmPassword, function(response) {
      if (response.code != 200) {
        show('setPassword-all-error');
        // reportError(response);
        return;
      }
      successfulLoginRedirect(response.data);

    });
  } else if (jsso.isValidMobile(identifier)) {
    jsso.loginMobileForgotPassword(identifier, otp, password, confirmPassword, function(response) {
      if (response.code != 200) {
        show('setPassword-all-error');
        // reportError(response);
        return;
      }
      successfulLoginRedirect(response.data);

    });
  } else {
    console.log("Please enter valid Email or Mobile.");
  }
}


function initiateFacebookLogin() {
  window.location = fbInitiateUri + '&state=' + JSON.stringify(channelData);
}


function initiateGoogleplusLogin() {
  window.location = gpInitiateUri + '&state=' + JSON.stringify(channelData);
}


function reinitiateFacebookLogin() {
  window.location = fbReinitiateUri + '&state=' + JSON.stringify(channelData);
}


function facebookLogin() {
  jsso.facebookLogin(tempSocialCode, fbRedirectUri, function(response) {
    if (response.code == 4413) {
      hide("waitState");
      show("retryState");
    } else if (response.code != 200) {
      hide("waitState");
      show("oauthErrorState");
    } else {
      successfulLoginRedirect(response.data);
    }
  });
}


function googleplusLogin() {
  jsso.googleplusLogin(tempSocialCode, gpRedirectUri, function(response) {
    if (response.code != 200) {
      hide("waitState");
      show("oauthErrorState");
    } else {
      successfulLoginRedirect(response.data);
    }
  });
}

function checkValidIdentifier(identifier) {

  isValidEmailMobile(identifier);
  checkUserExists(identifier);
}

function isValidEmailMobile(identifier) {

  if (jsso.isValidEmail(identifier)) {
    hide('emailMobile-error');
    console.log(identifier + ": Email is valid.");
    return true;
  } else if (jsso.isValidMobile(identifier)) {
    hide('emailMobile-error');
    console.log(identifier + ": Mobile is valid.");
    return true;
  } else {
    show('emailMobile-error');
    console.log(identifier + ": Email or Mobile is inValid.");
    return false;
  }
}

function isValidEmail(identifier) {

  if (jsso.isValidEmail(identifier)) {
    hide('emailReg-error');
    console.log(identifier + ": Email is valid.");
    return true;
  } else {
    show('emailReg-error');
    console.log(identifier + ": Email is inValid.");
    return false;
  }
}

function isValidMobile(identifier) {

  if (jsso.isValidMobile(identifier)) {
    hide('mobileReg-error');
    console.log(identifier + ": Mobile is valid.");
    return true;
  } else {
    show('mobileReg-error');
    console.log(identifier + ": Mobile is inValid.");
    return false;
  }
}

// function isValidEmail(email) {
//   // var email = document.getElementById('emailID').value;
//   console.log("EMAIL is: " + email);
//   var docs = document.getElementsByClassName('emailErrors');
//
//   if (jsso.isValidEmail(email)) {
//     var len = document.getElementsByClassName('emailErrors').length;
//     console.log("length is: " + len);
//     docs[0].innerHTML = "";
//     // document.getElementsByClassName('emailErrors').innerHTML = "";
//   } else {
//     // docs.innerHTML = {"Please enter Valid Email ID"};
//     // docs.every(printErrorMsg("Please enter Valid Email ID"));
//     // document.getElementsByClassName('emailErrors').innerHTML = "Please enter Valid Email ID";
//   }
// }
//
// function isValidMobile(mobile) {
//   // var mobile = document.getElementById('mobileNo').value;
//   console.log("PHONE is: " + mobile);
//   if (jsso.isValidMobile(mobile)) {
//     document.getElementById('mobileError').innerHTML = "";
//   } else {
//     document.getElementById('mobileError').innerHTML = "Please enter Valid Mobile no.";
//   }
// }


function logout() {
  jsso.signOutUser(function(response) {
    if (response.code != 200) {
      reportError(response);
      return;
    }
    window.location.href = "./index.html";

  });
}


function getDataForChannel() {
  jsso.getChannelDetails(channel, ru, function(response) {
    if (response.code != 200) {
      window.location.href = "./index.html?channel=nbt";
      return;
    }
    channelData = response.data;
    //document.getElementById("channelRu").value = channelData.ru;
    document.getElementById("channelName").innerHTML = channelData.name;
    //document.getElementById("channelLogo").style.background = "url('" + channelData.logo + "') no-repeat";
    document.getElementById("channelLogo").src = channelData.logo;
    ru = channelData.ru;
  });
}


function successfulLoginRedirect(loginData) {
  if (!ru)
    ru = baseUrl + "index.html";

  var ruUrl = new URL(ru);
  ruUrl.searchParams.append('tempCode', loginData.tksec);
  window.location.href = ruUrl.href;
}


function checkIfUserLoggedIn() {
  jsso.getUserProfile(function(response) {
    if (response.code == 200) {
      loggedInUserProfile = response.data;
      $("#loggedInUserName").text("Continue as " + loggedInUserProfile.firstName);
      show('loggedInUser');
      show('switchUser');
    }
    else {
      showAllSignInOptions();
    }
  });
}


function continueLoggedInUser() {
  jsso.getValidLoggedInUser(function(response) {
    if (response.code != 200) {
      switchUser();
    }
    else {
      successfulLoginRedirect(response.data);
    }
  });
}


function switchUser() {
  jsso.signOutUser(function(response) {
    hide('loggedInUser');
    hide('switchUser');
    showAllSignInOptions();
  });
}

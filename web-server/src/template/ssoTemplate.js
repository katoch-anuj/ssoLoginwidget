function LoginType(configParam){
    return `
    <div>
        ${configParam.LoginType.map((config)=>`
            ${config.name && (config.name.toLowerCase() =="facebook" || config.name.toLowerCase() =="google" || config.name.toLowerCase() =="truecaller" ||  config.name.toLowerCase() =="linkedin") ?
                `<input class="truecallerNo hide" type="tel" placeholder="enter mobile number"></input>
                    <button id="${config.name.toLowerCase()}-div" type="button" class="btn btn-${config.name.toLowerCase()}" >
                    <img class="ico-${config.name.toLowerCase()}" src=${config.logoUrl?config.logoUrl:"ok"} alt=${config.name} ></img><span>${config.label?config.label:"Continue with "+config.name}</span>
                    </button>
                `:
                `${config.nonSocialLogin && config.nonSocialLogin.loginVia.length==2?
                    `<div class="non-social-section">
                        <div class="emailAndMobile">
                            ${config.nonSocialLogin.loginVia[0].toLowerCase()=="email"?
                            ` <input id="emailAndMobile" class="input-data boldFont" autocomplete="off" type="text" name="emailAndMobile" placeholder="enter email or Mobile No" maxlength="100">`:

                            `<input id="emailAndMobile" class="input-data boldFont" autocomplete="off" type="text" name="emailAndMobile" placeholder="enter mobile no or email"  maxlength="100">`
                        }
                        </div>
                        <div class="pwd-section hide">
                            <input id="password" type="text" placeholder="Enter the otp" class="enter-otp"></input>
                            <span id="generateOtp">Resend OTP</span>
                        </div>
                        <div class="error inputError">     
                         </div>
                    </div>
                    <div>
                        <button type="button" class=" continueLoginBtn continueBtn btn boldFont"  value="CONTINUE"  disabled>Continue</button>
                    </div>`:
                    `${config.nonSocialLogin && config.nonSocialLogin.loginVia[0].toLowerCase()=="email"?
                        `<div class="non-social-section">
                            <div class="emailOnly">
                                <input id="emailOnly" class="input-data boldFont" autocomplete="off" type="text" name="emailOnly" placeholder="enter email " maxlength="100">
                            </div>
                            <div class="pwd-section hide">
                                <input id="password" type="text" placeholder="Enter the otp" class="enter-otp"></input>
                                <span id="generateOtp">Resend OTP</span>
                            </div>
                        </div>
                        <div class="error inputError">     
                        </div>
                        <div>
                            <button type="button" class=" continueLoginBtn continueBtn btn boldFont"  value="CONTINUE"  disabled>Continue</button>
                        </div>`:
                        `${config.nonSocialLogin && config.nonSocialLogin.loginVia[0].toLowerCase()=="mobile"?
                            `<div class="non-social-section">
                                <div class="mobileOnly">
                                    <input id="mobileOnly" class="input-data boldFont" autocomplete="off" type="number" name="mobileOnly" placeholder="enter  Mobile No " maxlength="100">
                                </div>
                                <div class="pwd-section hide">
                                    <input id="password" type="text" placeholder="Enter the otp" class="enter-otp"></input>
                                    <span id="generateOtp">Resend OTP</span>
                                </div>
                            </div>
                            <div class="error inputError">     
                            </div>
                            <div>
                                <button type="button" class=" continueLoginBtn continueBtn btn boldFont"  value="CONTINUE"  disabled>Continue</button>
                            </div>`:""
                        }`
                    }`
                }`
            }
        `).join("")}
    </div>
    `
}

function signinWithOtp(configParam){
    return `
        <div class="hide sign-with-otp">
            <div class="boldFont resetHeading sign-in-Heading">Sign in with OTP </div>
            <div class="otpFormBody show">
                <div class="dflex user-section">
                    <div class="user-login-Detail">
                        <div class="medFont">OTP has been sent to</div>
                        <div class="medFont user-otp-info"></div>
                    </div>
                    <div class="link changeInputInOtp changelink medFont">Change</div>
                </div>

                <div class="custom-input dflex">
                    <div class="input">
                    <input class="reset-input otpPreference pwd-otp boldFont otpText" type="password" placeholder="Enter OTP"/></div>
                    <span class="link  normal-resent resend-otp-link medFont">Resend OTP</span>
                </div>
                ${siginbtn("Or Sign in with Password","otpSubmit","switchToPwd",configParam)}
            </div>
        </div>`


}
function pwdAndConfirmPwd(signup){
    return `   
        <div class=" passwordSection ${signup?"":"confirmPwd hide"}">
            <div class="form-group textinput">
                <input id="passwordSignUp" required placeholder="Password" type="password" class="form-control ${signup?"signupPwd":""}  signupInfo passwordSignUp" />
                <!--<span toggle="#password-field" class="sprite field-icon toggle-password"></span> -->
                <label for="passwordSignUp"></label>
            </div>
            <div class="password-strength  hide">
                <li class="uncheck chk1">6-14 characters</li>
                <li class="uncheck chk2">1 Lower case character (a-z)</li>
                <li class="uncheck chk3">1 Numeric character (0-9)</li>
                <li class="uncheck chk4">1 special character (Such as #, $, %, &, !)</li>
            </div>
            <div class="form-group textinput">
            <input id="confirmPassword"  placeholder="confirm Passowrd" required type="password" class="signupInfo form-control" />
            <!--<span toggle="#password-field" class="sprite field-icon toggle-password"></span> -->
            <label for="confirmPassword"></label>
          </div>
        <div class="${signup?"hide":""}">
            <button id="submitResetPwd" disabled class="btn submitResetPwd continueBtn ">Continue</button>
        </div>

      </div>`
        
}
function siginbtn(text,btnClass,className,configParam){
    return`
        <div class="sign-in-btn">
            <button disabled class="btn submitInfo ${btnClass} continueBtn "> Continue</button>
            ${configParam.nonSocialLogin.loginCredentials.length>1?
                `<div class="link signText ${className}">${text}</div>`:""
            }
            
        </div>`
    
}
function signinWithPassword(configParam){
    return `
         <div class="hide sign-with-pwd">
            <div class="boldFont sign-in-Heading">Sign in with password </div>
            <div class="pwdFormBody show">
                <div class="dflex user-section">
                    <div class="user-login-Detail">
                        <div class="medFont user-pwd-info"></div>
                    </div>
                    <div class="link  changeInputInPwd changelink medFont">Change</div>
                </div>

                <div class="custom-input dflex">
                    <div class="input">
                    <input class="reset-input pwdPrefernce pwd-otp boldFont otpText" type="password" placeholder="Enter Password"/></div>
                    <span class="link forget-password-link medFont">Forgot Password</span>
                </div>
                ${siginbtn("Or Sign in with OTP","pwdSubmit","switchToOtp",configParam)}
            </div>
        </div>`

}
function changeLoginVia(){
    return`<div class="hide switch-login">
         <div class="custom-input dflex">
                <div class="input">
                <input class="reset-input change-input boldFont" type="text" placeholder="Enter email or mobile number"/></div>
            </div>
            <div>
            <button id="signInBtn" disabled class="btn signInBtn continueBtn ">Sign In</button>
            </div>
        </div>`
}
// function changeLoginViaPwd(){
//     return`<div class="hide switch-login">
//         <div id="login-type" class="boldFont switch-heading sign-in-Heading"></div>
//          <div class="custom-input dflex">
//                 <div class="input">
//                 <input class="reset-input change-input boldFont" type="text" placeholder="Enter email or mobile number"/></div>
//             </div>
//             <div>
//             <button id="signInBtn" disabled class="btn signInBtn continueBtn ">Sign In</button>
//             </div>
//         </div>`
// }
// function submitOtp(){
//     return `<div class="forgetPwd hide">
//         <div id="login-type" class="boldFont  sign-in-Heading">Forgot Password</div>
//             <div class="dflex user-section">
//                 <div class="user-login-Detail">
//                     <div class="medFont">OTP has been sent to</div>
//                     <div class="medFont user-otp-info"></div>
//                 </div>
//                 <div class="link changeLinkInSubmit changelink medFont">Change</div>
//             </div>

//             <div class="custom-input dflex">
//                 <div class="input">
//                 <input class="reset-input boldFont otpText" type="password" placeholder="Enter OTP"/></div>
//                 <span class="link resend-otp-link medFont">Resend OTP</span>
//             </div>
//             <div>
//                 <button  disabled class="boldFont btn submitInfo continueBtn">Continue</button>
//             </div>
//         </div>`
// }

function forgotPassword(configParam){
    return `<div class="forgot-password hide">
        <div class="boldFont forgot-pwd-heading">Forgot Password</div>
            
                <div class="slectOtpGenPt hide">
                    <div>
                        <div class="txt medFont">We will send you a reset OTP on your registered E-mail ID or Mobile Number</div>
                        <div class=" circle radio-uncheck medFont select-mobile"></div>
                        <div class="circle radio-uncheck medFont select-email"></div>
                    </div>
                     <div>
                        <button  class="boldFont btn forgetContinue continueBtn">Continue</button>
                    </div>
                </div>

                <div class="direct-otp hide">

                    <div class="dflex user-section">
                        <div class="user-login-Detail">
                            <div class="medFont">OTP has been sent to</div>
                            <div class="medFont user-otp-info"></div>
                        </div>
                        <div class="link changeInputInOtp changelink medFont">Change</div>
                    </div>

                    <div class="custom-input dflex">
                        <div class="input">
                            <input class="reset-input boldFont otpText" type="password" placeholder="Enter OTP"/>
                        </div>
                            <span class="link forgot-resent resend-otp-link medFont">Resend OTP</span>
                    </div>
                    <div>
                <button  class="boldFont btn resetPwd continueBtn">Continue</button>
            </div>
                </div>
            
            
    </div>`
}
function registerconfirmation(){
    return`<div class="registerConfirmation hide">
            <div class="">
            <div class="boldFont resetHeading sign-in-Heading">Verify your mail </div>
            <div class="otpFormBody show">
                <div class="dflex user-section">
                    <div class="user-login-Detail">
                        <div class="medFont">OTP has been sent to</div>
                        <div class="medFont user-otp-info"></div>
                    </div>
                    <div class="link changeInputInOtp changelink medFont">Change</div>
                </div>

                <div class="custom-input dflex">
                    <div class="input">
                    <input class="reset-input otpPreference pwd-otp boldFont otpText" type="password" placeholder="Enter OTP"/></div>
                    <span class="link  register-resent resend-otp-link medFont">Resend OTP</span>
                </div>
                <div>
                <button  class="boldFont btn verifyUserInput continueBtn">Verify</button>
                </div>
            </div>
        </div>
    </div>`
}
function signupform(configParam){
    return `
            <div id="signUp-div" class="mediumPanel hide clearfix" >
                      <form class="tlogins sign-in-form ">
                <fieldset>
                  <div class="sign-up-wrapper help">Sign up</div>
                  <div class="newUser-error hide">
                    <div class="error  medFont">You are not register with TimesPoints.</div>
                    
                    <div id="emailReg-error" class="error"> Please enter valid Email</div>
                  </div>
                 
                  <!-- <div id="emailErrorSignIn" class="emailErrors"> </div> -->
                  <!-- <div id="emailError" class="errorMessages clearfix"></div> -->
                  ${configParam.signupForm.FirstName?
                    `<div class="form-group textinput">
                      <input type="text" id="firstName" placeholder="First Name" class="form-control" />
                      <label for="firstName"></label>
                    </div>`:""
                  }
                   ${configParam.signupForm.LastName ?
                  `<div class="form-group textinput">
                    <input type="text" id="lastName" placeholder="Last Name" class="form-control" />
                    <label for="lastName"></label>
                  </div>`:""
                  } 
                   ${configParam.signupForm.Email?
                    `<div class="form-group textinput">
                      <input ${configParam.signupForm.Mandatory.indexOf("email")>-1?"required":""} type="text" placeholder="Email" id="emailID" class="form-control signupInfo" />
                      <label for="firstName"></label>
                    </div>`:""
                  }
                   ${configParam.signupForm.MobileNumber?
                    `<div class="form-group textinput">
                      <input ${configParam.signupForm.Mandatory.indexOf("mobile")>-1?"required":""} type="text" placeholder="Mobile No." id="mobileNumber" class="form-control signupInfo" />
                      <label for="mobileNumber"></label>
                    </div>`:""
                  }
                 
                  
                  ${configParam.signupForm.Password ?
                  `
                    ${pwdAndConfirmPwd("signup")}
              `:""
                  }
                  <div class="form-group hide mobile-no textinput">
                    <!-- <div class="col-md-1" style="width: 50px; margin-right: 20px">
                      <input type="text" id="std" class="form-control" value="+91" disabled />
                    </div> -->
                    <div class="form-group textinput" >
                      <input type="number" id="mobileNo" class="form-control"/>
                      <label for="mobileNo">Mobile Number</label>
                    </div>
                    <div id="mobileReg-error" class="errorMsgs" style="display: none;"> Please enter valid Mobile</div>

                  </div>
                  <div id="mobileError" class="mobileErrors"></div>
                  
                  <div class="form-group">
                    <div class="g-recaptcha" data-sitekey="6LfzjVEUAAAAAFrGrUQnzmaty9snHSijupcBFIrv"></div>
                  </div>
                      <div class="checkbox form-group">
                        <label>
                          <input type="checkbox" id="agePrivacy" value='1'>
                          <!--<span class="ptop2"><font color="FF0000">*</font> I agree with the <a href="https://www.indiatimes.com/termsandcondition/" target="_blank">Terms & Conditions</a> and <a href="https://www.indiatimes.com/privacypolicy/" target="_blank">Privacy Policy</a> of Times of India </span> </label>-->
                          <span class="ptop2"><font color="FF0000">*</font> I warrant that I am 18 years old and read, understood and agree with
    the <a href=${configParam.termsConditionLink} target="_blank">Terms & Conditions</a> and <a href=${configParam.privacyPolicyLink}target="_blank">Privacy Policy</a> of Times Internet Login
    Policy </span> </label>
                      </div>
                      <div id="tNc-error" class="errorMsgs" style="display: none;"> Please accept Terms & Conditions to proceed. </div>
                      <div class="checkbox form-group">
                        <label>
                          <input type="checkbox" id="shareDataAllowed" value="1">
                          <!--<span>Send me offers and promotions</span> </label>-->
                            <span class="ptop2"><font color="FF0000">*</font>I agree to the use of my login credential information across all Times
    Internet Properties</span> </label>

                      </div>
                        <div id="dataSharing-error" class="errorMsgs" style="display: none;"> Please agree to use credentials across all Times Intenet Properties. </div>

                        <div class="checkbox form-group">
                        <label>
                          <input type="checkbox" id="myTimesPolicy" value='false'>
                          <!--<span> Please show me personalized content and advertisements as per the <a href="https://www.indiatimes.com/privacypolicy/" target="_blank">Privacy Policy</a></span> </label>-->
                          <span> I agree to the processing of my information to earn TimesPoints
    across Times Internet Properties</span> </label>

                      </div>

                  <div class="form-group">
                    <button type="button" id="registerbtn"  class="btn btn-register sign-up continueBtn"><span style="float:inherit; padding:0px;">Sign In</span></button>
                  </div>
                </fieldset>
              </form>
             </div> 
    `
}


export function createHTMLTemplate(configParam){
	var temp;
	return temp= `
	<section class="loginpage">
        <div class="container" style="margin-bottom: 170px" id="nonLoggedInUser">
            <div class="row">
                <div class="mainWrapper clearfix">
                    <div class="leftsection">
                        <a href="#" class="logobrand">
                        <img id="channelLogo" src=${configParam.channelLogo}></a>
                        <div class="loginForm show">
                            <div class=""> 
                                <p>${configParam.subTitle}</p>
                            </div>
                            <div class="boldFont sign-in-text">Sign In</div>
                            <div class="mediumPanel  show clearfix">
                                <button id="loggedInUser" type="button" class="btn btn-google" style="display: none;">
                                    <span style="text-align:center; width:100%; padding:0px;" id="loggedInUserName">Continue ol as</span>
                                </button>
                                ${LoginType(configParam)}  
                            </div>
                            <div class="initSignup medFont">
                                <span>Don’t have any account?</span>
                                <span id="signUpLink" class="link sign-up-link"> Create one.</span>
                            </div>
                            <div class="boldFont txtcenter">TIMES LOGIN</div>

                        </div>
                        ${signinWithOtp(configParam)}
                        ${signinWithPassword(configParam)} 
                       
                       
                        ${forgotPassword(configParam)}
                        ${pwdAndConfirmPwd()}
                        ${signupform(configParam)}
                        ${registerconfirmation()}
                    </div>
                    <div class="footer-img"></div>
                        
                    

                

                
            <button id="emailMobile-div" type="button" class="btn btn-email" style="display: none;">
              <span class="sprite ico-email"></span><span>Continue with email or phone no</span>
            </button>
            <div id="signUpcvc-div" class="mediumPanel hide clearfix" >
              <div id="signUp-div-error" class="errorMsgs" style="display: none;"> You are registered already!</div>

                <div class="form-group" id="allSignInOptions-div">
            <a id="showAllSignIn"  class="otherOption font-13">
              <span class="arrow"></span> <span>All SignIn Options</span></a>
          </div>
            </div>


             <div id="registerOtp-div" style="display:none;">
              <div id="registerOtp-div-error" class="errorMsgs" style="display: none;"> Please enter valid OTP </div>
              <div class="form-group textinput">
                Enter 6 digit verification code:<br>
                <input type="text" id="otpRegister" name="otp">
                <br>
              </div>

              <div class="form-group textinput">
                <a id="resendRegisterUserOtp" class="pull-left">resend</a>
                <a href="#" class="pull-right">Change Email ID</a>
              </div>

              <div class="form-group m10">
                <button type="button" id="verifyRegisterUser" class="btn btn-register">VERIFY</button>
              </div>

            </div>


            <div id="loginWithOtp" style="display:none;">

              <div class="form-group textinput">
                Enter 6 digit verification code:<br>
                <input type="text" id="otpLogin" name="otp">
                <br>
              </div>
              <div id="loginWithOtp-error" class="errorMsgs" style="display: none;"> Please enter valid OTP </div>

              <div class="form-group textinput">
                <a class="loginWithOtpLink"  class="pull-left">resend</a>
                <!-- <a href="#" class="pull-right">Change Email ID</a> -->
              </div>

              <div class="form-group m10">
                <button type="button" class="btn btn-register" id="signInUsingOtp"><span style="float:inherit; padding:0px;">LOGIN</span></button>
              </div>

            </div>

            <div id="loginWithOtpOld" class="mediumPanel clearfix" style="display:none;">
              <form class="tlogins">
                <fieldset>
                  <div class="text-center bold m20">Enter OTP</div>
                  <div class="form-group phone-number clearfix">
                    <input type="password" name="phone" class="col-sm-2 form-control inputs" value="" size="1" maxlength="1" step="0.01" autofocus>
                    <input type="password" name="phone" class="col-sm-2 form-control inputs" value="" size="1" maxlength="1" step="0.01">
                    <input type="password" name="phone" class="col-sm-2 form-control inputs" value="" size="1" maxlength="1" step="0.01">
                    <input type="password" name="phone" class="col-sm-2 form-control inputs" value="" size="1" maxlength="1" step="0.01">
                    <input type="password" name="phone" class="col-sm-2 form-control inputs" value="" size="1" maxlength="1" step="0.01">
                    <input type="password" name="phone" class="col-sm-2 form-control inputs" value="" size="1" maxlength="1" step="0.01">
                  </div>
                  <!-- <div class="helpbtm font-12 text-center">Resend OTP in 27 seconds</div> -->
                  <div class="form-group m10">
                    <button type="button" class="btn btn-register" onclick="#"><span style="float:inherit; padding:0px;">Submit OTP</span></button>
                  </div>
                </fieldset>
              </form>
            </div>

            <div id="setPassword-div" style="display:none;">
              <div id="setPassword-otp-error" class="errorMsgs" style="display: none;"> Please enter correct OTP</div>
              <div id="setPassword-pwd-error" class="errorMsgs" style="display: none;"> Please enter matching password</div>
              <div id="setPassword-all-error" class="errorMsgs" style="display: none;"> Please enter correct OTP. Password should match and shall not be from last 3 passwords.</div>
              <div class="form-group textinput">
                Enter 6 digit verification code:<br>
                <input type="text" id="otpSetPwd" name="otp">
                <br>
              </div>

              <div class="form-group textinput">
                <input id="passwordForgot" type="password" class="form-control" />
                <span toggle="#passwordForgot" class="sprite field-icon toggle-password"></span>
                <label for="passwordForgot">Password</label>
              </div>
              <div class="form-group textinput">
                <input id="passwordForgotConf" type="password" class="form-control" />
                <!--<span toggle="#password-field" class="sprite field-icon toggle-password"></span> -->
                <label for="passwordForgotConf">Confirm Password</label>
              </div>
              <!-- <div class="form-group textinput">
                <a onclick="loginWithOtp()" class="pull-left">resend</a>
                <a href="#" class="pull-right">Change Email ID</a>
              </div> -->

              <div class="form-group m10">
                <button type="button" id="loginForgotPasswordbtn" class="btn btn-register">Sign In</button>
              </div>

            </div>

          </div>

          


        

          <div class="form-group" id="switchUser" style="display:none; margin-top:25px;">
            <a id="switchUserLink"  class="otherOption font-13">
              <span>Switch User</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  </section>
	`		
}












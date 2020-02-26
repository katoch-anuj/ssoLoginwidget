function LoginType(configParam){
    return `
    <div>
        <div class="socialLogin dflex ">
        ${configParam.LoginType.map((config)=>`
            
                <input class="truecallerNo hide" type="tel" placeholder="enter mobile number"></input>
                    <button id="${config.name.toLowerCase()}-div" type="button" class="btn mr10 btn-${config.name.toLowerCase()}" >
                    <img class="ico-${config.name.toLowerCase()}" src=${config.logoUrl?config.logoUrl:"ok"} alt=${config.name} ></img>
                    ${configParam.LoginType.length<=2 ?`<span>${config.label?config.label:config.name}</span>`:""}
                    </button>
             `).join("")} 
        </div>
        <div class="separator ovalsep">
            <span class="boldFont ">OR</span>
        </div>
            ${configParam.nonSocialLogin && configParam.nonSocialLogin.loginVia.length==2?
                    `<div class="non-social-section">
                        <div class="emailAndMobile">
                            ${configParam.nonSocialLogin.loginVia[0].toLowerCase()=="email"?
                            ` <input id="emailAndMobile" class="input-data boldFont" autocomplete="off" type="text" name="emailAndMobile" placeholder="enter email or Mobile No" maxlength="100">`:

                            `<input id="emailAndMobile" class="input-data boldFont" autocomplete="off" type="text" name="emailAndMobile" placeholder="enter mobile no or email"  maxlength="100">`
                        }
                        </div>
                        <div class="pwd-section hide">
                            <input id="password" type="text" placeholder="Enter the otp" class="enter-otp"></input>
                            <span id="generateOtp">Resend OTP</span>
                        </div>
                        
                        </div>
                    `:
                    `${configParam.nonSocialLogin && configParam.nonSocialLogin.loginVia[0].toLowerCase()=="email"?
                        `<div class="non-social-section">
                            <div class="emailOnly">
                                <input id="emailOnly" class="input-data boldFont" autocomplete="off" type="text" name="emailOnly" placeholder="enter email " maxlength="100">
                            </div>
                            <div class="pwd-section hide">
                                <input id="password" type="text" placeholder="Enter the otp" class="enter-otp"></input>
                                <span id="generateOtp">Resend OTP</span>
                            </div>
                        </div>
                        `:
                        `${configParam.nonSocialLogin && configParam.nonSocialLogin.loginVia[0].toLowerCase()=="mobile"?
                            `<div class="non-social-section">
                                <div class="mobileOnly">
                                    <input id="mobileOnly" class="input-data boldFont" autocomplete="off" type="number" name="mobileOnly" placeholder="enter  Mobile No " maxlength="100">
                                </div>
                                <div class="pwd-section hide">
                                    <input id="password" type="text" placeholder="Enter the otp" class="enter-otp"></input>
                                    <span id="generateOtp">Resend OTP</span>
                                </div>
                            </div>
                            `:""
                        }`
                    }`
                } 
            <div class="unRegistered-wrapper hide">
                <div class="notify-icon"></div>
                <div class="unRegistered"></div>
            </div>
                <div class="error inputError">     
                </div>
                <div>
                    <button type="button" class=" continueLoginBtn continueBtn btn boldFont"  value="CONTINUE"  disabled>Continue</button>
                </div>       
        
    </div>`
    
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
                    <div class="link  changelink medFont">Change</div>
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
        <div class=" passwordSection ${signup?"signupPwdSection":"nonSignupPwdSection"}">
            <div class="form-group textinput">
                <input id="passwordSignUp" required placeholder="Password" type="password" class="form-control ${signup?"signupPwd signupInfo":" nonSignupInfo nonSignupPwd "}" />
                
                <label for="passwordSignUp"></label>
            </div>
            <div class="password-strength  hide">
                <li class="uncheck chk1">6-14 characters</li>
                <li class="uncheck chk2">1 Lower case character (a-z)</li>
                <li class="uncheck chk3">1 Numeric character (0-9)</li>
                <li class="uncheck chk4">1 special character (Such as #, $, %, &, !)</li>
            </div>
            <div class="form-group textinput">
            <input id="confirmPassword"  placeholder="confirm Passowrd" required type="password" class="${signup?" signupConfirmPwd signupInfo":"nonSignupInfo nomSignupConfirmPwd "} confirmPassword form-control " />
            
            <label for="confirmPassword"></label>
          </div>
        

      </div>`
        
}
function siginbtn(text,btnClass,className,configParam){
    return`
        <div class="signInBtn-wrapper">
            <button disabled class="btn signInBtn ${btnClass} continueBtn "> Continue</button>
            ${configParam.nonSocialLogin.loginCredentials.length>1?
                `<div class="link signText ${className}">${text}</div>`:""
            }
            
        </div>`
    
}
function successLogin(){
    return`<div class="successPage hide">
        <div class="successIcon"></div>
        <div class="success-heading boldFont">Congratulation</div>
        <div class="medFont">You are now registered with TimesPoints</div>
    </div>`
}
function enterotp(){
    return `
        <div>
            <div class="dflex user-section">
                <div class="user-login-Detail">
                    <div class="medFont">OTP has been sent to</div>
                    <div class="medFont user-otp-info"></div>
                </div>
            </div>

            <div class="custom-input dflex">
                <div class="input">
                <input class="reset-input otpPreference pwd-otp boldFont otpText" type="password" placeholder="Enter OTP"/></div>
                <span class="link  normal-resent resend-otp-link medFont">Resend OTP</span>
            </div>
        </div>`
}

function verifyUser(configParam){
    return`
        <div class="verify-user hide">
            <div class="boldFont resetHeading verify-heading">Verify </div>
        ${configParam.signupForm.Mandatory.length>1?
           `<div>${enterotp()}</div>
           <div> ${enterotp()}</div>` :`<div>${enterotp()}</div>`
        }
        <button disabled class="btn verifyBtn  continueBtn "> Verify</button> 
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
                    <div class="link  changelink medFont">Change</div>
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

function passwordChangedsuccess(){
    return `<div class="password-changed hide">
        <div class="boldFont forgot-pwd-heading">Password Changed Successfully</div>
        <div>Your new password will be effective for TimesPoints and all other Times network sites.</div>
        <button   class="boldFont btn signIn  continueBtn">Sign In</button>
    </div>`
}

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
                        <button  class="boldFont btn forgetContinueBtn continueBtn">Continue</button>
                    </div>
                </div>

                <div class="direct-otp hide">

                    <div class="dflex user-section">
                        <div class="user-login-Detail">
                            <div class="medFont">OTP has been sent to</div>
                            <div class="medFont user-otp-info"></div>
                        </div>
                        <div class="link  changelink medFont">Change</div>
                    </div>

                    <div class="custom-input dflex">
                        <div class="input">
                            <input class="reset-input pwd-otp boldFont otpText" type="password" placeholder="Enter OTP"/>
                        </div>
                            <span class="link forgot-resent resend-otp-link medFont">Resend OTP</span>
                    </div>
                    <div>
                    ${pwdAndConfirmPwd()}
                <button  disabled class="boldFont btn submitResetPwd  continueBtn">Continue</button>
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
                      <input type="text" id="firstName" placeholder="First Name" class="form-control firstName" />
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
                      <input type="text" placeholder="Email" id="emailID" class="form-control ${configParam.signupForm.Mandatory.indexOf("email")>-1?"signupError":""}   signupEmail signupInfo" />
                      <label for="Email"></label>
                    </div>`:""
                  }
                   ${configParam.signupForm.MobileNumber?
                    `<div class="form-group textinput">
                      <input  type="text" placeholder="Mobile No." id="mobileNumber" class="form-control signupNumber ${configParam.signupForm.Mandatory.indexOf("mobile")>-1?"signupError":""} signupInfo" />
                      <label for="mobileNumber"></label>
                    </div>`:""
                  }
                 
                  
                  ${configParam.signupForm.Password ?
                  `
                    ${pwdAndConfirmPwd("signup")}
              `:""
                  }
                 <div class="form-group">
                    <div class="g-recaptcha" data-sitekey="6LfzjVEUAAAAAFrGrUQnzmaty9snHSijupcBFIrv"></div>
                  </div> 
                 <div class="terms termsCondition t-uncheck">
                     <span>I agree to the </span>
                     <span class="link">Term and conditions</span>
                 </div>
                 <div class="consent terms t-uncheck">
                     <span>I consnet to allow my data to be used to personalised ads </span>
                 </div>
                  <div class="form-group">
                    <button type="button" id="registerbtn"  disabled class="btn btn-register sign-up continueBtn">
                    <span style="float:inherit; padding:0px;">Sign In</span></button>
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
                        ${successLogin()}
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
                       
                       ${verifyUser(configParam)}
                        ${forgotPassword(configParam)}
                        
                        ${signupform(configParam)}
                        ${passwordChangedsuccess()}
                    </div>
                    <div class="footer-img"></div>
                        
                    

                

                
            <button id="emailMobile-div" type="button" class="btn btn-email" style="display: none;">
              <span class="sprite ico-email"></span><spanail or phone no</span>
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












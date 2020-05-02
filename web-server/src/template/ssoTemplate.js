function LoginType(configParam){
    return `
    <div>
        <div class="socialLogin dflex ">
        ${configParam.socialLogin.map((config)=>`
                    <button id="${config.type.toLowerCase()}-div" type="button" class="btn socialBtn mr18 btn-${config.type.toLowerCase()}" >
                    <div class="social-imageWrapper  ${configParam.socialLogin.length<=2?"border-right":"text-center"}"><img class="social-image ico-${config.type.toLowerCase()}" src=${config.logoUrl?config.logoUrl:"ok"} alt=${config.type} ></img></div>
                    ${configParam.socialLogin.length<=2 ?`<div class="social-text medFont">${config.label}</div>`:""}
                    </button>
             `).join("")} 
        </div>
        <div class="truecaller hide">
            <input id="truecaller" class="trueCallerInput boldFont" autocomplete="off" type="number"  placeholder="enter  Mobile No " maxlength="10">
        </div>
        ${configParam.socialLogin.length?
            `<div class="separator ovalsep">
            <span class="boldFont ">OR</span>
        </div>`:""
        }
        
            ${configParam.nonSocialLogin && configParam.nonSocialLogin.loginVia.length==2?
                    `<div class="non-social-section">
                        <div class="emailAndMobile posRelative">
                            ${configParam.nonSocialLogin.loginVia[0].toLowerCase()=="email"?
                            ` <input id="emailAndMobile" required class="input-data boldFont focusActive" autocomplete="off" type="text" name="emailAndMobile" maxlength="100"><label class="floating-label">Enter Email or Mobile No</label>`:

                            `<input id="emailAndMobile" class="input-data boldFont focusActive" autocomplete="off" type="text" name="emailAndMobile" maxlength="100"><label class="floating-label">Enter Mobile No or Email</label>`
                        }
                        </div>
                    </div>
                    `:
                    `${configParam.nonSocialLogin && configParam.nonSocialLogin.loginVia[0].toLowerCase()=="email"?
                        `<div class="non-social-section">
                            <div class="emailOnly posRelative">
                                <input id="emailOnly" required class="input-data boldFont" autocomplete="off" type="text" name="emailOnly"  maxlength="100">
                                <label class="floating-label">Enter email</label>
                            </div>
                        </div>
                        `:
                        `${configParam.nonSocialLogin && configParam.nonSocialLogin.loginVia[0].toLowerCase()=="mobile"?
                            `<div class="non-social-section">
                                <div class="mobileOnly posRelative">
                                    <input inputmode="tel" id="mobileOnly" required class="input-data boldFont" autocomplete="off" type="number" name="mobileOnly"  maxlength="10">
                                    <label class="floating-label">Enter Mobile No</label>
                                </div>
                            </div>
                            `:""
                        }`
                    }`
                } 
                <div class="error inputError"> </div>    
                <div class="unverified hide">
                    <div class="notify-icon"></div>
                    <div class="unverified-error"></div>
                </div>                
                <div>
                    <button type="button" class=" continueLoginBtn continueBtn btn boldFont"  value="CONTINUE"  disabled>Continue</button>
                </div>       
        
    </div>`
    
}
function signinWithPassword(configParam){
    return `
         <div class="hide sign-with-pwd">
            <div class="boldFont  modalTitle sign-in-Heading">Sign in with password </div>
            <div class="pwdFormBody ">
                <div class="dflex user-section">
                    <div class="user-login-Detail">
                        <div class="medFont user-pwd-info"></div>
                    </div>
                    <div class="link  changelink medFont">Change</div>
                </div>

                <div class="custom-input posRelative dflex">
                    <div class="input ">
                        <input required class="reset-input required pwdPrefernce pwd-otp boldFont otpText" type="password" />
                        <label class="floating-label">Enter Password</label>
                    </div>
                    <span class="link forget-password-link  medFont">Forgot Password?</span>
                    
                </div>
                <div class="error signIn-error"></div>
                ${siginbtn("Or Sign in with OTP","pwdSubmit","switchToOtpLink","Sign In",configParam)}
            </div>
        </div>`

}

function signinWithOtp(configParam){
    return `
        <div class="hide sign-with-otp">
            <div class="boldFont resetHeading modalTitle sign-in-Heading">Sign in with OTP </div>
            <div class="otpFormBody">
                ${enterotp(configParam,true,"otp")}
                ${siginbtn("Or Sign in with Password","otpSubmit","switchToPwdLink","Sign In",configParam)}
            </div>
        </div>`
}
function siginbtn(linktext,btnClass,className,btnText,configParam){
    return`
        <div class="signInBtn-wrapper">
            <button disabled class="btn signInBtn  ${btnClass} continueBtn "> ${btnText}</button>
            ${configParam.nonSocialLogin.loginWith.length>1?
                `<div class="link boldFont toggleSignIn ${className}">${linktext}</div>`:""
            }   
        </div>`  
}

function pwdAndConfirmPwd(signup){
    return `   
        <div class=" ${signup?"signupPwdSection sign-up-field":"nonSignupPwdSection"}">
            <div class="custom-input posRelative dflex textinput">
                <div class="input ">
                    <input required id="passwordSignUp" data-required="required"  required name="password"  type="password" class=" reset-input password-field ${signup?"signupPwd ":"  nonSignupPwd  "}" />
                    <label class="floating-label">Password</label>
                </div>
                <span class="eye-icon"></span>
            </div>
               ${!signup ?`<div class="info-icon"><div class="medFont passwordInfo">Can't match last 3 passwords.</div></div>`:""}  
            <div class="password-error error"></div>
            
            <div class="password-strength  hide">
                <li class="uncheck chk1">6-14 characters</li>
                <li class="uncheck chk2">1 Lower case character (a-z)</li>
                <li class="uncheck chk3">1 Numeric character (0-9)</li>
                <li class="uncheck chk4">1 special character (Such as #, $, %, &, !)</li>
            </div>
      </div>`
        
}
function successLogin(configParam){
    return`<div class="ssoSuccessPage hide">
        <div class="successIcon"></div>
        <div class="success-heading modalTitle boldFont">Congratulations</div>
        <div class="boldFont fontBlack">You are now registered with ${configParam.displayChannel} and your user id is:</div>
        <div class="boldFont success-subHeading"></div>
        <div>Your account is valid across all Times Internet network</div>
        <div class="channel-image">
            <img class="" src="${configParam.staticPath}/src/img/toi.png"></img>
            <img class="" src="${configParam.staticPath}/src/img/nbt.png"></img>
            <img class="" src="${configParam.staticPath}/src/img/et.png"></img>
            <img class="" src="${configParam.staticPath}/src/img/mt.png"></img>
            <img class="" src="${configParam.staticPath}/src/img/gaana.png"></img>
            <img class="" src="${configParam.staticPath}/src/img/indiatimes.png"></img>
            <img class="" src="${configParam.staticPath}/src/img/st.png"></img>
        </div>
        <button   class="boldFont btn successBtn  continueBtn">Continue</button>
    </div>`
}

function enterotp(configParam,changeLink,triggerPoint){
    return `
        <div class="dflex user-section">
            <div class="user-login-Detail">
                <div class="medFont otpVerifyTitle">${triggerPoint=="verify"?"Enter verification code sent to":"OTP has been sent to"}</div>
                <div class="boldFont user-otp-info"></div>
            </div>
            ${changeLink?`<div class="link  changelink medFont">Change</div>`:""}    
        </div>
        <div class="custom-input posRelative dflex">
            <div class="input ">
                <input inputmode="numeric" required  class="reset-input ${triggerPoint+"Input"}  pwd-otp boldFont otpText" type="text"/>
                <label class="floating-label">Enter OTP</label>
            </div>
            <span class="link hide  ${triggerPoint+"ResentLink"} resend-otp-link medFont">Resend OTP</span>
           <div class="timerWrapper show">
              <div class="pie spinner" style="animation: rota ${configParam.resendOtpTimer+"s"} linear infinite"></div>
              <div class="pie filler" style="animation: opa ${configParam.resendOtpTimer+"s"} steps(1, end) infinite reverse"></div>
              <div class="mask" style="animation: opa ${configParam.resendOtpTimer+"s"} steps(1, end) infinite"></div>
            </div>
            <span class="green-tick hide"></span>
        </div>
        <div class="error signIn-error"></div>`
}

function verifyUser(configParam){
    return`
        <div class="verify-user hide">
            <div class="boldFont resetHeading modalTitle verify-heading">Verify </div>
            ${(configParam.signupForm.MandatoryVerifyVia.length==2)?
                `<div class="show verifySection1 sectionToVerify" >${enterotp(configParam,false,"verify")}</div>
            <div class=" hide verifySection2 sectionToVerify"> ${enterotp(configParam,false,"verify")}</div>`
            :`<div class="show verifySection1 sectionToVerify">${enterotp(configParam,false,"verify")}</div>`
        }   
        <button disabled class="btn verifyBtn  continueBtn "> Verify</button> 
        </div>`
}



function passwordChangedsuccess(){
    return `<div class="password-changed modalTitle hide">
        <div class="boldFont forgot-pwd-heading">Password Changed Successfully</div>
        <div>Your new password will be effective for TimesPoints and all other Times network sites.</div>
        <button   class="boldFont btn signIn  continueBtn">Sign In</button>
    </div>`
}

function forgotPassword(configParam){
    return `
        <div class="forgot-password hide">
            <div class="boldFont modalTitle forgot-pwd-heading">Forgot Password</div>
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
                    ${enterotp(configParam,true,"forgot")}
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
                    <div class="sign-up-wrapper boldFont modalTitle">Sign up</div>
                    <div class="newUser-error hide">
                        <div class="error  medFont">You are not registered with TimesPoints.</div>
                        <div id="emailReg-error medFont" class="error"> Please sign up.</div>
                    </div>
                        ${Object.keys(configParam.signupForm.signUpFields).map((signup)=>
                        `<div class="form-group posRelative sign-up-field textinput">
                            <input required  type=${signup.toLowerCase()=="mobilenumber"?"tel":"text"} name=${signup.toLowerCase()} id=${signup} data-required=${configParam.signupForm.signUpFields[signup].required?"required":"optional"} class="form-control  ${signup.toLowerCase()}" />
                            <label class="floating-label" for=${signup}>${configParam.signupForm.signUpFields[signup].required?"*":""}${configParam.signupForm.signUpFields[signup].placeholder}</label>
                            <div class="error  ${signup.toLowerCase()}-error"></div>
                        </div>`
                        ).join("")}      
                        ${configParam.signupForm.signupVia[0]=="Password" ?
                            `${pwdAndConfirmPwd("signup")}`:""
                        }
                        ${configParam.signupForm.recaptcha ?
                            `<div class="form-group">
                            <div class="g-recaptcha" ${configParam.signupForm.recaptcha.required==true?"required":""}  data-sitekey="6LcXeh0TAAAAAO1DsEX1iEF8n8-E_hQB67bIpxIw"></div>
                            </div>`:""
                        }
                 
                 <div class="terms sign-up-field termsCondition ">
                    <div class=" checkTerms medFont ${configParam.defaultSelected?"t-check":"t-uncheck"}">
                     <span>I agree to the </span>
                     <a href=${configParam.termsConditionLink} target="_blank" class="link termsConditionLink">Terms and Conditions</a>
                     </div>
                     <div class="error termsError"></div>
                 </div>
                 <div>
                 <div class="consent sign-up-field terms ">
                    <div class=" checkTerms medFont ${configParam.defaultSelected?"t-check":"t-uncheck"}">
                         <span>I consent to allow my data to be 
                         <span>used to personalised ads </span>
                     </div>
                     <div class="error termsError"></div>
                 </div>
                 <div class="signup-error error"></div>
                  <div class="form-group">
                    <button type="button" id="registerbtn"   class="btn btn-register sign-up continueBtn">Sign Up</button>
                  </div>
                  
                </fieldset>
              </form>
             </div> 
    `
}


export function createHTMLTemplate(configParam){
	var temp;
	return temp= `
	<section class="ssoLoginWidget">
        <div class="ssoContainer"  id="nonLoggedInUser">
            <div class="row">
                <div class="ssoMainWrapper clearfix">
                ${configParam.closeIcon?
                    `<img class="cross-icon" src="${configParam.staticPath}/src/img/close-icon.png"/>`:""
                }
                    <div class="ssoLeftSection">
                        <div class="minht">
                            <a href="#" class="logobrand">
                            <img id="channelLogo" src=${configParam.channelLogo}></a>
                            ${successLogin(configParam)}
                            <div class="loginForm active show">
                                <div class=""> 
                                    <p>${configParam.subTitle}</p>
                                </div>
                                <div class="boldFont modalTitle sign-in-text">Sign In with</div>
                                <div class="mediumPanel  clearfix">
                                    ${LoginType(configParam)}  
                                </div>
                                <div class="initSignup medFont">
                                    <span>Don’t have an account?</span>
                                    <span id="signUpLink" class="link sign-up-link"> Create one.</span>
                                </div>
                            </div>
                            ${signinWithOtp(configParam)}
                            ${signinWithPassword(configParam)} 
                            ${verifyUser(configParam)}
                            ${forgotPassword(configParam)}
                            ${signupform(configParam)}
                            ${passwordChangedsuccess()}
                        </div>
                            <div class="footer-logo"><img src="${configParam.staticPath}/src/img/timeslogin.png" class="timesLoginLogo"></img></div>
                    </div>

                    <div class="show sso-footer-img">
                        ${configParam.isMobileView ?`<img src="${configParam.staticPath}/src/img/group-mob.png"></img>`
                            :`<img src="${configParam.staticPath}/src/img/bg-img.png"></img>`
                        }
                    </div>
                </div>
            </div>
        </div>
    </section>`			
}












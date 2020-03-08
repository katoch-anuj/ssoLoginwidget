function LoginType(configParam){
    return `
    <div>
        <div class="socialLogin dflex ">
        ${configParam.socialLogin.map((config)=>`
                    <button id="${config.type.toLowerCase()}-div" type="button" class="btn socialBtn mr20 btn-${config.type.toLowerCase()}" >
                    <div class="social-imageWrapper  ${configParam.socialLogin.length<=2?"border-right":"text-center"}"><img class="social-image ico-${config.type.toLowerCase()}" src=${config.logoUrl?config.logoUrl:"ok"} alt=${config.type} ></img></div>
                    ${configParam.socialLogin.length<=2 ?`<div class="social-text">${config.label}</div>`:""}
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
                        <div class="emailAndMobile">
                            ${configParam.nonSocialLogin.loginVia[0].toLowerCase()=="email"?
                            ` <input id="emailAndMobile" class="input-data boldFont" autocomplete="off" type="text" name="emailAndMobile" placeholder="enter email or Mobile No" maxlength="100">`:

                            `<input id="emailAndMobile" class="input-data boldFont" autocomplete="off" type="text" name="emailAndMobile" placeholder="enter mobile no or email"  maxlength="100">`
                        }
                        </div>
                    </div>
                    `:
                    `${configParam.nonSocialLogin && configParam.nonSocialLogin.loginVia[0].toLowerCase()=="email"?
                        `<div class="non-social-section">
                            <div class="emailOnly">
                                <input id="emailOnly" class="input-data boldFont" autocomplete="off" type="text" name="emailOnly" placeholder="enter email " maxlength="100">
                            </div>
                        </div>
                        `:
                        `${configParam.nonSocialLogin && configParam.nonSocialLogin.loginVia[0].toLowerCase()=="mobile"?
                            `<div class="non-social-section">
                                <div class="mobileOnly">
                                    <input id="mobileOnly" class="input-data boldFont" autocomplete="off" type="number" name="mobileOnly" placeholder="enter  Mobile No " maxlength="10">
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
            <div class="boldFont sign-in-Heading">Sign in with password </div>
            <div class="pwdFormBody ">
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
                <div class="error signIn-error"></div>
                ${siginbtn("Or Sign in with OTP","pwdSubmit","switchToOtpLink",configParam)}
            </div>
        </div>`

}

function signinWithOtp(configParam){
    return `
        <div class="hide sign-with-otp">
            <div class="boldFont resetHeading sign-in-Heading">Sign in with OTP </div>
            <div class="otpFormBody">
                ${enterotp(true,"otp")}
                ${siginbtn("Or Sign in with Password","otpSubmit","switchToPwdLink",configParam)}
            </div>
        </div>`
}
function siginbtn(text,btnClass,className,configParam){
    return`
        <div class="signInBtn-wrapper">
            <button disabled class="btn signInBtn ${btnClass} continueBtn "> Continue</button>
            ${configParam.nonSocialLogin.loginWith.length>1?
                `<div class="link toggleSignIn ${className}">${text}</div>`:""
            }   
        </div>`  
}

function pwdAndConfirmPwd(signup){
    return `   
        <div class=" ${signup?"signupPwdSection sign-up-field":"nonSignupPwdSection"}">
            <div class="form-group textinput">
                <input id="passwordSignUp" required name="password" placeholder="Password" type="password" class="form-control password-field ${signup?"signupPwd ":"  nonSignupPwd  "}" />
                <label for="passwordSignUp"></label>
            <div class="password-error error"></div>
            </div>
            <div class="password-strength  hide">
                <li class="uncheck chk1">6-14 characters</li>
                <li class="uncheck chk2">1 Lower case character (a-z)</li>
                <li class="uncheck chk3">1 Numeric character (0-9)</li>
                <li class="uncheck chk4">1 special character (Such as #, $, %, &, !)</li>
            </div>
      </div>`
        
}
function successLogin(){
    return`<div class="successPage hide">
        <div class="successIcon"></div>
        <div class="success-heading boldFont">Congratulation</div>
        <div class="medFont">You are now registered with TimesPoints</div>
        <div>Did You Know?</div>
        <div>Your account is valid across all Times Internet properties</div>
        <div class="channel-image">
            <img class="" src="./src/img/toi.png"></img>
            <img class="" src="./src/img/nbt.png"></img>
            <img class="" src="./src/img/et.png"></img>
            <img class="" src="./src/img/mt.png"></img>
            <img class="" src="./src/img/gaana.png"></img>
            <img class="" src="./src/img/indiatimes.png"></img>
            <img class="" src="./src/img/st.png"></img>
        </div>
        <button   class="boldFont btn successBtn  continueBtn">Continue</button>
    </div>`
}

function enterotp(changeLink,triggerPoint,validation,placeholder){
    return `
        <div class="dflex user-section">
            <div class="user-login-Detail">
                <div class="medFont">${triggerPoint=="verify"?"Enter verification code sent to":"OTP has been sent to"}</div>
                <div class="medFont user-otp-info"></div>
            </div>
            ${changeLink?`<div class="link  changelink medFont">Change</div>`:""}    
        </div>
        <div class="custom-input dflex">
            <div class="input">
            <input data-valid="${validation?validation:""}" class="reset-input ${triggerPoint+"Input"}  pwd-otp boldFont otpText" type="password" placeholder="${placeholder?placeholder:"Enter OTP"}"/></div>
            <span class="link show  ${triggerPoint+"ResentLink"} resend-otp-link medFont">Resend OTP</span>
            <span class="green-tick hide"></span>
        </div>
        <div class="error signIn-error"></div>`
}

function verifyUser(configParam){
    return`
        <div class="verify-user hide">
            <div class="boldFont resetHeading verify-heading">Verify </div>
            ${(configParam.signupForm.signUpFields["Email"] &&configParam.signupForm.signUpFields["MobileNumber"]) ?
           `<div class=" hide verifySection" >${enterotp(false,"verify",`${configParam.signupForm.MandatoryVerifyVia[0].toLowerCase()=="emailormobile"?"optional":"required"}`,"Enter OTP")}</div>
            <div class="mt25 hide verifySection "> ${enterotp(false,"verify",`${configParam.signupForm.MandatoryVerifyVia.length==2 ?"required":"optional"}`,`${configParam.signupForm.MandatoryVerifyVia.length==2 ||configParam.signupForm.MandatoryVerifyVia[0].toLowerCase()=="emailormobile"?"Enter OTP ":"enter OTP(optional)"}`)}</div>`
            :`<div class="hide verifySection">${enterotp(false,"verify","required")}</div>`
        }   
        <button disabled class="btn verifyBtn  continueBtn "> Verify</button> 
        <div class="skipLink hide">
            <span class="link skip">Skip</span>
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
    return `
        <div class="forgot-password hide">
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
                    ${enterotp(true,"forgot")}
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
                        <div id="emailReg-error" class="error"> Please sign up</div>
                    </div>
                        ${Object.keys(configParam.signupForm.signUpFields).map((signup)=>
                        `<div class="form-group sign-up-field textinput">
                        <input type="text" name=${signup.toLowerCase()} id=${signup} ${configParam.signupForm.signUpFields[signup].required?"required":""} placeholder="${configParam.signupForm.signUpFields[signup].placeholder}" class="form-control  ${signup.toLowerCase()}" />
                        <label for=${signup}></label>
                            <div class="error  ${signup.toLowerCase()}-error"></div>
                        </div>`
                        ).join("")}      
                        ${configParam.signupForm.signupVia[0]=="Password" ?
                            `${pwdAndConfirmPwd("signup")}`:""
                        }
                        ${configParam.signupForm.recaptcha ?
                            `<div class="form-group">
                            <div class="g-recaptcha" ${configParam.signupForm.recaptcha.required==true?"required":""}  data-sitekey="6LfzjVEUAAAAAFrGrUQnzmaty9snHSijupcBFIrv"></div>
                            </div>`:""
                        }
                 
                 <div class="terms sign-up-field termsCondition ">
                    <div class=" checkTerms ${configParam.defaultSelected?"t-check":"t-uncheck"}">
                     <span>I agree to the </span>
                     <span class="link">Term and conditions</span>
                     </div>
                     <div class="error termsError"></div>
                 </div>
                 <div>
                 <div class="consent sign-up-field terms ">
                    <div class=" checkTerms ${configParam.defaultSelected?"t-check":"t-uncheck"}">
                         <span>I consnet to allow my data to be 
                         <span>used to personalised ads </span>
                     </div>
                     <div class="error termsError"></div>
                 </div>
                 <div class="signup-error error"></div>
                  <div class="form-group">
                    <button type="button" id="registerbtn"   class="btn btn-register sign-up continueBtn">Sign In</button>
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
                    <img class="cross-icon" src="./src/img/close-icon.png"/>
                    <div class="ssoLeftSection">
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
                        </div>
                        ${signinWithOtp(configParam)}
                        ${signinWithPassword(configParam)} 
                        ${verifyUser(configParam)}
                        ${forgotPassword(configParam)}
                        ${signupform(configParam)}
                        ${passwordChangedsuccess()}
                        <img src="./src/img/timeslogin.png" class="timesLoginLogo"></img>
                    </div>

                    <div class="sso-footer-img">
                        ${configParam.isMobileView ?`<img src="./src/img/group-mob.png"></img>`
                            :`<img src="./src/img/bg-img.png"></img>`
                        }
                    </div>
                </div>
            </div>
        </div>
    </section>`			
}












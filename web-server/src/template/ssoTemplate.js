export function createHTMLTemplate(configParam){
	var temp;
	return temp= `
	 <section class="loginpage">
    <div class="container" style="margin-bottom: 170px" id="nonLoggedInUser">
      <div class="row">
        <div class="mainWrapper clearfix">
          <a href="#" class="logobrand">
          <img id="channelLogo" src=${configParam.channelLogo}></a>
          <div class="helpBlock center-block clearfix"> 
          <a href="#" class="logoTlogin">TLogin</a>
            <p>${configParam.subTitle}</p>
          </div>
          <div class="mediumPanel  show clearfix">
          <div class="loginForm show">
            <button id="loggedInUser" type="button" class="btn btn-google" style="display: none;">
              <span style="text-align:center; width:100%; padding:0px;" id="loggedInUserName">Continue ol as</span>
            </button>
            
	            ${configParam.LoginType.map((config)=>`
                ${config.name && (config.name.toLowerCase() =="facebook" || config.name.toLowerCase() =="google" || config.name.toLowerCase() =="trueCaller" ||  config.name.toLowerCase() =="linkedin") ?
                `
                <input class="truecallerNo hide" type="tel" placeholder="enter mobile number"></input>
                
                <button id="${config.name.toLowerCase()}-div" type="button" class="btn btn-${config.name.toLowerCase()}" >
                  <img class="ico-${config.name.toLowerCase()}" src=${config.logoUrl?config.logoUrl:"ok"} alt=${config.name} ></img><span>${config.label?config.label:"Continue with "+config.name}</span>
                </button>
              `:
               `${config.emailOnly ?`
                <div class="non-social-section">
                <div class="emailOnly ">
                  <input id="emailOnly" class="input-data" autocomplete="off" type="email" name="emailOnly" placeholder="Sign In/Sign Up with Email ">
                </div>
                <div class="pwd-section hide">
                  <input id="password"  class="hide" autocomplete="off" type="password" name="password" placeholder="Password " >
                <span class="forgot-password">Forgot Password<span>
                
                  
                </div>
                </div>
                 <div>
            <input type="button" class="btn-disable continueBtn"  value="CONTINUE"  disabled></input>
          </div>`:""
              }
              ${config.mobileOTP?`
                <div class="non-social-section">
                <div class="mobileOnly">
                <input id="mobileOnly" class="input-data" autocomplete="off" type="number" name="mobileOnly" placeholder="Sign In/Sign Up with Mobile " maxlength="100">
                </div>
                <div class="pwd-section hide">
                <input id="password" type="text" placeholder="Enter the otp" class="enter-otp"></input>
                  <span id="generateOtp">Resend OTP</span>
                </div>
                </div>
                 <div>
            <input type="button" class="btn-disable continueBtn"  value="CONTINUE"  disabled></input>
          </div>
                `:""
              }
              ${config.emailMobileOTP?`
                <div class="non-social-section">
                <div class="emailMobileOTP">
                  <input id="emailMobileOTP" class="input-data" autocomplete="off" type="text" name="emailMobileOTP" placeholder="Sign In/Sign Up with Email or Mobile No. " maxlength="100">
                </div>
                  <div class="pwd-section hide">
                    <input id="password"  autocomplete="off" type="password" name="password" placeholder="Password " >
                    <span id="generateOtp">Generate OTP to Login</span>
                    <span class="forgot-password">Forgot Password</span>
                  </div>
                  </div>
                   <div>
            <input type="button" class="btn-disable continueBtn"  value="CONTINUE"  disabled></input>
          </div>`
                  :""
              }
              ${config.emailMobileNoOTP?`
                <div class="non-social-section">
                <div class="emailMobileNoOTP">
                  <input id="emailMobileNoOTP" class="input-data" autocomplete="off" type="text" name="emailMobileNoOTP" placeholder="Sign In/Sign Up with Email or Mobile No. " maxlength="100">
                </div>
                <div class="pwd-section hide">
                  <input id="password"  autocomplete="off" type="password" name="password" placeholder="Password " >
                  <span class="forgot-password">Forgot Password</span>
                </div>
                </div>
                 <div>
            <input type="button" class="btn-disable continueBtn"  value="CONTINUE"  disabled></input>
          </div>`:"" 
              }
          `
        }
                  `).join('')}
	 
        
         
        </div>
         </div>
        
            <button id="emailMobile-div" type="button" class="btn btn-email" style="display: none;">
              <span class="sprite ico-email"></span><span>Continue with email or phone no</span>
            </button>
            <div id="signUp-div" class="mediumPanel hide clearfix" >
              <div id="signUp-div-error" class="errorMsgs" style="display: none;"> You are registered already!</div>
              <form class="tlogins sign-in-form ">
                <fieldset>
                  <div class="help">Please provide all detail asked below</div>
                
                    <div class="form-group email-id hide textinput clearfix">
                        <input type="text" id="emailID" class="form-control"/>
                        <label for="emailID">Email ID</label>
                      </div>
                    <div id="emailReg-error" class="errorMsgs" style="display: none;"> Please enter valid Email</div>
                  
                 
                  <!-- <div id="emailErrorSignIn" class="emailErrors"> </div> -->
                  <!-- <div id="emailError" class="errorMessages clearfix"></div> -->
                  ${configParam.firstName?
                    `<div class="form-group textinput">
                      <input type="text" id="firstName" class="form-control" />
                      <label for="firstName">First Name</label>
                    </div>`:""
                  }
                  ${configParam.lastName ?
                  `<div class="form-group textinput">
                    <input type="text" id="lastName" class="form-control" />
                    <label for="lastName">Last Name</label>
                  </div>`:""
                  }
                  ${configParam.gender ?
                    `<div class="form-group textinput">
                    <input type="text" id="gender" class="form-control" />
                    <label for="gender">gender</label>
                  </div>`:""}
                  ${configParam.dob ?
                    `<div class="form-group textinput">
                    <input type="text" id="dob" class="form-control" />
                    <label for="dob">dob</label>
                  </div>`:""}
                  <!-- <div class="form-group textinput">
                    <input id="passwordSignUp" type="password" class="form-control" />
                    <span toggle="#passwordSignUp" class="sprite field-icon toggle-password"></span>
                    <label for="passwordSignUp">Password</label>
                  </div> -->
                  ${configParam.Password ?
                  `<div class="form-group textinput">
                    <input id="passwordSignUpConf" type="password" class="form-control" />
                    <!--<span toggle="#password-field" class="sprite field-icon toggle-password"></span> -->
                    <label for="passwordSignUpConf">Password</label>
                  </div>`:""
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
                    <button type="button" id="registerbtn" class="btn btn-register"><span style="float:inherit; padding:0px;">Register</span></button>
                  </div>
                </fieldset>
              </form>
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
                <button type="button" id="loginForgotPasswordbtn" class="btn btn-register"><span style="float:inherit; padding:0px;">Login</span></button>
              </div>

            </div>

          </div>

          <div id='signUpOtion' class="text-center signupgo" style="display: none;">New user? <a id="signUplink">Sign Up</a></div>


        

          <div class="form-group" id="switchUser" style="display:none; margin-top:25px;">
            <a id="switchUserLink"  class="otherOption font-13">
              <span>Switch User</span>
            </a>
          </div>

        </div>
      </div>
    </div>
    <div class="socialBlock clearfix">
      <div class="text-center">
        <p>One Network. One Account.</p>
        <a href="#" class="sprite logotoi" title="Times of India">Times of India</a>
        <a href="#" class="sprite logoet" title="Economics Times">Economics Times</a>
        <a href="#" class="sprite logonbt" title="Navbharat Times">Navbharat times</a>
        <a href="#" class="sprite logomuta" title="muta">Muta</a>
        <a href="#" class="sprite logospktree" title="Speaking Tree">Speaking Tree</a>
        <a href="#" class="sprite logosocgaana" title="Gaana">Gaana</a>
        <a href="#" class="sprite logoit" title="Indiatimes">Indiatimes</a>
      </div>
    </div>
  </section>
	`	
		

}
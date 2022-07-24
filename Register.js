let form=document.querySelector("#firstForm");
    let otpBox=document.getElementById("enterOtp");
    let masaiOTP="Masai20";
    let count=0;
    let registerArr=JSON.parse(localStorage.getItem("registerData")) || [];

    form.addEventListener("submit",sendOtp);

    function sendOtp()
    {
        count=0;
        event.preventDefault();
        if(form.loginInput.value=="")
        {
            alert("Please fill the details first!");
        }
        else
        {
            for(let i=0;i<registerArr.length;i++)
            {
                if(form.loginInput.value===registerArr[i])
                {
                    count++;
                    break;
                }
            }
            if(count===1)
            {
                alert("Already registered."+"\n"+"You may directly Log in."+"\n"+"Thank you! :)");
            }
            else
            {
            alert("OTP Sent.");
            otpBox.setAttribute("id","enterOtpPostAlert");
            }
        }
        
    }
    otpBox.addEventListener("submit",finalSubmit);
    function finalSubmit()
    {
        event.preventDefault();
        if(otpBox.enteredOtp.value=="")
        {
            alert("Please enter the OTP you received before submitting!");
        }
        else if(otpBox.enteredOtp.value==masaiOTP)
        {
            registerArr.push(form.loginInput.value);
            localStorage.setItem("registerData",JSON.stringify(registerArr));
            alert("Registration Successful! Now you can log in. :)");
            otpBox.setAttribute("id","enterOtp");
            location.href="logIn.html";
        }
        else
        {
            alert("Please enter the correct OTP!");
        }
    }

    let cross=document.querySelector("#pageCancel>h5");
    cross.addEventListener("click",goBackToLogin);

    function goBackToLogin()
    {
        location.href="logIn.html";
    }

let form=document.querySelector("form");
    let loginArray=JSON.parse(localStorage.getItem("registerData")) || [];
    let c=0;
    let detailsArray=JSON.parse(localStorage.getItem("loginContent")) || [];
    form.addEventListener("submit",checkBeforeLogin);
    
function checkBeforeLogin()
{
    event.preventDefault();
    c=0;
    if(form.loginInput.value=="")
    {
        alert("Please fill the details before submitting!");
    }
    else
    {
        for(let i=0;i<loginArray.length;i++){
            if(form.loginInput.value===loginArray[i])
            {
                c++;
                break;
            }
        }
        if(c==1)
        {
            alert("Log in successful!");
            detailsArray.push(form.loginInput.value);
            localStorage.setItem("loginContent",JSON.stringify(detailsArray));
            location.href="homePage.html";
        }
        else
        {
            alert("Please Register first!"+"\n"+"Please click on OK to close this box!");
        }
    }
}

let cross=document.querySelector("#pageCancel>h5");
cross.addEventListener("click",goBackToHome);

function goBackToHome()
{
    location.href="homePage.html";
}
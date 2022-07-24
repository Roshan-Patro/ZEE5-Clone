let detailsArr=[
    {
        videoImage:"https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-101-externall_1480997069/cover/aajtak1920desktop4bdc45dc425c4ba5a8d3d7104464c047.jpg",
        name:"Draupadi Murmu became the 15th President of India",
        text1:"WATCH",
    },
    {
        videoImage:"https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-101-10z583582/cover/timesnownavbharat1920desktop7c1565e2cc144ab192bd345e96936337.jpg",
        name:"LG ने रद्द किया केजरीवाल का सिंगापुर टूर, AAP खफा ",
        text1:"WATCH",
    },
    {
        videoImage:"https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-101-10z5117550/cover/indiatoday1920desktopb0880734a7ad46079e34afb6a1bfde9d.jpg",
        name:"Saas Bahu Achaar Pvt. Ltd.",
        text1:"WATCH",
    },
    {
        videoImage:"https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-101-externall_1904997942/cover/wion1920desktop1aca9153e240442381e9f25f8e4eeb8d.jpg",
        name:"Forensic",
        text1:"WATCH",
    }
];
let btnNext=document.querySelector("#next");
let btnPrev=document.querySelector("#prev");

let currentBox=0;
let showImg=document.querySelector("#Image");
let Name=document.querySelector("#slider>h1");
let toWatch=document.querySelector("#slider>button:nth-child(3)>h4");
let toBuy=document.querySelector("#slider>button:nth-child(4)>h4");

btnNext.addEventListener("click",function(){
    goNext(detailsArr);
});

btnPrev.addEventListener("click",function(){
    goPrev(detailsArr);
});


function goNext(detailsArr)
{
    currentBox++;
    if(currentBox===detailsArr.length)
    {
        currentBox=0;
    }
    showImg.src=detailsArr[currentBox]["videoImage"];
    Name.innerText=detailsArr[currentBox]["name"];
    toWatch.innerText=detailsArr[currentBox]["text1"];
}

function goPrev(detailsArr)
{
    currentBox--;
    if(currentBox===-1)
    {
        currentBox=detailsArr.length-1;
    }
    showImg.src=detailsArr[currentBox]["videoImage"];
    Name.innerText=detailsArr[currentBox]["name"];
    toWatch.innerText=detailsArr[currentBox]["text1"];
}

var myIndex = currentBox;
carousel();

function carousel() {
  var i;
  for (i = 0; i < detailsArr.length; i++) {
    showImg.src=detailsArr[i]["videoImage"];

    showImg.style.display = "none";  
  }

  showImg.src=detailsArr[myIndex]["videoImage"];
  showImg.style.display = "block";
  myIndex++;
  if (myIndex > detailsArr.length-1) {myIndex = 0}    
    
  setTimeout(carousel,2000); // Change image every 2 seconds

  showImg.addEventListener('hover',function(){
    clearTimeout(setTimeout(carousel,4000));
  });
}


const productContainers = [...document.querySelectorAll('.videoContainer')];
const nxtBtn = [...document.querySelectorAll('.nxtBtn')];
const preBtn = [...document.querySelectorAll('.preBtn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

let loginValue=JSON.parse(localStorage.getItem("loginContent")) || [];
let bttn=document.querySelectorAll(".videoContainer button");

for(let i=0;i<bttn.length;i++)
{
    bttn[i].addEventListener("click",checkToOpen)
}

function checkToOpen()
{
    if(loginValue.length>0)
    {
        location.href="https://www.youtube.com/watch?v=YVvAI08Gmpc&list=PLU2X-6cCyi6Q_lNyfJywvmW1fq74STg5c&index=7&t=850s";
    }
    else
    {
        alert("Please login to access the contents!");
    }
}

if(loginValue.length>0)
{
    let changeLogin=document.querySelector("#lastTab h3");
    changeLogin.innerHTML="LOGOUT";
    
}
document.querySelector("#lastTab").addEventListener("click",loginChanges);
function loginChanges()
{
    if(loginValue.length>0)
    {
    localStorage.removeItem("loginContent");
    location.href="homePage.html";
    }
    else
    {
        location.href="logIn.html";
    }
}
let detailsArr=[
    {
        videoImage:"https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-3284/cover/1920x770ffd5406dde2541ddb0a0d4dcc57ee834.jpg",
        name:"Sunflower",
        text1:"WATCH",
        text2:"BUY NOW"
    },
    {
        videoImage:"https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-4z5145215/cover/1920x770abf42130d9cf41dab2bf9e648cf3193b0b8736722f40431bb31a5214ab98851c.jpg",
        name:"The Broken News",
        text1:"WATCH",
        text2:"BUY NOW"
    },
    {
        videoImage:"https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-1298/cover/1920x770d9ead07e5b304a989d85cf8c6e0113fb.jpg",
        name:"Abhay",
        text1:"WATCH",
        text2:"BUY NOW"
    },
    {
        videoImage:"https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-4z587408/cover/1920x770195db875fe204fa4afe115764b5dc00ba004028948aa4211b107faed649301d7.jpg",
        name:"Mithya",
        text1:"WATCH",
        text2:"BUY NOW"
    }
];
let btnNext=document.querySelector("#next");
let btnPrev=document.querySelector("#prev");

let currentBox=0;
let showImg=document.querySelector("#Image");
let Name=document.querySelector("#slider");
let H1=Name.getElementsByTagName("h1");

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
    H1.innerText=detailsArr[currentBox]["name"];
    toWatch.innerText=detailsArr[currentBox]["text1"];
    toBuy.innerText=detailsArr[currentBox]["text2"];
}

function goPrev(detailsArr)
{
    currentBox--;
    if(currentBox===-1)
    {
        currentBox=detailsArr.length-1;
    }
    showImg.src=detailsArr[currentBox]["videoImage"];
    H1.innerText=detailsArr[currentBox]["name"];
    toWatch.innerText=detailsArr[currentBox]["text1"];
    toBuy.innerText=detailsArr[currentBox]["text2"];
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
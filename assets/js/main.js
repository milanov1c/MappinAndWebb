//PREFIKSI

let prefixImg="assets/img/";
let prefixLink="/MappinAndWebb";
let prefixSaleImgClass="mySaleImgClass";

//OBJEKTI ZA DINAMICKO KREIRANJE
const navObj=[
    {name:"Home",
     path:"index.html"
    },
    {name:"Brands",
     path:"#brands"
    },
    {name:"Rolex",
     path:"#rolex"
    },
    {name:"Watches",
     path:"#watches"
    },
    {name:"Featured",
     path:"#featured"
    },
    {name:"Sale",
     path:"#sale"
    },
    {name:"Sell Your Watch",
     path:"#contact"
    }
]

const productObj=[
    {
        path:"card1.jpg",
        heading:"Wedding Rings",
        paragraph:"Wedding rings symbolize the eternal commitment and love between partners, traditionally worn on the ring finger."
    },
    {
        path:"card2.jpg",
        heading:"Necklaces",
        paragraph:"A necklace is a piece of jewelry worn around the neck, often adorned with precious metals, gemstones, or meaningful pendants."
    },
    {
        path:"card3.jpg",
        heading:"Earrings",
        paragraph:"Earrings, delicate whispers of adornment suspended from the ear, where the language of elegance is written in the shimmer of gemstones."
    },
    {
        path:"card4.jpg",
        heading:"Promising Rings",
        paragraph:"Promising rings, encircling fingers like vows in tangible form, carry the weight of commitment and the sparkle of shared dreams."
    }

];

const rolexObj=[
    {
        name:"Rolex Lady Datejust",
        path:"watch1.jpg"
    },
    {
        name:"Rolex Sea Dweller",
        path:"watch2.jpg"
    },
    {
        name:"Rolex Submariner",
        path:"watch3.jpg"
    },
    {
        name:"Rolex Oyster Perpetual",
        path:"watch4.jpg"
    },
    {
        name:"Rolex Explorer",
        path:"watch5.jpg"
    },
    {
        name:"Rolex Datejust",
        path:"watch6.jpg"
    },
    {
        name:"Rolex Air-King",
        path:"watch7.jpg"
    },
    {
        name:"Rolex Deepsea",
        path:"watch8.jpg"
    },
    {
        name:"Rolex Day-Date",
        path:"watch9.jpg"
    },
];

const featuredObj=[
    {
        path:"featured1.jpg",
        name:"Omega",
        model:"Seamaster Diver 300 Co-Axial Mens Watch",
        price:"&#163;5,600.00"
    },
    {
        path:"featured2.jpg",
        name:"Tag Heuer",
        model:"Formula 1 Quartz 43mm Mens Watch",
        price:"&#163;1,500.00"
    },
    {
        path:"featured3.jpg",
        name:"IWC",
        model:"Pilot's Mark XVIII 'Le Petit Prince' 40mm Mens Watch",
        price:"&#163;4,100.00"
    },
    {
        path:"featured4.jpg",
        name:"Cartier",
        model:"Tank Must, Large Model, Quartz Movement, Steel 33.7mm X 25.5mm",
        price:"&#163;3,700.00"
    }
];

const saleObj=[
    {
        img1:"sale1.jpg",
        img2:"sale11.jpg",
        name:"Platinum 2.00ct Solitaire Engagement Ring",
        price:"28,000.00",
        priceSale:"23,000.00",
        installment:"534.81",
        id:"1"
    },
    {
        img1:"sale2.jpg",
        img2:"sale21.jpg",
        name:"Platinum 1.00ct Solitaire Engagement Ring",
        price:"7,500.00",
        priceSale:"6,000.00",
        installment:"125.00",
        id:"2"
    },
    {
        img1:"sale3.jpg",
        img2:"sale31.jpg",
        name:"Platinum 1.50cttw Three Stone Diamond Ring",
        price:"6,500.00",
        priceSale:"5,000.00",
        installment:"104.17",
        id:"3"
    },
    {
        img1:"sale4.jpg",
        img2:"sale41.jpg",
        name:"18ct Yellow Gold 1.50cttw Three Stone Ring",
        price:"6,000.00",
        priceSale:"4,750.00",
        installment:"98.96",
        id:"4"
    }

];
const footerAboutObj=[
    {
        name:"Author",
        path:"author.html"
    },
    {
        name:"Portfolio",
        path:"author.html"
    },
    {
        name:"Documentation",
        path:"documentation.pdf"
    },
    {
        name:"Contact",
        path:"#contact"
    }
];
//NIZOVI ZA DINAMICKO ISPISIVANJE

const swiperArr=["swiper1.png", "swiper2.png", "swiper3.png", "swiper4.png", "swiper5.png", "swiper6.png", "swiper7.png"
,"swiper1.png", "swiper2.png", "swiper3.png", "swiper4.png", "swiper5.png", "swiper6.png", "swiper7.png"];
//ELEMENTI ZA DINAMICKO ISPISIVANJE

const slideTextArr=[ "20% Off Selected Wedding Rings", 
"Free Gift with Selected Watches over £1000", "Pay Nothing Today with Interest Free Finance","Free Next Day Delivery until 9PM, 7 Days a Week* "];

//DINAMICKA DDL

const ddlContent=["Report a bug", "Technical support", "Ordering help", "Suggestions", "Other"];

//REGEXI

let regExName=/^[A-ZŠĐŽČĆ][a-zšđčćž]{2,14}(\s[A-ZŠĐŽČĆ][a-zšđčćž]{2,14})?$/;
let regExLastName=/^[A-ZŠĐŽČĆ][a-zšđčćž]{3,14}(\s[A-ZŠĐŽČĆ][a-zšđčćž]{3,14})?$/;
let regExEmail=/^[a-z0-9\.]+@[a-z]+\.[a-z]{2,3}$/;
let regExPassword=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;


//POCETAK WINDOW ONLOAD


window.onload=function(){
    //if(window.location.pathname==prefixLink+"/index.html" || window.location.pathname==prefixLink+'/')

    //PRELOADER
    
    $(document).ready(function () {
        setTimeout(function () {
            $("#preloader").animate(
                {
                    opacity: 0 
                }, 1000, function () {
                $(this).css("display", "none");
    
                $("body").animate({ opacity: 1 }, 1500);
            });
        }, 1700); 
    });

       
    //TEKST IZNAD HEADERA
    var currentIndex=0;
    function slideText(){
    
    slideTextHeaderBlock.innerHTML=`<p class="text-center my-2">${slideTextArr[currentIndex]}</p>`;

    currentIndex=(currentIndex+1)%slideTextArr.length;

    }
    setInterval(slideText, 2000);
    
    //FOOTER
    for (const link of footerAboutObj) {
        footerAboutText+=`<li class="pt-1"><a href="${link.path}">${link.name}</a></li>`
    }
    footerAbout.innerHTML=footerAboutText;

    for (const link of navObj) {
        footerNavText+=`<li class="pt-1"><a href="${link.path}">${link.name}</a></li>`;
    }
    footerNav.innerHTML=footerNavText;
    if(window.location.pathname=="/index.html" || window.location.pathname=='/')
    {
        
        


        
        //NAVIGACIJA
    for (const link of navObj) {
        navText+=`<li class="nav-item">
                    <a class="nav-link fw-bold mx-1 fs-5"  href="${link.path}">${link.name}</a>
                </li>`;
    }
    navBlock.innerHTML=navText;

        //PRVI SLAJDER
        let slider = new Swiper(".mySlider", {
            navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            },
            loop:true
        });


        //KARTICE SA NAKITOM
        for (const product of productObj) {
            card+=`<div class="col-md-3 col-sm-6 col-11">
            <div class="card mt-5">
            <img src="${prefixImg+product.path}" class="card-img-top" alt="${product.heading}">
                <div class="card-body">
                <h3 class="card-title fs-5 fw-bold">${product.heading}</h3>
                <p class="card-text fs-6">${product.paragraph}</p>
                </div>
            </div>
        </div>`;
        }
        
        productCardBlock.innerHTML=card;
        //SWIPER SA BRENDOVIMA

        //SWIPER DINAMICKO ISPISIVANJE
        for (const img of swiperArr) {
    
            swiperText+=`<div class="swiper-slide">
            <img src="${prefixImg+img}" />
          </div>`
        }
        swiperBlock.innerHTML=swiperText;
    }
    //SWIPER OBJEKAT
    let swiper = new Swiper(".mySwiper", {
        slidesPerView: 7,
        spaceBetween: 30,
        // autoplay:{
        //     delay:1000,
        //     pauseOnMouseEnter:true
        // },
        loop:true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints:{
            992:{
                slidesPerView:6
            },
            768:{
                slidesPerView:5
            },
            600:{
                slidesPerView:4
            },
            425:{
                slidesPerView:3
            },
            375:{
                slidesPerView:2
            },
            325:{
                slidesPerView:2
            }
        }
      });

    //BLOKOVI SA SATOVIMA, KARTICE 

    for (const card of rolexObj) {
        rolexText+=`<div class="col-md-4 col-12">
        <div class="card mt-5">
          <img src="${prefixImg+card.path}" class="card-img-top" alt="${card.name}">
          <div class="card-body">
            <h3 class="card-title fs-5 fw-bold">${card.name}</h3>
          </div>
        </div>
      </div>`
    }
    firstRowRolex.innerHTML=rolexText;

    //HOVER ZA KARTICE
    $(".card").hover(
        function () {
            $(this).addClass("scale1");
          },
          function () {
            $(this).removeClass("scale1");
          }
      );

    // FEATURED SATOVI, DINAMICKO ISPISIVANJE  

      for (const obj of featuredObj) {
        featuredText+=`<div class="col-md-3 px-1 col-sm-6 col-10">
        <img src="${prefixImg+obj.path}" alt="${obj.model}"/>
        <h3 class="h5 text-uppercase mt-3 fw-bold">${obj.name}</h3>
        <small>${obj.model}</small>
        <p  class="mt-4 fw-bold">${obj.price}</p>
      </div>`;
    }
    
    featuredBlock.innerHTML=featuredText;


    //SALE SEKCIJA, DINAMICKO ISPISIVANJE

    for (const obj of saleObj) {
        saleContent+=`<div class="col-md-3 col-sm-6 col-10 mx-auto px-1 py-md-0 py-3 ${"mySale"+obj.id}">
            <div class="position-relative">
                <img src="${prefixImg+obj.img1}" alt="${obj.name}" class="position-absolute z-n1" id="${"mySaleImg"+obj.id}"/>
                <img src="${prefixImg+obj.img2}" alt="${obj.name}" class="d-none position-absolute z-n1" id="${"mySaleImgDNone"+obj.id}"/>
            </div>
            
        <div class="d-flex justify-content-between ps-2 pt-3">
          <small class="d-inline-block fw-bold text-uppercase bg-body-tertiary ps-2">New Arrival</small>
          <i class="fa-regular fa-heart d-inline-block pe-3 saleHeartIcon" id="${"saleHeart"+obj.id}"></i>
        </div>
        <div class="mySaleText">
          <small class="text-uppercase">Mappin &amp; Webb</small>
          <p class="fw-bold p-0 m-0">${obj.name}</p>
          <p class="m-0 pb-2"><span class="text-danger fw-bold fs-6">&#163;${obj.priceSale}</span><span class="text-decoration-line-through ms-3"> &#163;${obj.price}</span></p>
          <hr class="m-0"/>
          <small class="py-2 d-block">From <span class="text-decoration-underline fw-bold">&#163;${obj.installment}</span> per month </small>
          
        </div>
      </div>`;
     console.log(prefixSaleImgClass+obj.id);
      
    }
    
    saleBlock.innerHTML=saleContent;

    saleObj.forEach(element=>{
        $(`.mySale${element.id}`).hover(
            function() {
              $(`.mySale${element.id} #mySaleImg${element.id}`).addClass("d-none");
              $(`.mySale${element.id} #mySaleImgDNone${element.id}`).removeClass("d-none");
            },
            function() {
              $(`.mySale${element.id} #mySaleImgDNone${element.id}`).addClass("d-none");
              $(`.mySale${element.id} #mySaleImg${element.id}`).removeClass("d-none");
            }
          );
    });
    
    
    let saleHeartIcon=document.getElementsByClassName("saleHeartIcon");
    console.log(saleHeartIcon);
    
    
   saleHeartClick();

   var swiperWatches = new Swiper(".mySwiperWatches", {
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints:{
        768:{
            slidesPerView:4
        },
        600:{
            slidesPerView:3
        },
        575:{
            slidesPerView:3
        },
        480:{
            slidesPerView:2
        },
        425:{
            slidesPerView:2
        },
        375:{
            slidesPerView:1
        },
        325:{
            slidesPerView:1
        }
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  //DINAMICKA DDL

  for(let i=0; i<ddlContent.length; i++)
    {
        ddlText+=`<option value="${i+1}">${ddlContent[i]}</option>`;
    }

document.getElementById("ddlService").innerHTML=ddlText;

//VALIDACIJA FORME

document.getElementById("fName").addEventListener("blur",function(){
    regExTest(regExName, nameValue);
});
document.getElementById("lName").addEventListener("blur",function(){
    regExTest(regExLastName, lastNameValue);
});
document.getElementById("email").addEventListener("blur",function(){
    regExTest(regExEmail, emailValue);
});
document.getElementById("password").addEventListener("blur",function(){
    regExTest(regExPassword, passwordValue);
});
document.getElementById("rePassword").addEventListener("blur",function(){
    confirmPass(passwordValue, confirmValue);
});
document.getElementById("submit").addEventListener("click",function(){
    formCheck();
});
   

}



//KRAJ WINDOW ON LOAD



// text slides, tekst se menja na 2 sekunde, dinamicki ispisan

let slideTextHeaderBlock=document.getElementById("slideTextHeader");

// nav, elementi su dinamicki ispisani

let navBlock=document.getElementById("myNav");

let navText="";

// product cards, dinamicki ispisani

let productCardBlock=document.getElementById("productCard");

let card="";

//swiper, napravljen swiper za logoe brendova, slike dinamicki dodate u html

let swiperBlock=document.getElementById("swiper-carousel");
let swiperText=``;

//ROLEKS BLOKOVI

let firstRowRolex=document.getElementById("rolexRow1");
let rolexText=``;

//FEATURED BLOKOVI
let featuredBlock=document.getElementById("featuredBlock");

let featuredText="";

//SALE BLOKOVI

let saleBlock=document.getElementById("saleBlock");
let saleContent="";
let faSolid="fa-solid";
var clickCount=0;
function saleHeartClick(){
        saleObj.forEach(element=>{
            let saleHeart= document.getElementById(`saleHeart${element.id}`);
            
            saleHeart.addEventListener("click", function(){
            //neparni klik
            saleHeart.classList.replace("fa-regular", "fa-solid");
            //parni klik
            if(clickCount%2){
                saleHeart.classList.replace("fa-solid", "fa-regular");
            }
            
            clickCount+=1;
            console.log(clickCount)
        })
        })

}

//dinamicki ispisana ddl

let ddlText=`<option value="0">Message Subject</option>`;



//FORMA 

let nameValue=document.getElementById("fName");
let lastNameValue=document.getElementById("lName");
let emailValue=document.getElementById("email");
let passwordValue=document.getElementById("password");
let confirmValue=document.getElementById("rePassword");
let rbGender=document.getElementsByName("rbGender");
let rbDanger=document.querySelector(".rbDanger");
let ddlService=document.getElementById("ddlService");
let submitButton=document.getElementById("submit");
let form=document.getElementById("form");
let formErrors= 0;

function regExTest(regEx,input){
    
    if(!regEx.test(input.value)){
        input.classList.add("border-danger");
        input.nextElementSibling.classList.remove("d-none");
        formErrors++;
    }
    else{
        
        input.classList.remove("border-danger");
        input.classList.add("border-success");
        input.nextElementSibling.classList.add("d-none");
        formErrors=0;
    }
}
function confirmPass(input, confirmInput){
    if(confirmValue.value!=passwordValue.value || confirmValue.value==""){
        confirmInput.classList.add("border-danger");
        confirmInput.nextElementSibling.classList.remove("d-none");
        formErrors++;
    }
    else{
        confirmInput.classList.remove("border-danger");
        confirmInput.classList.add("border-success");
        confirmInput.nextElementSibling.classList.add("d-none");
        formErrors=0;
    }
}
var isChecked=false;

function checkGender(){
    for(let i=0; i<rbGender.length; i++)
    {
        if(rbGender[i].checked)
        {
            isChecked=true;
        }

    }
    if(!isChecked)
    {
        rbDanger.classList.remove("d-none");
        formErrors++;
    }
    else{
        rbDanger.classList.add("d-none");
        formErrors=0;
    }
}

console.log(isChecked);
function checkServices(){
    if(ddlService.selectedIndex=="0")
    {
        ddlService.nextElementSibling.classList.remove("d-none");
        ddlService.classList.add("border-danger");
        formErrors++;
    }
    else
    {
        ddlService.nextElementSibling.classList.add("d-none");
        ddlService.classList.remove("border-danger");
        ddlService.classList.add("border-success");
        formErrors=0;
    }
}
function formCheck(){
    regExTest(regExName, nameValue);
    regExTest(regExLastName, lastNameValue);
    regExTest(regExEmail, emailValue);
    regExTest(regExPassword, passwordValue);
    confirmPass(passwordValue, confirmValue);
    checkGender();
    checkServices();

    if(formErrors==0)
    {
        submitButton.nextElementSibling.classList.add("d-none");
    }
    else
    {
        submitButton.nextElementSibling.classList.remove("d-none");
    }
};

let backToTop=document.getElementById("backToTop");
backToTop.addEventListener("click", function()
{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

//FOOTER

let footerAbout=document.getElementById("footerAbout");
let footerAboutText="";

let footerNav=document.getElementById("footerNav");
let footerNavText="";

const footerSocialObj=[{
    icon:"fa-brands fa-instagram",
    path:"https://instagram.com"
}, 
{
    icon:"fa-brands fa-facebook",
    path:"https://facebook.com"
},
{
    icon:"fa-brands fa-linkedin",
    path:"https://linkedin.com"
},
{
    icon:"fa-brands fa-youtube",
    path:"https://youtube.com"
}];

let footerSocials=document.getElementById("footerSocials");
let footerSocialsText="";

for (const link of footerSocialObj) {
    footerSocialsText+=`<li class="ps-3"><a href="${link.path}"><i class="${link.icon}"></i></a></li>`
}
footerSocials.innerHTML=footerSocialsText;
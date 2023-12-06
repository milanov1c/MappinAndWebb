//PREFIKSI

let prefixImg="assets/img/";
let prefixLink="/MappinAndWebb";
let prefixSaleImgClass="mySaleImgClass";
//POCETAK WINDOW ONLOAD

window.onload=function(){
    if(window.location.pathname=="/index.html" || window.location.pathname=='/')
    {
        //tekst iznad headera, menja se na 2 sekunde
        var currentIndex=0;
        function slideText(){
    
        slideTextHeaderBlock.innerHTML=`<p class="text-center my-2">${slideTextArr[currentIndex]}</p>`;

        currentIndex=(currentIndex+1)%slideTextArr.length;
    
        }

        setInterval(slideText, 2000);
        //nav
        for (const link of navObj) {
            navText+=`<li class="nav-item">
                        <a class="nav-link fw-bold mx-1 fs-5"  href="${link.path}">${link.name}</a>
                    </li>`;
        }
        navBlock.innerHTML=navText;
        //slider
        let slider = new Swiper(".mySlider", {
            navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            },
            loop:true
        });

        //cards
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

        //swiper
        for (const img of swiperArray) {
    
            swiperText+=`<div class="swiper-slide">
            <img src="${prefixImg+img}" />
          </div>`
        }
        swiperBlock.innerHTML=swiperText;
    }
    //swiper za brendove
    let swiper = new Swiper(".mySwiper", {
        slidesPerView: 7,
        spaceBetween: 30,
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
    //roleks blokovi, kartice ispisane dinamicki
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

    //hover sa senkom na svim card elementima
    $(".card").hover(
        function () {
            $(this).addClass("scale1");
          },
          function () {
            $(this).removeClass("scale1");
          }
      );
    // featured satovi, dinamicki ispisani  
      for (const obj of featuredObj) {
        featuredText+=`<div class="col-md-3 px-1 col-sm-6 col-10">
        <img src="${prefixImg+obj.path}" alt="${obj.model}"/>
        <h3 class="h5 text-uppercase mt-3 fw-bold">${obj.name}</h3>
        <small>${obj.model}</small>
        <p  class="mt-4 fw-bold">${obj.price}</p>
      </div>`;
    }
    
    featuredBlock.innerHTML=featuredText;


    //sale

    for (const obj of saleObj) {
        saleContent+=`<div class="col-md-3 col-sm-6 col-10 mx-auto px-1 py-md-0 py-3 ${"mySale"+obj.id}">
            <div class="position-relative">
                <img src="${prefixImg+obj.img1}" alt="${obj.name}" class="position-absolute z-n1" id="${"mySaleImg"+obj.id}"/>
                <img src="${prefixImg+obj.img2}" alt="${obj.name}" class="d-none position-absolute z-n1" id="${"mySaleImgDNone"+obj.id}"/>
            </div>
            
        <div class="d-flex justify-content-between ps-2 pt-3">
          <small class="d-inline-block fw-bold text-uppercase bg-body-tertiary ps-2">New Arrival</small>
          <i class="fa-regular fa-heart d-inline-block pe-3 saleHeart"></i>
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

    var clickCount=1;
    let saleHeart=document.getElementsByClassName("saleHeart");
    function saleHeartChange(){
        for(let i=0; i<saleHeart.length; i++)
        {
            saleHeart[i].addEventListener("mouseenter",function(){
                saleHeart[i].classList.replace("fa-regular", "fa-solid");
            })
            
            saleHeart[i].addEventListener("click",function(){
                clickCount=clickCount+1;
                if(clickCount%2){
                    saleHeart[i].addEventListener("click",function(){
                        saleHeart[i].classList.replace("fa-solid", "fa-regular");
                        console.log(clickCount);
                    }) 
                    
                }
                else if(!clickCount%2){
                    saleHeart[i].addEventListener("click",function(){
                        saleHeart[i].classList.replace("fa-regular", "fa-solid");
                        console.log(clickCount);
                    }) 
                }
            })
            
            clickCount=0;
            
                
                    
               
          
        }
    }

    saleHeartChange();
}


//KRAJ WINDOW ON LOAD

// text slides, tekst se menja na 2 sekunde, dinamicki ispisan

let slideTextHeaderBlock=document.getElementById("slideTextHeader");

let slideTextArr=[ "20% Off Selected Wedding Rings", 
"Free Gift with Selected Watches over £1000", "Pay Nothing Today with Interest Free Finance","Free Next Day Delivery until 9PM, 7 Days a Week* "];



// nav, elementi su dinamicki ispisani

let navBlock=document.getElementById("myNav");
let navObj=[
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
let navText="";



// product cards, dinamicki ispisani

let productCardBlock=document.getElementById("productCard");
let productObj=[
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
let card="";



//swiper, napravljen swiper za logoe brendova, slike dinamicki dodate u html


let swiperArray=["swiper1.png", "swiper2.png", "swiper3.png", "swiper4.png", "swiper5.png", "swiper6.png", "swiper7.png"
,"swiper1.png", "swiper2.png", "swiper3.png", "swiper4.png", "swiper5.png", "swiper6.png", "swiper7.png"];
let swiperBlock=document.getElementById("swiper-carousel");
let swiperText=``;

//blok o roleks satovima
let rolexObj=[
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
]
let firstRowRolex=document.getElementById("rolexRow1");
let rolexText=``;
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


  

let featuredBlock=document.getElementById("featuredBlock");

let featuredObj=[
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
]

let featuredText="";



let saleBlock=document.getElementById("saleBlock");

let saleObj=[
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

let saleContent="";




// $(".saleHeart").hover(
//     function () {
//         $(this).removeClass("fa-regular")
//         $(this).addClass("fa-solid");
//       },
//       function () {
//         $(this).removeClass("fa-solid");
//         $(this).addClass("fa-regular");
//       }
// );

//PITATI PROFESORKU NA KONSULTACIJAMA


// function solidHeart(){
//     $(".saleHeart").on("mouseover",function(){
//         $(this).removeClass("fa-regular")
//         $(this).addClass("fa-solid");
//     })
//     $(".saleHeart").on("click",function(){
//         heartBool=true;
//     })
//     if(heartBool){

//     }
//     else{
//         $(this).removeClass("fa-solid")
//         $(this).addClass("fa-regular");

//         $(this)
//     }
// }

// $(".saleHeart").on("mouseover",
//     function () {
//         $(this).removeClass("fa-regular")
//         $(this).addClass("fa-solid");
//       }
// );


//var heartBool=false;


// $(".saleHeart").click(
//     function(){
//         heartBool=true;
//         console.log(heartBool);
//         if(heartBool){
           
//         }
//         else{
//             $(".saleHeart").on("mouseout",function(){
//                 $(this).removeClass("fa-solid");
//                 $(this).addClass("fa-regular");
//             });
//         }
//     }
// )


// $(".saleHeart").click(
//     function () {
//         $(this).removeClass("fa-regular")
//         $(this).addClass("fa-solid");
//         heartBool=true;
//         if(heartBool){
//             $(".saleHeart").mouseOver(
//                 function(){
//                     $(this).addClass("fa-solid");
//                 }
//             )
//             $(".saleHeart").click(
//                 function(){
//                     $(this).removeClass("fa-solid");
//                 },
//                 function(){
                    
//                     $(this).addClass("fa-regular");

//                 }
//             )
//         }
//         else{
//             $(this).removeClass("fa-solid");
//         }
//       }
// );




 
    


//dinamicki ispisana ddl

let ddlContent=["Report a bug", "Technical support", "Ordering help", "Suggestions", "Other"];

let ddlText=`<option value="0">Message Subject</option>`;

for(let i=0; i<ddlContent.length; i++)
{
    ddlText+=`<option value="${i+1}">${ddlContent[i]}</option>`;
}

document.getElementById("ddlService").innerHTML=ddlText;

//REGEXI 

let regExName=/^[A-ZŠĐŽČĆ][a-zšđčćž]{2,14}(\s[A-ZŠĐŽČĆ][a-zšđčćž]{2,14})?$/;
let regExLastName=/^[A-ZŠĐŽČĆ][a-zšđčćž]{3,14}(\s[A-ZŠĐŽČĆ][a-zšđčćž]{3,14})?$/;
let regExEmail=/^[a-z](?=.*[a-z])(?=.*[0-9])\@(gmail.com|yahoo.com|hotmail.rs)$/;
let regExPassword=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;


let nameValue=document.getElementById("fName");
let lastNameValue=document.getElementById("lName");
let emailValue=document.getElementById("email");
let passwordValue=document.getElementById("password");
let confirmValue=document.getElementById("rePassword");

function regExTest(regEx,input){
    if(!regEx.test(input.value)){
        input.classList.add("border-danger");
        input.nextElementSibling.classList.remove("d-none");
    }
    else{
        
        input.classList.remove("border-danger");
        input.classList.add("border-success");
        input.nextElementSibling.classList.add("d-none");
    }
}
function confirm(input, confirmInput){
    if(input.value!=confirmInput.value || confirmValue.value==""){
        confirmInput.classList.add("border-danger");
        confirmInput.nextElementSibling.classList.remove("d-none");
    }
    else{
        input.classList.remove("border-danger");
        input.classList.add("border-success");
        input.nextElementSibling.classList.add("d-none");
    }
}

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
    confirm(passwordValue, confirmValue);
});



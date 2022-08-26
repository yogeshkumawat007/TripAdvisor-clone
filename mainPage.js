let object=[{

    img:"https://media-cdn.tripadvisor.com/media/photo-s/17/f7/4f/82/treebo-trend-greenwood.jpg",
   rev:"This is my second visit to this hotel. This hotel is good for business travellers as it is very convenient located at old airport road. You will find all necessities nearby only like you just have to cross for a good South Indian joint for fresh and tasty food items.",
   price:2629 ,
   name:"Treebo Trend Greenwood Premier Suites"
   
   
   
   
   },
   
   {
   img:"https://media-cdn.tripadvisor.com/media/photo-s/23/e1/94/9e/exterior-view.jpg",
   rev:"Customer service was fantastic. Room was decent size and comfortable. Food was good. Exceeded my expectations in all aspects as I had very little hope. Especially staffs were very helpful and great service. Close to the airport but a bit far from the city.",
   name:"Gokulam Grand Hotel & Spa",
   price:7391
   
   },
   
   {
   
   img:"https://media-cdn.tripadvisor.com/media/photo-s/16/6c/fe/37/photo2jpg.jpg",
   rev:"It was smooth and pleasant experience. The service was quick and staffs are easily approachable. Mr Ravi is very helpful through out the stay. The place has lot of greenery. Looking forward to visit again",
   name:"Angsana Oasis Spa & Resort",
   price:8021
   
   
   },
   
   {
   
   img:"https://media-cdn.tripadvisor.com/media/photo-s/21/67/34/57/night-shot-exterior-at.jpg",
   rev:`Nilamoy Boro good cleaning service. I like everything.
   Everything is good. Good hotel. Food is nice. Outside hotel good Weather. 👍 I want everybody come there. Very good very great place very good hotel`,
   name:"The Lalit Ashok",
   price:6905
   
   
   },
   
   {
   
   img:"https://media-cdn.tripadvisor.com/media/photo-s/10/f5/04/09/premiere-suite--v17459131.jpg",
   rev:`Very neat & clean room. A wonderful room service & very extremely courteous staff - room service, front desk & security.
   Had a very nice & a comfortable stay. Would definitely stay in the same hotel when we visit again.`,
   name:"The Park Bangalore",
   price:6812
   
   
   },
   {
   
   img:"https://media-cdn.tripadvisor.com/media/photo-s/21/72/2a/92/hotel-exterior.jpg",
   rev:"Dear Guest Thank you for taking the time to complete our guest satisfaction survey. We are pleased to See that you enjoyed your time at the hotel. On behalf of our entire staff at Country Inn And Suites By Radisson, Bengaluru Hebbal Road we thank you for your business And we hope to See you again when your travels ",
   name:"Country Inn & Suites by Radisson, Bengaluru Hebbal Road",
   price:4704
   
   
   },
   {
   
   img:"https://media-cdn.tripadvisor.com/media/photo-s/10/f5/39/c3/pool--v17460142.jpg",
   rev:"Excellent service by Sh Omar and Leela Lavanya. Sh. Partha sarathi Thank You For Good Service I'm Happy With That. Again I want To visit here. I'm From Hyderabad First Time I visit This Chancery Hotel. Thank You For All Sevice",
   name:"The Chancery Pavilion",
   price:16000
   
   
   },
   {
   
   img:"https://media-cdn.tripadvisor.com/media/photo-s/1c/d8/69/86/exterior-view.jpg",
   rev:"Very Good and polite front office staff Specially Mr Kaushik with a good hospitality. Hotel is very beautiful with many recreation facilities. Food is very tasty and reasonable.Thank you once again for your amazing hospitality",
   name:"ibis Bengaluru City Centre",
   price:5320
   
   
   },
   {
   
   img:"https://media-cdn.tripadvisor.com/media/photo-s/13/ee/7b/bc/signature-club-resort.jpg",
   rev:`Dear Guest, We are so thankful that you took the time to share your feedback with us. It’s our pleasure to provide the best possible service to our guests and it always makes our day when the guest appreciates it. Thanks again and we hope to make your next visit just as positive! Regards, Gurmeet Singh`,
   name:"Signature Club Resort",
   price:5398
   
   
   },
   {
   img:"https://media-cdn.tripadvisor.com/media/photo-s/23/e1/91/9f/exterior-view.jpg",
   rev:`We visited the executive lounge @ JW Marriott Bengaluru. The host Mr Shlok Shanu was extremely helpful. The spread of food items in the lounge was generous (even for the vegetarians) and we enjoyed our time. Highly Recommended!`,
   name:"Clarks Exotica Convention Resort & Spa",
   price:8392
   
   
   },
   {
    img:"https://media-cdn.tripadvisor.com/media/photo-s/21/c8/6b/4f/entrance.jpg",
    rev:"Customer service was fantastic. Room was decent size and comfortable. Food was good. Exceeded my expectations in all aspects as I had very little hope. Especially staffs were very helpful and great service. Close to the airport but a bit far from the city.",
    name:"vaibhav's village cafe",
    price:2391
    
    },

]

function append_cards(object){

    object.forEach((ele) => {
      

        let container1_vw=document.createElement("div");
        container1_vw.className="container1_vw"
        container1_vw.addEventListener("click",()=>{
            alert("code functions")
        })


        let cont1_vw=document.createElement("div");
        cont1_vw.className="cont1_vw";


        let img_H_image = document.createElement("img");
        img_H_image.src=ele.img;
        img_H_image.id="hotel_image_vw";

        let cont2_vw=document.createElement("div");
        cont2_vw.className="cont2_vw";

        let hotelName_vw=document.createElement("a");
        hotelName_vw.className="hotelName_vw";
        hotelName_vw.innerText=ele.name;

        let sponsor=document.createElement("span");
        sponsor.className="sponsor";
        sponsor.innerText="Sponsored"

        // container 1 for hotel brand and button 


        let cont2_1_vw=document.createElement("div");
        cont2_1_vw.className="cont2-1_vw";

        let cont1_1_vw = document.createElement("div");
        cont1_1_vw.className="cont1-1_vw";

        let img_brand_logo=document.createElement("img");
        img_brand_logo.id="img_brand_logo";
        img_brand_logo.src="https://static.tacdn.com/img2/branding/hotels/Agoda.png" ;

        let price=document.createElement("p");
        price.className="Price_vw";
        price.innerText=ele.price+" Rs.";

        let button=document.createElement("button");
        button.innerText="View Deal";
        button.className="view_deal_btn";;


        // container 2 hotel services 

        let cont1_2_vw=document.createElement("div");
        cont1_2_vw.className="cont1-2_vw";

        let service=document.createElement("div");
        service.className="service";

        let service_img=document.createElement("img");
        service_img.src="services.jpg";


        // container 3 for review and all 


       let  cont1_3_vw =document.createElement("div");
       cont1_3_vw.className="cont1-3_vw";

       let review_img=document.createElement("div");
       review_img.className="review_img";

       let review_image=document.createElement("img");
       review_image.src="review.jpg";

       let review2=document.createElement("img");
       review2.src="reviewImg.jpg";
       review2.id="review2";

       let c_review=document.createElement("div");
       c_review.className="c_review";
       c_review.className="customer_review";
       c_review.innerText=ele.rev;

       let appendDiv=document.querySelector(".appendingCards")

       cont1_vw.append(img_H_image,)
       
       cont1_1_vw .append(img_brand_logo,price,button)

       cont1_2_vw.append(service );

       cont2_1_vw.append(cont1_1_vw,cont1_2_vw)
       
       cont2_vw.append(hotelName_vw,sponsor,cont2_1_vw, cont1_3_vw)
        
       
       service.append(service_img);
       
       
       review_img.append(review_image)
       
       cont1_3_vw .append(review_img,review2,c_review)
       
       
       
       
       
       container1_vw.append(cont1_vw,cont2_vw,)

       appendDiv.append( container1_vw)


  });

}

append_cards(object);

let room_count=0;

document.querySelector(".plus_btn_vw").addEventListener("click",function(){
  roomCount();
})

document.querySelector(".minus_btn_vw").addEventListener("click",function(){
  Decrease_roomCount();
})

function roomCount(){
   room_count++;
   console.log(room_count);
   let display=document.getElementById("num");
   display.innerText=room_count;
}

function Decrease_roomCount(){

  room_count--;
  let display=document.getElementById("num");
   display.innerText=room_count;

}




document.querySelector(".guest").addEventListener("click",function(){
    let div=document.querySelector(".adding_guest_vw");
    div.style.display="flex";
 });

 document.querySelector(".cross_button").addEventListener("click",function(){
    let div=document.querySelector(".adding_guest_vw");
    div.style.display="none";

 });


 let getmap=()=>{
           
    let map=document.getElementById("gmap_canvas")

let city=document.getElementById("pj-map").value 
if(city==undefined){
    city="nagpur";
}
else{

map.src=`https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`
}
 }

 getmap();

 

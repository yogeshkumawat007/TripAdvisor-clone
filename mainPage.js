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
   
   
   }

]

function append_cards(object){

    object.forEach((ele) => {
      
        let container1_vw=document.querySelector(".container1_vw");

        let img_H_image = document.createElement("img");
        img_H_image.src=ele.img;
        img_H_image.id="hotel_image_vw";

        
    });

}

append_cards(object);
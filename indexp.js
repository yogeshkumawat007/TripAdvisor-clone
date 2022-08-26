let places = [
    {
        name :"1. ISKCON Temple Bangalore",
        img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/a2/b1/90/front-view-of-temple.jpg?w=500&h=400&s=1",
        title:"Religious Sites",
        des:"Open now",
        para :"The garden has trees that are over 100 years old. It also has an aquarium and a lake. Rose garden is one of the other attractions."

    },
    {
        name :"2. Cubbon Park",
        img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/d8/95/4b/excellent-for-morning.jpg?w=500&h=-1&s=1",
        title:"Parks",
        des:"Open now",
        para :"Cubbon Park stands adorned with trees, flowerbeds and rolling lawns. For those who are looking for some moments of peace and solitude in Bangalore"

    },
    {
        name :"3. Wonderla Amusement Park",
        img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/47/a2/f7/wonderla-amusement-park.jpg?w=500&h=400&s=1",
        title:"Amusement & Theme Parks",
        des:"Cubbon Park"

    },
    
    {
        name :"4. Lalbagh Botanical Garden",
        img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/7d/47/f4/lalbagh-botanical-garden.jpg?w=500&h=400&s=1",
        title:"Gardens",
        des:"J.P.Nagar",
        para :"The garden has trees that are over 100 years old. It also has an aquarium and a lake. Rose garden is one of the other attractions."

    },
    {
        name :"5. UB City",
        img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/e0/d9/9f/ub-city.jpg?w=500&h=400&s=1",
        title:"Shopping Malls",
        des:"Rich Mond Town . Open now",
        para :"The garden has trees that are over 100 years old. It also has an aquarium and a lake. Rose garden is one of the other attractions."

    },
    {
        name :"6. Visvesvaraya Industrial and Technological Museum ",
        img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/d3/6d/64/img-20161201-164523-hdr.jpg?w=500&h=-1&s=1",
        title:"Science Museums",
        des:"Open now",
        para :"The garden has trees that are over 100 years old. It also has an aquarium and a lake. Rose garden is one of the other attractions."

    },
    {
        name :"7. Bannerghatta National Park",
        img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/32/2a/81/bannerghatta-national.jpg?w=500&h=400&s=1",
        title:"Nature & Wildlife Areas",
        des:"Open now",
        para :"The garden has trees that are over 100 years old. It also has an aquarium and a lake. Rose garden is one of the other attractions."

    },

    {
        name :"8. Commercial Street ",
        img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/32/5d/bf/img-20181228-wa0063-largejpg.jpg?w=500&h=400&s=1",
        title:"Neighbourhood",
        des:"shivaji nagar / commercial street",
        para :"The garden has trees that are over 100 years old. It also has an aquarium and a lake. Rose garden is one of the other attractions."


    },
    {
        name :"9. Bull Temple",
        img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/1f/a2/0b/bangalore.jpg?w=500&h=-1&s=1",
        title:"Architectural Buildings • Religious Sites ",
        des:"Open now",
        para :"The garden has trees that are over 100 years old. It also has an aquarium and a lake. Rose garden is one of the other attractions."

    },
    {
        name :"10.Phoenix MarketCity ",
        img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/06/cc/3f/phoenix-marketcity.jpg?w=500&h=-1&s=1",
        title:"Shopping Malls",
        des:"Open now",
        para :"Cubbon Park stands adorned with trees, flowerbeds and rolling lawns. For those who are looking for some moments of peace and solitude in Bangalore"

    },
    {
        name :"11. Dodda Ganapathi Temple ",
        img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/67/f9/a5/dodda-ganapathi-temple.jpg?w=500&h=400&s=1",
        title:" Religious sites",
        des:"Bagauagadhi .Open now",
        para :"Cubbon Park stands adorned with trees, flowerbeds and rolling lawns. For those who are looking for some moments of peace and solitude in Bangalore"

    },
    {
        name :"12. Mahatma Gandhi (MG) Road ",
        img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/eb/e3/8a/2015thebestnewyearpartyplacesi.jpg?w=500&h=400&s=1",
        title:"Points of Interest & Landmarks",
        des:"Open now",
        para :"Cubbon Park stands adorned with trees, flowerbeds and rolling lawns. For those who are looking for some moments of peace and solitude in Bangalore"
    },
   
]

let container = document.getElementById("container_p");
function append(arg){

    arg.forEach((ele)=>{
        
        let div = document.createElement("div");

        let name = document.createElement("h3");
        name.innerText= ele.name;

        let circle = document.createElement("div");
        circle.setAttribute("class","cir_main");
        let child1 = document.createElement("div");
        
        let child2 = document.createElement("div");
    
        let child3 = document.createElement("div");
        
        let child4 = document.createElement("div");
        let child5 = document.createElement("div");

      circle.append(child1,child2,child3,child4,child5);

      let review = document.createElement("div");
      review.setAttribute("class","rev");
      let rg = document.createElement("img");
      rg.src= " https://media-cdn.tripadvisor.com/media/photo-l/1a/f6/e4/2d/default-avatar-2020-48.jpg"
      let rp = document.createElement("h5");
      rp.innerText = "By Victorsrinivas";
      review.append(rg,rp)


    let img = document.createElement("img");
        img.src = ele.img;
    let title = document.createElement("p");
    title.innerText = ele.title;

    let des = document.createElement("p");
    des.innerText = ele.des;

    let para = document.createElement("p");
    para.innerText = ele.para;

    let divicon = document.createElement("div");
    divicon.setAttribute("class","divicon");


    let icon = document.createElement("span");
    icon.setAttribute("class","material-symbols-outlined");
    icon.innerText = " favorite";
    divicon.append(icon);
    


        div.append(img, divicon,name, circle,title,des,review,para);
        container.append(div);

    })
}

append(places);



// faq



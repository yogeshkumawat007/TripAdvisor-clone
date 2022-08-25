let places = [
    {
        name :"1. ISKCON Temple Bangalore",
        img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/a2/b1/90/front-view-of-temple.jpg?w=500&h=400&s=1",
        title:"Religious Sites"

    },
    {
        name :"2. Cubbon Park",
        img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/d8/95/4b/excellent-for-morning.jpg?w=500&h=-1&s=1",
        title:"Parks"

    },
    {
        name :"3. Wonderla Amusement Park",
        img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/47/a2/f7/wonderla-amusement-park.jpg?w=500&h=400&s=1",
        title:"Amusement & Theme Parks"

    },
    
    {
        name :"4. Lalbagh Botanical Garden",
        img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/7d/47/f4/lalbagh-botanical-garden.jpg?w=500&h=400&s=1",
        title:"Gardens"

    },
    {
        name :"5. UB City",
        img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/e0/d9/9f/ub-city.jpg?w=500&h=400&s=1",
        title:"Shopping Malls"

    },
    {
        name :"6. Visvesvaraya Industrial and Technological Museum ",
        img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/d3/6d/64/img-20161201-164523-hdr.jpg?w=500&h=-1&s=1",
        title:"Science Museums"

    },
    {
        name :"7. Bannerghatta National Park",
        img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/32/2a/81/bannerghatta-national.jpg?w=500&h=400&s=1",
        title:"Nature & Wildlife Areas"

    },

    {
        name :"8. Commercial Street ",
        img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/32/5d/bf/img-20181228-wa0063-largejpg.jpg?w=500&h=400&s=1",
        title:"Neighbourhood"

    },
    {
        name :"9. Bull Temple",
        img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/1f/a2/0b/bangalore.jpg?w=500&h=-1&s=1",
        title:"Architectural Buildings • Religious Sites "

    },
    {
        name :"10.Phoenix MarketCity ",
        img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/06/cc/3f/phoenix-marketcity.jpg?w=500&h=-1&s=1",
        title:"Shopping Malls"

    },
    {
        name :"11. Dodda Ganapathi Temple ",
        img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/67/f9/a5/dodda-ganapathi-temple.jpg?w=500&h=400&s=1",
        title:"Basavangudi"

    },
    {
        name :"6. Mahatma Gandhi (MG) Road ",
        img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/eb/e3/8a/2015thebestnewyearpartyplacesi.jpg?w=500&h=400&s=1",
        title:"Points of Interest & Landmarks"

    },
   
]

let container = document.getElementById("container_p");
function append(arg){

    arg.forEach((ele)=>{
        
        let div = document.createElement("div");

        let name = document.createElement("h3");
        name.innerText= ele.name;

        let img = document.createElement("img");
        img.src = ele.img;
        let title = document.createElement("p");
    title.innerText = ele.title;

        div.append(img,name,title);
        container.append(div);

    })
}

append(places);




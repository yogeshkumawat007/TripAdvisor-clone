function addReview(){
    console.log("add Review")
}


function addTrips(){
    console.log("add Trips")
}


function addAlerts(){
    console.log("add Alerts")
}


function signup(){
    // console.log("Do sign up Now")
    window.location.href = "/email.html"
}

let nickname = JSON.parse(localStorage.getItem("nickName")) || [];
// console.log(nickname)
// console.log(nickname.length)

if ( nickname.length >= 1 ){

    let namePaste = document.getElementById("navbar_signIn_yogi");

        nickname.forEach(function(elem){
        namePaste.innerText = elem.nickName;

    })
}



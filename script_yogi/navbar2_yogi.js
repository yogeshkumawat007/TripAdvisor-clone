let searchCityName = document.getElementById("search_city_name");
searchCityName.addEventListener("keypress", function(event) {

    if ( event.key === "Enter" ){
        console.log(searchCityName.value)

        let city = searchCityName.value;

        localStorage.setItem("cityName",JSON.stringify(city))
    }
})


function hotels(){
    console.log("add path to hotels page")
}

function ThingsToDo(){
    console.log("add path to things to do page")
}

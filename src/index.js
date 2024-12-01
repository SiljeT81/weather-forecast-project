let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", changeCityName);

function changeCityName(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-city");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = searchInput.value;
}

console.log(axios);
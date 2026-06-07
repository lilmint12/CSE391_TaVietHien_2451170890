const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const loading = document.getElementById("loading");
const weather = document.getElementById("weather");
const error = document.getElementById("error");
const historyDiv = document.getElementById("history");

searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();

    if(city){
        getWeather(city);
    }
});
async function getWeather(city) {
    try {
        showLoading();

        const res = await fetch(
            `https://wttr.in/${city}?format=j1`
        );

        if (!res.ok) {
            throw new Error("Không tìm thấy thành phố");
        }

        const data = await res.json();

        renderWeather(data);

        saveHistory(city);

    } catch (err) {
        showError(err.message);
    }
}
function renderWeather(data) {

    hideLoading();

    const current = data.current_condition[0];

    weather.innerHTML = `
        <h2>${current.temp_C}°C</h2>
        <p>Độ ẩm: ${current.humidity}%</p>
        <p>${current.weatherDesc[0].value}</p>
        <img src="${current.weatherIconUrl[0].value}">
    `;
}
function showLoading() {
    loading.classList.remove("hidden");
    weather.innerHTML = "";
    error.innerHTML = "";
}

function hideLoading() {
    loading.classList.add("hidden");
}

function showError(msg) {
    hideLoading();
    error.innerHTML = msg;
}
function saveHistory(city){

    let history =
        JSON.parse(localStorage.getItem("history")) || [];

    history = history.filter(c => c !== city);

    history.unshift(city);

    history = history.slice(0,5);

    localStorage.setItem(
        "history",
        JSON.stringify(history)
    );

    renderHistory();
}
function renderHistory(){

    const history =
        JSON.parse(localStorage.getItem("history")) || [];

    historyDiv.innerHTML = history
        .map(city =>
            `<button class="history-btn">
                ${city}
             </button>`
        )
        .join("");

    document.querySelectorAll(".history-btn")
        .forEach(btn => {
            btn.onclick = () =>
                getWeather(btn.textContent.trim());
        });
}
renderHistory();

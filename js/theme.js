document.getElementById('sun-icon').addEventListener('click', () => {
    changeTheme('light');
});

document.getElementById('moon-icon').addEventListener('click', () => {
    changeTheme('dark');
});

function changeTheme(theme) {
    const sunCircle = document.querySelector('#sun-icon circle');
    const moonCircle = document.querySelector('#moon-icon circle');
    const sunImage = document.getElementById('sun-image');
    const moonImage = document.getElementById('moon-image');
    const body = document.body;

    if (theme === 'light') {
        sunCircle.setAttribute('fill', '#0A3871'); 
        sunImage.setAttribute('href', './assets/image/2682848_day_forecast_sun_sunny_weather_icon.png');

        moonCircle.setAttribute('fill', 'white'); 
        moonImage.setAttribute('href', './assets/image/8726101_moon_icon.png'); 

        body.setAttribute('data-theme', 'light'); 
    } else if (theme === 'dark') {
        sunCircle.setAttribute('fill', 'white'); 
        sunImage.setAttribute('href', './assets/image/blue_sun_sunny_weather_icon.png'); 

        moonCircle.setAttribute('fill', '#0A3871'); 
        moonImage.setAttribute('href', './assets/image/white_moon_icon.png'); 

        body.setAttribute('data-theme', 'dark');
    }
}


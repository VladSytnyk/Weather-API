function f1() {
    let select = document.querySelector('select').value;
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + select + '&appid=8b55bac3b6ee537f283a48ba80a2b111')
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            console.log(data);
            document.querySelector('.country').textContent = data.name;
            document.querySelector('.city').textContent = data.sys.country;
            document.querySelector('.temp').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
            document.querySelector('.clouds').textContent = data.weather[0]['description'];

            document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
            document.querySelector('.speed').innerHTML = data.wind['speed'] + ' speed';
            document.querySelector('.press').innerHTML = data.main['pressure'] + ' pressure';
            document.querySelector('.humidity').innerHTML = data.main['humidity'] + ' humidity';

        })
        .catch(function () {
            // catch any errors
        });
}

document.querySelector('.button-primary').onclick = f1;





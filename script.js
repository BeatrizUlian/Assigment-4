let wd;

function render(response) {
    var currentLocation = response.name;
    var currentWeather = response.weather[0].description;
    var currentTemp = response.main.temp;
    var high = response.main.temp_max;
    var low = response.main.temp_min;
    var brokenClouds = $('<img>').attr('src', 'images/broken-clouds.png');
    var rain = $('<img>').attr('src', 'images/rain.png');
    var snow = $('<img>').attr('src', 'images/snow.png');
    var clearSky = $('<img>').attr('src', 'images/clearsky.svg');
    var overcastClouds = $('<img>').attr('src', 'images/overcastClouds.png');
    var scatteredClouds = $('<img>').attr('src', 'images/scatteredClouds.png');
    var moderateRain = $('<img>').attr('src', 'images/moderateRain.png');



    $("#local").html(currentLocation);
    $("#temperatura").html(currentTemp);
    $("#high").html("High: " + high);
    $("#low").html("Low: " + low);
    $("#currentWeather").html(currentWeather);

    if (currentTemp < 5) {
        $("body").css("background", "#696FAB")
        $("body").css("background", "#696FAB")
    }
    if (currentTemp < 10 && currentTemp > 5) {
        $("body").css("background", "#D1DAE9")
        $("#temperatura").css("color", "#192356")
        // $('#currentWeather').append(brokenClouds);

    }


    if (currentTemp > 10 && currentTemp < 15) {
        $("body").css("background", "#F8C3CB")
    }

    if (currentTemp > 15 && currentTemp < 25) {
        $("body").css("background", "#FEC689")
    }

    if (currentTemp > 25 && currentTemp < 35) {
        $("body").css("background", "#FF9B24")
        $("#temperatura").css("color", "#7F3A0A")
        $("#local").css("color", "#7F3A0A")

    }

    if (currentWeather == "broken clouds") {
        $('#currentWeather').append(brokenClouds);

    }

    if (currentWeather == "rain") {
        $('#currentWeather').append(rain);
    }

    if (currentWeather == "snow") {
        $('#currentWeather').append(snow);
    }
    if (currentWeather == "clear sky") {
        $('#currentWeather').append(clearSky);
    }
    if (currentWeather == "overcast clouds") {
        $('#currentWeather').append(overcastClouds);
    }
    if (currentWeather == "scattered clouds") {
        $('#currentWeather').append(scatteredClouds);
    }
  if (currentWeather == "moderate rain") {
    $('#currentWeather').append(moderateRain);
}

$(function () {
    var loc;
    $.getJSON('https://ipinfo.io', function (ipAddress) {
        console.log(ipAddress)
        loc = ipAddress.loc.split(",");
        console.log(loc);

        //  https://fcc-weather-api.glitch.me
        $.getJSON(
            'https://fcc-weather-api.glitch.me/api/current?units=imperial&lat=' + loc[0] + '&lon=' + loc[1], function (response) {
                wd = response;
                console.log(response)
                // https://openweathermap.org/weather-conditions
                // https://openweathermap.org/img/wn/10d@2x.png
                // var iconTemp = "https://openweathermap.org/img/wn/" + response.weather[1].icon + "@2x.png";
                // $('#icon').prepend('<img src=' + iconTemp + ' >')  
                render(response);
            })
    });
})
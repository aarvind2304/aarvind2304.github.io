


const generateweather = async function (event) {

    event.preventDefault();

    var rootImg = $("#root");
    rootImg.empty();

    console.log("test");
    var lat = "" + $("#latitude").val();
    var long =  "" +document.getElementById("longitude").value;
    const result = await axios({
        method: 'GET',
        url: 'https://weatherbit-v1-mashape.p.rapidapi.com/current',
        params: {lon: long, lat: lat, units: 'imperial', lang: 'en'},
        headers: {
          'x-rapidapi-key': '36aa2a1ac6msh0df9f4e9860a347p12561bjsn88032da9b9aa',
          'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com'
        }
      
    });

    let array = {};
    array =result.data.data;
    console.log(array);
    console.log(array[0].temp)


    let area = $(`


    <table class="table is-hoverable">
    <thead>
      <tr>
        <th>Attribute</th>
        <th></th>
        <th></th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Temperature</td>
        <td></td>
        <td></td>
        <td> ${array[0].temp} </td>
      </tr>
      <tr>
        <td>TimeZone</td>
        <td></td>
        <td></td>
        <td>${array[0].timezone}</td>
      </tr>
      <tr>
        <td>Weather</td>
        <td></td>
        <td></td>
        <td>${array[0].weather.description}</td>
      </tr>
      <tr>
        <td>Humidity%</td>
        <td></td>
        <td></td>
        <td>${array[0].rh}</td>
      </tr>
      <tr>
        <td>Cloud Coverage</td>
        <td></td>
        <td></td>
        <td>${array[0].clouds}</td>
      </tr>
    </tbody>
  </table>
    
    `);

    rootImg.append(area);
  
}

$(document).ready(function () {

    let body = $("body");

    body.on("click", "#submitCoord", generateweather);

});
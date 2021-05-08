
function maketable(array) {
    console.log(array);
    let table = $(`
    
    <table class="table">
    <thead>
        <tr>
            <th><abbr title="Position">Pos</abbr></th>
            <th>Western Conference</th>
            <th><abbr title="Played">Pld</abbr></th>
            <th><abbr title="Won">W</abbr></th>
            <th><abbr title="Lost">L</abbr></th>
            <th>Playoffs</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>1</th>
            <td>
                ${array[0][0].team.name}
            </td>
            <td>${array[0][0].games.played}</td>
            <td>${array[0][0].games.win.total}</td>
            <td>${array[0][0].games.lose.total}</td>
            <td><span class="icon is-small">
                <i class="fas fa-check"></i>
            </span></td>

        </tr>
        <tr>
            <th>2</th>
            <td>
            ${array[0][1].team.name}
        </td>
        <td>${array[0][1].games.played}</td>
        <td>${array[0][1].games.win.total}</td>
        <td>${array[0][1].games.lose.total}</td>
            <td><span class="icon is-small">
                <i class="fas fa-check"></i>
            </span></td>
 
        </tr>
        <tr>
            <th>3</th>
            <td>
            ${array[0][2].team.name}
        </td>
        <td>${array[0][2].games.played}</td>
        <td>${array[0][2].games.win.total}</td>
        <td>${array[0][2].games.lose.total}</td>
            <td><span class="icon is-small">
                <i class="fas fa-check"></i>
            </span></td>

        </tr>
        <tr>
        <th>4</th>
        <td>
        ${array[0][3].team.name}
    </td>
    <td>${array[0][3].games.played}</td>
    <td>${array[0][3].games.win.total}</td>
    <td>${array[0][3].games.lose.total}</td>
        <td>
                <span class="icon is-small">
                <i class="fas fa-check"></i>
            </span>
        </td>

    </tr>
    <tr>
        <th>5</th>
        <td>
        ${array[0][4].team.name}
    </td>
    <td>${array[0][4].games.played}</td>
    <td>${array[0][4].games.win.total}</td>
    <td>${array[0][4].games.lose.total}</td>
        <td>
        <span class="icon is-small">
                <i class="fas fa-check"></i>
            </span</td>

    </tr>
        <tr class="">
            <th>6</th>
            <td>
            ${array[0][5].team.name}
        </td>
        <td>${array[0][5].games.played}</td>
        <td>${array[0][5].games.win.total}</td>
        <td>${array[0][5].games.lose.total}</td>
            <td>
            <span class="icon is-small">
                <i class="fas fa-check"></i>
            </span</td>

        </tr>
        <tr>
            <th>7</th>
            <td>
            ${array[0][6].team.name}
        </td>
        <td>${array[0][6].games.played}</td>
        <td>${array[0][6].games.win.total}</td>
        <td>${array[0][6].games.lose.total}</td>
            <td>
            <span class="icon is-small">
                <i class="fas fa-check"></i>
            </span</td>

        </tr>
        <tr>
            <th>8</th>
            <td>
            ${array[0][7].team.name}
        </td>
        <td>${array[0][7].games.played}</td>
        <td>${array[0][7].games.win.total}</td>
        <td>${array[0][7].games.lose.total}</td>
            <td>
            <span class="icon is-small">
                <i class="fas fa-check"></i>
            </span</td>

        </tr>
        <tr>
            <th>9</th>
            <td>
            ${array[0][8].team.name}
        </td>
        <td>${array[0][8].games.played}</td>
        <td>${array[0][8].games.win.total}</td>
        <td>${array[0][8].games.lose.total}</td>
            <td></td>

        
        </tr>
        <tr>
            <th>10</th>
            <td>
                ${array[0][9].team.name}
            </td>
            <td>${array[0][9].games.played}</td>
            <td>${array[0][9].games.win.total}</td>
            <td>${array[0][9].games.lose.total}</td>
            <td></td>

        </tr>
        <tr>
            <th>11</th>
            <td>
                ${array[0][10].team.name}
            </td>
            <td>${array[0][10].games.played}</td>
            <td>${array[0][10].games.win.total}</td>
            <td>${array[0][10].games.lose.total}</td>
            <td></td>


         
        </tr>
        <tr>
            <th>12</th>
            <td>
            ${array[0][11].team.name}
        </td>
        <td>${array[0][11].games.played}</td>
        <td>${array[0][11].games.win.total}</td>
        <td>${array[0][11].games.lose.total}</td>
            <td></td>

        </tr>
        <tr>
            <th>13</th>
            <td>
            ${array[0][12].team.name}
        </td>
        <td>${array[0][12].games.played}</td>
        <td>${array[0][12].games.win.total}</td>
        <td>${array[0][12].games.lose.total}</td>
            <td></td>

        </tr>
        <tr>
            <th>14</th>
            <td>
                ${array[0][13].team.name}
            </td>
            <td>${array[0][13].games.played}</td>
            <td>${array[0][13].games.win.total}</td>
            <td>${array[0][13].games.lose.total}</td>
            <td></td>

            
        </tr>
        <tr>
            <th>15</th>
            <td>
                ${array[0][14].team.name}
            </td>
            <td>${array[0][14].games.played}</td>
            <td>${array[0][14].games.win.total}</td>
            <td>${array[0][14].games.lose.total}</td>
            <td></td>

           
        </tr>

    </tbody>
</table>`)


    return table;
}

$(document).ready(function () {


    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api-basketball.p.rapidapi.com/standings?league=12&season=2020-2021&stage=NBA&group=Western%20Conference",
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "36aa2a1ac6msh0df9f4e9860a347p12561bjsn88032da9b9aa",
            "x-rapidapi-host": "api-basketball.p.rapidapi.com"
        }
    };
    let cont = $("#tableCont");

    $.ajax(settings).done(function (response) {

        var array = response.response;

        cont.append(maketable(array));


    });
    const settings2 = {
        "async": true,
        "crossDomain": true,
        "url": "https://api-basketball.p.rapidapi.com/standings?league=12&season=2020-2021&stage=NBA&group=Eastern%20Conference",
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "36aa2a1ac6msh0df9f4e9860a347p12561bjsn88032da9b9aa",
            "x-rapidapi-host": "api-basketball.p.rapidapi.com"
        }
    };


    $.ajax(settings2).done(function (response) {

        var array = response.response;

        cont.append(maketable(array));
    });




    $(".navbar-burger").click(function () {

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");


    });




});
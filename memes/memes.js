
const generatememe = async function (event) {
    event.preventDefault();

    var rootImg = $("#memeHolder");
    rootImg.empty();

    var toptext = $("#topText").val();
    var bottomtext =  document.getElementById("bottomText").value;
    var choice =document.getElementById("memeType").value;

    console.log(toptext);
    const result = await axios({
        method: 'GET',
        url: 'https://ronreiter-meme-generator.p.rapidapi.com/meme',
        params: {
            meme: choice,
            bottom: bottomtext,
            top: toptext,
            font: 'Impact',
            font_size: '50'
        },
        headers: {
            'x-rapidapi-key': '36aa2a1ac6msh0df9f4e9860a347p12561bjsn88032da9b9aa',
            'x-rapidapi-host': 'ronreiter-meme-generator.p.rapidapi.com'
        },
        responseType: 'arraybuffer'
    });

    let image = btoa(
        new Uint8Array(result.data)
            .reduce((data, byte) => data + String.fromCharCode(byte), '')
    );

    


        console.log("first");
    const data = `<img src="data:image/jpeg;base64,` + image + `">`;

    rootImg.append(data);


}

$(document).ready(function () {



    let memecont = $("body");

    memecont.on("click", "#submitMeme", generatememe);
    
});
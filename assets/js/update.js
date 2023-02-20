let runScripts = () => {

    let chart_bars = document.getElementById("chart-bars");
    console.log(chart_bars);
    
    let icons = document.getElementsByTagName("i");
    console.log(icons);

    let cards = document.getElementsByClassName("card");
    console.log;


}
// runScripts();


let modifyText = () => {

    let listOfP = document.getElementsByTagName("p");
    let elementP = listOfP[3];
    console.log(elementP);
    elementP.innerHTML = 'Dinero actual';

    let listOfH4 = document.getElementsByTagName("h4");
    let elementH4 = listOfH4[0];
    elementH4.innerHTML = '$301k';




}
modifyText();
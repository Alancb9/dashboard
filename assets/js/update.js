let runScripts = () => {

    let chart_bars = document.getElementById("chart-bars");
    console.log(chart_bars);
    
    let icons = document.getElementsByTagName("i");
    console.log(icons);

    let cards = document.getElementsByClassName("card");
    console.log;


}
runScripts();


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

let updateData = () =>{

    let data = [{
        title: 'Usuarios actuales',
        value: '3,200'
      },
      {
        title: 'Nuevos clientes',
        value: '4,215'
      },
      {
        title: 'Ventas',
        value: '$121,520'
      }];

    let [ users, clients, sales ] = data;

    let { title: title_users , value: value_users } = users;
    let { title: title_clients , value: value_clients } = clients;
    let { title: title_sales , value: value_sales } = sales;

    let message_users = `<p class="text-sm mb-0 text-capitalize">${title_users}</p><h4 class="mb-0">${value_users}</h4>`;
    let message_clients = `<p class="text-sm mb-0 text-capitalize">${title_clients}</p><h4 class="mb-0">${value_clients}</h4>`;
    let message_sales = `<p class="text-sm mb-0 text-capitalize">${title_sales}</p><h4 class="mb-0">${value_sales}</h4>`;

    let listOfElements = document.getElementsByClassName('text-end pt-1');

    let [ , second, third, fourth ] = listOfElements;

    second.innerHTML = message_users;
    third.innerHTML = message_clients;
    fourth.innerHTML = message_sales;

    let cambios = [
        {
          valor_previo: 250,
          valor_actual: 301,
          mensaje_tiempo: 'que la semana anterior'
        },
        {
          valor_previo: 3510,
          valor_actual: 3200,
          mensaje_tiempo: 'que la semana anterior'
        },
        {
          valor_previo: 3920,
          valor_actual: 4215,
          mensaje_tiempo: 'que ayer'
        },
        {
          valor_previo: 110200,
          valor_actual: 121520,
          mensaje_tiempo: 'que ayer'
        }
      ]

    let [dinero_actual, usuarios_actuales, nuevos_clientes, ventas] = cambios;
    let {valor_previo: valor_previo_da, valor_actual: valor_actual_da, mensaje_tiempo: mensaje_tiempo_da} = dinero_actual;
    let {valor_previo: valor_previo_ua, valor_actual: valor_actual_ua, mensaje_tiempo: mensaje_tiempo_ua} = usuarios_actuales;
    let {valor_previo: valor_previo_nc, valor_actual: valor_actual_nc, mensaje_tiempo: mensaje_tiempo_nc} = nuevos_clientes;
    let {valor_previo: valor_previo_ven, valor_actual: valor_actual_ven, mensaje_tiempo: mensaje_tiempo_ven} = ventas;

    let porcentaje_de_cambio_da = (valor_actual_da - valor_previo_da)*100/valor_previo_da;
    let porcentaje_de_cambio_ua = (valor_actual_ua - valor_previo_ua)*100/valor_previo_ua;
    let porcentaje_de_cambio_nc = (valor_actual_nc - valor_previo_nc)*100/valor_previo_nc;
    let porcentaje_de_cambio_ven = (valor_actual_ven - valor_previo_ven)*100/valor_previo_ven;

    let clase_cambio_da;
    let clase_cambio_ua;
    let clase_cambio_nc;
    let clase_cambio_ven;

    if (porcentaje_de_cambio_da > 0) {
        clase_cambio_da = 'text-success';
        porcentaje_de_cambio_da = "+" + Math.round(porcentaje_de_cambio_da).toString() + "%";
    } else {
        clase_cambio_da = 'text-danger';
        porcentaje_de_cambio_da = Math.round(porcentaje_de_cambio_da).toString() + "%";
    }
    if (porcentaje_de_cambio_ua > 0) {
        clase_cambio_ua = 'text-success';
        porcentaje_de_cambio_ua = "+" + (Math.round(porcentaje_de_cambio_ua)).toString() + "%";
    } else {
        clase_cambio_ua = 'text-danger';
        porcentaje_de_cambio_ua = (Math.round(porcentaje_de_cambio_ua)).toString() + "%";
    }
    if (porcentaje_de_cambio_nc > 0) {
        clase_cambio_nc = 'text-success';
        porcentaje_de_cambio_nc = "+" + (Math.round(porcentaje_de_cambio_nc)).toString() + "%";
    } else {
        clase_cambio_nc = 'text-danger';
        porcentaje_de_cambio_nc = (Math.round(porcentaje_de_cambio_nc)).toString() + "%";
    }
    if (porcentaje_de_cambio_ven > 0) {
        clase_cambio_ven = 'text-success';
        porcentaje_de_cambio_ven = "+" + (Math.round(porcentaje_de_cambio_ven)).toString() + "%";
    } else {
        clase_cambio_ven = 'text-danger';
        porcentaje_de_cambio_ven = (Math.round(porcentaje_de_cambio_ven)).toString() + "%";
    }

    let mensaje_da = `<p class="mb-0"><span class="text-sm ${clase_cambio_da} font-weight-bolder"> ${porcentaje_de_cambio_da} </span> ${mensaje_tiempo_da} </p>`
    let mensaje_ua = `<p class="mb-0"><span class="text-sm ${clase_cambio_ua} font-weight-bolder"> ${porcentaje_de_cambio_ua} </span> ${mensaje_tiempo_ua} </p>`
    let mensaje_nc = `<p class="mb-0"><span class="text-sm ${clase_cambio_nc} font-weight-bolder"> ${porcentaje_de_cambio_nc} </span> ${mensaje_tiempo_nc} </p>`
    let mensaje_ven = `<p class="mb-0"><span class="text-sm ${clase_cambio_da} font-weight-bolder"> ${porcentaje_de_cambio_da} </span> ${mensaje_tiempo_da} </p>`

    let lista_elementos = document.getElementsByClassName('card-footer p-3');

    let [primero, segundo, tercero, cuarto] = lista_elementos;

    primero.innerHTML = mensaje_da;
    segundo.innerHTML = mensaje_ua;
    tercero.innerHTML = mensaje_nc;
    cuarto.innerHTML = mensaje_ven;
    
}
updateData();
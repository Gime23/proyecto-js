
let carrito= 0;
let continuar= true;


while (continuar) {
    let eleccion = prompt (
        "ingresa la opcion que quieras:\n 1)juego de vasos \n 2)asadera \n 3)caja lapiz color \n 4) taladro \n 5) ver total carrito");

switch (eleccion) {
    case "1":
        carrito = carrito + 150;
        console.log("ofertar juego de vasos");
        
        break;
    case "2":
        carrito = carrito + 300;
        console.log("ofertar asadera");
        
        break;

    case "3":
        carrito = carrito + 80;    
        console.log("ofertar caja de lapices");

        break;

    case "4":
        carrito = carrito + 1500;
        console.log("ofertar taladro");

        break;

    case "5":
        console.log("el total del carrito:$" + carrito);
        alert("el tal de las ofertas hasta el momento:$" + carrito);   
        
        break;


    default:
        console.log("te equivocaste de tecla");
        break;
}        

}
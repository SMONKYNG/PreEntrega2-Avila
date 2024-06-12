

let opcion = parseInt(prompt("Visualizar ventas por producto 🕶️\n1-Cambio de Cristales\n2-Sólo Armazón\n3- Lentes de Descanso\n4-Lentes Ópticos\n5-Lentes de Sol\n6-Lentes Ópticos de Sol"));

function filtrarPorLente(lentes){
    let filtrados=[];
    if(lentes == 1){
        filtrados = clientes.filter(cliente => cliente.producto == "Cambio de Cristales")
    }else if(lentes == 2){
        filtrados = clientes.filter(cliente => cliente.producto == "Sólo Armazón")
    }else if(lentes == 3){
        filtrados = clientes.filter(cliente => cliente.producto == "Lentes de Descanso")
    }else if(lentes == 4){
        filtrados = clientes.filter(cliente => cliente.producto == "Lentes Ópticos")
    }else if(lentes == 5){
        filtrados = clientes.filter(cliente => cliente.producto == "Lentes de Sol")
    }else if(lentes == 6){
        filtrados = clientes.filter(cliente => cliente.producto == "Lentes Ópticos de Sol")
    }else{
        alert("Código de producto inválido");
    }
    console.table(filtrados);
}
filtrarPorLente(opcion);

let nombreCliente = prompt("Ingresa el nombre del cliente a buscar 👁️");
function buscarCliente(nombreCliente){

    let clienteEncontrado = clientes.find(cliente => cliente.nombre.toLowerCase().includes(nombreCliente.toLowerCase()));

    if(clienteEncontrado !== undefined ){
        alert(`El cliente encontrado es: \nID:${clienteEncontrado.id} \nNombre:${clienteEncontrado.nombre} \nCompra: ${clienteEncontrado.producto} \nValor compra: $${clienteEncontrado.precio} \nFecha Compra:${clienteEncontrado.fecha}`);
    }else{
        alert("Tarea no encontrada");
    }
}

if ( nombreCliente !== ""){
    buscarCliente(nombreCliente);
} else{
    alert("No ingresaste ningún nombre a buscar")
}

function contarLentes(){
    alert("Cantidad de ventas totales hasta ahora: "+clientes.length);
}contarLentes()

let tipoLente = prompt("Ingresa el tipo de lente para calcular la suma de ventas 🕶️\n1-Cambio de Cristales\n2-Sólo Armazón\n3- Lentes de Descanso\n4-Lentes Ópticos\n5-Lentes de Sol\n6-Lentes Ópticos de Sol");

if(tipoLente == ""){
    alert("Ingresa un valor valido");
    tipoLente()
}else if(tipoLente == 1){
    tipoLente = "Cambio de Cristales"
}else if(tipoLente == 2){
    tipoLente = "Sólo Armazón"
}else if(tipoLente == 3){
    tipoLente = "Lentes de Descanso"
}else if(tipoLente == 4){
    tipoLente = "Lentes Ópticos"
}else if(tipoLente == 5){
    tipoLente = "Lentes de Sol"
}else if(tipoLente == 6){
    tipoLente = "Cambio de Cristales"
}


function sumarVentasLentes(clientes, tipoLente) {
    const lentesFiltrados = clientes.filter(cliente => cliente.producto === tipoLente);
    const sumaPrecios = lentesFiltrados.reduce((total, cliente) => total + cliente.precio, 0);
    
    return sumaPrecios;
}


const sumaPreciosTipoElegido = sumarVentasLentes(clientes, tipoLente);

alert(`La suma de los precios de "${tipoLente}" es: $${sumaPreciosTipoElegido}`);
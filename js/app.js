let btnDato = document.getElementById('btnDato')
var signo = document.getElementById('signo')
var tipoDato = document.getElementById('tipoDato')
var descripción = document.getElementById('descripción')
var valor = document.getElementById('valor')
var totalAhorros = document.getElementById('totalAhorros')
var listaDeIngresos = document.getElementById('listaDeIngresos')
var listaDeEgresos = document.getElementById('listaDeEgresos')
var ingresosTotales = document.getElementById('ingresosTnúmero')
var egresosTotales = document.getElementById('egresosTnúmero')
var totalPresupuesto = document.getElementById('totalPresupuesto')

const formatoMonedaARS = (valor)=>{
	return valor.toLocaleString('es-AR',{style:'currency', currency:'ARS', minimumFractionDigits:2})
}

const formatoMonedaEUR = (valor)=>{
	return valor.toLocaleString('es-EU',{style:'currency', currency:'EUR', minimumFractionDigits:2})
}

const formatoMonedaUSD = (valor)=>{
	return valor.toLocaleString('en-US',{style:'currency', currency:'USD', minimumFractionDigits:2})
}


function disable(){
	if(tipoDato.value == 'ahorro'){
		descripción.disabled = true
	}else{
		descripción.disabled = false
	}
}

const crearIngreso = (ingreso)=>{
	let nuevoIngreso = `
						<div class="listaIngresos">
						<p>${descripción.value}</p>
						<p class='pesos pesosIngresos'>+ ${formatoMonedaARS(parseFloat(valor.value))}</p>
						<hr class='línea'>
						</div>
						`
	return nuevoIngreso
}




const crearEgreso = (egreso)=>{
	let nuevoEgreso = `
						<div class="listaEgresos">
						<p>${descripción.value}</p>
						<p class='pesos pesosEgresos'>- ${formatoMonedaARS(parseFloat(valor.value))}</p>
						<hr class='línea'>
						</div>
						`
	return nuevoEgreso
}



let totalAhorro = 0
let totalIngreso = 0
let totalEgreso = 0

let valorUSD = document.getElementById('cambioAusd')
let dólar = 177
let valorEUR = document.getElementById('cambioAeur')
let euro = 212


function calcularUSD(){
	valorUSD.innerHTML = formatoMonedaUSD(totalAhorro/dólar)
}

function calcularEUR(){
	valorEUR.innerHTML = formatoMonedaEUR(totalAhorro/euro)
}

function calcularIngresos(){
	totalIngreso += parseFloat(valor.value)
	return totalIngreso
}

function calcularEgresos(){
	totalEgreso += parseFloat(valor.value)
	return totalEgreso
}

function presupuesto(){
	totalPresupuesto.innerHTML = formatoMonedaARS(totalIngreso - totalEgreso)
}

btnDato.addEventListener('click', function(){
	if(valor.value != ''){
		if(signo.value == 'ingreso' && tipoDato.value == 'presupuesto'){
		listaDeIngresos.innerHTML += crearIngreso()
		calcularIngresos()
		ingresosTotales.innerHTML = formatoMonedaARS(totalIngreso)
		presupuesto()
		descripción.value = ''
		valor.value = ''
	}else if(signo.value == 'egreso' && tipoDato.value == 'presupuesto'){
		listaDeEgresos.innerHTML += crearEgreso()
		calcularEgresos()
		egresosTotales.innerHTML = formatoMonedaARS(totalEgreso)
		presupuesto()
		descripción.value = ''
		valor.value = ''
	}else if(signo.value == 'ingreso' && tipoDato.value == 'ahorro'){
		let ahorroNuevo = parseFloat(valor.value)
		totalAhorro += ahorroNuevo
		totalAhorros.innerHTML = formatoMonedaARS(totalAhorro)
		calcularUSD()
		calcularEUR()
		valor.value = ''
	}else if(signo.value == 'egreso' && tipoDato.value == 'ahorro'){
		let ahorroNuevo = parseFloat(valor.value)
		totalAhorro -= ahorroNuevo
		totalAhorros.innerHTML = formatoMonedaARS(totalAhorro)
		calcularUSD()
		calcularEUR()
		valor.value = ''
	}
	}
})



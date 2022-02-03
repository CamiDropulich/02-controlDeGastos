const dólarPeso = 184
const dólarEuro = 0.85
const dólarKuna = 6.38

const euroPeso = 218
const euroKuna = 7.51
const euroDólar = 1.18

const kunaDólar = 0.16
const kunaEuro = 0.13
const kunaPeso = 29.44

const pesoDólar = 0.005
const pesoEuro = 0.004
const pesoKuna = 0.03

const igual = 1

let importe = document.getElementById('importe')
let moneda1 = document.getElementById('moneda1')
let moneda2 = document.getElementById('moneda2')
let btn = document.getElementById('btn')
let conversión = document.getElementById('conversión')

const formatoMonedaARS = (valor)=>{
	return valor.toLocaleString('es-AR',{style:'currency', currency:'ARS', minimumFractionDigits:2})
}

const formatoMonedaHRK = (valor)=>{
	return valor.toLocaleString('hr-HR',{style:'currency', currency:'HRK', minimumFractionDigits:2})
}

const formatoMonedaEUR = (valor)=>{
	return valor.toLocaleString('es-EU',{style:'currency', currency:'EUR', minimumFractionDigits:2})
}

const formatoMonedaUSD = (valor)=>{
	return valor.toLocaleString('en-US',{style:'currency', currency:'USD', minimumFractionDigits:2})
}


btn.addEventListener('click', function(){
	if(importe.value!=0){
		switch(true){
		case moneda1.value == 'deUSD' && moneda2.value == 'aUSD':
		conversión.innerHTML = formatoMonedaUSD(importe.value*igual)
		break

		case moneda1.value == 'deUSD' && moneda2.value == 'aEUR':
		conversión.innerHTML = formatoMonedaEUR(importe.value*dólarEuro)
		break

		case moneda1.value == 'deUSD' && moneda2.value == 'aHRK':
		conversión.innerHTML = formatoMonedaHRK(importe.value*dólarKuna)
		break

		case moneda1.value == 'deUSD' && moneda2.value == 'aARS':
		conversión.innerHTML = formatoMonedaARS(importe.value*dólarPeso)
		break

		case moneda1.value == 'deEUR' && moneda2.value == 'aUSD':
		conversión.innerHTML = formatoMonedaUSD(importe.value*euroDólar)
		break

		case moneda1.value == 'deEUR' && moneda2.value == 'aEUR':
		conversión.innerHTML = formatoMonedaEUR(importe.value*igual)
		break

		case moneda1.value == 'deEUR' && moneda2.value == 'aHRK':
		conversión.innerHTML = formatoMonedaHRK(importe.value*euroKuna)
		break

		case moneda1.value == 'deEUR' && moneda2.value == 'aARS':
		conversión.innerHTML = formatoMonedaARS(importe.value*euroPeso)
		break

		case moneda1.value == 'deHRK' && moneda2.value == 'aUSD':
		conversión.innerHTML = formatoMonedaUSD(importe.value*kunaDólar)
		break

		case moneda1.value == 'deHRK' && moneda2.value == 'aEUR':
		conversión.innerHTML = formatoMonedaEUR(importe.value*kunaEuro)
		break

		case moneda1.value == 'deHRK' && moneda2.value == 'aARS':
		conversión.innerHTML = formatoMonedaARS(importe.value*kunaPeso)
		break

		case moneda1.value == 'deHRK' && moneda2.value == 'aHRK':
		conversión.innerHTML = formatoMonedaHRK(importe.value*igual)
		break

		case moneda1.value == 'deARS' && moneda2.value == 'aUSD':
		conversión.innerHTML = formatoMonedaUSD(importe.value*pesoDólar)
		break

		case moneda1.value == 'deARS' && moneda2.value == 'aEUR':
		conversión.innerHTML = formatoMonedaEUR(importe.value*pesoEuro)
		break

		case moneda1.value == 'deARS' && moneda2.value == 'aARS':
		conversión.innerHTML = formatoMonedaARS(importe.value*igual)
		break

		case moneda1.value == 'deARS' && moneda2.value == 'aHRK':
		conversión.innerHTML = formatoMonedaHRK(importe.value*pesoKuna)
		break
	}
	}
})
/* Estrutura JS da Página */

// 1º Página (Canto Superior Esquerdo) 

const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
	let dateToday = new Date();
	let hr = dateToday.getHours();
	let min = dateToday.getMinutes();
	let s = dateToday.getSeconds();


	if(hr < 10) hr = '0' + hr;

	if(min < 10) min = '0' + min;

	if(s < 10) s = '0' + s;

	horas.textContent = hr;
	minutos.textContent = min;
	segundos.textContent = s;

})

// 2º Página (Canto Inferior Esquerdo) 

class Produto {

	constructor() {
		this.caderno = [];
	}

//Verifica se "validacampos" é verdadeiro

	adicionar() {
		let valor = this.lerDados();

		if(this.validacampos(valor)) (
			this.salvar(valor)
			)

		console.log(valor);
	}

//Adiciona o campo valor a um array

	salvar(valor) {
		this.caderno.push(valor);
	}

	lerDados() {
		let valor = {}

		valor.nomevalor = document.getElementById('valor').value;

		return valor;
	}

	remover() {
		alert('Item Removido!');
	}

	limpar() {
		alert('Caixa de Texto Limpa!');
	}

// Condicional para verificar se o campo imput está vazio

	validacampos(valor) {
		let msg = '';


		if(valor.nomevalor == '') {
			msg += 'Informe o nome do item!';
		}

		if(msg != '') {
			alert(msg);
			return false
		}

		return true;
	}

}

var produto = new Produto()

// 3º Página (Canto Inteiro Direito) 

var btn = document.querySelector(".circulo");
var position
btn.addEventListener("mouseover", function() {
position ? (position = 0) : (position = -580);
btn.style.transform = `translate(${position}px,0px)`;
btn.style.transition = "all 0.3s ease";
})
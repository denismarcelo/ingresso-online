function comprar() {
    // recuperar opções e quantidade
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let nomeIngresso = document.getElementById('tipo-ingresso').textContent;
    let qtd = parseInt(document.getElementById('qtd').value);
    let qtdDisponivel = document.getElementById(`qtd-${tipoIngresso}`).textContent;

    if (isNaN(qtd) || qtd <= 0) {
        alert('Por favor, insira uma quantidade válida.');
        return;
    }
    
    //diminuir quantidade disponível com base na quantidade comprada
    if (tipoIngresso == 'pista') {
        comprarPista(qtd);
    } else if (tipoIngresso == 'superior') {
        comprarSuperior(qtd);
    } else {
        comprarInferior(qtd);
    }
}

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if(qtd > qtdPista) {
        alert('Quantidade indisponível para Pista.');
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso!');
        document.getElementById('qtd').value = '';
    }
}

function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if(qtd > qtdSuperior) {
        alert('Quantidade indisponível para Cadeira superior.');
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso!');
        document.getElementById('qtd').value = '';
    }
}

function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if(qtd > qtdInferior) {
        alert('Quantidade indisponível para Cadeira inferior.');
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso!');
        document.getElementById('qtd').value = '';
    }
}
function tocaSom (seletorAudio) {

    const elemento = document.querySelector(seletorAudio);

    /*if (elemento === null) {
        
        alert ('Elemento não encontrado');
        //console.log ('Elemento não encontrado');
    }*/

    if (elemento /*!= null*/ && elemento.localName === 'audio') {
        
        //console.log (elemento.localName === 'audio');
        elemento.play();

    } else {

            alert ('Elemento ou seletor não encontrado');
            //console.log ('Elemento não encontrado');
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let i = 0 ; i < listaDeTeclas.length; i++) {

    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    
    tecla.onkeydown = function (evento) {

        /*Teste DEVTools 
        console.log(evento.code )*/ 

        if (evento.code === 'Space' || evento.code === 'Enter') {

            tecla.classList.add('ativa');

        }
    }

    tecla.onkeyup = function () {

        tecla.classList.remove('ativa');
    }
}


// var painel = document.getElementById('containe')


/*Aqui e a parte da API de fotos*/
fetch('https://jsonplaceholder.typicode.com/photos')
    .then(function (data) {
        return data.json();
    }).then(function (result) {
        console.log(result)
    
        const painel = document.getElementById('containe'); /*Variavel do id do container do HTML*/
    
        for (let i = 0; i <=7; i++) {
            const cardData = result[i]; // Iterar sobre os dados dos cards 
            
            const cardElement = document.createElement('div'); // Criar um elemento para o card (por exemplo, uma div)
            cardElement.classList.add('card');
             // Definir o conteúdo do card com base nos dados da API
            
            cardElement.innerHTML = ` <div class="titulo">  
                                        <h2 id="title">${cardData.title}</h2>
                                    </div>

                                    <div class="imagem">
                                        <img id="imgs" src="${cardData.url}" alt="">
                                    </div>`;
                    
            painel.appendChild(cardElement);  // Adicionar o card ao container
        }});
    


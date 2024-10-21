//variável para guardar a URL da base de dados

const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

//função assíncrona( ao fazer uma requisição para a API, o JavaScript espera ela ser concluída.)
async function visualizarInformacoesGlobais() {  //essa função não terá parâmetros.

        const res = await fetch(url) //palavra  await, para esperar a requisição ser finalizada e fetch() para passar a url.

        const dados = await res.json()  //variável para guardar a resposta recebida.

        console.log(dados);   //para visualizar os dados

        const paragrafo = document.createElement('p')
        paragrafo.classList.add('graficos-container__texto')
        
        paragrafo.innerHTML = `Você sabia que o mundo tem <span>${dados.total_pessoas_mundo}</span> de pessoas e que aproximadamente <span>${dados.total_pessoas_conectadas}</span> estão conectadas em alguma rede social e passam em média <span>${dados.tempo_medio}</span> horas conectadas.`
        console.log(paragrafo)
    
        const container = document.getElementById('graficos-container')
        container.appendChild(paragrafo)
    }

    visualizarInformacoesGlobais()  //invocar a função

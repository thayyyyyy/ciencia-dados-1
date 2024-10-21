//variável para guardar a URL da base de dados

const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

//função assíncrona( ao fazer uma requisição para a API, o JavaScript espera ela ser concluída.)
async function visualizarInformacoesGlobais() {  //essa função não terá parâmetros.

        const res = await fetch(url); //palavra  await, para esperar a requisição ser finalizada e fetch() para passar a url.

        const dados = await res.json();  //variável para guardar a resposta recebida.

        console.log(dados);   //para visualizar os dados

    }

    visualizarInformacoesGlobais()  //invocar a função

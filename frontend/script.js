document.addEventListener("DOMContentLoaded", () => {
    const botaoFetch = document.getElementById("botaoFetch")
    const divResultado = document.getElementById("resultado")

    botaoFetch.addEventListener('click',async () => {

        try{
            divResultado.innerHTML = '<p>Carregando...</p>'

            const resposta = await fetch('http://10.49.4.19:3000/api/dados');
            const dados = await resposta.json();
            divResultado.innerHTML = `
                <p>Resposta da API:</p>
                <pre>${JSON.stringify(dados, null, 2)}</pre>
            `;

        }catch(e){
            divResultado.innerHTML = `
            <p>Resposta da API:</p>
            <pre>${e.message}</pre>
        `;
        }
    });
});
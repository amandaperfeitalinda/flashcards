function criaCartao(categoria, pergunta, resposta) {
    let container = document.createElementBiId(´container´)
    let cartao = document.creatElement(`article´)
        cartao.className = 'cartao'

        cartao.innerHTML =
        <div class=``cartao_conteudo``>
        <h3>${categoria}</h3>
        <div class=´´cartao_conteudo_pergunta``>
           <p>${pergunta}</p>
        </div>
        <div class=´´cartao_conteudo_resposta``>
           <p>${resposta}</p>
        <div>
        `
        container.appendChild(cartao)


}
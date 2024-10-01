const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'
async function vizualizarinformaçõesGlobais() {
    const res = await fetch(url)
    const dados= await res.json()
    console.log(dados);
    const psragrafo = document.createElement('p')
    paragrafo.classlist.add('graficos-container_texto')

 paragrafo.innerHTML = 'Você sabia que o mundo tem ${dados.total_pessoas_mundo} de pessoas e que aproximadamente ${dados.total_pessoas_conectadas} estão conectadas em alguma rede social e passam em média ${dados.tempo_medio} horas conectados.'
 const container = document.getElementById('graficos-container')
 container.appendChild(paragrafo)
}
vizualizarinformaçõesGlobais()
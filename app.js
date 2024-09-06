
function pesquisar () {
    let = section = document.getElementById ("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    
    
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";


    // se o campoPesquisa for uma sting sem nada
    // o ! no campo pequisa é para...

    if (!campoPesquisa) {
        
        section.innerHTML = "Nada foi encontrado. O usúario precisa digitar o nome do jogaodor no espaço em branco."
            return  
    }

    
    
        campoPesquisa = campoPesquisa.toLowerCase ()

    for (let dado of dados) {

        // se titulo includes campoPesquisa
            titulo = dado.titulo.toLowerCase ()
            descricao = dado.descricao.toLowerCase ()
            tags = dado.tags.toLocaleLowerCase ()




        if (titulo.includes (campoPesquisa)||descricao.includes (campoPesquisa)||tags.includes(campoPesquisa) ) {
            resultados +=  `
            <div class="item-resultado">
                <h2> ${dado.titulo} </h2>
                    <p class="descricao-meta"> ${dado.descricao} </p>
            <a href= ${dado.link} target="_blank">Para mais informações:</a>
            </div>
        `
        } 
    
            }

    if (!resultados) {
        resultados = "<p> Nada foi encontrado!! </p>"


    }
    
    section.innerHTML = resultados

}





import React from 'react'

export default props => (
    <div className="jumbotron mt-5">
        <h1 className="display">Descubra musicas novas!</h1>
        <p className="lead">Este é um sistema novo e em teste para descobrimento de novas músicas através do uso de aprendizagem de máquina.</p>
        <hr className="my-2" />
        <p className="large">Como funciona:</p>
        <ol> 
            <li>Você utiliza várias palavras de busca (O sistema vai levar as letras das músicas em consideração);</li> 
            <li>O sistema varre um banco extenso de letras musicais em inglês e português buscando palavras com que se encaixam;</li> 
            <li>Monta uma lista completa de possíveis similaridades com os termos (levando o gênero em consideração caso escolhido);</li> 
            <li>Retorna a lista com o nome do artista + musica, juntamente com um o link pra letra e/ou pré-visualização do audio;</li> 
        </ol>
    </div>
)
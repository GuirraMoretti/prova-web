import { useState } from "react"

const Questao02 = () => {
    const [isFrente, setIsFrente] = useState(true);

    const imgFrente = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png";
    const imgCostas = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png";

    const alternarImagem = () => setIsFrente(!isFrente);

    return (
        <div>
            <h1>Questão 2</h1>
            <h2>Pikachu - 25</h2>
            <img 
                src={isFrente ? imgFrente : imgCostas} 
                alt="Imagem do Pikachu" 
                onClick={alternarImagem} 
            />
            <button onClick={alternarImagem}>Virar</button>
        </div>
    );
}

export default Questao02;

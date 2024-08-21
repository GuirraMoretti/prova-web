import React, { useState, useEffect } from 'react';

const Questao03 = () => {
  const [smallerCapital, setsmallerCapital] = useState('');
  const [biggestCapital, setbiggestCapital] = useState('');

  const buscarCapitais = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population");
      const data = await response.json();
      
      const dadosOrdenados = data.sort((a, b) => a.population - b.population);
      
      setsmallerCapital(dadosOrdenados[0].capital[0]);
      setbiggestCapital(dadosOrdenados[dadosOrdenados.length - 1].capital[0]);
    } catch (error) {
      console.error('Erro ao buscar os dados da API:', error);
    }
  };

  useEffect(() => {
    buscarCapitais();
  }, []);

  return (
    <div>
      <h1>Questão 3</h1>
      <h2>Capitais com Maior e Menor População na Europa</h2>
      <p>Capital com Menor População: {smallerCapital}</p>
      <p>Capital com Maior População: {biggestCapital}</p>
    </div>
  );
}

export default Questao03;
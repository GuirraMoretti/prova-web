import React, { useState, useEffect } from 'react';

const Questao04 = () => {
  const [menorCapital, setMenorCapital] = useState('');
  const [maiorCapital, setMaiorCapital] = useState('');

  const obterDadosCapitais = () => {
    return new Promise((resolve) => {
      const dados = [
        { "capital": ["Dublin"], "population": 4994724 },
        { "capital": ["Nicosia"], "population": 1207361 },
        { "capital": ["Madrid"], "population": 47351567 }
      ];
      resolve(dados);
    });
  };

  useEffect(() => {
    const buscarCapitais = async () => {
      try {
        const data = await obterDadosCapitais();
        const dadosOrdenados = data.sort((a, b) => a.population - b.population);
        
        setMenorCapital(dadosOrdenados[0].capital[0]);
        setMaiorCapital(dadosOrdenados[dadosOrdenados.length - 1].capital[0]);
      } catch (error) {
        console.error('Erro ao processar os dados:', error);
      }
    };

    buscarCapitais();
  }, []);

  return (
    <div>
      <h1>Questão 4</h1>
      <h2>Capitais com Maior e Menor População</h2>
      <p>Capital com Menor População: {menorCapital}</p>
      <p>Capital com Maior População: {maiorCapital}</p>
    </div>
  );
}

export default Questao04;
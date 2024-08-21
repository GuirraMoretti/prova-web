import React from "react";

const Questao01A = () => {
    const list = [
        {a:10, b:3, c:7},
        {a:5, b:-3, c:9},
        {a:1, b:9, c:40}
    ]

    return(
        <div>
            <Questao01B list = {list}/>
        </div>
    )
}

function Questao01B(props) {
    const biggest = props.list.map((obj, ind) => {
      return (
        <div key={ind}>
          <p>Maior valor da linha {ind + 1}: {Math.max(obj.a, obj.b, obj.c)}</p>
        </div>
      );
    });
  
    return (
      <div>
        <h1>Questão 01</h1>
        <h2>Maiores Números</h2>
        {biggest}
      </div>
    );
  }
  
  export default Questao01A;
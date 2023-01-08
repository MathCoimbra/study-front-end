import { useState } from 'react';

/* useState - função hook que irá controlar o estado dos componentes, os estados não sobrescritos e nunca alterados (conceito de imutabilidade do React) */

const Teste = () => {
  const [name, setName] = useState('Matheus');

  const handleChangeName = () => {
    setName('Thiago');
  };

  return (
    <div>
      <p>{name}</p>
      <button onClick={handleChangeName}>Alterar</button>
    </div>
  );
};

export { Teste };
  
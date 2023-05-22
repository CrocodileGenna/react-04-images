import { useState } from 'react';
import { GlobalStyle } from './App.styled';
import { FormaSearch } from './image_finder/FormaSearch';
import { ImagesInfo } from './image_finder/ImagesInfo';

export const App = () => {
  const [input, setInput] = useState('');
  const hendleValue = input => {
    setInput(input);
  };
  return (
    <GlobalStyle>
      <FormaSearch submitInput={hendleValue} />
      <ImagesInfo resValue={input} />
    </GlobalStyle>
  );
};

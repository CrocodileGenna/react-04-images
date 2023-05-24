import { useState } from 'react';
import {
  CARD_A,
  IMG,
  INFO_DIV,
  BACKDROP_DIV,
  MODAL_DIV,
  CLOSE_BUTTON,
  MODAL_IMG,
} from './OneCard.styled';

export function OneCard({ fullImg, alt, likes, downloads, tags }) {
  const [modal, setModal] = useState(false);
  return (
    <>
      <CARD_A onClick={() => setModal(true)}>
        <IMG src={fullImg} alt={alt} />
        <INFO_DIV>
          <p>
            likes: <span>{likes}</span>
          </p>
          <p>
            downloads: <span>{downloads}</span>
          </p>

          <p>
            tags: <span>{tags}</span>
          </p>
        </INFO_DIV>
      </CARD_A>
      {modal && (
        <BACKDROP_DIV onClick={() => setModal(false)}>
          <MODAL_DIV>
            <CLOSE_BUTTON onClick={() => setModal(false)}>✖</CLOSE_BUTTON>
            <MODAL_IMG src={fullImg} alt={alt} />
          </MODAL_DIV>
        </BACKDROP_DIV>
      )}
    </>
  );
}

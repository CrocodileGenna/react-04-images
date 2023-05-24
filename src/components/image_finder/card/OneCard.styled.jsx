import styled from '@emotion/styled';

export const CARD_A = styled.a`
  position: relative;
  display: flex;
  width: 400px;
  height: 300px;
  margin: 15px;
  border-radius: 2px;
  transition: all 0.4s ease 0s;

  :hover,
  :focus {
    cursor: pointer;
    transform: scale(1.01);
    box-shadow: 0px 0px 10px;
  }
`;

export const IMG = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 2px;
`;

export const INFO_DIV = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  color: #00000000;
  background-color: #00000000;

  :hover,
  :focus {
    background-color: #2f368bd4;
    p {
      font-size: 25px;
      font-weight: bold;
      color: #fff;
    }
    span {
      font-size: 20px;
      color: #fff;
    }
  }
`;

export const BUTTON = styled.button`  
  display: flex;
  padding: 11px 40px;
  border: none;
  border-radius: 5px;
  margin: 60px auto 100px;
  font-size: 15px;
  font-weight: bold;
  color: #fff;
  background-color: black;
  transition: all 0.4s ease 0s;

  :hover,
  :focus {
    color: black;
    background-color: #fff;
    box-shadow: 0px 0px 5px black;
  }
}
`;
// Modal
export const BACKDROP_DIV = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.7);
`;
export const MODAL_DIV = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  min-width: 270px;

  @media screen and (min-width: 350px) {
    min-width: 330px;
  }
  @media screen and (min-width: 460px) {
    min-width: 440px;
  }
  @media screen and (min-width: 760px) {
    min-width: 640px;
  }
  @media screen and (min-width: 1200px) {
    min-width: 840px;
  }
`;
export const CLOSE_BUTTON = styled.button`
  position: absolute;
  top: 0px;
  right: 0px;
  border: none;
  border-radius: 50%;
  font-size: 15px;
  text-aline: center;
  background-color: #fff;
  transition: all 0.2s ease 0s;
  z-index: 99999;
  :hover,
  :focus {
    color: red;
  }
  @media screen and (min-width: 460px) {
    font-size: 18px;
  }
  @media screen and (min-width: 760px) {
    font-size: 20px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 22px;
  }
`;
export const MODAL_IMG = styled.img`
  border-radius: 15px;
  width: 100%;
  max-height: 600px;
  object-fit: cover;
  z-index: 9999;
`;

import styled from "styled-components";

export const WrapperStyled = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #f1f1f1;
`;

export const Loader = styled.div`
  position: relative;
  width: 200px;
  height: 200px;

  box-sizing: border-box;
      font-family: "Poppins", sans-serif;

  /* display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #fff; */

  &:before {
    content: "";
    position: absolute;
    top: 85px;
    left: 15%;
    width: 70%;
    height: 70%;
    background: #ff3b8d;
    box-shadow: -60px -55px 0px #07b2ff;
    border-radius: 50%;
    // к псевдоэлементу применяется анимация
    animation: animate 5s linear infinite; /*название, время, стиль, бесконечный повтор*/
  }

  &:after {
    content: "";
    position: absolute;
    bottom: 85px;
    left: 15%;
    width: 70%;
    height: 70%;
    background: #8dff08;
    box-shadow: 60px 55px 0px #ffeb3b;
    border-radius: 50%;
    animation: animate 5s linear infinite;
  }

  @keyframes animate {
    0% {
      filter: blur(50px) hue-rotate(0deg);
    }
    100% {
      filter: blur(50px) hue-rotate(360deg);
    }
  }
`;

export const LoaderSpan = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 50%;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: 500;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.1);

  &:before {
    content: "";
    position: absolute;
    top: 8px;
    left: 8px;
    right: 8px;
    bottom: 8px;
    box-shadow: inset 0px 0px 20px rgba(0, 0, 0, 0.08);
    border-radius: 50%;
  }
`;

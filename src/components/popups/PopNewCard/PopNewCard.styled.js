import styled from "styled-components";

export const PopNewCard = styled.div`
  display: block;
  width: 100%;
  min-width: 375px;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;

  @media screen and (max-width: 660px) {
    top: 70px;
  }

  &:target {
    display: block;
  }
`;

export const PopNewCardContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);

  @media screen and (max-width: 660px) {
    padding: 0;
    justify-content: flex-start;
  
}
`;

export const PopNewCardBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 48px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;

  @media screen and (max-width: 660px) {
    border-radius: 0;
  }
  
`;

export const PopNewCardContent = styled.div`
  display: block;
  text-align: left;

`;

export const PopNewCardTtl = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
`;

export const PopNewNardClose = styled.span`
  position: absolute;
  top: 20px;
  right: 30px;
  color: #000000;
  cursor: pointer;

  &:hover {
    color: #000000;
  }
`;

export const PopNewCardWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: 660px) {
    display: block;
  }
`;

export const PopNewCardForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`;

export const FormNewBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormNewInput = styled.input`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin: 20px 0;

  &::placeholder {
    color: rgb(148, 166, 190);
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -1%;
    text-align: left;
  }
`;

export const FormNewArea = styled.textarea`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  max-width: 370px;
  margin-top: 14px;
  height: 200px;
  line-height: 1;
  letter-spacing: -0.14px;

  &::placeholder {
    color: rgb(148, 166, 190);
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -1%;
    text-align: left;
  }
`;

export const ProdChecbox = styled.div`
  size: 14px;
  color: #333;
  display: inline-block;
  margin-right: 10px;
  letter-spacing: 0.5px;
`;

export const FormNewCreate = styled.span`
  width: 132px;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  border: 0;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #ffffff;
  float: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #33399b;
  }
`;

export const RadioToolbarInputW = styled.input`
  display: none;

  &:checked + label {
    background-color: #ffe4c2;
    /* border: 1px solid #ffe4c2; */
  }
`;

export const RadioToolbarLabelW = styled.label`
  display: inline-block;
  /* padding: 2px 9px; */
  padding: 8px 18px 8px 18px;
  /* margin: 0px 7px; */
  cursor: pointer;
  border-radius: 24px;

  color: rgb(255, 109, 0);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 14.21px;
  letter-spacing: 0%;
  text-align: center;
  border-radius: 24px;
  background: rgb(255 228 194 / 49%);

  &:hover {
    border-radius: 24px;
    background: rgb(255, 228, 194);
    opacity: 0.4;
  }
`;

export const RadioToolbarInputR = styled.input`
  display: none;

  &:checked + label {
    background-color: #d0ffb7;
    /* border: 1px solid #d0ffb7; */
  }
`;

export const RadioToolbarLabelR = styled.label`
  display: inline-block;
  /* padding: 2px 9px; */
  padding: 8px 18px 8px 18px;
  margin: 0px 7px;
  border-radius: 24px;
  cursor: pointer;
  color: rgb(6, 177, 110);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  line-height: 14.21px;
  letter-spacing: -1%;
  text-align: center;
  background-color: #d0ffb78f;

  &:hover {
    border-radius: 24px;
    background: rgb(180, 253, 209);
    opacity: 0.4;
  }
`;

export const RadioToolbarInputC = styled.input`
  display: none;

  &:checked + label {
    background-color: #e9d4ff;
    /* border: 1px solid #e9d4ff; */
  }
`;

export const RadioToolbarLabelC = styled.label`
  display: inline-block;
  /* padding: 2px 9px; */
  padding: 8px 18px 8px 18px;
  cursor: pointer;
  border-radius: 24px;

  color: rgb(154, 72, 241);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  line-height: 14.21px;
  letter-spacing: -1%;
  text-align: center;
  background-color: #e9d4ff57;
  &:hover {
    border-radius: 24px;
    background: rgb(233, 212, 255);
    opacity: 0.4;
  }
`;


export const Subttl = styled.label`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`

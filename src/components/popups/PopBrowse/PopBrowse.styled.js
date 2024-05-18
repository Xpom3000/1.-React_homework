import styled from "styled-components";

export const PopBrouwseStyled = styled.div`
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;

  @media screen and (max-width: 660px) {
    top: 70px;
  }
`;
export const PopBrouwseContainer = styled.div`
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

export const PopBrouwseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;

  @media screen and (max-width: 660px) {
    border-radius: 0;
  }
`;

export const PopBrouwseContent = styled.div`
  display: block;
  text-align: left;
`;

export const PopBrouwseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const PopBrouwseTtl = styled.h3`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const PopBrouwseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: 660px) {
    display: block;
  }
`;

export const PopBrowseForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`;

export const PopBrouwseBtnBrouwse = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 18px;
  margin-bottom: 48px;
`;

export const BtnGroup = styled.div`
  margin-right: 8px;
`;

export const PopBrowseBtnEdit = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;

  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
  margin-right: 8px;
  /* display: block; */
`;

export const BtnBor = styled.span`
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  background: transparent;
  color: #565eef;
  margin-right: 8px;
  padding: 10px 14px 10px 14px;
  color: rgb(86, 94, 239);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #33399b;
    color: #ffffff;
  }
`;

export const BtnBorA = styled(BtnBor)`
  color: #565eef;
`;

export const BtnBg = styled.span`
  border-radius: 4px;
  background: #565eef;
  border: none;
  outline: none;
  color: #ffffff;
  margin-right: 8px;
  padding: 10px 14px 10px 14px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #33399b;
  }
`;

export const Status = styled.div`
  margin-bottom: 11px;
`;

export const StatusP = styled.div`
  margin-bottom: 14px;
`;

export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const RadioStatusLabel = styled.label`
  display: inline-block;
  padding: 2px 9px;
  border-radius: 24px;
  cursor: pointer;
  color: rgb(6, 177, 110);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  line-height: 14.21px;
  letter-spacing: -1%;
  text-align: center;

  &:hover {
    border-radius: 24px;
    background: rgb(180, 253, 209);
    opacity: 0.4;
  }
`;

export const StatusTheme = styled.label`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94a6be;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
`;
export const StatusThemesInput = styled.input`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;

  &[type="radio"] {
    display: none;
  }

  &:checked + label {
    background-color: #94a6be;
    border: 1px solid #94a6be;
    color: #ffffff;
  }
`;

export const Subttl = styled.label`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const StatusThemeP = styled(Subttl)`
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
`;

export const Gray = styled.p`
  background: #94a6be;
  color: #ffffff;
`;

export const FormBrowseBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormBrowseArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: #eaeef6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;

  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
`;

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
  display: none;
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

  &:hover {
    background-color: #33399b;
    color: #ffffff;
  }
`;

export const BtnBorA = styled(BtnBor)`
color: #565eef;`

export const BtnBg = styled.span`
  border-radius: 4px;
  background: #565eef;
  border: none;
  outline: none;
  color: #ffffff;
  margin-right: 8px;
  padding: 10px 14px 10px 14px;
  font-weight: 500;

  &:hover {
    background-color: #33399b;
  }
`;

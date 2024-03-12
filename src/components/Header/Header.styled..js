import styled from "styled-components";

export const StyleHeader = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
`;
export const HeaderBlock = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
`;
export const HeaderNav = styled.nav`
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const HeaderLogo = styled.div`
  width: 85px;
`;

export const HeaderBtnMaynNew = styled.span`
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: #565eef;
  color: #ffffff;
  border: none;
  font-size: 14px;
  line-height: 10px;
  font-weight: 500;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 14px;

  &:hover {
    background-color: #33399b;
  }
`;

export const HeaderUser = styled.div`
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: #565eef;

  &:hover {
    color: #33399b;
  }

  &::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.9px solid #565eef;
    border-bottom: 1.9px solid #565eef;
    transform: rotate(-45deg);
    margin: -6px 0 0 5px;
    padding: 0;
  }
`;

export const HeaderPopUseSet = styled.div`
  display: none;
  position: absolute;
  top: 61px;
  right: 0;
  width: 213px;
  height: 205px;
  border-radius: 10px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  background: #fff;
  box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
  padding: 34px;
  text-align: center;
  z-index: 2;
`;

export const PopUseSet = styled.div`
  width: 72px;
  height: 30px;
  background: transparent;
  color: #565eef;
  border-radius: 4px;
  border: 1px solid #565eef;

  &:target {
    display: block;
  }
`;

export const Hover03 = styled.span`
  box-sizing: border-box;
  border: 1px solid rgb(86, 94, 239);
  border-radius: 4px;
  padding: 10px 14px 10px 14px;
  margin: 34px 0px;
  color: rgb(86, 94, 239);

  &:hover {
    background-color: #33399b;
    color: #ffffff;
  }
`;

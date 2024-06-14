import { styled } from "styled-components";
// import { hover01, hover02, hover03 } from "../../Global.styled";
// import { breakpoints } from "../../lib/breakpoints";


// export const HeaderNav = styled.nav`
//   max-width: 290px;
//   padding: 0;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;
// export const HeaderBtnMainNew = styled.button`
//   width: 178px;
//   height: 30px;
//   border-radius: 4px;
//   background-color: #565eef;
//   color: #ffffff;
//   border: none;
//   font-size: 14px;
//   line-height: 1;
//   font-weight: 500;
//   margin-right: 20px;

//   ${hover01}

//   @media screen and (max-width: ${breakpoints.md}px) {
//     z-index: 3;
//     position: fixed;
//     left: 16px;
//     bottom: 30px;
//     top: auto;
//     width: calc(100vw - 32px);
//     height: 40px;
//     border-radius: 4px;
//     margin-right: 0;
//   }

//   a {
//     color: #ffffff;
//   }
//  `;
// export const HeaderUser = styled.a`
//   height: 20px;
//   display: flex;
//   flex-wrap: nowrap;
//   align-items: center;
//   justify-content: center;
//   font-size: 14px;
//   line-height: 20px;
//   color: #565eef;

//   ${hover02}

//   &::after {
//     content: "";
//     display: block;
//     width: 6px;
//     height: 6px;
//     border-radius: 1px;
//     border-left: ${props => props.theme.border2};
//     border-bottom: ${props => props.theme.border2};
//     transform: rotate(-45deg);
//     margin: -6px 0 0 5px;
//     padding: 0;
//   }
// `;
// export const HeaderPopUserSet = styled.div`
//   display: block;
//   position: absolute;
//   top: 61px;
//   right: 0;
//   width: 213px;
//   height: 205px;
//   border-radius: 10px;
//   border: ${props => props.theme.border};
//   background: ${props => props.theme.backColor2};
//   box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
//   padding: 34px;
//   text-align: center;
//   z-index: 2;

//   button {
//     width: 72px;
//     height: 30px;
//     background: transparent;
//     color: #565eef;
//     border-radius: 4px;
//     border: 1px solid #565eef;

//     ${hover03}

//     a {
//       color: #565eef;
//     }
//   }

//   &:target {
//     display: block;
//   }
// `;
// export const PopUserSetName = styled.p`
//   color: ${props => props.theme.subttl};
//   font-size: 14px;
//   font-weight: 500;
//   line-height: 21px;
//   letter-spacing: -0.14px;
//   margin-bottom: 4px;
// `;

// export const PopUserSetMail = styled.p`
//   color: #94a6be;
//   font-size: 14px;
//   line-height: 21px;
//   letter-spacing: -0.14px;
//   margin-bottom: 10px;
// `;

// export const PopUserSetTheme = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   margin-bottom: 30px;

//   p {
//     color: ${props => props.theme.subttl};
//     font-size: 14px;
//     line-height: 21px;
//     letter-spacing: -0.14px;
//   }
//   input[type="checkbox"] {
//     position: relative;
//     width: 24px;
//     height: 13px;
//     border-radius: 100px;
//     background: #eaeef6;
//     outline: none;
//     -webkit-appearance: none;
//     -moz-appearance: none;
//     appearance: none;

//     &::before {
//       content: "";
//       position: absolute;
//       top: 1px;
//       left: 1px;
//       width: 11px;
//       height: 11px;
//       border-radius: 50%;
//       background-color: ${props => props.theme.input};
//       transition: 0.5s;
//     }
//   }

//   input:checked[type="checkbox"]::before {
//     left: 12px;
//   }
// `;








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
/* export const HeaderNav = styled.nav`
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`; */
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
  cursor: pointer;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: #565eef;

  &:hover {
    color: #33399b;
  };

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

export const HeaderPopUseSet = styled(PopUseSet)`
  /* display: none; */
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

export const PopUseSetName = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 4px;
`;

export const PopUseSetMail = styled.p`
  color: #94a6be;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
`;

export const PopUseSetTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  
`;

export const PopUseSetThemeP = styled.p`
  color: #000;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
`;

export const Checkbox = styled.input`
  position: relative;
  width: 24px;
  height: 13px;
  border-radius: 100px;
  background: #eaeef6;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &::before {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: #94a6be;
    transition: 0.5s;
  }

  &:checked::before {
  left: 12px;
  }
 
`;

/* .pop-user-set__theme input:checked[type="checkbox"]::before {
  left: 12px;
} */

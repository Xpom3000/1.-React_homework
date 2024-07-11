import { createGlobalStyle, css } from "styled-components";
import { breakpoints } from "/src/lib/breakpoints";
import normalize from "styled-normalize";

export const hover01 = css`
  &:hover {
    background-color: #33399b;
  }
`;

export const hover02 = css`
  &:hover {
    color: #33399b;
    &::after {
      border-left-color: #33399b;
      border-bottom-color: #33399b;
    }
  }
`;

export const hover03 = css`
  &:hover {
    background-color: ${(props) => props.theme.h03back};
    color: #ffffff;
    a {
      color: #ffffff;
    }
  }
`;

export const GlobalStyle = createGlobalStyle`
 ${normalize}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:before,
*:after {
  box-sizing: border-box;
}


a,
a:visited {
  text-decoration: none;
  cursor: pointer;
}

button,
._btn {
  cursor: pointer;
  outline: none;
}

ul li {
  list-style: none;
}

html,
body {
  width: 100%;
  height: 100%;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  color: ${(props) => props.theme.color};
}

.loader {
  font-family: Helvetica, sans-serif;
  color: #000;
  text-align: center;
  margin-top: 200px;
}

.wrapper {
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color:
  ${(props) => props.theme.backgroundColor};
}

.container {
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;

  @media screen and (max-width: ${breakpoints.md}px) {
    width: 100%;
    padding: 0 16px;
  }

}

._orange {
  background-color: #ffe4c2;
  color: #ff6d00 ;
}


._green {
  background-color: #b4fdd1;
  color: #06b16e;
}

._purple {
  background-color: #e9d4ff;
  color: #9a48f1;
}

._gray {
  background: #94A6BE;
  color: #FFFFFF;
}

.subttl {
  color: ${(props) => props.theme.subttl};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
}

._hide {
  display: none;
}

._active-category {
  opacity: 1 !important;
}


.calendar__p {
  color: #94A6BE;
  font-size: 10px;
  line-height: 1;
}

.pop-wrap {
  position: relative;
  top: 0;
  left: 0;
}

._active-day {
  background-color: #94A6BE;
  color: ${(props) => props.theme.backgroundColor} ;
}



@media screen and (max-width: ${breakpoints.lg}px) {
  .calendar .date-create {
    display: none;
    margin-bottom: 7px;
  }

  .calendar__p {
    font-size: 14px;
  }
}

@media screen and (max-width: ${breakpoints.md}px) {
.pop-new-card__calendar {
    width: 100%;
  }
}

`;

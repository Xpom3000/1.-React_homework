import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
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

span,
._btn {
  cursor: pointer;
}

ul li {
  list-style: none;
}

body {
  width: 100%;
  height: 100%;
  font-family: "Roboto", sans-serif;
}

div,
span,
a {
  font-family: "Roboto", sans-serif;
}`
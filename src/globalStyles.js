import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

const GlobalStyle = createGlobalStyle`

ul,
p {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  list-style: none;
}

body {
  background-image: linear-gradient(to right, rgba(47, 48, 58, 0.8), rgba(47, 48, 58, 0.8)),
    url(./img/backgroundImg.jpg);
  background-repeat: repeat;
  background-position: center;
  background-size: 500px;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;

export default GlobalStyle;

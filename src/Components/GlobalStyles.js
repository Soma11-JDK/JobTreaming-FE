import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const globalStyles = createGlobalStyle`
  ${reset};
  a, a:hover, a:active, a:visited, a:focus {
    text-decoration:none;
    color:inherit;
    :hover{
      color: #5570ff;
     }
  }
  *{
    box-sizing:border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    outline: none;
  }
  body{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size:12px;
    background-color:rgba(256, 256, 256, 1);
    color:black;
  }
`;

export default globalStyles;

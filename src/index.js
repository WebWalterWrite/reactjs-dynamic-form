import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components';
import * as serviceWorker from './serviceWorker';
import bgbody from './assets/bgbody.jpg';
const GlobalStyle = createGlobalStyle`

*{
margin: 0;
padding: 0;
box-sizing: border-box;
}
@keyframes rotation {
    from {
            transform: rotate(0deg);
    }
    to {
            transform: rotate(359deg);
    }
}

html{
background-image:url(${bgbody});
background-position:center;
background-attachment:fixed;
}
body{background-color:rgba(0,0,0,0.8);}
header{ 
 text-align: center;
 color:#F7DF1C;
 padding: 1em;
 >img{
    width:200px;
    animation: rotation 4500ms infinite linear;  
    }
h1{
    display:flex;
    justify-content:center;
    width:100%;
    align-items:center;
    img{ margin-left: 10px;}
}
}
main{
height:100vh;
margin:0 auto;
margin-top:5em;
}
h1{
    font-size:48px;
}

`;

ReactDOM.render(
<>
<GlobalStyle/>
<App />
</>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

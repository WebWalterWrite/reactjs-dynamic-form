import styled from 'styled-components/macro';
import media from '../../utils/style/responsive.styled';

export const FormContainer = styled.section`
text-align: center;
border: #F7DF1C solid 1px;
border-radius:4px;
margin:0 auto;
${media.desktop` height:55vh; width:70%;`}
${media.mPhone`height:100vh; width: 90%;`}
h1{
width:20%;
margin:0 auto;
margin-top:.5em;
background-color: #F7DF1C;
color:#20222A;
border-radius:4px;
}
form{
    margin:0 auto;
    margin-top:2em;
    ${media.desktop`width:500px;`}
    ${media.mPhone`height:100vh; width: 300px;`}
    border-radius:4px;
    overflow: hidden;
};

`;
export const InputContainer = styled.div`
${media.desktop`width:1500px;`}
 ${media.mPhone`width: 900px;`}
display: flex;
flex-wrap: nowrap;
transform: ${props => props.pos && `translateX(-${props.pos}px)`};
transition:all 500ms ease-in-out;
div{
    position: relative;
    display: flex;
    width:500px;
}
svg{
    position: absolute;
    color:#F7DF1C;
}
input{
    padding-bottom: 2px;
    background-color:transparent;
    border:0;
    border-bottom: ${props => !props.error ? 'solid 1px red' : 'solid 1px #F7DF1C'};
    font-size:38px;
    color:#FFFFFF;
    outline:none;
    text-align:center;
    width: 100%;
    ::placeholder{
    font-size:38px;   
    }
}
`;

export const Button = styled.div`
display:flex;
justify-content:flex-end;
margin-top:3em;
button{
    cursor: pointer;
    width:130px;
    background-color: #F7DF1C;
    margin-top:2em;
    padding: .5em;
    border-radius: 4px;
    border: solid 1px #F7DF1C;
    color:#20222A;
    letter-spacing:2px;
    font-size:20px;
    outline:none;
    margin:20px 10px 0 10px;
    :active {
        background: #F9E85E;
        background: linear-gradient(left, #F9E85E, #21232c);
        background: linear-gradient(to right, #F9E85E,#21232c);
        letter-spacing:3px;
        transform:translateY(1px);
        transition: all 100ms ease-in-out;
    }
    :first-child{
    visibility:${props => props.visibility ? "visible" : "hidden"};
    transform: ${props => props.visibility ? "translateX(0)" : "translateX(150px)"};
    transition: all 500ms ease-in-out;
    }
    :last-child{
        z-index:0;
    }
}
`;

// Progress bar
export const ProgressBar= styled.div`
margin: 3em 0 5em 0 !important;
display:flex;
justify-content:center;
align-items:center;
text-align:center;
height: 100px;
transition:all 300ms ease-in-out;
`;

export const Dashed=styled.div`
border:${props => props.data === false ? 'solid 2px green' : 'dashed 1px #F7DF1C'};
background-color:${props => props.data === false && 'green'};
transition: all 200ms ease-in-out;
width:50px; 
`;
export const Icon = styled.div`
border: solid 1px #F7DF1C;
box-shadow: 'none';
border-radius: 50%;
padding:10px;
opacity:".5";
transition: opacity 500ms ease-in-out;
svg{
    margin:10px;
    color:#F7DF1C;
}
`;

export const Error = styled.div`
    background-color:${props => props.error && '#FF9494'};
    border-radius: 0px 0px 4px 4px;
    color:red;
    min-height:30px;
    height:auto;
    font-size:22px;
    text-align: left;
`;


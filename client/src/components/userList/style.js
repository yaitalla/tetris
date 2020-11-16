import styled from 'styled-components';

export const Wrap = styled.section`
    display: flex;
    width: 30%;
    height: 60%;
    margin: 30px;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    background-image: -webkit-repeating-linear-gradient(left, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,0)   6%, hsla(0,0%,100%, .1) 7.5%),
    -webkit-repeating-linear-gradient(left, hsla(0,0%,  0%,0) 0%, hsla(0,0%,  0%,0)   4%, hsla(0,0%,  0%,.03) 4.5%),
    -webkit-repeating-linear-gradient(left, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,0) 1.2%, hsla(0,0%,100%,.15) 2.2%),
    linear-gradient(180deg, hsl(0,0%,78%) 0%, hsl(0,0%,90%) 47%, hsl(0,0%,78%) 53%, hsl(0,0%,70%)100%)
  ;
    background-size: 14% 100%;
    box-shadow: inset -5px 5px 10px 0px rgba(255,255,255,1), inset 5px -5px 10px 0px rgba(0,0,0,.5);
  -webkit-box-shadow: inset -5px 5px 10px 0px rgba(255,255,255,1), inset 5px -5px 10px 0px rgba(0,0,0,.5);
  -moz-box-shadow: inset -5px 5px 10px 0px rgba(255,255,255,1), inset 5px -5px 10px 0px rgba(0,0,0,.5);
`;

export const Line = styled.p`
  position: relative;
  margin: 10px auto;
  outline: none;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 80%;
  font-size: 1em;
  height: 1.8em;
  border-radius: .5em;
  background-image: -webkit-repeating-linear-gradient(left, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,0)   6%, hsla(0,0%,100%, .1) 7.5%),
    -webkit-repeating-linear-gradient(left, hsla(0,0%,  0%,0) 0%, hsla(0,0%,  0%,0)   4%, hsla(0,0%,  0%,.03) 4.5%),
    -webkit-repeating-linear-gradient(left, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,0) 1.2%, hsla(0,0%,100%,.15) 2.2%),
    
    linear-gradient(180deg, hsl(0,0%,78%)  0%, 
    hsl(0,0%,90%) 47%, 
    hsl(0,0%,78%) 53%,
    hsl(0,0%,70%)100%);
  font: "Helvetica Neue", Arial, Helvetica, Geneva, sans-serif;
  text-align: center;
  color: hsla(0,0%,20%,1);
  text-shadow: hsla(0,0%,40%,.5) 0 -1px 0, hsla(0,0%,100%,.6) 0 2px 1px;
  
  background-color: hsl(0,0%,90%);
  box-shadow: 
  inset hsla(0,0%,15%, .8) 0 -1px 2px 1px, /* soft SD */
  inset hsla(0,0%,0%, .25) 0 -1px 0px 4px, /* bottom SD */
  inset hsla(0,0%,100%,.7) 0  2px 1px 4px, /* top HL */
  hsla(0,0%, 0%,.15) 0 -5px 3px 1px, /* outer SD */
  hsla(0,0%,100%,.5) 0  5px 3px 1px; /* outer HL */
  
  transition: color .2s;
  
`;

export const Title = styled.h3`
  border: 1px solid #D6D6D6;
  display: flex;
  color: hsla(0,0%,20%,1);
  align-items: center;
  font-family: "Helvetica Neue", Arial, Helvetica, Geneva, sans-serif;
  text-shadow: hsla(0,0%,40%,.5) 0 -1px 0, hsla(0,0%,100%,.6) 0 2px 1px;
  justify-content: center;
  padding-top: 1px 5px;
  width: 98%;
  border-radius: 10px;
  margin: 3px;
  box-shadow: 0 2px 3px #292929, 0 0 77px #D6D6D6 inset, 5px -5px 44px #292929 inset;
`;
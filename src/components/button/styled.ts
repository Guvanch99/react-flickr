import styled from "styled-components";
import {flex} from "../../styles/mixin.styled";

export const Button = styled.button`
  width: 235px;
  height: 44px;
  ${flex({justify: 'center', align: 'flex-start'})};
  text-align: center;
  background: #F5F5F5;
  border-radius: 3px;
  color: ${({theme}) => theme.colors.secondary};
  &:hover{
    border: 1px solid #0B868B;
  }
`
/*TODO при наведении "прыгает" текст*/
export const ErrorText = styled.h1`
  color: #000;
`

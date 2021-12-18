import styled from "styled-components";
import {flex} from "../../styles/mixin.styled";

export const Button = styled.a`
  width: 235px;
  height: 44px;
  ${flex({justify: 'center', align: 'center'})};
  border: none;
  text-align: center;
  background: #F5F5F5;
  border-radius: 3px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  color: ${({theme}) => theme.colors.secondary};
  &:hover{
    border: 1px solid ${({theme}) => theme.colors.secondary};
  }
`
/*TODO при наведении "прыгает" текст*/
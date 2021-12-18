import styled from "styled-components";
import {flex} from "../../styles/mixin.styled";

export const Footer = styled.header`
  height: 65px;
  ${flex({justify: 'center', align: 'center'})};
  background: ${({theme}) => theme.colors.secondary};
`
export const FooterText = styled.h1`
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0;
  color: #fff;
`

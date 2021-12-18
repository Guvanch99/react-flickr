import styled from "styled-components";
import {flex} from "../../styles/mixin.styled";

export const Header = styled.header`
  ${flex({justify: 'flex-start', align: 'center'})};
  height: 65px;
  padding-left: 24px;
  background: #2C2C2C;
`
export const HeaderText = styled.h1`
  font-size: 28px;
  font-weight: 400;
  line-height: 34px;
  letter-spacing: 0;
  color: #fff;
`

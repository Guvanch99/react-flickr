import styled from "styled-components";
import {flex} from "../../styles/mixin.styled";

export const Container = styled.figure`
  width: 286px;
  flex-direction: column;
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.08);
  ${flex({justify: 'center', align: 'flex-start'})};
  background: #FFFFFF;
`
export const Description = styled.div`
  padding: 22px 24px 20px 27px;
  flex-direction: column;
  ${flex({justify: 'center', align: 'flex-start'})};
  background: #FFFFFF;
`
export const Image = styled.img`
  display: block;
  width: 100%;
  height: 154px;
`
export const Title = styled.h2`
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 34px;
  letter-spacing: 0;
`
export const Text = styled.p`
  padding: 19px 0 21px;
  max-width: 206px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0;
`
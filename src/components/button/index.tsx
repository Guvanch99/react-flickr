import {Link} from "react-router-dom";
import {FC} from "react";

import * as S from './styled';

type TProps = {
  link: string
}

const Button: FC<TProps> = ({link}) => (
  <S.Button>
    <Link to={link}>
      Explore ➔
    </Link>
  </S.Button>
);

export default Button;

import React, {FC} from 'react';
import Button from '../button'
import * as S from './styled'

type TProps = {
  image: string
  title: string
  description: string
  link: string
}

const ImageCard:FC<TProps> = ({image, title, description, link}) => {
  return (
    <S.Container>
      <S.Image src={image} alt={title}/>
      <S.Description>
        <S.Title>{title}</S.Title>
        <S.Text>{description}</S.Text>
        <Button link={link}/>
      </S.Description>
    </S.Container>
  )
}

export default ImageCard;

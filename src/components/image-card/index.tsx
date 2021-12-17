import React, {FC} from 'react';
import Button from '../button';

type TProps = {
  image: string
  title: string
  description: string
  link: string
}

const ImageCard:FC<TProps> = ({image, title, description, link}) => {
  return (
    <figure>
      <img src={image} alt=""/>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <Button link={link}/>
      </div>
    </figure>
  )
}

export default ImageCard;

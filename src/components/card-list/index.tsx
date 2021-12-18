import React from 'react';
import {ImageCard} from "../";

import * as S from './styled';

const CardList = () => (
  <S.CardContainer>
    <ImageCard
      image={'https://llandscapes-10674.kxcdn.com/wp-content/uploads/2019/07/lighting.jpg'}
      title={'Card Header'}
      description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi consequuntur doloremque, explicabo illo ipsa ipsum laudantium magni nam, natus necessitatibus quos ratione recusandae repellendus sapiente soluta unde vero voluptatum?'}
      link={'https://www.flickr.com/people/60532753@N07'}
    />
    <ImageCard
      image={'https://llandscapes-10674.kxcdn.com/wp-content/uploads/2019/07/lighting.jpg'}
      title={'Card Header'}
      description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi consequuntur doloremque, explicabo illo ipsa ipsum laudantium magni nam, natus necessitatibus quos ratione recusandae repellendus sapiente soluta unde vero voluptatum?'}
      link={'https://www.flickr.com/people/60532753@N07'}
    />
    <ImageCard
      image={'https://llandscapes-10674.kxcdn.com/wp-content/uploads/2019/07/lighting.jpg'}
      title={'Card Header'}
      description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi consequuntur doloremque, explicabo illo ipsa ipsum laudantium magni nam, natus necessitatibus quos ratione recusandae repellendus sapiente soluta unde vero voluptatum?'}
      link={'https://www.flickr.com/people/60532753@N07'}
    />
  </S.CardContainer>
);

export default CardList;

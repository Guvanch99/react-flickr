import React from 'react';
import ImageCard from "../image-card";

import * as S from './styled';

const CardList = () => (
  <S.CardContainer>
    <ImageCard
      image={'https://static.remove.bg/remove-bg-web/6c5ea334216f9ded64486efb0e2a4421757cbce5/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png'}
      title={'Card Header'}
      description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi consequuntur doloremque, explicabo illo ipsa ipsum laudantium magni nam, natus necessitatibus quos ratione recusandae repellendus sapiente soluta unde vero voluptatum?'}
      link={'Link'}
    />
    <ImageCard
      image={'https://static.remove.bg/remove-bg-web/6c5ea334216f9ded64486efb0e2a4421757cbce5/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png'}
      title={'Card Header'}
      description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi consequuntur doloremque, explicabo illo ipsa ipsum laudantium magni nam, natus necessitatibus quos ratione recusandae repellendus sapiente soluta unde vero voluptatum?'}
      link={'Link'}
    />
    <ImageCard
      image={'https://static.remove.bg/remove-bg-web/6c5ea334216f9ded64486efb0e2a4421757cbce5/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png'}
      title={'Card Header'}
      description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi consequuntur doloremque, explicabo illo ipsa ipsum laudantium magni nam, natus necessitatibus quos ratione recusandae repellendus sapiente soluta unde vero voluptatum?'}
      link={'Link'}
    />
  </S.CardContainer>
);

export default CardList;

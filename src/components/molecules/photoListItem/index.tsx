import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from "@emotion/native";
import { IState } from '../../../models/IState';
import IPhoto from '../../../models/IPhoto';

export interface PhotoListItemProps {
  photo: IPhoto;
}

const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CustomText = styled.Text`
  width: 85%;
`;

const PhotoListItem: FC<PhotoListItemProps> = ({photo}) => {
  const dispatch = useDispatch();
  const photos = useSelector((state: IState) => state.Photos.photos);
  const {title, id} = photo;

  return (
    <Container>
      <CustomText>
        {id}. {title}
      </CustomText>
    </Container>
  );
};

export default PhotoListItem;
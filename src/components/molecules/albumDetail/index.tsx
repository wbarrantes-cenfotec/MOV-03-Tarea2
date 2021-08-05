import React, { FC } from 'react';
import { Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import styled from "@emotion/native";
import { IState } from '../../../models/IState';
import { updateSelectedAlbum } from '../../../store/actions/albums';

const CustomContainer = styled.SafeAreaView`
  align-items: center;
  justify-content: center;
`;

const CustomText = styled.Text`
  font-size: 18px;
`;

const CustomImage = styled.Image`
  width: 70%;
  height: 70%;
`;

const AlbumDetails: FC = () => {
  const dispatch = useDispatch();
  
  const selectedAlbum = useSelector((state: IState) => state.Albums.selectedAlbum);
  const albums = useSelector((state: IState) => state.Albums.albums);
  const { title, id } = albums[selectedAlbum || 0];
  
  const photos = useSelector((state: IState) => state.Photos.photos);
  const filteredPhotos = photos.filter((photo) => photo.albumId === id);
  const imageUrl = filteredPhotos[0].thumbnailUrl;

  const onBackPress = () => {
    dispatch(updateSelectedAlbum(null));
  };

  return (
    <CustomContainer>
      <CustomText>{title}</CustomText>
      <CustomImage source={{uri: imageUrl}} />
      <Button title="Back" onPress={onBackPress} />
    </CustomContainer>
  );
};

export default AlbumDetails;
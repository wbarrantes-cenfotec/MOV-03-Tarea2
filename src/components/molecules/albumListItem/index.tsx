import React, { FC } from 'react';
import { Text } from 'react-native';
import { useDispatch } from 'react-redux';
import styled from "@emotion/native";
import IAlbum from '../../../models/IAlbum';
import { updateSelectedAlbum } from '../../../store/actions/albums';

export interface AlbumListItemProps {
  album: IAlbum;
  index: number;
}

const AlbumItemContainer = styled.TouchableOpacity`
  background-color: #dce1e3;
  border-radius: 32px;
  padding: 8px 12px;
  margin: 4px 0;
`;

const AlbumListItem: FC<AlbumListItemProps> = ({album, index}) => {
  const dispatch = useDispatch();
  
  const onAlbumPress = () => {
    dispatch(updateSelectedAlbum(index));
  };

  return (
    <AlbumItemContainer onPress={onAlbumPress}>
      <Text>
        {album.id}. {album.title}
      </Text>
    </AlbumItemContainer>
  );
};

export default AlbumListItem;
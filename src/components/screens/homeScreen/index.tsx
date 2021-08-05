import React, { FC } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { IState } from '../../../models/IState';
import AlbumDetails from '../../molecules/albumDetail';
import AlbumList from '../../organisms/albumList';

const HomeScreen: FC = () => {
  const selectedAlbum = useSelector((state: IState) => state.Albums.selectedAlbum);

  return (
    <View>
      {selectedAlbum 
        ? <AlbumDetails /> 
        : <AlbumList /> }
    </View>
  );
};

export default HomeScreen;
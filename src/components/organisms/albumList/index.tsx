import React, { FC, useEffect } from 'react';
import { View, ActivityIndicator, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { IState } from '../../../models/IState';
import AlbumListItem from '../../molecules/albumListItem';
import { fetchAlbums } from '../../../store/actions/albums';
import { fetchPhotos } from '../../../store/actions/photos';

const AlbumList: FC = () => {
  const dispatch = useDispatch();
  const albums = useSelector((state: IState) => state.Albums.albums);
  const photos = useSelector((state: IState) => state.Photos.photos);
  
  useEffect(() => {
    dispatch(fetchAlbums());
    dispatch(fetchPhotos());
  }, []);

  return (
    <View>
      {albums.length > 0 ? (
        <FlatList
          data={albums}
          renderItem={({item, index}) => (
            <AlbumListItem key={index} album={item} index={index} />
          )}
        />
      ) : (
        <ActivityIndicator color="#000" />
      )}
    </View>
  )
};

export default AlbumList;
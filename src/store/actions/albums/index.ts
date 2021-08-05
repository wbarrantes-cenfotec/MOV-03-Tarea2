import axios from "axios";
import { ThunkDispatch } from "redux-thunk";
import { IAction } from "../../../models/IAction";
import { IState } from "../../../models/IState";
import IAlbum from "../../../models/IAlbum";
import { UPDATE_ALBUMS, UPDATE_SELECTED_ALBUM } from "../actionTypes";

export const updateAlbums = (payload: IAlbum[]) => ({
  type: UPDATE_ALBUMS,
  payload
});

export const updateSelectedAlbum = (payload: number | null) => ({
  type: UPDATE_SELECTED_ALBUM,
  payload
});

export const fetchAlbums =
  () => async (dispatch: ThunkDispatch<IState, null, IAction>) => {
    try {
      const albumsResponse = await axios.get(
        'https://jsonplaceholder.typicode.com/albums'
      );

      dispatch(updateAlbums(albumsResponse.data));

    } catch (error) {
      console.error(error);
    }
  };
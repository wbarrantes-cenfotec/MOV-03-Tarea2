import { IAction } from "../../../models/IAction";
import IAlbum from "../../../models/IAlbum";
import { UPDATE_ALBUMS, UPDATE_SELECTED_ALBUM } from "../../actions/actionTypes";

export interface IAlbumsReducerState {
  albums: IAlbum[];
  selectedAlbum: number | null;
}

const initialState: IAlbumsReducerState = {
  albums: [],
  selectedAlbum: null,
}

export default (state = initialState, {type, payload}: IAction) => {
  switch (type) {
    case UPDATE_ALBUMS:
      return {...state, albums: payload as IAlbum[]};

    case UPDATE_SELECTED_ALBUM:
      return {...state, selectedAlbum: payload as number | null};

    default:
      return state;
  }
};
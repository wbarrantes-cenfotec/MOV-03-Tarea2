import axios from "axios";
import { ThunkDispatch } from "redux-thunk";
import { IAction } from "../../../models/IAction";
import { IState } from "../../../models/IState";
import IPhoto from "../../../models/IPhoto";
import { UPDATE_PHOTOS } from "../actionTypes";

export const updatePhotos = (payload: IPhoto[]): IAction => {
  return {
    type: UPDATE_PHOTOS,
    payload
  };
};

export const fetchPhotos =
  () => async (dispatch: ThunkDispatch<IState, null, IAction>) => {
    try {
      const photosResponse = await axios.get(
        'https://jsonplaceholder.typicode.com/photos'
      );

      dispatch(updatePhotos(photosResponse.data));

    } catch (error) {
      console.error(error);
    }
  };
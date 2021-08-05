import { IAction } from "../../../models/IAction";
import IPhoto from "../../../models/IPhoto";
import { UPDATE_PHOTOS } from "../../actions/actionTypes";

export interface IPhotosReducerState {
  photos: IPhoto[];
}

const initialState = {
  photos: [],
};

export default (
  state = initialState,
  {type, payload}: IAction,
): IPhotosReducerState => {
  switch (type) {
    case UPDATE_PHOTOS:
      return {...state, photos: payload as IPhoto[]};
    default:
      return state;
  }
}
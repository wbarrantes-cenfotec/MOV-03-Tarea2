import { IAlbumsReducerState } from "../store/reducers/albums";
import { IPhotosReducerState } from "../store/reducers/photos";

export interface IState {
  Albums: IAlbumsReducerState;
  Photos: IPhotosReducerState;
}
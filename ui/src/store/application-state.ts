import { IBasicState, initialBasicState } from './root-reducer';

interface IApplicationState {
    basicState: IBasicState;
}
const initialApplicationState: IApplicationState = {
  basicState: initialBasicState,
};
export default initialApplicationState;

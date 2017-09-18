import dispatcher from '../Dispatcher';
import UserConstant from '../constants/UserConstant';

const { ActionTypes } = UserConstant;
export function createUser(data) {
    dispatcher.dispatch({
       type: ActionTypes.CREATE_USER,
       data: data
    });
}
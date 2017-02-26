import { dispatch } from '../dispatcher';

export default {
    create() {
        dispatch({type: 'sample/create'});
    }
}
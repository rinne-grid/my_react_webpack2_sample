import { ReduceStore } from 'flux/utils';
import dispatcher from '../dispatcher';

class SampleStore extends ReduceStore {
    getInitialState() {
        return {sample: null};
    }

    reduce(state, action) {
        switch(action.type) {
        case 'sample/create':
            console.log('sample/create action')
            return { sample: Object.assign({}, "test1")}
        }
    }

}

export default new SampleStore(dispatcher);

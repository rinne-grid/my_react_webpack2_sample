import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button/Button';
import SampleAction from './actions/SampleAction';
import sampleStore from './stores/sampleStore';


class MySample extends React.Component{
    handleButtonClick() {
        SampleAction.create();
    }

    static getStores() {
        return [sampleStore];
    }

    static calculateState() {
        return sampleStore.getState();
    }

    render() {
        return (
            <div className='MySample'>
                test
                <Button onClick={() => this.handleButtonClick()}>ボタン</Button>
            </div>
        )
    }
}

ReactDOM.render(
    <MySample/>,
    document.getElementById("root")
)
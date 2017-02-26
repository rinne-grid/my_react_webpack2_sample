import React from 'react';
import ReactDOM from 'react-dom';

class MySample extends React.Component{
    render() {
        return (
            <div className='MySample'>test</div>
        )
    }
}

ReactDOM.render(
    <MySample/>,
    document.getElementById("root")
)
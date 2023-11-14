import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import Header from './Header';
import Counter from './Counter';

const root = ReactDOM.createRoot(document.getElementById("root"));

function ReactPage(){
    return(
        <div className='container'>
            <Header/>
            <Counter/>
        </div>
    )
}

root.render(
    <ReactPage/>
)
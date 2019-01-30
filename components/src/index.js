import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
//https://github.com/Marak/faker.js
import CommentDetail from './CommentDetail';
const App = () => {
    return(
    <div className="ui container comments">
        < CommentDetail />
        < CommentDetail />
        < CommentDetail />
    </div>  
    );
}

ReactDOM.render(<App/>,document.querySelector('#root'));
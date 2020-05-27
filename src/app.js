import React from 'react';
import { Link } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <div>
                 <ul>
                    <li><Link to='/home'>home</Link></li>
                    <li><Link to='/about'>about</Link></li>
                </ul>
            </div>
        )
    }
}

export default App;
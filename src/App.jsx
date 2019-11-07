import React, {Suspense, lazy} from 'react';
import './shared.module.css';

import Home from './components/home/Home'
import OurClinic from './components/ourclinic/OurClinic'

function App() {
    return (
        <div>
            <div className="blueText">
                Test
            </div>
            <div>
                <Home/>
                <OurClinic/>
            </div>
        </div>
    );
}

export default App;
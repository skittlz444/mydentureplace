import React from 'react';
import '~/shared.module.css';
import WOW from 'wowjs';

import Home from '@c/home/Home';
import OurClinic from '@c/ourclinic/OurClinic';
import ContactHeader from '@s/contactheader/ContactHeader';

require('animate.css');
require('bootstrap');

export default class App extends React.Component{

    componentDidMount(){
        new WOW.WOW().init();
    }

    render(){
        return (
            <div>
                <ContactHeader/>
                <div>
                    <Home/>
                    <OurClinic/>
                </div>
            </div>
        );
    }
}
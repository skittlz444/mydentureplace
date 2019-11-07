import React from 'react';
import {shallow, mount} from 'enzyme';

import Home from '../Home';

//supress console warning about mutationobserver not being supported by browser (from WOW.js)
//unfortunately this supresses all warnings, however we are mainly looking for functional errors
console.warn = jest.fn();

describe('<Home />', () => {
	it('shallow renders without crashing', ()=>{
		shallow(<Home />);
	});

	it('full renders without crashing', ()=>{
		mount(<Home />);
	});
});
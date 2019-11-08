import React from 'react';
import {shallow, mount} from 'enzyme';

import ContactHeader from '../ContactHeader';

//supress console warning about mutationobserver not being supported by browser (from WOW.js)
//unfortunately this supresses all warnings, however we are mainly looking for functional errors
console.warn = jest.fn();

describe('<ContactHeader />', () => {
	it('shallow renders without crashing', ()=>{
		shallow(<ContactHeader />);
	});
});
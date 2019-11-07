import React, {Suspense as Sus} from 'react';
import {shallow, mount} from 'enzyme';

import App from '../App';

describe("<App />", () => {

	it('shallow renders without crashing', ()=>{	
		shallow(<App />);
	});

	it('fully renders without crashing', ()=>{
		console.warn = jest.fn();
		const wrapper = mount(<App />);
	});
});

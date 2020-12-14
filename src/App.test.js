import React from 'react';
import {render, screen} from "@testing-library/user-event";
import App from './App';

test('renders without errors', ()=>{
    render(<App/>);
});
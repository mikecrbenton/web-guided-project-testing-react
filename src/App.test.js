import React from 'react';
import {render, screen} from "@testing-library/react";
import App from './App';

test('renders without errors', ()=>{
    render(<App/>);
});

test('fetches and renders mission data', async () => {
    
});
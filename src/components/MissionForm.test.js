import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MissionForm from './MissionForm';

test("MissionForm renders correctly", ()=>{
    render(<MissionForm />);
});

test('renders message when isFetchingData is true', ()=>{

});

test('renders button when isFetchingData is false', ()=>{

});

test('calls getData when button is clicked', ()=>{

});
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MissionForm from './MissionForm';

test("MissionForm renders correctly", ()=>{
    render(<MissionForm />);
});

test('renders message when isFetchingData is true', ()=>{
    //Arrange: Render component
    render(<MissionForm isFetchingData={true}/>);

    //Act: Get div that says we are fetching data
    const displayText = screen.queryByText(/we are fetching data/i);

    //Assert: Expect the div to exist
    expect(displayText).not.toBeNull();
    expect(displayText).toBeInTheDocument();
});

test('renders button when isFetchingData is false', ()=>{
    render(<MissionForm isFetchingData={false}/>);
    const button = screen.queryByRole('button');
    expect(button).not.toBeNull();
});

test('calls getData when button is clicked', ()=>{
    const getDataMock = jest.fn();
    render(<MissionForm getData={getDataMock}/>);
    const button = screen.queryByRole("button");
    userEvent.click(button);
    userEvent.click(button);
    userEvent.click(button);
    userEvent.click(button);

    console.log(getDataMock.mock);
});
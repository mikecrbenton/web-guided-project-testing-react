import React from 'react';
import {render, screen, wait} from "@testing-library/react";
import App from './App';
import userEvent from '@testing-library/user-event';

test('renders without errors', ()=>{
    render(<App/>);
});

test('fetches and renders mission data', async () => {
    render(<App/>);

    const button = screen.getByRole("button");
    userEvent.click(button);

    await wait(()=>{
        const missions = screen.    expect(screen.getAllByTestId("mission")).toHaveLength(2);
        ("mission");
        console.log(missions);
    });
});
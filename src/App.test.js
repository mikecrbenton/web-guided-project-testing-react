import React from 'react';
import {render, screen, wait} from "@testing-library/react";
import App from './App';
import userEvent from '@testing-library/user-event';

import { fetchMissions as mockFetchMissions} from './api/fetchMissions';
jest.mock('./api/fetchMissions');

test('renders without errors', ()=>{
    render(<App/>);
});

test('fetches and renders mission data', async () => {
    mockFetchMissions.mockResolvedValueOnce({
        data:[
            {mission_name:"Mission 1", mission_id:1},
            {mission_name:"Mission 2", mission_id:2}
        ]
    });
    render(<App/>);


    const button = screen.getByRole("button");
    userEvent.click(button);

    await wait(() => {
        const missions = screen.getAllByTestId("mission");
        expect(missions).toHaveLength(2);
    });
});
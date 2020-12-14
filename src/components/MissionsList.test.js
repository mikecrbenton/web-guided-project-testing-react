import React from 'react';
import {render, screen} from "@testing-library/react";
import MissionsList from './MissionsList';

test("renders without errors", ()=>{
    render(<MissionsList missions={[]}/>);
});

test("renders new missions when missions data is passed", ()=>{
    const { rerender} = render(<MissionsList missions={[]}/>);
    
    let missionObjects = screen.queryAllByTestId("mission");
    expect(missionObjects).toHaveLength(0);

    const missions = [
        {mission_name: "Mission 1", mission_id:1},
        {mission_name: "Mission 2", mission_id:2}
    ];

    rerender(<MissionsList missions={missions}/>);
    
    missionObjects = screen.queryAllByTestId("mission");
    expect(missionObjects).toHaveLength(2);
}); 
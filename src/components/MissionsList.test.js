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
    
}); 
import React from 'react'
import {render, screen, fireEvent} from "@testing-library/react"
import MissionsList from './MissionsList'
import MissionForm from './MissionForm'

// MOCK DATA
const missionsData = [
   {
      mission_name: "Thaicom",
      mission_id: "9D1B7E0"
   },
   {
      mission_name: "Telstar",
      mission_id: "F4F83DE"
   },
]

test("renders without errors", () => {
   render( <MissionsList missions={ [] } /> )
})

test("renders list from API", () => {
   const { rerender } = render( <MissionsList missions={[]} /> )

   // ASSERT NO MISSIONS ON PAGE
   let missions = screen.queryAllByTestId("mission")
   expect(missions).toHaveLength(0)
   // RERENDER WITH DATA
   rerender(<MissionsList error="" missions={ missionsData} />)
   missions = screen.getAllByTestId("mission")
   // ASSERT DATA IS PRESENT
   expect(missions[0]).toHaveTextContent("Thaicom")
   expect(missions[1]).toHaveTextContent("Telstar")
   expect(missions).toHaveLength(2)
})
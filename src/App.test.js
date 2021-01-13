import React from 'react'
import {render, screen, fireEvent, waitFor} from "@testing-library/react"
import App from './App'

// just a naming convention here
import {fetchMissions as mockFetchMissions} from "./api/fetchMissions"

// block the actual code
jest.mock('./api/fetchMissions')

// mock data
const missionsData = {
   data: [
      {
         mission_name: "Thaicom",
         mission_id: "9D1B7E0"
      },
      {
         mission_name: "Telstar",
         mission_id: "F4F83DE"
      }
   ]
}

test("renders", () => {
   render(<App/>)
})

test('fetches and renders mission data', async ()=> {
   render(<App/>)
   // mock the fetchMissions() function
   mockFetchMissions.mockResolvedValueOnce(missionsData)

   const button = screen.getByRole('button')
   fireEvent.click(button)

   await waitFor( () => {

      const renderedMissions = screen.getAllByTestId("mission")
      expect(renderedMissions).toHaveLength(2)
      expect(renderedMissions[0]).toHaveTextContent("Thaicom")
      expect(renderedMissions[1]).toHaveTextContent("Telstar")
   })
})
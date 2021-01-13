import React from 'react'
import {render, screen, fireEvent} from "@testing-library/react"
import MissionForm from './MissionForm'

test("MissionForm component renders correctly", () => {
   // ARRANGE, ACT, ASSERT
   render( <MissionForm isFetchingData={false} /> )

})

test ('renders a loading message when isFetchingData is true', () => {
   // ARRANGE
   const {getByText} = render( <MissionForm isFetchingData={true} /> )
   const message = getByText(/we are fetching data/i) 
   // ASSERT
   expect(message).toBeTruthy();
   expect(message).not.toBeNull();
})

test('renders a Get Data button when isFetching is false', () => {
    // ARRANGE
    render( <MissionForm isFetchingData={false} /> )
    const button = screen.getByRole('button')
    expect(button).toHaveTextContent(/get data/i)
})

test('Calls getData when button is pressed', () => {
   // use mocks to test an API call
   const mockGetData = jest.fn( () => { return ("tests are fun")})
   render(<MissionForm getData={mockGetData} />)

   const button = screen.getByRole('button')
   fireEvent.click(button)

   expect(mockGetData.mock.calls.length).toBe(1)
   //expect(mockGetData.mock.calls.length).toHaveLength(1)
})
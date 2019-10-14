// Test away
import React from 'react';
import { render } from "@testing-library/react";



import Dashboard from "./Dashboard";

it ('renders', ( ) => {
    const {asFragment} = render(<Dashboard text="Unlock"/> )
    expect(asFragment()).toMatchSnapshot();
})

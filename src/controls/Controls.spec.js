// Test away!

import React from 'react';
import { render } from "@testing-library/react";
// 


import Controls from "./Controls";

it ('renders', ( ) => {
    const {asFragment} = render(<Controls text="Unlock"/> )
    expect(asFragment()).toMatchSnapshot();
})




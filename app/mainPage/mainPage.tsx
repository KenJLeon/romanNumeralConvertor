import React from "react";
import {defaultTheme, Provider} from '@adobe/react-spectrum';

export function MainPage(props: {}) {

    return (
        <Provider colorScheme="dark">
            <div>
                Hello World!
            </div>
        </Provider>
    )
}
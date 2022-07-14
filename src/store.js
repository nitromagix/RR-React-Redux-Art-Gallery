//

import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './features/artDataSlice'

export const store = configureStore({
    reducer: {
        data: dataReducer
    }
})

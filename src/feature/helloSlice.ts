import {createSlice} from 'redux-starter-kit'

export interface HelloState {
    id: number
}

export const initialState: HelloState[] = [];

const helloSlice = createSlice({
    slice: 'hello',
    initialState,
    reducers: {
    }
});

export default helloSlice.reducer;

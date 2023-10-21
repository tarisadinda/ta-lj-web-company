import { createSlice } from "@reduxjs/toolkit"
import alertSlice from "./alertSlice"

const modalState = {
    openModal: false,
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState: modalState,
    reducers: {
        setOpenModal(state, action) {
            state.openModal = action.payload
        }
    }
})

export const { setOpenModal } = modalSlice.actions

export const openModal = (state) => state.modal.openModal

export default modalSlice.reducer
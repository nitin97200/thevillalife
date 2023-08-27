import { MODAL_OPEN, MODAL_CLOSE } from "./Constant"
const initialState = {
    data: {
        modal: false,
        selected: ""
    }
}

export const modalOpen = (state = initialState, Action) => {

    switch (Action.type) {
        case MODAL_OPEN:
            console.log(" OPEN_MODAL condition", Action)
            return { ...state, data: Action.payload }

        case MODAL_CLOSE:
            console.log(" OPEN_CLOSE condition", Action)
            return { ...state, data: Action.payload }
        default:
            return state
    }
}

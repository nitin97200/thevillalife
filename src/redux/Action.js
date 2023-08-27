import { MODAL_OPEN, MODAL_CLOSE } from "./Constant"

export const modalOpen = (query) => {

    console.log("action called ")
    return {
        type: MODAL_OPEN,
        payload: query,
    }
}
export const modalClose = (query) => {

    console.warn("action called close")
    return {
        type: MODAL_CLOSE,
        payload: query
    }
}
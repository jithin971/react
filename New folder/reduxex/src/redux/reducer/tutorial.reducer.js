import { SETTUTORIALDATA } from "../action/tutorial.action"

export const tutorialReducer = (state = [], action) => {
    let { type, payload } = action

    switch (type) {
        case SETTUTORIALDATA:
            return payload;
        default:
            return state

    }
}
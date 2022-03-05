const initialState = 'Привіт Світ';

export const reducer = (state=initialState, action) => {
    switch(action.type) {
        case 'ENG':
            return state = 'Hello World';
        case 'UKR':
            return state = 'Привіт Світ';
        default:
            return state;
    }
}
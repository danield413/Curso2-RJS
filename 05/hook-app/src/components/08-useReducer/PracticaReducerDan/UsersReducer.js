

export const usersReducer = (state, action) => {
    
    switch (action.type) {
        case 'ADD':
            return [...state, action.payload]
           
        default:
            break;
    }

}

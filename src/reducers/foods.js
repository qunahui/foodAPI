const foodsReducerDefaultState = [];

export default (state = foodsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_FOOD':
            return [
                ...state,
                action.food
            ]
        case 'ADD_FOODS':
            return action.foods
        default: return state;
    }
}
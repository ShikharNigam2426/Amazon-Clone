// Reducer is just a data layer 
export const initialState = {
    basket: [],
}

// Selector 
export const getbasketTotal = (basket) =>
    basket?.reduce((amount, item) => Number(item.price) + Number(amount), 0);


const reducer = (state, action) => {
    switch (action.type) {
        case 'Add to Cart':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case 'RemoveFromBasket':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newbasket = [...state.basket]

            if (index >= 0) {
                newbasket.splice(index, 1);
            }
            else {
                alert('Cant Remove Product');
            }
            return {
                ...state,
                basket : newbasket
            }
        default:
            return state;
    }
};

export default reducer;
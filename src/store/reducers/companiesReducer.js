import {
    ALL_COMPANIES,
    NEXT_PAGE, OFFERS_SENIORITY,
    PREV_PAGE,
    SELECTED,
    GET_TECHNOLOGY
}
    from "../../actions/actions";

const initState = {
    companiesList: '',
    counter: 1,
    selected: null
};

const companiesReducer = (state = initState, action) => {
    switch (action.type) {
        case ALL_COMPANIES:

            return {
                ...state,
                companiesList: action.payload
            };
        case NEXT_PAGE:
            return {
                ...state,
                counter: state.counter + 1
            };
        case PREV_PAGE:
            return {
                ...state,
                counter: state.counter === 1 ? 1 : state.counter - 1
            };
        case OFFERS_SENIORITY:
            return {
                ...state,
                companiesList: action.payload
            };
        case SELECTED:
            return {
                ...state,
                selected: action.payload
            };
        case GET_TECHNOLOGY:
            return {
                ...state,
                companiesList: action.payload
            };

        default:
            return state;
    }
};

export default companiesReducer;
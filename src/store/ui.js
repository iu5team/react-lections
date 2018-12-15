const ACTION_CHANGE_TITLE = 'CHANGE_TITLE';

const initialState = {
    title: 'Заголовок в сторе'
};

export const changeTitle = (newTitle) => ({
    type: ACTION_CHANGE_TITLE,
    payload: newTitle
});

function ui(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_TITLE':
            return {
                title: action.payload
            };

        default: return state;
    }
}

export default ui;

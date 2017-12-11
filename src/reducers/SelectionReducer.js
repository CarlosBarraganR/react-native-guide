export default (state = null, action) => {
    switch(action.type){
        case 'select_library':
            console.log(action);
            return action.payload;
        default:
            return state;
    };
};
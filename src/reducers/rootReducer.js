const initState = {
    posts: [
        {id: '1', title: 'Choose Squirtle', body: 'Minim magna in quis elit tempor et magna duis minim. Do et Lorem in elit non enim culpa incididunt exercitation aliquip consectetur. Commodo eu id culpa non. Magna consectetur veniam dolore occaecat cillum nisi ad. Ad labore quis reprehenderit commodo ad Lorem tempor tempor aliquip ullamco. Proident eu consequat duis aute dolore elit cupidatat quis.'},
        {id: '2', title: 'Choose Bulbasaur', body: 'Culpa sint excepteur reprehenderit tempor tempor est nostrud irure magna in labore veniam Lorem aliqua. Labore commodo est occaecat minim labore ipsum commodo fugiat eiusmod. Nostrud ad nisi aliqua occaecat eu quis ex.'},
        {id: '3', title: 'Choose Charmander', body: 'Aliquip consectetur ipsum culpa nisi nostrud amet nisi. Reprehenderit anim sint dolore non cillum cillum ullamco nisi cupidatat culpa. Magna proident deserunt reprehenderit veniam pariatur sit commodo magna commodo. Dolore ullamco ut commodo esse.'}
    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });
        return {
            ...state,
            posts: newPosts
        }
    }
    
    return state;
}

export default rootReducer
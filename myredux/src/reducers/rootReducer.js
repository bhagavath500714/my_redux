const initState = {
    posts: [
        {id: '1', title: 's lai unique jcfbdfgifbfbeiebuget vrbvipenrun', body: 'Lorem ipsum test text1'},
        {id: '2', title: 'c lai cnique', body: 'Lorem ipsum test text2'},
        {id: '3', title: 'd lai dnique', body: 'Lorem ipsum test text3'},
    ]
}

const rootReducer = (state = initState, action) => {
    if(action.type === 'DELETE_POST') {
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
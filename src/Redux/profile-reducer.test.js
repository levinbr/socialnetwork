import profileReducer, {addPost, deletePost} from "./profile-reducer";

let state = {
    myPosts:[
        {message:'Привет! я выучил React!',likes:'28'},
        {message:'Я люблю javascript',likes:'561'},
        {message:'Хочу в отпуск!!!!',likes:'56'},
        {message:'УРААААА Я ЭТО СДЕЛАЛЬ',likes:'21'}
    ]
};

it('after added post, length increment', () => {
    // test data
    let action = addPost('New post');
    // action
    let newState = profileReducer(state, action);
    //expectation
    expect(newState.myPosts.length).toBe(5);
});
it('message and likes correct', () => {
    // test data
    let action = addPost('New post');
    // action
    let newState = profileReducer(state, action);
    //expectation
    expect(newState.myPosts[4].message).toBe('New post');
    expect(newState.myPosts[4].likes).toBe('0');
});
it('after delete post, length should be decrement', () => {
    // test data
    let action = deletePost(1);
    // action
    let newState = profileReducer(state, action);
    //expectation
    expect(newState.myPosts.length - 1).toBe(3);

});
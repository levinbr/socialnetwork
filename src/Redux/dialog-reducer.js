const ADD_NEW_MESSAGE_TEXT = 'ADD-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {agentId:1, name: 'Вася',ava:'https://cs16planet.ru/steam-avatars/images/avatar2700.jpg'},
        {agentId:2, name: 'Марина',ava:'https://i.pinimg.com/736x/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64--youtube.jpg'},
        {agentId:3, name: 'Женя',ava:'https://author.today/content/2020/01/15/70c3267634e848bdb6bab342a2d126c3.jpg'},
        {agentId:4, name: 'Аня',ava:'https://cs2.livemaster.ru/storage/10/74/415c0ac5e5ce9ebdab6d659d56q2--dizajn-i-reklama-art-avatarka.jpg'}
    ],
    messages: [
        {agentId:2, message:'Привет, а ты уже делал страницу dialogs?'},
        {agentId:2, message:`еще нет :'(`},
        {agentId:2, message:'Когда планируешь закончить?'},
        {agentId:2, message:'После дождичка в четверг :))))'}
    ],
};

const dialogReducer = (state = initialState, action) => {


    switch (action.type) {
        case ADD_NEW_MESSAGE_TEXT:
            return {...state,
                    messages: [...state.messages, {agentId: 2, message: action.messageText}]
            };
        default:
            return state;
    }
};

export const addNewMessage = (text) => ({type: ADD_NEW_MESSAGE_TEXT, messageText: text});

export default dialogReducer;
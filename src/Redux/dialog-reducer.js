const ADD_NEW_MESSAGE_TEXT = 'ADD-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: 121252, agentId:1, name: 'Вася', ava:'https://cs16planet.ru/steam-avatars/images/avatar2700.jpg',
            messages: []},
        {id: 143252, agentId:2, name: 'Марина', ava:'https://i.pinimg.com/736x/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64--youtube.jpg',
            messages: [
                {id: 121252, agentId:2, message:'Привет, а ты уже делал страницу dialogs?', date:'12/12/2020 13:13'},
                {id: 126482, agentId:555, message:`еще нет :'(`, date:'12/12/2020 14:25'},
                {id: 125353, agentId:2, message:'Когда планируешь закончить?', date:'12/12/2020 14:50'},
                {id: 121423, agentId:555, message:'После дождичка в четверг :))))', date:'12/12/2020 15:43'}]
        },
        {id: 1219877, agentId:3, name: 'Женя', ava:'https://author.today/content/2020/01/15/70c3267634e848bdb6bab342a2d126c3.jpg',
            messages: []},
        {id: 1758532, agentId:4, name: 'Аня', ava:'https://cs2.livemaster.ru/storage/10/74/415c0ac5e5ce9ebdab6d659d56q2--dizajn-i-reklama-art-avatarka.jpg',
            messages: []}
    ],
    //toDo: Исправить структуру dialogs. Удалить блок ниже. Исправить экшенкрецтеры
    messages: [
        {id: 121252, agentId:2, message:'Привет, а ты уже делал страницу dialogs?', date:'12/12/2020 13:13'},
        {id: 126482, agentId:9239, message:`еще нет :'(`, date:'12/12/2020 14:25'},
        {id: 125353, agentId:2, message:'Когда планируешь закончить?', date:'12/12/2020 14:50'},
        {id: 121423, agentId:9239, message:'После дождичка в четверг :))))', date:'12/12/2020 15:43'}
    ],
};

const dialogReducer = (state = initialState, action) => {


    switch (action.type) {
        case ADD_NEW_MESSAGE_TEXT:
            const d = new Date();
            return {...state,
                    messages: [...state.messages, {id: Math.floor(Math.random() * Math.floor(10000)),
                                agentId: action.idOwner, message: action.message, date: d}
                    ]
            };
        default:
            return state;
    }
};

export const addNewMessage = (text, idOwner) => ({type: ADD_NEW_MESSAGE_TEXT, message: text, idOwner: idOwner });

export default dialogReducer;
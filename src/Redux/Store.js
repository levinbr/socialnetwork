import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import sidebarReducer from "./sidebar-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_NEW_MESSAGE_TEXT = 'ADD-NEW-MESSAGE-TEXT';

let store = {
    _state: {
        profilePage: {
            myPosts:[
                {message:'Привет! я выучил React!',likes:'28'},
                {message:'Я люблю javascript',likes:'561'},
                {message:'Хочу в отпуск!!!!',likes:'56'},
                {message:'УРААААА Я ЭТО СДЕЛАЛЬ',likes:'21'}
            ],
            newPostText: 'test',
        },
        dialogsPage: {
            dialogs: [
                {agentId:1, name: 'Вася',ava:'https://cs16planet.ru/steam-avatars/images/avatar2700.jpg'},
                {agentId:2, name: 'Петя',ava:'https://i.pinimg.com/736x/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64--youtube.jpg'},
                {agentId:3, name: 'Гронколонкос',ava:'https://author.today/content/2020/01/15/70c3267634e848bdb6bab342a2d126c3.jpg'},
                {agentId:4, name: 'Клава',ava:'https://cs2.livemaster.ru/storage/10/74/415c0ac5e5ce9ebdab6d659d56q2--dizajn-i-reklama-art-avatarka.jpg'}
            ],
            messages: [
                {agentId:2, message:'Привет, а ты уже выучил React?'},
                {agentId:2, message:'я уже да'},
                {agentId:2, message:'Что следующее будешь изучать?'},
                {agentId:2, message:'Закончил проект?'}
            ],
            newMessageText: ""
        },
        sidebarPage: {},
    },
    _callSubscriber () {
        console.log('Hi');
    },
    getState () {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch (action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);
        this._callSubscriber(this._state);
    }

}




export default store;
window.store = store;
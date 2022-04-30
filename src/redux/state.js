let ADD_POST =  "ADD_POST";
let UPDATE_POST_TEXT =  "UPDATE_POST_TEXT";
let SEND_MESSAGE =  "SEND_MESSAGE";
let UPDATE_MESSAGE_TEXT =  "UPDATE_MESSAGE_TEXT";

let store = {
  _state: {
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Masha" },
        { id: 2, name: "Vlad" },
        { id: 3, name: "Dima" },
        { id: 4, name: "Yura" },
        { id: 5, name: "Karl" },
      ],
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "i am Morty " },
        { id: 3, message: "My  granpa is Rick " },
        { id: 4, message: "Yo" },
        { id: 5, message: "Yo" },
      ],
      newMessageText: "",
    },
    profilePage: {
      posts: [
        { id: 1, post: "Hello", likesCount: 5 },
        { id: 2, post: "i am Morty", likesCount: 50 },
        { id: 3, post: "My granpa is Rick", likesCount: 10 },
        { id: 4, post: "He is a genius ", likesCount: 110 },
      ],
      newPostText: "",
    },
    friends: {
      friends: [
        { id: 1, name: "Masha" },
        { id: 1, name: "Dima" },
        { id: 1, name: "Vlad" },
        { id: 1, name: "Andre" },
        { id: 1, name: "Vasya" },
        { id: 1, name: "Fill" },
      ],
    },
    newsPage: {
      news: [
        {
          img: "https://sun2-9.userapi.com/impf/AbYGMKr-6Jw5Tz0GtUaQAwf2FD8A9l4ZFPAUZQ/ekAoLQm28BY.jpg?size=537x240&quality=96&sign=525cb5a00e89a7b4230581a1be58e048&type=share",
          text: "В Малайзии готовы рассмотреть вопрос поставок электроники в Россию",
          likesCount: 10,
        },
        {
          img: "https://sun2-4.userapi.com/impf/U-Xr5sv87oeHT_bmfKDlBmI8hdEt9aClQ-IGtQ/LZ4D1d_sHWA.jpg?size=537x240&quality=96&crop=0,0,968,433&sign=c33b1a49a90a3ef955bace207bcef94e&type=share",
          text: "Микрон» надеется подрасти",
          likesCount: 4,
        },
        {
          img: "https://sun9-62.userapi.com/impg/zHAakPA6CVPQYkx_tr9vf6mLPDHmlxNvnJBkjA/vK0N7IUa4DY.jpg?size=537x240&quality=96&sign=1baa2cb3ca2882442f3206b83463771c&type=share",
          text: "У главного разработчика российских ARM-процессоров выручка рванула вверх. Рост более 1000%",
          likesCount: 40,
        },
      ],
    },
  },
  _callSubscriber() {},

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: this._state.profilePage.posts.length + 1,
        post: this._state.profilePage.newPostText,
        likesCount: 0,
      };

      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_POST_TEXT) {
      this._state.profilePage.newPostText = action.text;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let newMessage = {
        id: this._state.dialogsPage.messages.length + 1,
        message: this._state.dialogsPage.newMessageText,
      };
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_MESSAGE_TEXT ) {
      this._state.dialogsPage.newMessageText = action.text;
      this._callSubscriber(this._state);
    }
  },

  
};
window.store = store;
export const  addPostActionCreator = () =>({type:ADD_POST})
export const  updatePostActionCreator = (text) =>({type:UPDATE_POST_TEXT,text:text})

export const  sendMessageActionCreator = () =>({type:SEND_MESSAGE})
export const  updateMessageActionCreator = (text) =>({type:UPDATE_MESSAGE_TEXT,text:text})
export default store;







// addPost() {
  //   let newPost = {
  //     id: this._state.profilePage.posts.length + 1,
  //     post: this._state.profilePage.newPostText,
  //     likesCount: 0,
  //   };

  //   this._state.profilePage.posts.push(newPost);
  //   this._state.profilePage.newPostText = "";
  //   this._callSubscriber(this._state);
  // },
  // updatePostText(text) {
  //   this._state.profilePage.newPostText = text;

  //   this._callSubscriber(this._state);
  // },

  // addMessage() {
  //   let newMessage = {
  //     id: this._state.dialogsPage.messages.length + 1,
  //     message: this._state.dialogsPage.newMessageText,
  //   };

  //   this._state.dialogsPage.messages.push(newMessage);
  //   this._state.dialogsPage.newMessageText = "";
  //   this._callSubscriber(this._state);
  // },
  // updateMessageText(text) {
  //   this._state.dialogsPage.newMessageText = text;
  //   this._callSubscriber(this._state);
  // },
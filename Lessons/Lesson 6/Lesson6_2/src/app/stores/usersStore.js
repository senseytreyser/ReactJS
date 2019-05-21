import {GET_USERS} from '../constants/usersConstants';
import dispatcher from '../dispatcher';
import {EventEmitter} from 'events';

class usersStore extends EventEmitter {
  constructor() {
    super();
    this.users = [];
    this.getUsers = this.getUsers.bind(this);
    this.change = this.change.bind(this);
    this.handleActions = this.handleActions.bind(this)
  }

  getUsers(users) {
    this.users = users;
    this.change();
  }

  change() {
    this.emit('change');
  }

  handleActions(action) {
    switch(action.type) {
      case GET_USERS: 
        this.getUsers(action.data);
        break;
      case ADD_POST: 
        this.addPost(action.data);
        break;
    }
  }
}

const store = new postStore();
dispatcher.register(store.handleActions);
export default store;

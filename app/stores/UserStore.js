import { EventEmitter } from "events";
import dispatcher from '../Dispatcher';
import UserConstant from '../constants/UserConstant';

const { ActionTypes } = UserConstant;

class UserStore extends EventEmitter {
    constructor(props) {
        super(props);
        this.users = [
                {
                    Id: 1,
                    Name: 'DongVo',
                    Address: 'QuangBinh',
                    Phone: '01657474245',
                    Gender: 'Male',
                    Birthday: '28/10/1994',
                    Country: 'Vietnamese'
                },
                {
                    Id: 2,
                    Name: 'Nam',
                    Address: 'QuangBinh',
                    Phone: '0123456789',
                    Gender: 'Male',
                    Birthday: '28/10/1994',
                    Country: 'Vietnamese'
                },
                {
                    Id: 3,
                    Name: 'Tuliver',
                    Address: 'Paris',
                    Phone: '012346685578',
                    Gender: 'Male',
                    Birthday: '21/03/1991',
                    Country: 'France'
                }
            ];
    }

    getAll() {
        return this.users;
    }

    createUser(data) {
        const { name, address, phone, gender, birthday, country } = data;
        let user = {
            Name: name.value,
            Address: address.value,
            Phone: phone.value,
            Gender: gender.value,
            Birthday: birthday.value,
            Country: country.value
        };
        this.users.push(user);
        this.emit('change');
    }

    handleAction(action) {
        switch (action.type) {
            case ActionTypes.CREATE_USER: {
                this.createUser(action.data);
            }
        }
    }
}

const userStore = new UserStore();
dispatcher.register(userStore.handleAction.bind(userStore));
window.userStore = dispatcher;
export default userStore
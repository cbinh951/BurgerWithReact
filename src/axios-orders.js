import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-dbf57.firebaseio.com/'
});

export default instance;
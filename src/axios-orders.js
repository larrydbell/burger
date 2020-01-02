import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://myburgerproject-70250.firebaseio.com/'
});

export default instance;
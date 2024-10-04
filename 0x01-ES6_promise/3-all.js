/* eslint-disable */
import { error } from 'console';
import {uploadPhoto, createUser} from './utils.js'


// Promise.all : resolves when array of of promises are successfull 
// Promise.then to access resolved object
function handleProfileSignup() {
    const photo = uploadPhoto();
    const user = createUser();
    
    return Promise
    .all([photo, user])
    .then((res) => {
        console.log(`${res[0].body} ${res[1].firstName} ${res[1].lastName}`);
    })
    .catch(() => { console.log('Signup system offline'); });
}

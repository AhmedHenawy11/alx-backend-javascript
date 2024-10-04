/* eslint-disable */
import { error } from 'console';
import {uploadPhoto, createUser} from './utils.js'


// Promise.all : resolves when array of of promises are successfull 
// Promise.then to access resolved object
function handleProfileSignup() {
    const photo = uploadPhoto();
    const user = createUser();
    const photo1 = photo.then((data) => {
        const body = data.body;
        return body;
    })
    user.then((data) => {
        const userName = {
            firstName: data.firstName,
            lastName: data.lastName
        }
        console.log(userName);
    })
    console.log(photo1);
}

handleProfileSignup()
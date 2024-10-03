/* eslint-disable */
export default function getFullResponseFromAPI(success) {
	return new Promise((resolve, reject) => {
        success ? resolve({status: 200, body: 'Success'}) : reject(new Error('The fake API is not working currently'));
    });
}
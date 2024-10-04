/* eslint-disable */
// handling the respone of promise after it's rejected or resolved
export default function handleResponseFromAPI(promise) {
    return promise
      .then(() => ({ status: 200, body: 'success' }))
      .catch(() => Error())
      .finally(() => { console.log('Got a response from the API'); });
}
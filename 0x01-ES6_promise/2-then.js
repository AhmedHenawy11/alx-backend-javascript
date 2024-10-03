/* eslint-disable */
// handling the return of promise response
export default function handleResponseFromAPI(promise) {
    return promise
      .then(() => ({ status: 200, body: 'success' }))
      .catch(() => Error())
      .finally(() => { console.log('Got a response from the API'); });
}
// Return simple promise
export default function signUpUser(firstName, lastName) {
  if (firstName && lastName) {
    return Promise.resolve({firstName: firstName, lastName: lastName})
  }
}

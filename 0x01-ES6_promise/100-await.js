/* eslint-disable no-console */

import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const userPhoto = await uploadPhoto();
    const userName = await createUser();

    return { photo: userPhoto, user: userName };
  } catch (error) {
    return { photo: null, user: null };
  }
}

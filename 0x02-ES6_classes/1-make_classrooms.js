/* eslint-disable no-console */
import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const object0 = new ClassRoom(19);
  const object1 = new ClassRoom(20);
  const object2 = new ClassRoom(34);

  return [object0, object1, object2];
}

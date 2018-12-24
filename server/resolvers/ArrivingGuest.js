const moment = require('moment');

module.exports = {
  ArrivingGuest: {
    id(guest, _, ctx) {
      return guest.id;
    },
    name(guest, _, ctx) {
      return guest.name;
    },
    isSpecial(guest, _, ctx) {
      return guest.isSpecial;
    },
    flightTime(guest, _, ctx) {
      return guest.flightTime ? moment(guest.flightTime).format('h:mma') : null;
    },
    roomSetup(guest, _, ctx) {
      return guest.roomSetup;
    },
    movingFrom(guest, _, ctx) {
      return guest.movingFrom;
    },
    givenRoomKey(guest, _, ctx) {
      return guest.givenRoomKey;
    },
    givenRoomKeyBy(guest, _, ctx) {
      return guest.givenRoomKeyBy;
    },
    givenRoomKeyAt(guest, _, ctx) {
      return guest.givenRoomKeyAt
        ? moment(guest.givenRoomKeyAt).fromNow()
        : null;
    },
  },
};

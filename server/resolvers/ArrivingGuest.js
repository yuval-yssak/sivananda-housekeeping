module.exports = {
  ArrivingGuest: {
    id(guest, _, ctx) {
      return guest.id();
    },
    name(guest, _, ctx) {
      return guest.name();
    },
    isSpecial(guest, _, ctx) {
      return guest.isSpecial();
    },
    flightTime(guest, _, ctx) {
      const flightTime = guest.flightTime();
      if (flightTime) {
        return flightTime.format('h:mm a');
      }
      return null;
    },
    movingFrom(guest, _, ctx) {
      return guest.movingFrom();
    },
    givenRoomKey(guest, _, ctx) {
      return guest.givenRoomKey();
    },
    givenRoomKeyBy(guest, _, ctx) {
      return guest.givenRoomKeyBy();
    },
    givenRoomKeyAt(guest, _, ctx) {
      return guest.givenRoomKeyAt();
    },
  },
};

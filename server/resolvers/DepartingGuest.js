module.exports = {
  DepartingGuest: {
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
    lateCheckout(guest, _, ctx) {
      return guest.lateCheckout();
    },
    movingTo(guest, _, ctx) {
      return guest.movingTo();
    },
  },
};
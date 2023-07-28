import http from "./http";

const apiEndpoint = "/bookings";

function addBooking(booking) {
  return http.post(apiEndpoint, booking);
}

export default {
  addBooking,
};

import http from "./http";

const apiEndpoint = "/bookings";

function getBooking() {
  return http.get(apiEndpoint);
}

function addBooking(booking) {
  return http.post(apiEndpoint, booking);
}

function editBooking(booking) {
  return http.put(`${apiEndpoint}/${booking._id}`, booking);
}

function deleteBooking(booking) {
  return http.delete(`${apiEndpoint}/${booking._id}`);
}

export default {
  getBooking,
  addBooking,
  editBooking,
  deleteBooking,
};

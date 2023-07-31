import http from "./http";

const apiEndpoint = "/messages";

function getMessages() {
  return http.get(apiEndpoint);
}

function addMessage(message) {
  return http.post(apiEndpoint, message);
}

function deleteMessage(message) {
  return http.delete(`${apiEndpoint}/${message._id}`);
}

export default {
  getMessages,
  addMessage,
  deleteMessage,
};

import http from "./http";

const apiEndpoint = "/messages";

function addMessage(message) {
  return http.post(apiEndpoint, message);
}

export default {
  addMessage,
};

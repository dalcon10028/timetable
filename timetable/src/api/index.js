import axios from "axios";

const http = axios.create({
  baseURL:
    "https://eiylh14ewb.execute-api.ap-northeast-2.amazonaws.com/default/timetable-2021"
});

function getAllMessages() {
  return http.get();
}

function getAllMessagesForHyeon() {
  return http.get("", { headers: "hyeon" });
}

function getAllMessagesForYeon() {
  return http.get("", { headers: "yeon" });
}

function getUnConfirmedMessagesForHyeon() {
  return http.get("unconfirmed", { headers: "hyeon" });
}

function getUnConfirmedMessagesForYeon() {
  return http.get("unconfirmed", { headers: "yeon" });
}

function getPinnedMessagesForHyeon() {
  return http.get("pinned", { headers: "hyeon" });
}

function getPinnedMessagesForYeon() {
  return http.get("pinned", { headers: "yeon" });
}

export {
  getAllMessages,
  getAllMessagesForHyeon,
  getAllMessagesForYeon,
  getUnConfirmedMessagesForHyeon,
  getUnConfirmedMessagesForYeon,
  getPinnedMessagesForHyeon,
  getPinnedMessagesForYeon
};

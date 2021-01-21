import {
  getAllMessages,
  getAllMessagesForHyeon,
  getAllMessagesForYeon,
  getUnConfirmedMessagesForHyeon,
  getUnConfirmedMessagesForYeon,
  getPinnedMessagesForHyeon,
  getPinnedMessagesForYeon
} from "@/api/index";

export default {
  GET_ALL_MSGS({ commit }) {
    return getAllMessages().then(res => commit("SET_MSGS", res.data));
  },
  GET_ALL_MSGS_HYEON({ commit }) {
    return getAllMessagesForHyeon().then(res => commit("SET_MSGS", res.data));
  },
  GET_ALL_MSGS_YEON({ commit }) {
    return getAllMessagesForYeon().then(res => commit("SET_MSGS", res.data));
  },
  GET_UCF_MSGS_HYEON({ commit }) {
    return getUnConfirmedMessagesForHyeon().then(res =>
      commit("SET_MSGS", res.data)
    );
  },
  GET_UCF_MSGS_YEON({ commit }) {
    return getUnConfirmedMessagesForYeon().then(res =>
      commit("SET_MSGS", res.data)
    );
  },
  GET_PD_MSGS_HYEON({ commit }) {
    return getPinnedMessagesForHyeon().then(res =>
      commit("SET_MSGS", res.data)
    );
  },
  GET_PD_MSGS_YEON({ commit }) {
    return getPinnedMessagesForYeon().then(res => commit("SET_MSGS", res.data));
  }
};

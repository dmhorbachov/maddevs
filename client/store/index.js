export const state = () => ({
  contactMeFormStatus: false
});

export const mutations = {
  SET_STATUS_FOR_SEND_EMAIL(state, status) {
    state.contactMeFormStatus = status;
  }
};

export const actions = {
  sendEmail({commit}, payload) {
    const data = payload;
    return new Promise((resolve, reject) => {
      this.$axios.post('send-email', data).then(res => {
        if (res.status === 200) {
          commit('SET_STATUS_FOR_SEND_EMAIL', true);
          resolve(res);
        }
      }).catch(err => {
        commit(SET_STATUS_FOR_SEND_EMAIL, false);
        reject(err);
      });
    });
  }
};

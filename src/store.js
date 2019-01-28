import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        unionid   : null,
        openid    : null,
        nickname  : null,
        avatar    : null,
        wxcode    : null,
        sessionKey: null
    },
    mutations: {
        setOpenID: (state, val) => {
            state.openid = val;
        },
        setWxCode: (state, val) => {
            state.wxcode = val;
        },
        setSessionKey: (state, val) => {
            state.sessionKey = val;
        },
        setUnionid: (state, val) => {
            state.unionid = val;
        },
        setNickname: (state, val) => {
            state.nickname = val;
        },
        setAvatar: (state, val) => {
            state.avatar = val;
        }
    }
});

export default store;

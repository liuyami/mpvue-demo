<template>
    <div class="container">
        <i-button
            type      = "primary"
            shape     = "circle"
            size      = "large"
            inline    = "true"
            open-type = "getUserInfo"
            lang      = "zh_CN"
            @click    = "doOauth"
        >小程序授权</i-button>
    </div>
</template>

<script>
import store from '../../store';

export default {
    methods: {
        doOauth() {
            wx.getUserInfo({
                success(res) {
                    // const userInfo = res.userInfo;
                    // console.log(userInfo);
                    // const nickName  = userInfo.nickName;
                    // const avatarUrl = userInfo.avatarUrl;
                    // const gender    = userInfo.gender;     // 性别 0：未知、1：男、2：女
                    // const province  = userInfo.province;
                    // const city      = userInfo.city;
                    // const country   = userInfo.country;

                    store.commit('setNickname', res.userInfo.nickName);
                    store.commit('setAvatar', res.userInfo.avatarUrl);

                    wx.navigateTo({
                        url: '/pages/actions/main'
                    });
                }
            });
        }
    },

    created() {}
};
</script>

<style scoped>
</style>

<template>
    
    <div class="page">
        <div class="page__hd">
            <h1>微信授权</h1>
            <div>获取用户昵称和头像</div>
        </div>
        <div class="page_bd">
            <button            
                open-type = "getUserInfo"
                lang      = "zh_CN"
                @click    = "doOauth"
                class="weui_btn weui_btn_plain_default"
            >
            <i class="iconfont icon-wechat"> 小程序授权</i>
            </button>
        </div>

        <div class="weui-footer">
            <div class="weui-footer__links">
                <navigator url="" class="weui-footer__link">Yami</navigator>
            </div>
            <div class="weui-footer__text">Copyright©2019 YS MEDIA</div>
        </div>
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

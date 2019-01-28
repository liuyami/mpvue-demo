<script>
import store from './store';

export default {
    onLaunch() {
        console.log('in app.vue');
        // 检测登录 开始
        if (
            !store.state.unionid ||
            !store.state.openid ||
            !store.state.nickname ||
            !store.state.avatar ||
            !store.state.wxcode ||
            !store.state.sessionKey
        ) {
            wx.login({
                success: res => {
                    if (res.code) {
                        store.commit('setWxCode', res.code);
                        wx.request({
                            url   : 'https://wechat.yscase.com/platform/ys/mini-program/oauth',
                            method: 'POST',
                            data  : {
                                code     : res.code,
                                client_id: '408a47bc-d508-4e7f-ab38-01ab9151ab8c'
                            },
                            success: res => {
                                console.log(res);
                                store.commit('setUnionid', res.data.unionid);
                                store.commit('setOpenID', res.data.openid);
                                store.commit('setSessionKey', res.data.session_key);

                                // 跳转到授权页面
                                wx.navigateTo({
                                    url: '/pages/oauth/main'
                                });
                            }
                        });
                    } else {
                        console.log('登录失败：' + res.errMsg);
                    }
                }
            });
        } else {
            // 如果已经登录
            wx.navigateTo({
                url: '/pages/actions/main'
            });
        }
        // 检测登录 结束
    } // created end
}; //class end
</script>

<style>
.container {
    height         : 100%;
    display        : flex;
    flex-direction : column;
    align-items    : center;
    justify-content: space-between;
    padding        : 100rpx 0;
    box-sizing     : border-box;
}

* {
    transition        : width 2s;
    -moz-transition   : width 2s;
    -webkit-transition: width 2s;
    -o-transition     : width 2s;
}
</style>

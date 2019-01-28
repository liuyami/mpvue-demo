<template>
  <div class="container">
    <div class="userinfo">
      <div>
        <img v-bind:src="avatar" class="userinfo-avatar">
      </div>
      <div class="userinfo-nickname">{{nickname}}</div>
    </div>
    <!-- grid start-->
    <div class="grid">
      <i-grid>
        <i-grid-item i-class="grid-item">
          <i-grid-icon>
            <i-icon type="mobilephone" size="30"/>
          </i-grid-icon>
          <i-grid-label>手机号码</i-grid-label>
        </i-grid-item>
        <i-grid-item i-class="grid-item">
          <i-grid-icon>
            <i-icon type="addressbook" size="30"/>
          </i-grid-icon>
          <i-grid-label>收货地址</i-grid-label>
        </i-grid-item>
        <i-grid-item i-class="grid-item">
          <i-grid-icon>
            <i-icon type="camera" size="30"/>
          </i-grid-icon>
          <i-grid-label>摄像头</i-grid-label>
        </i-grid-item>
      </i-grid>
    </div>
    <!-- grid end-->
  </div>
</template>

<script>
import store from '../../store';

export default {
    data() {
        return {
            nickname: '正在获取...',
            avatar  : ''
        };
    },

    methods: {},

    mounted() {
        //console.log(store.state);
        this.nickname = store.state.nickname;
        this.avatar   = store.state.avatar;
    }
};
</script>

<style scoped>
.userinfo {
    display       : flex;
    flex-direction: column;
    align-items   : center;
}

.userinfo-avatar {
    width        : 128rpx;
    height       : 128rpx;
    margin       : 20rpx;
    border-radius: 50%;
}

.userinfo-nickname {
    color: #aaa;
}

.grid {
    margin-top: 30px;
}
</style>

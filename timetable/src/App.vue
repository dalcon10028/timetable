<template>
  <v-app>
    <v-tabs background-color="#5C6BC0" grow dark icons-and-text>
      <v-tabs-slider color="yellow"></v-tabs-slider>
      <v-tab @click="$router.push('hyeon')">
        수현
        <v-icon tag="span">👩</v-icon>
      </v-tab>

      <v-tab @click="$router.push('yeon')">
        연권
        <v-icon tag="span">🧑</v-icon>
      </v-tab>

      <v-tab @click="$router.push('mail')">
        <v-badge color="pink" :content="count" light>
          편지함
        </v-badge>
        <v-icon tag="span">📧</v-icon>
      </v-tab>
    </v-tabs>
    <transition name="page" mode="out-in">
      <router-view />
    </transition>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      count: "" || 0
    };
  },
  created() {
    this.$router.push(this.$store.state.user);
    this.$http
      .get(
        `https://zodg2trlwb.execute-api.ap-northeast-2.amazonaws.com/2021-01-21/message/unconfirmedCount?user=${this.$store.state.user}`
      )
      .then(({ data }) => {
        this.count = data[0].count;
      })
      .catch(err => console.log(err));
  }
};
</script>
<style>
html {
  width: 400px;
  height: 500px;
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
</style>

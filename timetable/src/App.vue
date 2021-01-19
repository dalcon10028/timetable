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
        <v-icon tag="span">😎</v-icon>
      </v-tab>

      <v-tab @click="$router.push('mail')">
        <v-badge color="pink" content="3" light>
          편지함
        </v-badge>
        <v-icon tag="span">📧</v-icon>
      </v-tab>
    </v-tabs>
    <router-view />
  </v-app>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {
    this.$router.push("hyeon");
  }
};
</script>
<style>
html {
  width: 400px;
  height: 500px;
}
</style>

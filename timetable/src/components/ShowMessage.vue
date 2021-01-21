<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <v-card class="d-flex flex-column">
      <v-img
        class="white--text align-center"
        max-height="50px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-card-title>{{ message.title }}</v-card-title>
      </v-img>
      <v-card-subtitle class="pb-0">
        {{ message.author }}
      </v-card-subtitle>

      <v-card-text class="text--primary">
        {{ message.content }}
      </v-card-text>
      <v-spacer></v-spacer>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red" dark @click="dialog = false">
          닫기
        </v-btn>
        <v-btn color="pink" dark>
          좋아요
          <v-icon tag="span">🥰</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["bus"],
  data() {
    return {
      dialog: false,
      message: {}
    };
  },
  methods: {},
  mounted() {
    this.bus.$on("show-dialog", () => (this.dialog = !this.dialog));
    this.bus.$on("show-message", ({ id }) => {
      this.$http
        .get(
          `https://zodg2trlwb.execute-api.ap-northeast-2.amazonaws.com/2021-01-21/message/${id}`
        )
        .then(({ data }) => {
          this.message = data[0];
        })
        .catch(err => (this.title = err));
      this.$http
        .patch(
          `https://zodg2trlwb.execute-api.ap-northeast-2.amazonaws.com/2021-01-21/message`,
          { id }
        )
        .catch(err => (this.title = err));
    });
  }
};
</script>

<style></style>

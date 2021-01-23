<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <v-card class="d-flex flex-column">
      <v-card-title>편지읽기</v-card-title>
      <v-card-text class="text--primary">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-container>
            <v-row>
              <v-text-field
                disabled
                dense
                :value="message.title"
              ></v-text-field>
            </v-row>
            <v-row class="mt-5">
              <v-textarea
                outlined
                :value="message.content"
                height="320"
                no-resize
                disabled
              ></v-textarea>
            </v-row>
          </v-container>
        </v-form>
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

<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <v-card class="d-flex flex-column">
      <v-card-title>
        <span class="headline">편지쓰기</span>
      </v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-container>
            <v-row>
              <v-text-field
                v-model="title"
                :rules="titleRules"
                :counter="15"
                label="제목"
                single-line
                filled
                required
                dense
              ></v-text-field>
            </v-row>
            <v-row>
              <v-chip-group mandatory active-class="primary--text">
                <v-chip v-for="tag in tags" :key="tag">
                  {{ tag }}
                </v-chip>
              </v-chip-group>
            </v-row>
            <v-row class="mt-5">
              <v-textarea
                filled
                label="내용"
                :value="content"
                :counter="500"
                :rules="contentRules"
                height="320"
                no-resize
                required
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
        <v-btn color="green" dark @click="sendMessage">
          보내기
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
      valid: false,
      title: "",
      type: 0,
      tags: ["단색", "그라데이션", "이미지"],
      content: "",
      titleRules: [
        v => !!v || "제목을 적어주세요",
        v => v.length <= 15 || "제목은 15자 이내로 적어주세요"
      ],
      contentRules: [
        v => !!v || "내용을 적어주세요",
        v => v.length <= 500 || "내용은 500자 이내로 적어주세요"
      ]
    };
  },
  methods: {
    sendMessage() {
      let message = {
        title: this.title,
        created_time: new Date().getTime(),
        type: this.type,
        author: "수현",
        content: this.content
      };
      this.$refs.form.reset();
      alert(JSON.stringify(message));
    }
  },
  mounted() {
    this.bus.$on("show-form", () => (this.dialog = !this.dialog));
  }
};
</script>

<style></style>

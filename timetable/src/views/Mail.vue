<template>
  <div>
    <v-list two-line>
      <v-list-item-group multiple>
        <template v-for="(item, index) in items">
          <v-list-item
            :key="item.title"
            active-class="pink--text"
            @click="ShowMessage(item.id)"
          >
            <template v-slot:default="{ active }">
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>

                <v-list-item-subtitle
                  v-text="contentString(item.content)"
                ></v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-list-item-action-text
                  v-text="timeString(item.created_time)"
                ></v-list-item-action-text>
                <v-icon v-if="active" tag="span">📌</v-icon>
              </v-list-item-action>
            </template>
          </v-list-item>

          <v-divider v-if="index < items.length - 1" :key="index"></v-divider>
        </template>
      </v-list-item-group>
    </v-list>
    <show-message :bus="bus" />
    <write-message :bus="bus" />
    <v-btn color="pink" dark fixed bottom right fab small>
      <v-icon @click="bus.$emit('show-form')">mdi-plus</v-icon>
    </v-btn>
  </div>
</template>
<script>
import Vue from "vue";
import ShowMessage from "@/components/ShowMessage.vue";
import WriteMessage from "@/components/WriteMessage.vue";

export default {
  components: {
    ShowMessage,
    WriteMessage
  },
  data: () => ({
    selected: [2, 3],
    items: [],
    bus: new Vue()
  }),
  computed: {
    timeString() {
      return created_time => {
        const now = new Date().getTime();
        const betweenTime = Math.floor((now - created_time) / 1000 / 60);
        if (betweenTime < 1) return "방금전";
        if (betweenTime < 60) {
          return `${betweenTime}분전`;
        }

        const betweenTimeHour = Math.floor(betweenTime / 60);
        if (betweenTimeHour < 24) {
          return `${betweenTimeHour}시간전`;
        }

        const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
        if (betweenTimeDay < 365) {
          return `${betweenTimeDay}일전`;
        }

        return `${Math.floor(betweenTimeDay / 365)}년전`;
      };
    },
    contentString() {
      return content => {
        if (content.length <= 12) return content;
        else return content.substring(0, 12) + "...";
      };
    }
  },
  methods: {
    ShowMessage(id) {
      this.bus.$emit("show-message", { id });
      this.bus.$emit("show-dialog");
    }
  },
  created() {
    this.$http
      .get(
        "https://zodg2trlwb.execute-api.ap-northeast-2.amazonaws.com/2021-01-21/message?user=hyeon"
      )
      .then(({ data }) => {
        this.items = data;
      })
      .catch(err => console.log(err));
  }
};
</script>

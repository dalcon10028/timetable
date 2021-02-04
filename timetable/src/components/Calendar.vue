<template>
  <v-sheet height="528">
    <v-calendar
      ref="calendar"
      type="week"
      :weekday-format="weekName"
      :weekdays="[1, 2, 3, 4, 5]"
      :first-interval="8"
      :interval-count="15"
      :events="events"
      @click:event="showEvent"
    >
      <template v-slot:event="{ event }">
        <div class="fill-height pl-2 dd">하하 {{ event.name }}</div>
      </template>
    </v-calendar>
    <v-menu
      v-model="selectedOpen"
      :close-on-content-click="false"
      :activator="selectedElement"
      offset-x
    >
      <v-card color="grey lighten-4" min-width="350px" flat>
        <v-toolbar :color="selectedEvent.color" dark>
          <v-btn icon>
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text>
          <span v-html="selectedEvent.details"></span>
        </v-card-text>
        <v-card-actions>
          <v-btn text color="secondary" @click="selectedOpen = false">
            닫기
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </v-sheet>
</template>
<script>
export default {
  data: () => ({
    value: "",
    weekdays: [1, 2, 3, 4, 5],
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    events: [
      {
        name: "안녕하세요",
        start: "2021-02-04 09:00",
        end: "2021-02-04 10:00",
        color: "red"
      },
      {
        name: "하이루루루루루루루루루루",
        start: "2021-02-02 12:30",
        end: "2021-02-03 15:30"
      }
    ]
  }),
  methods: {
    weekName(day) {
      switch (day.weekday) {
        case 0:
          return "일";
        case 1:
          return "월";
        case 2:
          return "화";
        case 3:
          return "수";
        case 4:
          return "목";
        case 5:
          return "금";
        case 6:
          return "토";
      }
    },
    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event;
        this.selectedElement = nativeEvent.target;
        setTimeout(() => {
          this.selectedOpen = true;
        }, 10);
      };

      if (this.selectedOpen) {
        this.selectedOpen = false;
        setTimeout(open, 10);
      } else {
        open();
      }

      nativeEvent.stopPropagation();
    }
  }
};
</script>
<style lang="scss">
.dd {
  background: #a1ffce; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #faffd1,
    #a1ffce
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #faffd1,
    #a1ffce
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>

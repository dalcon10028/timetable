<template>
  <v-sheet height="528">
    <v-calendar ref="calendar" type="week" :weekday-format="weekName">
    </v-calendar>
  </v-sheet>
</template>
<script>
export default {
  data: () => ({
    value: "",
    weekdays: [1, 2, 3, 4, 5]
  }),
  computed: {},
  mounted() {},
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
    }
  }
};
</script>
<style lang="scss"></style>

<template>
  <div>
    {{ data }}
  </div>
</template>

<script>
export default {
  data: () => ({
    data: ""
  }),
  created() {
    this.$http
      .get(
        "https://eiylh14ewb.execute-api.ap-northeast-2.amazonaws.com/default/timetable-2021/2"
      )
      .then(({ data }) => {
        this.data = data;
      })
      .catch(err => (this.data = err));
  }
};
</script>

<style></style>

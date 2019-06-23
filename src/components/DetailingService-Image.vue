<template>
  <div class="row">
    <div class="col-6 text-right">
      <img :src="require('@/assets/images/' + top_left)" class="top-left">
      <img :src="require('@/assets/images/' + bottom_left)" class="bottom-left">
    </div>
    <div class="col-6 text-left">
      <img :src="require('@/assets/images/' + top_right)" class="top-right">
      <img :src="require('@/assets/images/' + bottom_right)" class="bottom-right">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      top_left: "a8yt8ici.png",
      bottom_left: "2mou6w3x.png",
      top_right: "qv3g3gmi.png",
      bottom_right: "o9kwrr26.png"
    };
  }
};
</script>


<style lang="scss" scoped>
.col-6 {
  padding: 0;
}

.top-left {
  padding: 40% 1.5% 1% 0;
  width: 65%;
  border-radius: 20px;
}

.bottom-left {
  padding: 2% 1% 0 0;
  width: 90%;
  border-radius: 20px;
}

.top-right {
  padding: 0 0 1% 0.5%;
  width: 99%;
  border-radius: 20px;
}

.bottom-right {
  padding: 1% 0 0 3%;
  width: 70%;
  border-radius: 20px;
}
</style>

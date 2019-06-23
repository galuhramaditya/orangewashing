<template>
  <div class="orangeWashingDetailing-image">
    <img :src="require('@/assets/images/' + image)" class="car">
  </div>
</template>

<script>
export default {
  data() {
    return { image: "jaifv4nk.png" };
  }
};
</script>


<style lang="scss" scoped>
.orangeWashingDetailing-image .car {
  width: 100%;
  border-radius: 13% 0;
  clear: both;
  box-shadow: 0 47px 99px 0 #c5c9cb;
}

@media screen and (min-width: 768px) {
  .orangeWashingDetailing-image .car {
    width: 90%;
  }
}
</style>

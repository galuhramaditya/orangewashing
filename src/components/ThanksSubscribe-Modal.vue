<template>
  <div class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-body text-center">
          <div class="row">
            <div class="col-12">
              <button type="button" class="close" data-dismiss="modal">
                <span aria-hidden="true">
                  <i class="fa fa-times"></i>
                </span>
              </button>
            </div>
          </div>
          <div class="row image">
            <div class="col-12">
              <img :src="require('@/assets/images/' + image)">
            </div>
          </div>
          <div class="row title">
            <div class="col-12 text-xxl">{{ title }}</div>
          </div>
          <div class="row subtitle">
            <div class="col-12 text-sm">{{ subtitle }}</div>
          </div>
          <div class="row info">
            <div class="col-12 text-xs">{{ content }}</div>
          </div>
          <div class="row done">
            <div class="col-12">
              <button
                type="button"
                class="btn btn-outline-primary rounded"
                data-dismiss="modal"
              >{{ button }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: "Group 480.png",
      title: "Thank You !",
      subtitle: "For Subscribe",
      content: "we only send emails about updated information on our website",
      button: "Done"
    };
  }
};
</script>

<style lang="scss" scoped>
.modal {
  padding: 0 !important;
}

@media #{$sm-min} {
  .modal-dialog {
    max-width: 80%;
  }
}

.image img {
  width: 300px;
}

@media #{$xs} {
  .image img {
    width: 80%;
  }
}

.title {
  margin: 40px 0 0;
  font-family: Georgia;
  font-weight: bold;
  line-height: 1.18;
  color: #000000;
}

.subtitle {
  font-family: Georgia;
  font-weight: bold;
  color: #000000;
}

.info {
  margin: 20px 0;
  font-family: Helvetica;
  color: $color-1;
}

.done {
  margin-bottom: 3%;
}

.done .btn {
  padding: 1% 40px;
}
</style>
<template>
  <div class="modal thankSubscribe-modal" tabindex="-1" role="dialog">
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
            <div class="col-12">{{ title }}</div>
          </div>
          <div class="row subtitle">
            <div class="col-12">{{ subtitle }}</div>
          </div>
          <div class="row info">
            <div class="col-12">{{ content }}</div>
          </div>
          <div class="row done">
            <div class="col-12">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">{{ button }}</button>
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
@media screen and (min-width: 576px) {
  .thankSubscribe-modal .modal-dialog {
    max-width: 80%;
  }
}

.thankSubscribe-modal .image img {
  width: 300px;
}

@media screen and (max-width: 575px) {
  .thankSubscribe-modal .image img {
    width: 80%;
  }
}

.thankSubscribe-modal .title {
  margin-top: 3%;
  font-family: Georgia;
  font-size: 40px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.18;
  letter-spacing: normal;
  color: #000000;
}

.thankSubscribe-modal .subtitle {
  font-family: Georgia;
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  color: #000000;
}

.thankSubscribe-modal .info {
  margin: 2% 0;
  font-family: Helvetica;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.63;
  letter-spacing: normal;
  color: $color-1;
}

.thankSubscribe-modal .done {
  margin-bottom: 3%;
}

.thankSubscribe-modal .done .btn {
  padding: 1% 5%;
  border-radius: 20px;
  border: solid 2px $color-4;
  color: $color-4;

  background-color: transparent;
}
</style>


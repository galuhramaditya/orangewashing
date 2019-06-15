<template>
  <div class="getLastUpdate">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="card-title">Want to get the latest Updates?</div>
            <div class="card-text">
              <div class="input-group">
                <input type="email" class="form-control" placeholder="example@yourmail.com">
                <div class="input-group-append">
                  <span class="input-group-text btn btn-secondary">
                    <span>Subscribe</span>
                    <i class="fa fa-send"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.getLastUpdate .card {
  border-radius: 13px;
  border-color: transparent;
  box-shadow: 0 17px 16px 0 rgba(235, 241, 245, 0.55);
}

.getLastUpdate .card .card-body {
  padding: 5% 20%;
}

.getLastUpdate .card .card-title {
  margin-bottom: 8%;
  font-family: Georgia;
  font-size: $title;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.28;
  letter-spacing: normal;
  text-align: center;
  color: $color-3;
}

.getLastUpdate .card input {
  padding: 5%;
  min-width: 150px;
  background-color: $color-6;
  border-radius: 10px;
  border-color: transparent;
}
.getLastUpdate .btn {
  background-color: $color-4;
  border-radius: 10px;
  padding: 0 25%;
  border-color: transparent;
  width: 100% !important;
}

@media screen and (max-width: 767px) {
  .getLastUpdate .card input {
    border-radius: 0px;
    margin-bottom: 5%;
  }
  .getLastUpdate .btn {
    border-radius: 0px;
  }
  .input-group-append {
    width: 100%;
  }
}

.getLastUpdate span {
  padding-right: 10%;
  font-family: Helvetica;
  font-size: 20px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.92;
  letter-spacing: normal;
  text-align: left;
  color: $primary;
}
</style>

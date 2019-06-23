<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-body">
          <div class="card-title">{{ caption }}</div>
          <div class="card-text">
            <form v-on:submit.prevent="subscribe()">
              <div class="input-group">
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  required
                  :placeholder="placeholder"
                >
                <div class="input-group-append">
                  <button type="submit" class="input-group-text btn btn-secondary">
                    <span>
                      {{ button }}
                      <i class="fa fa-send"></i>
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Modal/>
  </div>
</template>

<script scoped>
import Modal from "@/components/ThanksSubscribe-Modal.vue";

var placeholder = "example@yourmail.com";

export default {
  components: {
    Modal
  },
  data() {
    return {
      placeholder: placeholder,
      button: "Subscribe",
      caption: "Want to get the latest Updates?"
    };
  },
  methods: {
    subscribe: function() {
      var form = $(" form");
      var email = form.find("[name=email]");
      $.ajax({
        type: "post",
        url: api_url + "/subscribe",
        data: { email: email.val() },
        success: function(response) {
          $(".thankSubscribe-modal").modal("show");
          email
            .val("")
            .attr("placeholder", placeholder)
            .css({ borderColor: "transparent" });
        },
        error: function(response) {
          $.each(response.responseJSON, function(index, value) {
            form
              .find("[name=" + index + "]")
              .attr("placeholder", value)
              .css({ borderColor: "red" });
          });
        }
      });
    }
  }
};
</script>


<style lang="scss" scoped>
.card {
  border-radius: 13px;
  border-color: transparent;
  box-shadow: 0 17px 16px 0 rgba(235, 241, 245, 0.55);
}

.card .card-body {
  padding: 5% 20%;
}

.card .card-title {
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

.card input {
  padding: 5%;
  min-width: 150px;
  background-color: $color-6;
  border-radius: 10px;
  border-color: transparent;
}

.btn {
  background-color: $color-4;
  border-radius: 10px;
  padding: 0 15%;
  border-color: transparent;
  font-family: Helvetica;
  font-size: 20px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.92;
  letter-spacing: normal;
  color: $primary;
  width: 100%;
}

.btn span {
  width: 100%;
  text-align: center;
}

@media screen and (max-width: 767px) {
  .card input {
    border-radius: 0px;
    margin-bottom: 5%;
  }

  .btn {
    border-radius: 0px;
  }

  .input-group-append {
    width: 100%;
  }

  .card input {
    text-align: center;
  }
}

.fa {
  padding-left: 5%;
}
</style>

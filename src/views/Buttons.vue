<template>
  <main class="mt-5">
    <div class="row">
      <h3 class="mb-5">Reusable Buttons</h3>
      <div class="col col-lg-4">
        <div class="card h-100">
          <div class="card-body">
            <div class="mb-3">
              <Hamburger-button :toggled="toggled" @toggle="toggle" />
            </div>
            <h5 class="card-title">Hamburger</h5>
            <p class="card-text">
              An animated button component that changes when clicked.
            </p>
          </div>
        </div>
      </div>
      <div class="col col-lg-4">
        <div class="card h-100">
          <div class="card-body">
            <div class="mb-3">
              <Save-button :status="saveStatus" @save="save" />
            </div>
            <h5 class="card-title">Save</h5>
            <p class="card-text">
              A save button for your forms. Button face can change if desired.
              <strong>Click</strong> the button for an example.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-5">
      <h3 class="mb-5">Button Classes</h3>
      <div class="col">
        <div class="card h-100">
          <div class="card-body">
            <div class="row mb-3">
              <div class="col-12">
                <button type="button" class="btn btn-primary me-2">
                  Primary
                </button>
                <button type="button" class="btn btn-secondary me-2">
                  Secondary
                </button>
                <button type="button" class="btn btn-success me-2">
                  Success
                </button>
                <button type="button" class="btn btn-danger me-2">
                  Danger
                </button>
                <button type="button" class="btn btn-warning me-2">
                  Warning
                </button>
                <button type="button" class="btn btn-info me-2">Info</button>
                <button type="button" class="btn btn-light me-2">Light</button>
                <button type="button" class="btn btn-dark me-2">Dark</button>
                <button type="button" class="btn btn-link">Link</button>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <button type="button" class="btn btn-outline-primary me-2">
                  Outline Primary
                </button>
                <button type="button" class="btn btn-outline-secondary me-2">
                  Outline Secondary
                </button>
                <button type="button" class="btn btn-outline-success me-2">
                  Outline Success
                </button>
                <button type="button" class="btn btn-outline-danger me-2">
                  Outline Danger
                </button>
                <button type="button" class="btn btn-outline-warning me-2">
                  Outline Warning
                </button>
                <button type="button" class="btn btn-outline-info me-2">
                  Outline Info
                </button>
                <button type="button" class="btn btn-outline-light me-2">
                  Outline Light
                </button>
                <button type="button" class="btn btn-outline-dark">
                  Outline Dark
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import hamburgerButton from "../components/buttons/HamburgerButton.vue";
import saveButton from "../components/buttons/Save.vue";

export default {
  name: "Buttons",
  components: {
    "Hamburger-button": hamburgerButton,
    "Save-button": saveButton,
  },
  data: function () {
    return {
      toggled: false,
      saveStatus: 0,
    };
  },
  methods: {
    toggle: function () {
      this.toggled = !this.toggled ? true : false;
    },
    save: function () {
      this.saveStatus = 1;

      // Timeouts are just used for presentation of button transition
      // Could be removed once an actual saving flow is implemented
      // Saving process then goes here
      window.setTimeout(
        function () {
          this.saveStatus = 2;
        }.bind(this),
        2000
      );

      // Return the button to original state after process
      window.setTimeout(
        function () {
          this.saveStatus = 0;
        }.bind(this),
        4000
      );
    },
  },
};
</script>


<style scoped>
</style>
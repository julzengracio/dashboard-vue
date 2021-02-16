<template>
  <aside
    id="sidebar"
    class="sidebar-nav d-flex flex-column justify-content-between"
    :class="{ open: toggled }"
  >
    <nav v-show="toggled">
      <header class="sidebar-brand">
        <span><i class="bi bi-bootstrap"></i>&nbsp;Dashboard</span>
      </header>
      <div>
        <span class="nav-group-title">Theme</span>
        <ul class="nav-group">
          <li class="nav-item">
            <a href="#">
              <i class="bi bi-droplet"></i>
              Colors
            </a>
          </li>
          <li class="nav-item">
            <a href="#">
              <i class="bi bi-pen"></i>
              Typography
            </a>
          </li>
        </ul>
      </div>
      <div>
        <span class="nav-group-title">Components</span>
        <ul class="nav-group">
          <li class="nav-item">
            <button
              class="dropdown-button"
              :class="dropdownBtnClass"
              type="button"
            >
              <div>
                <i class="bi bi-card-checklist"></i>
                Forms
              </div>
              <i class="bi bi-caret-down-fill"></i>
            </button>
            <div class="dropdown-container">
              <a href="#">Overview</a>
              <a href="#">Select</a>
              <a href="#">Checkboxes &amp; Radios</a>
            </div>
          </li>
          <li class="nav-item">
            <button
              class="dropdown-button"
              :class="dropdownBtnClass"
              type="button"
            >
              <div>
                <i class="bi bi-card-checklist"></i>
                Buttons
              </div>
              <i class="bi bi-caret-down-fill"></i>
            </button>
            <div class="dropdown-container">
              <a href="#">Overview</a>
              <a href="#">Button Colors</a>
              <a href="#">Button Groups</a>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <span class="nav-group-title">External Links</span>
        <ul class="nav-group">
          <li class="nav-item">
            <a href="#">
              <i class="bi bi-facebook"></i>
              Facebook
            </a>
          </li>
          <li class="nav-item">
            <a href="#">
              <i class="bi bi-twitter"></i>
              Twitter
            </a>
          </li>
          <li class="nav-item">
            <a href="#">
              <i class="bi bi-linkedin"></i>
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <div v-if="toggled" class="d-grid gap-2" id="closeBtn">
      <button type="button" class="btn btn-primary col" @click="toggleSidebar">
        Close
      </button>
    </div>
  </aside>
</template>

<script>
export default {
  name: "Sidebar",
  data: function() {
    return {
      toggle: this.toggled,
      dropdownBtnClass: "d-flex justify-content-between",
    };
  },
  props: {
    toggled: Boolean,
  },
  mounted: function() {
    let dropdownBtns = document.getElementsByClassName("dropdown-button");
    for (let i = 0; i < dropdownBtns.length; i++) {
      dropdownBtns[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.maxHeight) {
          dropdownContent.style.maxHeight = null;
        } else {
          dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px";
        }
      });
    }
  },
  methods: {
    toggleSidebar: function() {
      this.$emit("toggle");
    },
  },
};
</script>

<style scoped>
@import "~bootstrap-icons/font/bootstrap-icons.css";

.open {
  width: 250px !important;
}
* {
  color: #fff;
  white-space: nowrap;
}
.sidebar-nav {
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  background-color: #262626;
  transition: 0.5s;
  height: 100%;
  width: 0;
  z-index: 1;
}
.sidebar-nav a {
  text-decoration: none;
  display: block;
  transition: 0.3s;
  color: inherit;
}
.sidebar-brand {
  text-align: center;
  padding: 20px;
  font-weight: bold;
  font-size: 1.3em;
}
.nav-group-title {
  font-weight: bold;
  text-transform: uppercase;
  margin-left: 15px;
}
.nav-group {
  list-style-type: none;
  padding: 0;
}
.nav-item a,
.nav-item button {
  padding: 5px 0 5px 15px;
}
.nav-item i {
  margin-right: 10px;
}
.dropdown-button {
  text-decoration: none;
  border: none;
  background: none;
  width: 100%;
  text-align: left;
  cursor: pointer;
  display: block;
  outline: none;
  padding: 0;
  font-size: 1em;
  font-family: inherit;
}
/* .dropdown-button .bi-caret-down-fill {
  float: right;
} */
.dropdown-container {
  max-height: 0;
  overflow: hidden;
  background-color: #262626;
  transition: max-height 0.2s ease-out;
}
.dropdown-container a {
  margin-left: 31px;
}

@media screen and (min-width: 768px) {
  #closeBtn {
    visibility: hidden;
  }
}
</style>

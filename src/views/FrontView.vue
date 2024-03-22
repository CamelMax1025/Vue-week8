<template>
  <NavbarComponentVue></NavbarComponentVue>

  <router-view></router-view>

  <div class="bg-dark py-2">
    <div class="container">
      <div
        class="d-flex align-items-center justify-content-center text-white mb-md-2 mb-1"
      >
        <ul class="d-flex list-unstyled mb-0 h2 align-items-center">
          <li>
            <a href="#" class="text-white mx-3"><i class="bi bi-github"></i></a>
          </li>
        </ul>
      </div>
      <div
        class="d-flex flex-column flex-md-row justify-content-center align-items-md-center align-items-center text-white"
      >
        <p class="mb-0">©僅個人練習使用 不做任何商業用途</p>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarComponentVue from '../components/NavBarComponent.vue';

export default {
  components: {
    NavbarComponentVue,
  },
};
</script>

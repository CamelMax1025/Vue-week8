<template>
  <div class="container-fluid d-flex flex-column" style="background: #0d274a">
    <nav class="container d-flex navbar navbar-expand-lg navbar-light">
      <RouterLink class="navbar-brand big-title" to="/">7.11</RouterLink>
      <RouterLink class="navbar-brand" to="/"
        ><img src="../imgs/logo_plus.png" alt="Logo" class="navbar-brand-img"
      /></RouterLink>
      <RouterLink class="navbar-brand small-title" to="/">TacTical</RouterLink>
      <button
        class="navbar-toggler bg-light"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarNavAltMarkup"
      >
        <div class="navbar-nav">
          <RouterLink class="nav-item nav-link me-4" to="/products"
            >商品頁面</RouterLink
          >
          <RouterLink class="nav-item nav-link me-4" to="/login"
            >帳號登入</RouterLink
          >
          <RouterLink class="nav-item nav-link me-4" to="/admin/products"
            >會員後台管理</RouterLink
          >
          <RouterLink
            class="nav-item btn btn-outline-primary position-relative"
            to="/cart"
          >
            <i class="bi bi-cart w-20 h-20"></i>
            <span
              class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            >
              {{ this.carts?.length }}
            </span>
          </RouterLink>
        </div>
      </div>
    </nav>
  </div>
</template>

<style>
nav {
  .big-title {
    font-size: 38px;
    font-weight: bold;
    margin-right: 0px;
    margin-top: 0;
    color: white;
    transition: 0.2s;
    &:hover {
      color: #e95524;
    }
  }

  .small-title {
    font-size: 24px;
    font-weight: bold;
    margin-top: 15px;
    transform: translateX(-10px);
    color: white;
    transition: 0.2s;
    &:hover {
      color: #e95524;
    }
  }

  .navbar-brand-img {
    height: 50px;
  }

  .nav-item {
    font-weight: bold;
    color: white;

    &:hover {
      color: #e95524;
    }
  }
}
</style>

<script>
import { mapActions, mapState } from 'pinia';
import cartStore from '../stores/cartStore';

export default {
  computed: {
    ...mapState(cartStore, ['carts']),
  },
  methods: {
    ...mapActions(cartStore, ['getCart']),
  },

  watch: {},
  mounted() {
    this.getCart();
  },
};
</script>

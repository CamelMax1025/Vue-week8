<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">返回前台頁面</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <RouterLink to="/admin/products" class="nav-link">產品</RouterLink>
          <RouterLink to="/admin/orders" class="nav-link">訂單</RouterLink>
          <RouterLink to="/admin/coupons" class="nav-link">優惠券</RouterLink>
          <RouterLink to="/admin/article" class="nav-link">貼文</RouterLink>
          <a href="#" @click.prevent="logout" class="nav-link">登出</a>
        </div>
        <div class="navbar-nav ms-auto"></div>
      </div>
    </div>
  </nav>
</template>
<script>
import { mapActions } from 'pinia';
import { useToastMessageStore } from '@/stores/toastMessage';

const { VITE_URL } = import.meta.env;

export default {
  methods: {
    ...mapActions(useToastMessageStore, ['pushMessage']),
    logout() {
      const api = `${VITE_URL}/logout`;
      this.$http
        .post(api)
        .then((response) => {
          this.pushMessage({
            style: 'success',
            title: '登出狀態',
            content: response.data.message,
          });
          this.$router.push('/');
        })
        .catch((error) => {
          this.pushMessage({
            style: 'danger',
            title: '登出狀態',
            content: error.response.data.message,
          });
        });
    },
  },
};
</script>

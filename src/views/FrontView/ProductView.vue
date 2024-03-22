<template>
  <div class="container pt-5">
    <Loading v-model:active="isLoading" />
    <div class="row align-items-center">
      <div class="col-md-7">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img :src="product.imageUrl" class="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-5">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb bg-white px-0 mb-0 py-3">
            <li class="breadcrumb-item">
              <RouterLink to="/" class="text-muted">Home</RouterLink>
            </li>
            <li class="breadcrumb-item">
              <RouterLink to="/products" class="text-muted">Product</RouterLink>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Detail</li>
          </ol>
        </nav>
        <h2 class="fw-bold h1 mb-1">{{ product.title }}</h2>
        <p class="mb-0 text-muted text-end">
          <del>NT${{ product.origin_price }}</del>
        </p>
        <p class="h4 fw-bold text-end">NT${{ product.price }}</p>
        <div class="row align-items-center">
          <div class="col-6">
            <div class="input-group my-3 bg-light rounded">
              <select name="" id="" class="form-select" v-model="qty">
                <option :value="i" v-for="i in 20" :key="i">{{ i }}</option>
              </select>
            </div>
          </div>
          <div class="col-6">
            <a
              class="text-nowrap btn btn-dark w-100 py-2"
              @click.prevent="addToCart(product.id)"
              >加入購物車</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="row my-5">
      <div class="col-md-7">
        <p>
          {{ product.content }}
        </p>
      </div>
      <div class="col-md-5">
        <p>
          {{ product.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "pinia";
import "vue-loading-overlay/dist/css/index.css";
import Loading from "vue-loading-overlay";

import cartStore from "@/stores/cartStore";

const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      product: {},
      qty: 1,
      isLoading: false,
    };
  },
  methods: {
    getProduct() {
      const { id } = this.$route.params;
      this.isLoading = true;
      axios.get(`${VITE_URL}/api/${VITE_PATH}/product/${id}`).then((res) => {
        this.product = res.data.product;
        this.isLoading = false;
      });
    },
    ...mapActions(cartStore, ["addToCart"]),
  },
  mounted() {
    this.getProduct();
  },
  components: {
    Loading,
  },
};
</script>

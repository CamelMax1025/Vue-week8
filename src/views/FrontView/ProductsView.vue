<template>
  <div
    class="position-relative d-flex align-items-center justify-content-center"
    style="min-height: 400px"
  >
    <div
      class="position-absolute"
      style="
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-image: url('/src/imgs/equipments.jpg');
        background-position: center center;
        opacity: 0.8;
        background-repeat: no-repeat;
      "
    ></div>
  </div>
  <div class="container mt-md-5 mt-3 mb-7">
    <div class="row">
      <div class="col-md-4">
        <div
          class="accordion border border-bottom border-top-0 border-start-0 border-end-0 mb-3"
          id="accordionExample"
        >
          <div class="card border-0">
            <div
              class="card-header px-0 py-4 bg-white border border-bottom-0 border-top border-start-0 border-end-0 rounded-0"
              id="headingOne"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
            >
              <div
                class="d-flex justify-content-between align-items-center pe-1"
              >
                <h4 class="mb-0">商品分類表</h4>
                <i class="fas fa-chevron-down"></i>
              </div>
            </div>
            <div
              id="collapseOne"
              class="collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="card-body py-0">
                <ul class="list-unstyled">
                  <li>
                    <RouterLink class="py-2 d-block text-muted" to="/products"
                      >全部</RouterLink
                    >
                  </li>
                  <li v-for="item in categories" :key="item">
                    <RouterLink
                      class="py-2 d-block text-muted"
                      :to="`/products/?category=${item}`"
                      >{{ item }}</RouterLink
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-8 vl-parent">
        <loading
          v-model:active="isLoading"
          :can-cancel="true"
          :is-full-page="fullPage"
        />
        <div class="row">
          <div class="col-md-6" v-for="product in products" :key="product.id">
            <div class="card border-0 mb-4 position-relative position-relative">
              <img
                :src="product.imageUrl"
                class="card-img-top rounded-0 object-fit-cover"
                height="300"
                alt="..."
              />
              <a class="text-dark">
                <i
                  class="far fa-heart position-absolute"
                  style="right: 16px; top: 16px"
                ></i>
              </a>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-3">
                  <RouterLink :to="`/product/${product.id}`">{{
                    product.title
                  }}</RouterLink>
                </h4>
                <p class="card-text mb-0">
                  NT$ {{ product.price }}
                  <span class="text-muted"
                    ><del>NT$ {{ product.origin_price }}</del></span
                  >
                </p>
                <p class="text-muted mt-3"></p>
              </div>
            </div>
          </div>
        </div>
        <nav class="d-flex justify-content-center">
          <!-- 分頁元件 -->
          <pagination :pages="pages" :get-products="getProducts"></pagination>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Pagination from '../../components/Pagination.vue';
import 'vue-loading-overlay/dist/css/index.css';
import Loading from 'vue-loading-overlay';

const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      products: [],
      categories: ['步槍', '狙擊步槍', '手槍', '單兵裝備', '生存工具'],
      pages: {},
      isLoading: false,
      fullPage: false,
    };
  },

  watch: {
    '$route.query': {
      handler() {
        this.getProducts();
      },
      deep: true,
    },
  },
  methods: {
    getProducts() {
      const { category = '' } = this.$route.query;
      this.isLoading = true;
      axios
        .get(`${VITE_URL}/api/${VITE_PATH}/products?category=${category}`)
        .then((res) => {
          this.products = res.data.products;
          this.pages = res.data.pagination;
          this.isLoading = false;
        });
    },
  },

  mounted() {
    this.getProducts();
  },

  components: {
    Pagination,
    Loading,
  },
};
</script>

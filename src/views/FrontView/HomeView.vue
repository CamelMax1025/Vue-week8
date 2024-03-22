<template>
  <!-- loading效果 -->
  <Loading v-model:active="isLoading" :lock-scroll="lock" style="z-index: 1" />
  <!-- banner -->
  <div class="container-fluid p-0 object-fit-cover">
    <div class="position-relative">
      <div
        class="loading position-absolute"
        style="
          z-index: 2;
          backdrop-filter: blur(15px);
          width: 100%;
          height: 100vh;
          margin: auto;
          transition: 0.5s;
        "
        v-if="isLoading"
      >
        <img
          src="/src/imgs/gun-bullet.gif"
          alt="loading-img"
          class="position-absolute"
          style="
            border-radius: 25px;
            z-index: 2;
            width: 400px;
            height: 250px;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            margin: auto;
          "
        />
      </div>
      <div
        class="position-absolute"
        style="top: 0; bottom: 0; left: 0; right: 0; z-index: 1"
      >
        <img
          src="/src/imgs/battle3.jpg"
          alt="Logo"
          style="width: 100%; object-fit: cover; opacity: 1; height: 100vh"
        />
      </div>
      <div class="container d-flex flex-column p-0" style="min-height: 100vh">
        <div
          class="row justify-content-center z-1 my-auto"
          style="display: inline-block; padding-left: 0; padding-right: 10px"
        >
          <div class="col-md-4 d-flex flex-column p-0">
            <h2 style="font-weight: bold; font-size: 56px; color: white">
              上戰場
            </h2>
            <h2
              style="
                font-weight: bold;
                font-size: 32px;
                color: white;
                text-align: end;
              "
            >
              怎麼能沒有裝備？
            </h2>
            <p class="mb-0 mt-2" style="font-weight: bold; color: white">
              本賣場提供各式現代單兵作戰所需之用品，<br />精良的裝備，能於戰場拯救您的<span
                style="font-weight: bold; font-size: 56px; color: #e95524"
              >
                性命</span
              >
            </p>
            <RouterLink
              class="btn btn-dark rounded-0 mt-2"
              style="background: #e95524; border: 0"
              to="/products"
              >Ready To Fight</RouterLink
            >
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 產品展示 -->
  <div class="container mt-5">
    <div class="row mt-5">
      <div class="col-md-3 mt-md-4">
        <div class="card border-0 mb-4">
          <img
            src="/src/imgs/rife-man.jpg"
            class="card-img-top rounded-0 object-fit-cover"
            alt="步槍 Assault Rifle"
            style="height: 183px"
          />
          <div class="card-body text-center">
            <h4>步槍 Assault Rifle</h4>
            <div class="d-flex justify-content-center">
              <RouterLink
                to="/products/?category=步槍"
                class="card-text text-muted mb-0 text-decoration-none"
                >前往商品 ></RouterLink
              >
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-3 mt-md-4">
        <div class="card border-0 mb-4">
          <img
            src="/src/imgs/sniper-man.jpg"
            class="card-img-top rounded-0 object-fit-cover"
            alt="狙擊 Sniper Rifle"
            style="height: 183px"
          />
          <div class="card-body text-center">
            <h4>狙擊 Sniper Rifle</h4>
            <div class="d-flex justify-content-center">
              <RouterLink
                to="/products/?category=狙擊步槍"
                class="card-text text-muted mb-0 text-decoration-none"
                >前往商品 ></RouterLink
              >
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-3 mt-md-4">
        <div class="card border-0 mb-4">
          <img
            src="/src/imgs/pistol-man.jpg"
            class="card-img-top rounded-0 object-fit-cover"
            alt="手槍 Pistol"
            style="height: 183px"
          />
          <div class="card-body text-center">
            <h4>手槍 Pistol</h4>
            <div class="d-flex justify-content-center">
              <RouterLink
                to="/products/?category=手槍"
                class="card-text text-muted mb-0 text-decoration-none"
                >前往商品 ></RouterLink
              >
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-3 mt-md-4">
        <div class="card border-0 mb-4">
          <img
            src="/src/imgs/equipments.jpg"
            class="card-img-top rounded-0 object-fit-cover"
            alt="單兵裝備 Equipments"
            style="height: 183px"
          />
          <div class="card-body text-center">
            <h4>單兵裝備 Equipments</h4>
            <div class="d-flex justify-content-center">
              <RouterLink
                to="/products/?category=單兵裝備"
                class="card-text text-muted mb-0 text-decoration-none"
                >前往商品 ></RouterLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 輪播 -->
  <div class="bg-light mt-3" style="vertical-align: middle">
    <div class="container p-0">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div
          class="carousel-inner"
          style="width: 100%; height: 500px; object-fit: cover"
        >
          <div class="carousel-item active">
            <img
              src="/src/imgs/man-gun-2.jpg"
              class="d-block w-100 object-fit-cover"
              alt="imgs-1"
            />
          </div>
          <div class="carousel-item">
            <img
              src="/src/imgs/mans-walk-jean.jpg"
              class="d-block w-100 object-fit-cover"
              alt="imgs-2"
            />
          </div>
          <div class="carousel-item">
            <img
              src="/src/imgs/man-gun-4.jpg"
              class="d-block w-100 object-fit-cover"
              alt="imgs-3"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>

  <!-- 產品客群 -->
  <div class="container my-5">
    <div class="row" style="background: #60799c">
      <div class="col-md-6 p-0">
        <img
          src="/src/imgs/man-all-equipments.jpg"
          alt=""
          class="img-fluid object-fit-cover"
        />
      </div>
      <div class="col-md-4 m-auto text-start" style="color: white">
        <h4 class="mt-4" style="font-size: 36px; font-weight: bold">
          可用於生存競技遊戲
        </h4>
        <h4
          class="mt-4"
          style="
            border-bottom: 1px solid white;
            font-size: 36px;
            font-weight: bold;
          "
        >
          紓發積蓄已久的壓力
        </h4>
        <p class="mt-4" style="font-size: 24px; line-height: 50px">
          克制您每個部位的裝備<br />於戰場上獨樹一格<br />成為戰場上最靚的仔！！
        </p>
      </div>
    </div>
    <div
      class="row flex-row-reverse justify-content-between mt-0"
      style="background: #60799c"
    >
      <div class="col-md-6 p-0">
        <img src="/src/imgs/mans-camp.webp" alt="" class="img-fluid" />
      </div>
      <div class="col-md-4 m-auto text-end" style="color: white">
        <h4 class="mt-4" style="font-size: 36px; font-weight: bold">
          休閒運動也不在話下
        </h4>
        <h4
          class="mt-4"
          style="
            border-bottom: 1px solid white;
            font-size: 36px;
            font-weight: bold;
          "
        >
          拎起裝備遊山玩水
        </h4>
        <p class="mt-4" style="font-size: 24px; line-height: 50px">
          適合各式陸地運動<br />防水、防塵超高級<br />隊友看到都羨慕不已！！
        </p>
      </div>
    </div>
  </div>

  <div class="container p-0 mb-0">
    <div class="row">
      <div class="col">
        <h2 style="color: #0d274a; font-weight: bold; font-size: 48px">
          更多實際運用情境
        </h2>
      </div>
    </div>
  </div>

  <div class="container-fluid" style="background: #0d274a; align-items: center">
    <div class="container p-0">
      <div class="row d-flex align-items-center">
        <div class="col-md-6 p-5">
          <img
            src="/src/imgs/battle2.jpg"
            class="d-block w-100 img-fluid"
            alt=""
          />
        </div>
        <div class="col-md-6 p-0">
          <img
            src="/src/imgs/man-armor.jpg"
            class="d-block w-100 img-fluid"
            alt=""
          />
        </div>
        <div class="col-md-12 p-0">
          <img src="/src/imgs/all.jpg" class="d-block w-100 img-fluid" alt="" />
        </div>
      </div>
    </div>
  </div>

  <div class="bg-light py-4">
    <div class="container">
      <div
        class="d-flex flex-column flex-md-row justify-content-between align-items-md-center align-items-start"
      >
        <p class="m-3 fw-bold">Contact</p>
        <div class="input-group w-md-50 mt-md-0 mt-3">
          <input
            type="text"
            class="form-control rounded-0"
            placeholder="請輸入您的電子信箱"
          />
          <div class="input-group-append">
            <button class="btn btn-dark rounded-0" type="button" id="search">
              送出信箱
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'vue-loading-overlay/dist/css/index.css';
import Loading from 'vue-loading-overlay';

export default {
  data() {
    return {
      isLoading: false,
      fullPage: true,
      lock: false,
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    };
  },
  components: {},
  methods: {
    doAjax() {
      this.isLoading = true;
      this.lock = true;
      setTimeout(() => {
        this.isLoading = false;
        this.lock = '';
      }, 3000);
    },
  },
  mounted() {
    this.doAjax();
  },
  components: {
    Loading,
  },
};
</script>

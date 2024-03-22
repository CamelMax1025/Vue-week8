<template>
  <div
    class="container position-relative d-flex"
    style="z-index: 0; justify-content: center"
  >
    <img
      src="../../imgs/battle.jpg"
      alt="logo"
      style="transform: scaleX(-1); object-fit: cover"
    />
    <div
      class="mt-5 mb-5 position-absolute"
      style="z-index: 1; top: 150px; right: 0; left: 70px; bottom: 100px"
    >
      <div class="row">
        <div
          class="col-6"
          style="
            color: white;
            font-size: 24px;
            font-weight: bold;
            background-color: rgba(0, 0, 0, 0.5);
          "
        >
          <h2 style="font-size: 36px; font-weight: bold">訂購成功</h2>
          <p>
            感謝您的訂購！商品正在進行出貨程序，請耐心等候。若有任何問題，
            請隨時與我們聯繫。期待您再次光臨，我們將竭誠為您服務。
          </p>
          <RouterLink
            class="btn btn-dark btn-block mt-4 rounded-0 py-3"
            style="border: 0"
            to="/"
          >
            回首頁</RouterLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

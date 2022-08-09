<script setup>
  defineProps({
    id: Number,
    title: String, 
    img: String, 
    price: Number,
    discount: Number,
    rest: Number, 
    timing: Number,
  })
</script>

<template>
  <div class="card">
    <div class="card__img">
      <img src="@/assets/img/notebook.png" alt="product">
      <div class="card__discount">
        -50%
      </div>
    </div>
    <div class="card__title">
      HP Laptop 14s-fq0005ne, 14" HD, AMD Ryzen™ 3
    </div>
    <div class="card__price">
      <div class="card__main__price">
        1699
        <span>.00</span>
        <span>AED</span>
      </div>
      <div class="card__discount__price">
        1799
        <span>00</span>
        <span>AED</span>
      </div>
    </div>
    <div class="card__btn">
      <button>
        Add to Cart
      </button>
      <div class="card__counter">
        <div class="counter__plus">
          
        </div>
      </div>
    </div>
    <div class="card__timing">
      <svg width="12" height="12">
        <use xlink:href="@/assets/img/delivery.svg#delivery"/>
      </svg>
      59 min
    </div>
  </div>
</template>

<style scoped lang="stylus">
.card {
  max-width: 160px;
  font-size: 12px;
  &__img {
    background: #f3f3f5;
    overflow: hidden;
    img {
      position: relative;
      object-fit: contain;
      mix-blend-mode: darken;
    }
    .card__discount {
      width: 68px;
      height: 12px;
      background: #FF0A47;
      font-weight: 700;
      font-size: 10px;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 6px;
      right: -22px;
      transform: rotate(45deg)
    }
  }
  &__title {
    color: #282828;
    margin-top: 8px;
  }
  &__price {
    display: flex;
    margin-bottom: 8px;  
  }
  &__main__price {
    display: flex;
    color: #FF0A47;
    font-size: 14px;
    font-weight: 700; 
    span {
      font-size: 8px;
      font-weight: 700;
      margin-right: 2px;
      margin-top: 3px; 
    }
  }
  &__discount__price {
    display: flex;
    position: relative;
    color: #A1A1A1;
    font-weight: 600;
    margin-left: 4px;
    font-size: 10px;
    &:before {
      content: '';
      display: block;
      background: #FF0A47;
      width: 52px;
      height: 1px;
      position: absolute;
      top: 7.1px;
      z-index: 100;
    }
    span:nth-child(1) {
      font-weight: 600;
      font-size: 8px;
      margin-top: 2px;
      margin-left: 2px;
    }
    span:nth-child(2) {
      margin-left: 2px;
      margin-top: 1.3px;
      font-weight: 600;
      font-size: 6px;
      margin-bottom: 5px;
    }
  }
  &__btn {
    margin-bottom: 4px;
    button {
      padding: 7px 12px 8px;
      background: #ff313e1a;
      color: #FF0A47;
      border: none;
      cursor: pointer;
      font-weight: 600;
      font-size: 12px;
      border-radius: 4px;
    }
  }
  &__timing {
    font-size: 10px;
    font-weight: 600;
    color: #A1A1A1;
    display: flex;
    align-items: center;
    svg {
      margin-right: 4px;
    }
  }
}
</style>

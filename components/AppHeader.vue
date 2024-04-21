<template>
  <div
    class="flex h-[100px] w-full items-center justify-between bg-[transparent]"
  >
    <div v-if="route.path !== '/'">
      <nuxt-link to="/">
        <img class="hover:opacity-50" src="/icons/back.svg" alt="back-icon" />
      </nuxt-link>
    </div>
    <div v-else class="w-[44px]"></div>

    <nuxt-link to="/">
      <h1 class="text-[18px] text-stone-600 hover:text-stone-400">
        mirabellen cosmetics.
      </h1>
    </nuxt-link>

    <button>
      <img src="/icons/cart.svg" alt="cart-icon" />
    </button>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
</script>

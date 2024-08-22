<template>
  <div class="home-hero">
    <div class="home-hero__container">
      <h1
        ref="title"
        class="home-hero__title"
      >
        <span>Sustainable&nbsp;</span>
        <span>Power&nbsp;</span>
        <span>Solutions,&nbsp;</span>
        <span>Delft-Driven&nbsp;</span>
      </h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap, Sine } from 'gsap'

const title = ref<HTMLElement | null>(null)

const titleAnimation = (el: any, index: number) => {
  gsap.from(el, {
    duration: 0.2,
    y: -30,
    opacity: 0,
    ease: Sine.easeInOut,
    delay: index * 0.2,
  })
}

onMounted(() => {
  const titleChildren = title.value?.childNodes
  titleChildren?.forEach((el, index) => {
    titleAnimation(el, index)
  })
})
</script>

<style scoped lang="scss">
.home-hero {
  position: relative;
  display: flex;
  height: 100vh;
  width: 100%;
  background-image: url('/homebanner.webp');
  background-position: center;
  background-size: cover;
  z-index: 2;

  @include tablet {
    height: 75vh;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle,
      #000000 50%,
      #0d0d0d,
      #161616,
      #1d1d1d,
      #252525
    );
    opacity: 0.7;
    z-index: 3;
  }

  &__container {
    margin-top: auto;
    margin-inline: auto;
    z-index: 4;
    padding: 10px 20px;

    @include tablet {
      padding-block: 20px;
    }

    @include desktop {
      padding-block: calc(20px + 40px);
    }
  }

  &__title {
    color: $white;
    line-height: 150%;
    text-shadow: 1px 1px 5px $black;
    font-size: 36px;
    font-weight: 700;
    filter: drop-shadow(0 0 10px $black);
    display: flex;
    flex-wrap: wrap;
    max-width: 1120px;

    @include tablet {
      font-size: 36px;
    }

    @include desktop {
      font-size: 48px;
    }
  }
}
</style>

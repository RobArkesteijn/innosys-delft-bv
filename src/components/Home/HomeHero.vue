<template>
  <div class="home-hero">
    <div class="home-hero__container">
      <h1 class="home-hero__title">
        Sustainable Power Solutions, Delft-Driven.
      </h1>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.home-hero {
  position: relative;
  display: flex;
  height: 100vh;
  width: 100%;
  background-image: url('/homebanner.webp');
  background-position: center;
  background-size: cover;

  @include tablet {
    height: 75vh;
  }

  &::before {
    content: '';
    position: absolute; //
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
    z-index: 1;
  }

  &__container {
    margin-top: auto;
    margin-inline: auto;
    z-index: 2;
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
    font-weight: 300;
    filter: drop-shadow(0 0 10px $black);

    @include tablet {
      font-size: 36px;
      font-weight: 600;
    }

    @include desktop {
      font-size: 48px;
    }
  }
}
</style>

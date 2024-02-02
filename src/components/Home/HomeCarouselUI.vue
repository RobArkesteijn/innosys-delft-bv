<template>
  <div class="home-carousel">
    <div class="home-carousel__container">
      <span class="home-carousel__intro-block">
        <h2 class="home-carousel__title">Welcome to Innosys Delft BV</h2>
        <p class="home-carousel__intro">
          Sustainable technologies are essential for a prosperous future.
          Innosys Delft BV is dedicated to be a front-runner in the development
          of these exciting technologies! Innosys Delft BV has good contacts
          with Delft University of Technology, sections of Power Electronics,
          Faculty Marine Systems Design and Aerospace for Sustainable Energy
          Technology.
        </p>
      </span>
      <UCarousel
        :items="items"
        :ui="{
          item: 'basis-full',
          container: 'rounded-lg',
          indicators: {
            wrapper: 'relative bottom-0 mt-4',
          },
        }"
        class="mt-10 overflow-hidden"
        indicators
        arrows
      >
        <template #default="{ item }">
          <NuxtImg :src="item" class="w-full" draggable="false" />
        </template>

        <template #indicator="{ onClick, index, active }">
          <UButton
            :label="String(index)"
            :variant="active ? 'solid' : 'outline'"
            size="2xs"
            class="rounded-full min-w-6 justify-center"
            @click="onClick(index)"
          />
        </template>
      </UCarousel>
    </div>
  </div>
</template>

<script setup lang="ts">
const items = [
  '/carousel/carousel1.jpeg',
  '/carousel/carousel2.jpeg',
  '/carousel/carousel3.jpeg',
  '/carousel/carousel4.jpeg',
  '/carousel/carousel5.jpeg',
  '/carousel/carousel6.jpeg',
];
</script>

<style scoped lang="scss">
.home-carousel {
  width: 100%;
  display: flex;
  flex-direction: column;

  @include desktop {
    margin-top: -40px;
  }

  &__container {
    z-index: 2;
    padding-inline: 20px;
    border-radius: 10px;

    @include tablet {
      padding-inline: 40px;
    }

    @include desktop {
      padding-top: 40px;
    }
  }

  &__title {
    padding-bottom: 20px;
    font-size: 36px;
    text-align: center;
  }

  &__intro {
    font-size: 20px;
    line-height: 170%;
    color: $mine-shaft;
    font-weight: 300;

    @include tablet {
      text-align: center;
    }
  }

  &__description {
    padding: 10px 20px;

    @include tablet {
      padding: 20px 40px;
    }
  }

  &:deep(.home-carousel__description) {
    h4 {
      font-size: 20px;
      padding-block: 10px;
    }

    p {
      text-align: left;
      padding-block: 10px;
      font-weight: 300;
      line-height: 150%;
    }
  }
}
</style>

<template>
  <div class="home-carousel">
    <div class="home-carousel__container">
      <HomeIntroduction />
      <UCarousel
        :items="items"
        :ui="{
          item: 'basis-full',
          container: 'rounded-lg',
          indicators: {
            wrapper: 'relative bottom-0 mt-4',
          },
        }"
        :prev-button="{
          variant: 'solid',
          icon: 'i-material-symbols-check-indeterminate-small-rounded',
          size: 'lg',
          class: 'ring-white ring-2 bg-innosysshaft-900',
        }"
        :next-button="{
          variant: 'solid',
          icon: 'i-material-symbols-add',
          size: 'lg',
          class: 'ring-white ring-2 text-innosysred-600 bg-innosysshaft-900',
        }"
        class="mt-10 overflow-hidden"
        indicators
        arrows
      >
        <template #default="{ item }">
          <NuxtImg
            :src="item"
            class="w-full"
            draggable="false"
          />
        </template>

        <template #indicator="{ onClick, page, active }">
          <UButton
            :label="String(page)"
            :variant="active ? 'solid' : 'outline'"
            size="2xs"
            class="min-w-6 justify-center rounded-full"
            :class="{
              'text-innosysshaft-900': active,
            }"
            @click="onClick(page)"
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
]
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

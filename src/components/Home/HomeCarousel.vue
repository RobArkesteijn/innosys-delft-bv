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
      <Carousel ref="carousel">
        <Slide v-for="slide in images" :key="slide">
          <NuxtImg :src="slide" class="home-carousel__image" loading="lazy" />
        </Slide>

        <template #addons="{ currentSlide }">
          <Navigation />
          <Transition
            name="fade-in"
            mode="out-in"
            @before-leave="beforeLeave"
            @enter="enter"
            @after-enter="afterEnter"
          >
            <div
              v-if="textData[currentSlide]"
              ref="description"
              :key="currentSlide"
              class="home-carousel__description"
              v-html="textData[currentSlide]"
            />
          </Transition>
          <Pagination />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
const description = ref<HTMLDivElement>();
const prevHeight = ref();

const images = [
  '/carousel/carousel1.jpeg',
  '/carousel/carousel2.jpeg',
  '/carousel/carousel3.jpeg',
  '/carousel/carousel4.jpeg',
  '/carousel/carousel5.jpeg',
  '/carousel/carousel6.jpeg',
];

const textData = [
  '<h4>2 x 100kWp Asynchronous Machines on test rig</h4><p>One machine runs as a generator and the other as a motor. The two are connected by a battery, two newly developed motor drives an DC loop. Water cooling loop temperature can be adjusted in orderto test the harshest environmental cooling conditions.</p>',
  '<h4>120kWp high speed asynchronous motor/conventional gearbox housing</h4><p>60% of the gearbox content is now air! A compact, customized 1 and 2 speed gearbox is under development. This electric drive system is intended for future aerodynamic electric vehicles. Motor and inverter are water cooled.</p>',
];

const beforeLeave = (el: any) => {
  prevHeight.value = getComputedStyle(el).height;
};

const enter = (el: any) => {
  const { height } = getComputedStyle(el);

  el.style.height = prevHeight.value;

  setTimeout(() => {
    el.style.height = height;
  });
};

const afterEnter = (el: any) => {
  el.style.height = 'auto';
};

const handleButtonPosition = () => {
  const navigationButtonNext = document.querySelector(
    '.carousel__next',
  ) as HTMLButtonElement;
  const navigationButtonPrev = document.querySelector(
    '.carousel__prev',
  ) as HTMLButtonElement;
  const carousel = document.querySelector('.carousel') as HTMLElement;

  const descriptionHeight = description.value?.offsetHeight;
  const carouselHeight = carousel.offsetHeight;

  if (descriptionHeight && carouselHeight) {
    const buttonTop = (carouselHeight - descriptionHeight) / 2;
    navigationButtonNext.style.top = `${buttonTop}px`;
    navigationButtonPrev.style.top = `${buttonTop}px`;
  }
};

onMounted(() => {
  handleButtonPosition();
  window.addEventListener('resize', handleButtonPosition);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleButtonPosition);
});
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

  &__image {
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
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

.carousel {
  padding-top: 40px;

  &__slide {
    border-radius: 10px;
  }

  &:deep(.carousel__icon) {
    fill: $mine-shaft;
    background-color: $white;
    border-radius: 100%;
    height: unset;
    width: unset;
    filter: drop-shadow(0 0 10px $black);
    transition:
      fill 0.3s ease,
      background-color 0.3s ease;

    &:hover {
      background-color: $mine-shaft;
      fill: $white;
    }
  }

  &:deep(.carousel__pagination-button) {
    &::after {
      background-color: rgba($mine-shaft, 0.25);
    }
  }

  &:deep(.carousel__pagination-button--active) {
    &::after {
      background-color: $mine-shaft;
    }
  }

  &:deep(.carousel__viewport) {
    border-radius: 10px;
  }

  &:deep(.carousel__next),
  &:deep(.carousel__prev) {
    transform: unset;
  }
}

.fade-in-enter-active,
.fade-in-leave-active {
  transition:
    opacity 0.3s ease,
    height 0.3s ease;
}

.fade-in-enter-from,
.fade-in-leave-to {
  opacity: 0;
}
</style>

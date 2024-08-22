<template>
  <div class="home-services">
    <div class="home-services__container">
      <h2
        ref="servicesTitle"
        class="home-services__title"
      >
        Services
      </h2>
      <div
        ref="serviceCardContainer"
        class="home-services__cards"
      >
        <ServiceCard
          image="/services/engineering-sizing.jpeg"
          alt-text="Engineering and Sizing"
          title="Engineering and Sizing"
          description="Optimizing drive systems involves selecting the ideal motor, system voltage, inverter power, and transmission to ensure cost-efficiency, maintenance, safety, reliability, and service reliability."
          link="/"
        />
        <ServiceCard
          image="/services/system-installation.png"
          alt-text="System Installation"
          title="System Installation"
          description="If systems are too complex to make operational at your promises or if the warranty should be at one company, InnoSys Delft BV can install the system at the premises."
          link="/"
        />
        <ServiceCard
          image="/services/training-on-site.jpeg"
          alt-text="Training on Site"
          title="Training on Site"
          description="Some systems are just too big and too complex to explain with leaving the InnoSys Delft BV factory. The system needs to be taken into operation on site in this case. For this on site training is available."
          link="/"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { basicTextFadeIn, slideFromLeft } = useAnimation()

const servicesTitle = ref()
const serviceCardContainer = ref()

onMounted(() => {
  const serviceCards = serviceCardContainer.value.childNodes
  serviceCards.forEach((el: HTMLElement, index: number) =>
    slideFromLeft(el, index, 0.15),
  )
  basicTextFadeIn(servicesTitle.value)
})
</script>

<style scoped lang="scss">
.home-services {
  display: flex;

  &__container {
    padding-inline: 20px;

    @include tablet {
      padding-inline: 40px;
    }
  }

  &__title {
    text-align: center;
    padding-bottom: 20px;
    font-size: 36px;
    font-weight: 600;
  }

  &__cards {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;

    @include tablet {
      grid-template-columns: repeat(2, 1fr);
    }

    @include desktop {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>

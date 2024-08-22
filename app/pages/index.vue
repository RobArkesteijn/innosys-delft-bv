<template>
  <div class="home">
    <HomeHero />
    <div class="home__content bg-white dark:bg-innosysshaft-900">
      <HomeCarouselUI />
      <HomeServices />
      <ClientOnly>
        <HomeFrequentlyAsked />
      </ClientOnly>
      <HomeContactSection />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Homepagina',
})

useHead({
  meta: [
    { property: 'og:title', content: 'this is og title for the projects page' },
    { name: 'description', content: '[og:description]' },
    { name: 'og:description', content: '[description]' },
    { name: 'twitter:title', content: '[twitter:title]' },
    { name: 'twitter:description', content: '[twitter:description]' },
    { name: 'twitter:image', content: '[twitter:image]' },
    { name: 'twitter:card', content: 'summary' },
  ],
})

const locationPropertionAssets = [
  {
    title: 'Sand Bottom',
    image: '/services/training-on-site.jpeg',
    description: 'Sand Bottom Description',
  },
  {
    title: 'Sand Bottom',
    image: '/services/training-on-site.jpeg',
    description: 'Sand Bottom Description',
  },
  {
    title: 'Sand Bottom',
    image: '/services/training-on-site.jpeg',
    description: 'Sand Bottom Description',
  },
  {
    title: 'Sand Bottom',
    image: '/services/training-on-site.jpeg',
    description: 'Sand Bottom Description',
  },
  {
    title: 'Sand Bottom',
    image: '/services/training-on-site.jpeg',
    description: 'Sand Bottom Description',
  },
  {
    title: 'Sand Bottom',
    image: '/services/training-on-site.jpeg',
    description: 'Sand Bottom Description',
  },
  {
    title: 'Sand Bottom',
    image: '/services/training-on-site.jpeg',
    description: 'Sand Bottom Description with some more text',
  },
  {
    title: 'Sand Bottom',
    image: '/services/training-on-site.jpeg',
    description: 'Sand Bottom Description',
  },
  {
    title: 'Max Swell Height',
    image: '/services/training-on-site.jpeg',
    description: 'Sand Bottom Description',
  },
  {
    title: 'Sand Bottom',
    image: '/services/training-on-site.jpeg',
    description: 'Sand Bottom Description',
  },
  {
    title: 'Sand Bottom',
    image: '/services/training-on-site.jpeg',
    description: 'Sand Bottom Description',
  },
  {
    title: 'Sand Bottom',
    image: '/services/engineering-sizing.jpeg',
    description: 'Sand Bottom Description',
  },
  {
    title: 'Sand Bottom',
    image: '/services/training-on-site.jpeg',
    description: 'Sand Bottom Description',
  },
  {
    title: 'Sand Bottom',
    image: '/services/training-on-site.jpeg',
    description: 'Sand Bottom Description',
  },
  {
    title: 'Sand Bottom',
    image: '/services/training-on-site.jpeg',
    description: 'Sand Bottom Description',
  },
]
</script>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;

  &__content {
    padding-block: 40px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 80px;

    @include tablet {
      padding-block: 40px;
    }

    @include desktop {
      gap: 120px;
      margin-top: -40px;
      max-width: 1120px;
      margin-inline: auto;
      box-shadow: 0 0 5px 0px rgba($black, 0.1);
      border-radius: 10px;
    }
  }
}
</style>

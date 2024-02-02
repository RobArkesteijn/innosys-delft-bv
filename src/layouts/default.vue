<template>
  <div>
    <Html lang="en">
      <Head>
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta name="theme-color" content="#252525" />
        <Title>{{ `${title} | Innosys Delft BV` }}</Title>
        <Link rel="icon" type="image/png" href="/favicon.png" />
        <template v-for="link in head.link" :key="link.id">
          <Link
            :id="link.id"
            :rel="link.rel"
            :href="link.href"
            :hreflang="link.hreflang"
          />
        </template>
        <template v-for="meta in head.meta" :key="meta.id">
          <Meta
            :id="meta.id"
            :name="meta.name"
            :property="meta.property"
            :content="meta.content"
          />
        </template>
      </Head>
      <Body>
        <main class="layout" :style="backgroundStyles">
          <slot />
        </main>
      </Body>
    </Html>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const img = useImage();

const head = useHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true,
});

const title = computed(() => route.meta.title);

const backgroundStyles = computed(() => {
  const imgUrl = img('/stained-wall.jpg', {
    modifiers: { quality: 10, format: 'webp' },
  });
  return { backgroundImage: `url('${imgUrl}')` };
});
</script>

<style lang="scss" scoped>
.layout {
  position: relative;
  background-size: contain;
  background-repeat: repeat;
  background-position: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5);
  }
}
</style>

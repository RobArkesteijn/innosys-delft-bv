<template>
  <div class="service-card">
    <NuxtImg
      :src="image"
      :alt="altText"
      class="service-card__image"
      loading="lazy"
    />
    <h3 class="service-card__title">{{ title }}</h3>
    <p class="service-card__description">{{ description }}</p>
    <UButton
      :to="link"
      color="primary"
      icon="i-material-symbols-read-more-rounded"
      label="Read More"
      :trailing="false"
      class="service-card__button"
    />
  </div>
</template>

<script setup lang="ts">
defineProps({
  image: {
    type: String,
    required: true,
  },
  altText: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.service-card {
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 5px 0px rgba($black, 0.1);
  padding: 10px;

  &__image {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }

  &__title {
    text-align: center;
    padding-block: 20px;
    font-size: 20px;
  }

  &__description {
    font-weight: 300;
    line-height: 150%;
    margin-bottom: auto;
    text-align: center;
    padding-inline: 10px;
  }

  &__button {
    color: $white;
    background-color: $mine-shaft;
    text-decoration: none;
    margin: 20px auto;
    padding: 8px 16px;
    border-bottom: 1px solid transparent;
    border-radius: 10px;
    transition:
      border-color 0.3s ease,
      box-shadow 0.3s ease,
      text-shadow 0.3s ease;

    &:hover {
      box-shadow: 0 2px 3px 1px $black;
      border-color: $swiss-coffee;
      text-shadow: 0 0 10px $secondary;
    }

    &:active {
      transition:
        border-color 0.1s ease,
        box-shadow 0.1s ease;
      border-color: transparent;
      box-shadow: 0 1px 3px 0.5px $black;
    }
  }
}
</style>

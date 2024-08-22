<template>
  <div class="location-properties">
    <h3 class="location-properties__title">
      {{ title }}
    </h3>
    <div class="location-properties__items-container">
      <div
        v-for="(item, index) in properties"
        :key="index"
        class="location-properties__items"
      >
        <h4 class="location-properties__item-title">
          {{ item.title }}
        </h4>
        <div
          class="location-properties__item-image"
          :style="{ backgroundImage: `url(${item.image})` }"
        />
        <p class="location-properties__item-description">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface PropertiesType {
  title: string
  image: string
  description: string
}

defineProps({
  title: {
    type: String as PropType<string>,
    required: true,
  },
  properties: {
    type: Array as PropType<PropertiesType[]>,
    required: true,
  },
})
</script>

<style scope lang="scss">
.location-properties {
  padding-inline: 20px;

  @include tablet {
    padding-inline: 40px;
  }

  &__title {
    font-weight: bold;
    font-size: 36px;
    padding-block: 10px;
    background-color: lightgrey;
    padding-inline: 20px;
  }

  &__items-container {
    background-color: aliceblue;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 20px;
    column-gap: 10px;
    align-items: center;
    padding-inline: 20px;
    padding-block: 20px;

    @include tablet {
      grid-template-columns: repeat(3, 1fr);
      row-gap: 40px;
      column-gap: 15px;
      padding-inline: 40px;
      padding-block: 40px;
    }

    @include desktop {
      grid-template-columns: repeat(5, 1fr);
    }
  }

  &__items {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding-block: 10px;
    margin-bottom: auto;
  }

  &__item-title {
    font-weight: bold;
  }

  &__item-image {
    height: 42px;
    aspect-ratio: 1/1;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  &__item-description {
    text-align: center;
    font-size: 12px;
  }
}
</style>

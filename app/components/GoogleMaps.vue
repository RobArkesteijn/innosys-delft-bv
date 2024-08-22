<template>
  <div class="google-maps">
    <GoogleMap
      class="google-maps__map"
      :api-key="$config.googleMapsApiKey"
      style="width: 100%; height: 500px"
      :center="center"
      :zoom="15"
    >
      <Marker :options="markerOptions" />
    </GoogleMap>
    <div class="google-maps__info">
      <h4 class="google-maps__info-title">
        Location
      </h4>
      <p class="google-maps__info-company">
        Innosys Delft BV
      </p>
      <p class="google-maps__info-location">
        Deflt, South Holland, Netherlands
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { GoogleMap, Marker } from 'vue3-google-map'

const center = { lat: 52.01186, lng: 4.3719 }
const markerOptions = { position: center, title: 'INNOSYS DELFT' }
</script>

<style scoped lang="scss">
.google-maps {
  padding-inline: 20px;

  @include tablet {
    padding-inline: 40px;
  }

  &__map {
    @include tablet {
      height: 350px !important;
    }
  }

  &__info {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  &__info-title {
    @include tablet {
      font-size: 20px;
    }
  }

  &__info-company,
  &__info-location {
    font-weight: 300;
  }
}
</style>

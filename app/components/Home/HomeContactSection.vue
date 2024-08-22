<template>
  <div class="home-contact-section">
    <ContactForm class="home-contact-section__contact-form" />
    <GoogleMaps class="home-contact-section__google-maps" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.home-contact-section {
  display: flex;
  flex-direction: column;
  gap: 20px;

  @include tablet {
    flex-direction: row;
    justify-content: space-between;
    gap: unset;
  }

  &__contact-form {
    @include tablet {
      width: 33%;
    }
  }

  &__google-maps {
    @include tablet {
      width: 50%;
    }
  }
}
</style>

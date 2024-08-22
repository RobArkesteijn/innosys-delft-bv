<template>
  <div class="footer">
    <div class="footer__container">
      <Icon name="ic:baseline-call" />
      <Icon name="ic:baseline-mail" />
      <Icon name="ic:baseline-map" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.footer {
  height: 10vh;
  background-color: $mine-shaft;
  color: $white;
  font-size: 1.5em;
  display: flex;

  @include desktop {
    display: none;
  }

  &__container {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @include desktop {
      max-width: 1120px;
      margin-inline: auto;
    }
  }
}
</style>

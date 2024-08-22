<template>
  <div class="home-introduction">
    <h2 class="home-introduction__title">
      Welcome to Innosys Delft BV
    </h2>
    <p class="home-introduction__intro">
      Sustainable technologies are essential for a prosperous future. Innosys
      Delft BV is dedicated to be a front-runner in the development of these
      exciting technologies! Innosys Delft BV has good contacts with Delft
      University of Technology, sections of Power Electronics, Faculty Marine
      Systems Design and Aerospace for Sustainable Energy Technology.
    </p>
  </div>
</template>

<style scoped lang="scss">
.home-introduction {
  &__title {
    padding-bottom: 20px;
    font-size: 36px;
    font-weight: 600;
    text-align: center;
  }

  &__intro {
    font-size: 20px;
    line-height: 170%;
    font-weight: 300;

    @include tablet {
      text-align: center;
    }
  }
}
</style>

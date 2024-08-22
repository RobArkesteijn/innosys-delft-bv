<template>
  <div
    ref="navigation"
    class="navigation"
    :class="{ 'navigation--transparent': backgroundTransparent }"
  >
    <div class="navigation__container">
      <div class="navigation__left-section">
        <NuxtImg
          src="/logo-secondary.png"
          alt="The website's logo"
          class="navigation__logo"
        />
      </div>
      <ul class="navigation__options">
        <li class="navigation__option">
          <Icon
            name="ic:baseline-search"
            class="navigation__option-icon"
          />
          <p class="navigation__option-label">
            Search
          </p>
        </li>
        <li class="navigation__option">
          <Icon
            name="icon-park-outline:ad-product"
            class="navigation__option-icon"
          />
          <p class="navigation__option-label">
            Products
          </p>
        </li>
        <li class="navigation__option">
          <Icon
            name="bi:tools"
            class="navigation__option-icon"
          />
          <p class="navigation__option-label">
            Services
          </p>
        </li>
        <li class="navigation__option">
          <Icon
            name="ic:baseline-contact-page"
            class="navigation__option-icon"
          />
          <p class="navigation__option-label">
            Contact
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const navigation = ref<HTMLElement>()
const lastScrollTop = ref(0)
const backgroundTransparent = ref(true)
const screenHeight = ref()

const handleScroll = () => {
  const scrollTop = window.scrollY

  if (scrollTop > lastScrollTop.value && scrollTop > 70) {
    navigation.value!.style.top = '-70px'
  }
  else {
    navigation.value!.style.top = '0'
  }

  lastScrollTop.value = scrollTop

  if (scrollTop > screenHeight.value) {
    backgroundTransparent.value = false
  }
  else {
    backgroundTransparent.value = true
  }
}

onMounted(() => {
  if (import.meta.client) {
    window.addEventListener('scroll', handleScroll)
    screenHeight.value = window.innerHeight * 0.75
  }
})
</script>

<style scoped lang="scss">
.navigation {
  position: fixed;
  display: flex;
  top: 0;
  z-index: 3;
  width: 100%;
  background: $mine-shaft;
  padding-block: 10px;
  transition:
    top 0.3s ease,
    background 0.3s ease;

  &--transparent {
    @include tablet {
      background: linear-gradient(
        to bottom,
        rgba($black, 0.25) 70%,
        transparent
      );
    }
  }

  &__container {
    position: relative;
    margin-inline: auto;
    width: 1120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__left-section {
    display: flex;
    align-items: center;
    gap: 10px;

    @include desktop {
      gap: unset;
    }
  }

  &__logo {
    height: 50px;
    cursor: pointer;
    filter: drop-shadow(0 0 10px $black);
    padding-left: 20px;

    @include tablet {
      padding-inline: 20px;
    }
  }

  &__options {
    list-style: none;
    color: $white;
    display: flex;
    padding-right: 20px;

    @include tablet {
      gap: 10px;
    }

    @include desktop {
      gap: 20px;
    }
  }

  &__option {
    display: flex;
    gap: 8px;
    align-items: center;
    font-size: 20px;
    text-shadow: 0 0 10px $black;
    border-bottom: 1px solid transparent;
    border-radius: 10px;
    transition:
      border-color 0.3s ease,
      text-shadow 0.3s ease,
      box-shadow 0.3s ease,
      background-color 0.3s ease;
    padding: 5px 10px;
    cursor: pointer;

    &:hover {
      text-shadow: 0 0 10px $secondary;
      box-shadow: 0 2px 3px 1px $black;
      border-color: $swiss-coffee;
      background-color: $mine-shaft;
    }

    &:active {
      transition:
        border-color 0.1s ease,
        box-shadow 0.1s ease;
      border-color: transparent;
      box-shadow: 0 1px 3px 0.5px $black;
    }
  }

  &__option-label {
    display: none;

    @include tablet {
      display: block;
    }
  }
}
</style>

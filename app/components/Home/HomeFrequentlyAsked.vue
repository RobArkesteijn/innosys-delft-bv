<template>
  <div class="home-frequently-asked">
    <h2
      ref="FQATitle"
      class="home-frequently-asked__title"
    >
      Frequently Asked Questions
    </h2>
    <UAccordion
      :items="items"
      class="home-frequently-asked__accordion"
    >
      <template #default="{ item, index, open }">
        <UButton
          class="home-frequently-asked__question"
          color="gray"
        >
          <template #leading>
            <div
              class="-my-1 flex h-6 w-6 items-center justify-center rounded-full bg-gray-900"
            >
              <UIcon
                :name="item.icon"
                class="h-4 w-4 text-white dark:text-gray-900"
              />
            </div>
          </template>
          <span class="truncate">{{ index + 1 }} - {{ item.label }}</span>
          <template #trailing>
            <UIcon
              name="i-heroicons-chevron-right-20-solid"
              class="ms-auto h-5 w-5 transform transition-transform duration-200"
              :class="[open && 'rotate-90']"
            />
          </template>
        </UButton>
      </template>
      <template #item="{ item }">
        <p class="home-frequently-asked__answer">
          {{ item.content }}
        </p>
      </template>
    </UAccordion>
  </div>
</template>

<script setup lang="ts">
const { basicTextFadeIn, fadeInFromTop } = useAnimation()

const FQATitle = ref()

const items = [
  {
    label:
      'In which industries do InnoSys Delft BV\'s power electronics systems find applications?',
    icon: 'i-material-symbols-help-outline',
    content:
      'InnoSys Delft BV\'s power electronics systems are used in industries like renewable energy, electric vehicle charging, industrial automation, aerospace, and defense.',
  },
  {
    label:
      'In which industries do InnoSys Delft BV\'s power electronics systems find applications?',
    icon: 'i-material-symbols-help-outline',
    content:
      'InnoSys Delft BV\'s power electronics systems are used in industries like renewable energy, electric vehicle charging, industrial automation, aerospace, and defense.',
  },
  {
    label:
      'In which industries do InnoSys Delft BV\'s power electronics systems find applications?',
    icon: 'i-material-symbols-help-outline',
    content:
      'InnoSys Delft BV\'s power electronics systems are used in industries like renewable energy, electric vehicle charging, industrial automation, aerospace, and defense.',
  },
]

onMounted(() => {
  basicTextFadeIn(FQATitle.value)
  const FQAButtons = document.querySelectorAll(
    '.home-frequently-asked__question',
  ) as NodeListOf<Element>
  FQAButtons.forEach((el: Element, index: number) =>
    fadeInFromTop(el, index, 0.15, '.home-frequently-asked__accordion'),
  )
})
</script>

<style scoped lang="scss">
.home-frequently-asked {
  padding-inline: 20px;

  @include tablet {
    padding-inline: 40px;
  }

  &__title {
    font-size: 36px;
    font-weight: 600;
    text-align: center;
  }

  &__question {
    padding: 10px 20px;
    margin-top: 20px;
  }

  &__answer {
    padding: 20px 40px;
    border: solid 1px $mine-shaft;
    font-weight: 300;
    line-height: 150%;
  }
}
</style>

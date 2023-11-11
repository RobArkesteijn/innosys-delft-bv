<template>
  <div class="home-frequently-asked">
    <h2 class="home-frequently-asked__title">Frequently Asked Questions</h2>
    <UAccordion :items="items" class="home-frequently-asked__accordion">
      <template #default="{ item, index, open }">
        <UButton class="home-frequently-asked__question" color="gray">
          <template #leading>
            <div
              class="w-6 h-6 rounded-full bg-primary-500 dark:bg-primary-400 flex items-center justify-center -my-1"
            >
              <UIcon
                :name="item.icon"
                class="w-4 h-4 text-white dark:text-gray-900"
              />
            </div>
          </template>
          <span class="truncate">{{ index + 1 }} - {{ item.label }}</span>
          <template #trailing>
            <UIcon
              name="i-heroicons-chevron-right-20-solid"
              class="w-5 h-5 ms-auto transform transition-transform duration-200"
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
const items = [
  {
    label:
      "In which industries do InnoSys Delft BV's power electronics systems find applications?",
    icon: 'i-material-symbols-help-outline',
    content:
      "InnoSys Delft BV's power electronics systems are used in industries like renewable energy, electric vehicle charging, industrial automation, aerospace, and defense.",
  },
  {
    label:
      "In which industries do InnoSys Delft BV's power electronics systems find applications?",
    icon: 'i-material-symbols-help-outline',
    content:
      "InnoSys Delft BV's power electronics systems are used in industries like renewable energy, electric vehicle charging, industrial automation, aerospace, and defense.",
  },
  {
    label:
      "In which industries do InnoSys Delft BV's power electronics systems find applications?",
    icon: 'i-material-symbols-help-outline',
    content:
      "InnoSys Delft BV's power electronics systems are used in industries like renewable energy, electric vehicle charging, industrial automation, aerospace, and defense.",
  },
];
</script>

<style scoped lang="scss">
.home-frequently-asked {
  padding-inline: 20px;

  @include tablet {
    padding-inline: 40px;
  }

  &__title {
    font-size: 36px;
    text-align: center;
  }

  &__question {
    padding: 10px 20px;
    margin-top: 20px;
  }

  &__answer {
    padding: 20px 40px;
    border: solid 1px $primary;
    font-weight: 300;
    line-height: 150%;
  }
}
</style>

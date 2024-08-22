<template>
  <div class="contact-form">
    <h2 class="contact-form__title">
      Contact Us
    </h2>
    <p class="contact-form__description">
      If you have any questions or would like to schedule a service, please feel
      free to contact us at any time.
    </p>
    <UForm
      class="contact-form__form"
      :state="state"
      :validate="validate"
      @submit="onSubmit"
    >
      <UFormGroup
        label="Name"
        name="name"
        class="contact-form__field mr-5"
      >
        <UInput v-model="state.name" />
      </UFormGroup>
      <UFormGroup
        label="Email"
        name="email"
        class="contact-form__field mr-5"
      >
        <UInput v-model="state.email" />
      </UFormGroup>
      <UFormGroup
        label="Message"
        name="message"
        class="contact-form__field mr-5"
      >
        <UTextarea v-model="state.message" />
      </UFormGroup>
      <UButton
        type="submit"
        label="Submit"
        color="primary"
        class="contact-form__button"
      />
    </UForm>
  </div>
</template>

<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '@nuxt/ui/dist/runtime/types'

const state = ref({
  name: undefined,
  email: undefined,
  message: undefined,
})

const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.name) errors.push({ path: 'name', message: 'Required' })
  if (!state.email) errors.push({ path: 'email', message: 'Required' })
  if (!state.message) errors.push({ path: 'message', message: 'Required' })
  return errors
}

function onSubmit(event: FormSubmitEvent<any>) {
  // Do something with data
  console.log(event.data)
}
</script>

<style scoped lang="scss">
.contact-form {
  padding-inline: 20px;

  @include tablet {
    padding-inline: 40px;
  }

  &__title {
    font-size: 36px;
    font-weight: 600;
  }

  &__description {
    font-weight: 300;
    line-height: 150%;
    padding-block: 10px;
  }

  &__form {
    display: flex;
    flex-direction: column;
  }

  &__field {
    display: flex;
    flex-direction: column;
    margin-block: 10px;
  }

  &__error {
    color: $secondary;
    margin-top: 10px;
  }

  &__button {
    background-color: $mine-shaft;
    margin: 20px auto;
    padding: 8px 16px;
    border: none;
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

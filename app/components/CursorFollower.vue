<template>
  <div
    v-if="type === 'lighting'"
    ref="lighting"
    class="cursor cursor--lighting"
    :class="{ 'cursor--hover': hover }"
  />
</template>

<script setup lang="ts">
import { useRouter } from 'nuxt/app'
import { ref, onMounted, onBeforeUnmount, type PropType } from 'vue'
import { gsap } from 'gsap'

const props = defineProps({
  type: {
    type: String as PropType<string>,
    default: 'lighting',
  },
})

const router = useRouter()

const hover = ref(false)
const lighting = ref(null as Element | null)
const cursor = ref(null as Element | null)

const { x: mouseX, y: mouseY } = useMouse({ type: 'client' })

const position = { x: mouseX, y: mouseY }
const velocity = { x: 0, y: 0 }

let xSetter: Function | null = null
let ySetter: Function | null = null

const cursorHover = () => {
  hover.value = true
}

const disableCursorHover = () => {
  hover.value = false
}

const onMouseMove = (e: MouseEvent): void => {
  const cursorSize = cursor.value?.clientWidth
  const x = e.clientX - cursorSize! / 2
  const y = e.clientY - cursorSize! / 2

  gsap.to(position, {
    x,
    y,
    duration: 1.25,
    ease: 'Expo.easeOut',
    onUpdate: () => {
      velocity.x = x - position.x
      velocity.y = y - position.y
    },
  })
}

const loop = () => {
  xSetter(position.x)
  ySetter(position.y)
}

// Add event listeners to all elements which should show hover
const initHoverElements = () => {
  const dataCursorElements = document.querySelectorAll(
    `[data-cursor="${props.type}"]`,
  );

  [...dataCursorElements].forEach((elem) => {
    elem.addEventListener('mouseenter', cursorHover, false)
    elem.addEventListener('mouseleave', disableCursorHover, false)
  })

  if (dataCursorElements.length > 0) {
    window.addEventListener('mousemove', onMouseMove)
    gsap.ticker.add(loop)
  }
}

// Remove event listeners to all hover elements
const uninitHoverElements = () => {
  gsap.ticker.remove(loop)
  window.removeEventListener('mousemove', onMouseMove);
  [...document.querySelectorAll(`[data-cursor="${props.type}"]`)].forEach(
    (elem) => {
      elem.removeEventListener('mouseenter', cursorHover, false)
      elem.removeEventListener('mouseleave', disableCursorHover, false)
    },
  )
}

onMounted(() => {
  cursor.value = lighting.value

  xSetter = gsap.quickSetter(cursor.value, 'x', 'px')
  ySetter = gsap.quickSetter(cursor.value, 'y', 'px')

  initHoverElements()

  router.beforeEach((_to: any, _from: any, next: any) => {
    disableCursorHover()
    uninitHoverElements()
    next()
  })

  router.afterEach(() => {
    setTimeout(() => {
      initHoverElements()
    }, 500)
  })
})

onBeforeUnmount(() => {
  uninitHoverElements()
})
</script>

<style lang="scss" scoped>
$transition-duration: 0.16s;

.cursor {
  pointer-events: none;
  display: none;
  position: fixed;
  inset-inline-start: 0;
  inset-block-start: 0;
  opacity: 0;
  transform-origin: 50% 50%;
  transition:
    opacity $transition-duration linear,
    inline-size $transition-duration linear,
    block-size $transition-duration linear,
    background-color $transition-duration linear;
  will-change: opacity, inline-size, block-size, transform, background-color;

  @include desktop {
    display: block;
  }

  &--lighting {
    z-index: 1;
    inline-size: 500px;
    block-size: 500px;
    background-color: $black;
    border-radius: 50%;
    box-shadow: 0 0 250px 250px rgba($black, 1);

    &.cursor--hover {
      opacity: 0.1;
    }
  }
}
</style>

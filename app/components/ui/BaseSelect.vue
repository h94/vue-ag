<!-- app/components/ui/BaseSelect.vue -->
<template>
  <label class="select" :class="{ open: isOpen }" @click="toggleDropdown" @blur="closeDropdown" tabindex="0">
    <p>{{ label }} {{ modelValue }}</p>
    <ol v-show="isOpen">
      <li 
        v-for="(opt, index) in options" 
        :key="index"
        :class="{ active: modelValue === opt }"
        @click.stop="selectOption(opt)"
      >
        {{ index === 0 && label ? label + ' ' + opt : opt }}
      </li>
    </ol>
    <i class="select_ic"></i>
  </label>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  modelValue?: string
  options: string[]
  label?: string
}>()

const emit = defineEmits(['update:modelValue'])

const isOpen = ref(false)

function toggleDropdown() {
  isOpen.value = !isOpen.value
}

function closeDropdown() {
  isOpen.value = false
}

function selectOption(opt: string) {
  emit('update:modelValue', opt)
  isOpen.value = false
}
</script>

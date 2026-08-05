<script setup lang="ts">
const props = defineProps<{
  modelValue: string
  title?: string
  items?: string[]
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const changeMessage = () => {
  emit('update:modelValue', 'Hello from child')
}
</script>

<template>
  <v-card class="pa-4" elevation="2">
    <div class="text-h6 mb-2">{{ props.title || 'Child Component' }}</div>
    <p class="mb-4">Received from parent: {{ props.modelValue }}</p>

    <ul class="mb-4">
      <li v-for="item in props.items || []" :key="item">
        {{ item }}
      </li>
    </ul>

    <v-btn color="primary" @click="changeMessage">
      Notify parent to update
    </v-btn>
  </v-card>
</template>

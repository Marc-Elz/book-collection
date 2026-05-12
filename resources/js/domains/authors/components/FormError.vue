<template>
    <div v-for="error in getErrorByProperty(name).value" :key="error">
        {{ displayMessage }}
        Error:{{ error }}
    </div>
</template>

<script setup lang="ts">
import { getErrorByProperty, getMessage } from '../../../services/error';

const displayMessage = getMessage;

defineProps<{ name: string }>();
</script>
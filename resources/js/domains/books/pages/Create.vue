<template>
    <div>
        <h2>Nieuw boek toevoegen</h2>
        <Form :book="book" @submit="handleSubmit"  />
    </div>
</template>

<script setup lang="ts">
import Form from '../components/Form.vue';
import { createBook } from '../store';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import type { bookType } from '../store';

const router = useRouter();

const book = ref({
    title: '',
    summary: '',
    author_id: null
});


const handleSubmit = async (data:bookType) => {
    await createBook(data);
    // router.push({name: 'books.overview'});
};
</script>
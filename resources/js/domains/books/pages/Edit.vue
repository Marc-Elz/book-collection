<template>
    <div>
        <h2>Boek bewerken</h2>
        <Form v-if="book" :book="book" @submit="handleSubmit" />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Form from '../components/Form.vue';
import { fetchBooks, getBookById, updateBook } from '../store';
import { bookType } from '../store';

const route = useRoute();
const router = useRouter();

fetchBooks();

const book = getBookById(route.params.id);

const handleSubmit = async (data: bookType) => {
    await updateBook(route.params.id, data);
    router.push({ name: 'books.overview' });
};
</script>
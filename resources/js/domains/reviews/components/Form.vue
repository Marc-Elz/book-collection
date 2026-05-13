<template>
    <ErrorMessage />
    <form @submit.prevent="handleSubmit">
        <label>Titel:</label>
        <input v-model="form.title" type="text" required />
        <FormError :name="'title'" />

        <label>Content:</label>
        <textarea v-model="form.content" required></textarea>
        <FormError :name="'content'" />

        <label>Boek:</label>
        <select v-model="form.book_id" required>
            <option v-for="book in getAllBooks" :key="book.id" :value="book.id">
                {{ book.title }}
            </option>
        </select>
        <FormError :name="'book_id'" />

        <button type="submit">Opslaan</button>
    </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import FormError from "../../../components/FormError.vue";
import ErrorMessage from "../../../components/ErrorMessage.vue";
import { fetchBooks, getAllBooks } from "../../books/store";

// Fetch books when component is mounted
fetchBooks();

const props = defineProps({ review: Object });

const emit = defineEmits(["submit"]);

const form = ref({ ...props.review });

const handleSubmit = () => emit("submit", form.value);
</script>

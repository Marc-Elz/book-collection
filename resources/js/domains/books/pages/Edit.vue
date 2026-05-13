<template>
    <div>
        <h2>Boek bewerken</h2>
        <Form v-if="book" :book="book" @submit="handleSubmit" />
    </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import Form from "../components/Form.vue";
import { fetchBooks, getBookById, updateBook } from "../store";
import { bookType } from "../../../services/store/storetypes";

const route = useRoute();
const router = useRouter();

fetchBooks();

const book = getBookById(route.params.id as string | number);

const handleSubmit = async (data: bookType) => {
    await updateBook(route.params.id as string | number, data);
    router.push({ name: "books.overview" });
};
</script>

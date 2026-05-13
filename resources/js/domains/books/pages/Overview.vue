<template>
    <ErrorMessage />

    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Summary</th>
                <th>Author_id</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="book in getAllBooks" :key="book.id">
                <td>{{ book.id }}</td>
                <td>{{ book.title }}</td>
                <td>{{ book.summary }}</td>
                <td>{{ book.author_id }}</td>
                <router-link
                    :to="{ name: 'books.edit', params: { id: book.id } }"
                    >Bewerk</router-link
                >
                <button @click="deleteBook(book.id)">Verwijder</button>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { fetchBooks, getAllBooks, deleteBook } from "../store";
import ErrorMessage from "../../../components/ErrorMessage.vue";

fetchBooks();
</script>

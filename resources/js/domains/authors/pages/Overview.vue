<template>
    <ErrorMessage />

    <table>
        <thead>
            <tr>
                <th>Name</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="author in getAllAuthors" :key="author.id">
                <td>{{ author.name }}</td>
                <router-link :to="{ name: 'authors.edit', params: { id: author.id } }">Bewerk</router-link>
                <button @click="deleteAuthor(author.id)">Verwijder</button>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { fetchAuthors, getAllAuthors, deleteAuthor } from "../store";
import ErrorMessage from '../components/ErrorMessage.vue';

fetchAuthors();
</script>

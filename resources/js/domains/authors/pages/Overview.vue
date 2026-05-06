<template>
    <table>
        <thead>
            <tr>
                <th>Name</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="author in getAllAuthors" :key="author.id">
                <td>{{ author.name }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { fetchAuthors, getAllAuthors } from "../store";

fetchAuthors();
</script>

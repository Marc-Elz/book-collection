<template>
    <ErrorMessage />

    <table>
        <thead>
            <tr>
                <th>id</th>
                <th>Title</th>
                <th>Content</th>
                <th>Book id</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="review in getAllReviews" :key="review.id">
                <td>{{ review.id }}</td>
                <td>{{ review.title }}</td>
                <td>{{ review.content }}</td>
                <td>{{ review.book }}</td>
                <router-link
                    :to="{ name: 'reviews.edit', params: { id: review.id } }"
                    >Bewerk</router-link
                >
                <button @click="deleteReview(review.id)">Verwijder</button>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
import { fetchReviews, getAllReviews, deleteReview } from "../store";
import ErrorMessage from "../../../components/ErrorMessage.vue";

fetchReviews();
</script>

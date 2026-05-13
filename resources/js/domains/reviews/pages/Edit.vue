<template>
    <div>
        <h2>Review bewerken</h2>
        <Form v-if="review" :review="review" @submit="handleSubmit" />
    </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import Form from "../components/Form.vue";
import { fetchReviews, getReviewById, updateReview } from "../store";
import { reviewType } from "../store";

const route = useRoute();
const router = useRouter();

fetchReviews();

const review = getReviewById(route.params.id);

const handleSubmit = async (data: reviewType) => {
    await updateReview(route.params.id, data);
    router.push({ name: "reviews.overview" });
};
</script>

<template>
    <div>
        <h2>Nieuw review toevoegen</h2>
        <Form :review="review" @submit="handleSubmit" />
    </div>
</template>

<script setup lang="ts">
import Form from "../components/Form.vue";
import { createReview } from "../store";
import { useRouter } from "vue-router";
import { ref } from "vue";
import type { reviewType } from "../store";

const router = useRouter();

const review = ref({
    title: "",
    content: "",
    book_id: null,
});

const handleSubmit = async (data: reviewType) => {
    await createReview(data);
    router.push({ name: "reviews.overview" });
};
</script>

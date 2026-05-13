<template>
    <div>
        <h2>Nieuw auteur toevoegen</h2>
        <Form :author="author" @submit="handleSubmit" />
    </div>
</template>

<script setup lang="ts">
import Form from "../components/Form.vue";
import { createAuthor } from "../store";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { authorType } from "../../../services/store/storetypes";

const router = useRouter();

const author = ref({
    name: "",
});

const handleSubmit = async (data: authorType) => {
    await createAuthor(data);
    router.push({ name: "authors.overview" });
};
</script>

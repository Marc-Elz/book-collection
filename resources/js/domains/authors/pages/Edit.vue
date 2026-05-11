<template>
    <div>
        <h2>Boek bewerken</h2>
        <Form v-if="author" :author="author" @submit="handleSubmit" />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Form from '../components/Form.vue';
import { authorType, fetchAuthors, getAuthorById, updateAuthor } from '../store';

const route = useRoute();
const router = useRouter();

fetchAuthors();

const author = getAuthorById(route.params.id);

const handleSubmit = async (data: authorType) => {
    await updateAuthor(route.params.id, data);
    router.push({ name: 'authors.overview' });
};
</script>
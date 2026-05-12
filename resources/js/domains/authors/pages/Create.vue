<template>
    <div>
        <h2>Nieuw auteur toevoegen</h2>
        <Form :author="author" @submit="handleSubmit"  />
    </div>
</template>

<script setup lang="ts">
import Form from '../components/Form.vue';
import { createAuthor } from '../store';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import type { authorType } from '../store';
import { getMessage } from '../../../services/error';

const router = useRouter();

const author = ref({
    name: '',
});


const handleSubmit = async (data:authorType) => {
    try {
        const result = await createAuthor(data);
        router.push({name: 'authors.overview'});
        console.log(result)
        console.log('geslaagd');
    } catch (error) {
        console.error('Error creating author:', error);
    } 


    // console.log("lenght")
    // console.log(getMessage.value)
    // console.log(getMessage.value.length)
    // if (getMessage.value.length===0){
    //     
    // }
};
</script>
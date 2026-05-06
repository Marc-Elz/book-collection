import axios from "axios";
import { ref, computed } from "vue";

interface authorType {
    id: number;
    name: string;
}

const authors = ref<authorType[]>([]);

export const getAllAuthors = computed(() => authors.value);

export const fetchAuthors = async () => {
    const { data } = await axios.get("/api/authors");

    if (!data) return;
    authors.value = data;
};

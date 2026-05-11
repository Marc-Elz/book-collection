import axios from "axios";
import { ref, computed } from "vue";

export interface authorType {
    id: number;
    name: string;
}

const authors = ref<authorType[]>([]);

export const getAllAuthors = computed(() => authors.value);
export const getAuthorById = (id:number|string|string[]) => computed(() => authors.value.find(author => author.id == id));


export const fetchAuthors = async () => {
    const { data } = await axios.get("/api/authors");

    if (!data) return;
    authors.value = data;
};

export const createAuthor = async (newAuthor:authorType) => {
    const {data} = await axios.post('/api/authors', newAuthor);
    if(!data) return
    authors.value = data;
}

export const updateAuthor = async (id:number|string|string[], updatedAuthor:authorType) => {
    const { data } = await axios.put(`/api/authors/${id}`, updatedAuthor);
    if (!data) return;
    authors.value = data;
}

import axios from "axios";
import { ref, computed } from "vue";

export interface bookType {
    id: number;
    title: string;
    summary: string;
    author_id: number;
}

const books = ref<bookType[]>([]);

export const getAllBooks = computed(() => books.value);

export const fetchBooks = async () => {
    const { data } = await axios.get("/api/books");

    if (!data) return;
    books.value = data;
};

export const createBook = async (newBook:bookType) => {
    const {data} = await axios.post('/api/books', newBook);
    if(!data) return
    books.value = data;
};
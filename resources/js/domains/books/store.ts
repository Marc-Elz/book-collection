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
export const getBookById = (id:number|string|string[]) => computed(() => books.value.find(book => book.id == id));

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

export const updateBook = async (id:number|string|string[], updatedBook:bookType) => {
    const { data } = await axios.put(`/api/books/${id}`, updatedBook);
    if (!data) return;
    books.value = data;
};

export const deleteBook = async (id:number) => {
    await axios.delete(`/api/books/${id}`);
    books.value = books.value.filter(book => book.id !== id);
};
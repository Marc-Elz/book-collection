import axios from "axios";
import { ref, computed } from "vue";
import { getRequest, postRequest, putRequest, deleteRequest } from '../../services/http';

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
    const { data } = await getRequest('/books');

    if (!data) return;
    books.value = data;
};

export const createBook = async (newBook:bookType) => {
    const {data} = await postRequest('/books', newBook);
    if(!data) return
    books.value = data;
};

export const updateBook = async (id:number|string|string[], updatedBook:bookType) => {
    const { data } = await putRequest(`/books/${id}`, updatedBook);
    if (!data) return;
    books.value = data;
};

export const deleteBook = async (id:number) => {
    await deleteRequest(`/books/${id}`);
    books.value = books.value.filter(book => book.id !== id);
};
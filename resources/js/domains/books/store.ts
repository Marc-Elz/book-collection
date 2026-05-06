import axios from "axios";
import { ref, computed } from "vue";

const books = ref([]);

export const getAllBooks = computed(() => books.value);

export const fetchBooks = async () => {
    const { data } = await axios.get("/api/books");

    if (!data) return;
    books.value = data;
};

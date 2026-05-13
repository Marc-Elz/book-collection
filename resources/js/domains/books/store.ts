import { storeModuleFactory } from "../../services/store";
import { bookType } from "../../services/store/storetypes";

const bookStore = storeModuleFactory("books");

export const getAllBooks = bookStore.getters.all;
export const getBookById = bookStore.getters.getById;

export const fetchBooks = async () => {
    return await bookStore.actions.getAll();
};

export const createBook = async (newBook: bookType) => {
    return await bookStore.actions.create(newBook);
};

export const updateBook = async (
    id: number | string,
    updatedBook: bookType,
) => {
    return await bookStore.actions.update(id, updatedBook);
};

export const deleteBook = async (id: number) => {
    return await bookStore.actions.delete(id);
};

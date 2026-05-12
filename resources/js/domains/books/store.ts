import { storeModuleFactory } from '../../services/store';

// TODO use typing in storemodulefacotry
export interface bookType {
    id: number;
    title: string;
    summary: string;
    author_id: number;
}

const bookStore = storeModuleFactory('books');


export const getAllBooks = bookStore.getters.all;
export const getBookById = bookStore.getters.getById;

export const fetchBooks = async () => {
    return await bookStore.actions.getAll();
};

export const createBook = async (newBook:bookType) => {
    return await bookStore.actions.create(newBook);
};

export const updateBook = async (id:number|string|string[], updatedBook:bookType) => {
    return await bookStore.actions.update(id, updatedBook);
};

export const deleteBook = async (id:number) => {
    return await bookStore.actions.delete(id);
};
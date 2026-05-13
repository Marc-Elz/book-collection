import { storeModuleFactory } from "../../services/store";
import { authorType } from "../../services/store/storetypes";

const authorStore = storeModuleFactory("authors");

export const getAllAuthors = authorStore.getters.all;
export const getAuthorById = authorStore.getters.getById;

export const fetchAuthors = async () => {
    return await authorStore.actions.getAll();
};

export const createAuthor = async (newAuthor: authorType) => {
    return authorStore.actions.create(newAuthor);
};

export const updateAuthor = async (
    id: number | string,
    updatedAuthor: authorType,
) => {
    return await authorStore.actions.update(id, updatedAuthor);
};

export const deleteAuthor = async (id: number) => {
    return await authorStore.actions.delete(id);
};

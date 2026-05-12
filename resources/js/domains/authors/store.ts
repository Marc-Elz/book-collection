import { storeModuleFactory } from '../../services/store';


export interface authorType {
    id: number;
    name: string;
}

const authorStore = storeModuleFactory('authors');


export const getAllAuthors = authorStore.getters.all;
export const getAuthorById =  authorStore.getters.getById;


export const fetchAuthors = async () => {
    return await authorStore.actions.getAll();
};

export const createAuthor = async (newAuthor:authorType) => {
    return authorStore.actions.create(newAuthor);
}

export const updateAuthor = async (id:number|string|string[], updatedAuthor:authorType) => {
    return await authorStore.actions.update(id, updatedAuthor)
}

export const deleteAuthor = async (id:number) => {
    try {
        return await authorStore.actions.delete(id);
    }catch(error: any){
        console.error('Error deleting author');
        console.error(error.response.value);
        throw error;
    }
}
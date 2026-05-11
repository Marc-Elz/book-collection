import { storeModuleFactory } from '../../services/store';


export interface authorType {
    id: number;
    name: string;
}

const authorStore = storeModuleFactory('authors');


export const getAllAuthors = authorStore.getters.all;
export const getAuthorById =  authorStore.getters.getById;


export const fetchAuthors = async () => {
    authorStore.actions.getAll();
};

export const createAuthor = async (newAuthor:authorType) => {
    authorStore.actions.create(newAuthor);
}

export const updateAuthor = async (id:number|string|string[], updatedAuthor:authorType) => {
    authorStore.actions.update(id, updatedAuthor)
}

export const deleteAuthor = async (id:number) => {
    try {
        authorStore.actions.delete(id);
    }catch(error: any){
        console.error(error.response.value);
    }
}
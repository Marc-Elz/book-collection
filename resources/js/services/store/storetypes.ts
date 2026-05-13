export interface storeType {
    id: number;
}

export interface authorType extends storeType {
    name: string;
}

export interface bookType extends storeType {
    title: string;
    summary: string;
    author_id: number;
}

export interface reviewType extends storeType {
    title: string;
    content: string;
    book_id: number;
}

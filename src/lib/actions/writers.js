import { serverMutation } from "../core/server";

export const addBook = async (newBook, method)=>{
    console.log(newBook , method)
    return serverMutation('/api/writers',newBook , method);
}

export const updateModal = async(bookId,payload,method)=>{
    return serverMutation(`/api/writers/${bookId}`,payload,method);
}

export const deleteBookById = async(bookId,data,method)=>{
    return serverMutation(`/api/writers/${bookId}`,data,method);
}
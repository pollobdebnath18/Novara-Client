import { serverMutation } from "../core/server";

export const userRoleChanged = async (id,role,method)=>{
    return serverMutation(`/api/user/${id}`,role,method);
}

export const userDeleted = async (id,method)=>{
    return serverMutation(`/api/user/${id}`,{},method);
}
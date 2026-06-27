import { serverMutation } from "../core/server";

export const updateProfile = async (id,data,method)=>{
    return serverMutation(`/api/update-profile/${id}`,data,method);
}
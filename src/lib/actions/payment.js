import { serverMutation } from "../core/server";

export const addPayment = async (data, method) => {
    return serverMutation("/api/payments", data, method);
}
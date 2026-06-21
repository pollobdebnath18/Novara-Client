// "use server";
const baseUrl = process.env.NEXT_PUBLIC_API_URL;

// fetch data for GET
export const serverFetch = async (path) => {
  // console.log(path)
  const res = await fetch(`${baseUrl}${path}`);
  // console.log(res)
  return handleError(res);
};

// fetch data for POST and PATCH
export const serverMutation = async (path, data, method) => {
  // console.log( path,data,method)
  const res = await fetch(`${baseUrl}${path}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return handleError(res);
};

// handle errors like 404 and 500
export const handleError = async (res) => {
  if (res.status === 404) {
    return Promise.reject(new Error("404 - Not Found"));
  }
  if (res.status === 500) {
    return Promise.reject(new Error("500 - Internal Server Error"));
  }
  if (res.status === 403) {
    return Promise.reject(new Error("403 - Forbidden"));
  }
  return res.json();
};

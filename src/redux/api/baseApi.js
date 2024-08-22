import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";


export const baseApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://192.168.10.163:8081/api/v1",
        prepareHeaders: (headers, {getState}) => {
            const token = localStorage.getItem("token");
            console.log("baseApi-9", token);
            if(token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            headers.set("X-Custom-Header", "foobar");
            return headers;
        },
    }),
    tagTypes: ["user", "castegory", "subscripiton"],
    endpoints: () => ({}),
})
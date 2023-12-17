import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { TCatalog } from '../types/catalogs';

const ENDPOINT = "http://192.168.1.181:8000/api/catalogs/";
const catalogApi:any = createApi({
    reducerPath: "catalogApi",
    baseQuery: fetchBaseQuery({baseUrl: ENDPOINT}),
    tagTypes: ["catalogs"],
    endpoints: (builder)=>({
        getCatalogList: builder.query<TCatalog, string>({
            query: ()=> ENDPOINT
        })
    })
})

export const {useGetCatalogListQuery} = catalogApi;
export default catalogApi;
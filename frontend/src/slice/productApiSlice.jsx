
import { PRODUCT_URL } from '../constants'
import {apiSlice} from  './apiSlice'


export const productApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder)=> ({
        getProducts: builder.query({
            query: ()=>({
                url: PRODUCT_URL,
                method: 'GET',
            })
        })
    })
})

export const {
useGetProductsQuery
} = productApiSlice
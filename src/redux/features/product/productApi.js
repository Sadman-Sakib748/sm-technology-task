import { baseApi } from "@/redux/api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addProduct: build.mutation({
      query: (data) => {
        return {
          url: "/products/",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["product"],
    }),

    getAllProducts: build.query({
      query: () => ({
        url: `/products/`,
        method: "GET",
      }),
      transformResponse: (response) => {
        return { results: response };
      },
      providesTags: ["product"],
    }),
    getSingleProduct: build.query({
      query: (id) => ({
        url: `/products/${id}/`,
        method: "GET",
      }),
      transformResponse: (response) => {
        return response;
      },
      providesTags: ["product"],
    }),

    updateProduct: build.mutation({
      query: (payload) => ({
        url: `/products/${payload.id}/`,
        method: "PATCH",
        body: payload.data,
      }),
      invalidatesTags: ["product"],
    }),
    deleteProduct: build.mutation({
      query: (id) => ({
        url: `/products/${id}/`,
        method: "Delete",
        body: {},
      }),
      invalidatesTags: ["product"],
    }),
  }),
  overrideExisting: true,
});

export const {
  useAddProductMutation,
  useGetAllProductsQuery,
  useGetSingleProductQuery,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;

import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { fetchFromApi } from '../services/api'


export const useDataFetched = (url, queryKey) => {
  const {
    data: dataMovies = [],
    isError,
    fetchNextPage,
    hasNextPage,
    isLoading,
    refetch,
    isFetchingNextPage
  } = useInfiniteQuery({
    queryKey,
    queryFn: async ({ pageParam = 1 }) =>
      fetchFromApi(url, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => lastPage?.nextCursor

  })

  return {
    refetch,
    fetchNextPage,
    isLoading,
    isError,
    data: dataMovies.pages?.flatMap(page => page.results) ?? [],
    hasNextPage,
    isFetchingNextPage
  }
}

// this functions is for infinity queries, it uses the useInfiniteQuery from ReactQuery
export const useInfinityFetched = (url, queryKey) => {
  const {
    data: dataMovies = [],
    isError,
    fetchNextPage,
    hasNextPage,
    isLoading,
    refetch,
    isFetchingNextPage
  } = useInfiniteQuery({
    queryKey,
    queryFn: async ({ pageParam = 2 }) =>
      fetchFromApi(url, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => lastPage?.nextCursor

  })

  return {
    refetch,
    fetchNextPage,
    isLoading,
    isError,
    data: dataMovies.pages?.flatMap(page => page.results) ?? [],
    hasNextPage,
    isFetchingNextPage
  }
}

// this function is for querys that does not need pagination, just fetching once(or first page)
export const useFetch = (url, queryKey) => {
  const { isLoading, isError, isSuccess, data = [], refetch } = useQuery({
    queryKey,
    queryFn: async () =>
      fetchFromApi(url)
  })
  return {
    isError,
    isLoading,
    isSuccess,
    data: data ?? [],
    refetch
  }
}

import { defineStore } from "pinia"

export const useSearchStore = defineStore('search', () => {

  const config = useRuntimeConfig()
  const apiBase = config.public.apiBase
  const posts = ref([])
  const loading = ref(false)

  const page = ref(1)
  const limit = ref(10)
  const totalFound = ref(0)

  const getQueryParams = ()=>{
    const query = {
      _page:page.value,
      _limit:limit.value,
      _sort:'id',
      _order:'desc'
    }
    return query
  }
  const fetchPosts = async (opts = {}) => {
    posts.value = []
    loading.value = true

  const {data,pending,error,execute,refresh} =   await useFetch(`${apiBase}/posts`,{
      query:getQueryParams(),
      ...opts
    })

    loading.value = false
    if(data && !pending.value && !error.value){
      posts.value = data.value
    }
  }
  return{
    posts,
    fetchPosts,
    page,
    loading,
    limit,
    totalFound
  }
})

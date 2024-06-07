<script lang="ts" setup>

const config = useRuntimeConfig()
const router = useRouter()

const apiBase = config.public.apiBase

const form = ref({})
const errors = ref({})

const handleSubmit =async ()=>{
  errors.value = {}

  if(!form.value.title){
    errors.value.title = 'Require field'
  }
  if(!form.value.description){
    errors.value.description = 'Require field'
  }
  if(!form.value.author){
    errors.value.author = 'Require field'
  }

  if(Object.entries(errors.value).length > 0){
    return false
  }
  const currentDate = new Date().toISOString().slice(0,10)

  console.log(apiBase);

  await $fetch('http://localhost:3001/posts',{
    baseUrl:"",
    method:'POST',
    body:{...form.value,created_at:currentDate.toString()},
    onResponse:({request,response,options})=>{
      if(response.ok){
        alert('Post created')
        router.push('/')
      }
    },
    onResponseError:({request,response,options})=>{
      if(!response.ok){
        console.error(response.statusText,response.status);
        alert(response.status + ' ' + response.statusText)
      }
    }
  })
}
</script>
<template>
  <form method="post" @submit.prevent="handleSubmit" >
    <div class="input-group">
      <label for="">Title</label>
      <div class="flex flex-col input-col">
        <input type="text" name="title" v-model="form.title">
        <span class="error-hint" v-if="errors && errors.title">{{ errors.title }}</span>
      </div>
    </div>
    <div class="input-group">
      <label for="">Description</label>
      <div class="flex flex-col input-col">
        <textarea name="description" rows="3" v-model="form.description"></textarea>
        <span class="error-hint" v-if="errors && errors.description">{{ errors.description }}</span>
      </div>
    </div>
     <div class="input-group">
      <label for="">Author</label>
      <div class="flex flex-col input-col">
         <input type="text" name="author" v-model="form.author">
         <span class="error-hint" v-if="errors && errors.author">{{ errors.author }}</span>
      </div>
    </div>
    <div class="text-center">
      <button type="submit" >Save</button>
    </div>
  </form>
</template>
<style scoped>
form{
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.input-group{
  display: flex;
  justify-content: space-between;
  gap: 10px;
}
input,textarea{
  padding: 5px;
   border: 1px solid gray;
}
.input-col{
  width: 50%;

}
button{
  width: max-content;
  background: red;
  padding: 5px 10px;
  border-radius:5px;
}
.error-hint{
  color: red;
}
</style>

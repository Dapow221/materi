<template>
    <div class="container w-75">
      <div class="row d-flex mt-4 p-2 border rounded">
        <div class="col bg-dark rounded text-white">
          <form>
            <h1>Add Grocery</h1>
            <div class="mb-3">
              <label class="form-label">Title</label>
              <input type="text" class="form-control"/>
            </div>
            <div class="mb-3">
              <label for="tag" class="form-label">Price</label>
              <input type="number" class="form-control"/>
            </div>
            <div class="mb-3">
              <label for="tag" class="form-label">Tag</label>
              <input type="text" class="form-control"/>
            </div>
            <div class="mb-3">
              <label for="tag" class="form-label">ImageUrl</label>
              <input type="text" class="form-control"/>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
    
    export default {
      
    }
  </script>
  
  <style scoped>
  
  </style>
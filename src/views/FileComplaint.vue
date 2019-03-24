<template>
    <div class="FileComplaint">
       <div class="container mt-4">
           <div class="card mx-auto shadow p-4">
               <h2>File Complaint</h2>
               <form action="">
                   <label for="name">Name</label>
                   <input type="name" class="form-control" id="name">
                   <label for="email">Email</label>
                   <input type="email" class="form-control" id="email">
                   <label for="message">Message Body</label>
                   <textarea name="message" id="message" cols="30" rows="10" class="form-control"></textarea>
                   <button class="btn btn-primary btn-block mt-4">Submit Complaint</button>
               </form>
           </div>
       </div>
    </div>
</template>


<style>
.card {
    max-width: 400px;
    border: none;
}
</style>

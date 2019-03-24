<template>
    <div>
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
                aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <router-link to="/Home">Home</router-link>
                    </li>
                    <li>
                        <router-link to='/complaint'>File Complaint</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>


<style lang="css">
    li a {
        color: white;
        padding-left: 20px;
    }
</style>
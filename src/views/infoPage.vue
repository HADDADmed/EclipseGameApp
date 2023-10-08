<script setup>

</script>

<template>
    <!--create a form -->
    <div style="display: grid; place-items: center; margin-left: -300px;">
        <form class="form" @submit.prevent="submitForm">
            <div class="form-group">
                <div
                    style="color: white; cursor: pointer; margin: 30px 0px 0px 10px; font-size: 20px; font-weight: 900;     ">
                    Your Name :
                </div>
                <input type="text" v-model="name" class="form-control" id="name" placeholder="Enter your name"
                    style="width: 600px;">
            </div>
            <div class="d-flex justify-content-around">
                <div class="form-group">
                <div
                    style="color: white; cursor: pointer; margin: 30px 0px 0px 0px; font-size: 20px; font-weight: 900;     ">
                    Your Age :
                </div>
                <input type="number" v-model="email" class="form-control" id="email"  min=1 max= 50 placeholder="Age">
            </div>
             
            </div>

            <div style="display: grid ; place-items: center;">
                <RouterLink   class="btn btn-light rounded rounded-pill m-5" style=" font-size: 20px; font-weight: 900;" :to="{ name: 'level1' }"
         >      Next    
         </RouterLink> 

                </div>
        </form>
    </div>
</template>

 
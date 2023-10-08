<script setup>

</script>

<template>
  <div id="star">
    <div id="planet">
    </div>
  </div>


  <div style=" margin: 250px 0px 0px -100px;">

    <div class="" style="color: white; margin: 100px 0px 30px -130px; font-size: 38px;">
      Wanna live the adventure ?
    </div>

    <!-- create a router Link -->
    <RouterLink style="margin-left: 50px; font-size: 30px; font-weight: 900;" :to="{ name: 'info' }"
      class="btn btn-light rounded rounded-pill">Start</RouterLink> <br> <br>
 <RouterLink style="color: white; cursor: pointer; margin:100px 0px 0px 50px; font-size: 20px; font-weight: 900; text-decoration:none;" :to="{ name: 'about' }"
     >      about us !
</RouterLink> 
  
  </div>
</template>


<style>
#star {
  position: absolute;
  left: 50%;
  top: 40%;
  width: 250px;
  height: 250px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: #DBE6E0;
  box-shadow: 0 0 50px rgba(219, 230, 224, 1);
}

#planet {
  position: absolute;
  left: 10px;
  top: 1px;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: #010101;
  box-shadow: inset 0 0 50px rgba(150, 150, 150, 0.2);
  animation: eclipse 10s infinite linear;
  transform-origin: 50% 390%;
  transform: rotate(-60deg);
}

@keyframes eclipse {
  0% {
    transform: rotate(-60deg);
  }

  90% {
    transform: rotate(30deg);
  }

  100% {
    transform: rotate(300deg);
  }
}

body {
  background-color: #000;
}


@keyframes zoom {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(1.5);
  }
}
</style>
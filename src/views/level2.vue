<script >
export default {
    data() {
        return {
            text: `Solar eclipses occur when the Sun, the Moon, and Earth line up, either fully or partially. Depending on how they align, eclipses provide a unique, exciting view of either the Sun or the Moon.
A solar eclipse happens when the Moon passes between the Sun and Earth, casting a shadow on Earth that either fully or partially blocks the Sun’s light in some areas. This only happens occasionally, because the Moon doesn't orbit in the exact same plane as the Sun and Earth do. The time when they are aligned is known as eclipse season, which happens twice a year.`,

        }
    },
}

</script>



<template>
    <div id="app">
        <div class="moon"></div>
        <div class="text">
            <h1>Eclipse types</h1>
        </div>

    </div>
   
</template>

    ```````111111111    `1
<style>
#app {
    
    color: white;
    font: italic small-caps bold 25px/1.4 cursive;
    /* the gap between words */
    word-spacing: 0px;
    /* the gap between letters */

    letter-spacing: 1px;
    text-align: center;
}

.text {
    position: absolute;
    width: 700px;
    margin: 120px 0px 0px 50px;
}

.text {
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
}

.word {
    display: inline-flex;
}

.letter {
    margin-right: 4px;
    animation: jumpColor 1s ease-in-out infinite;
    /* Added animation property */
}

@keyframes jumpColor {
    0% {
        transform: translateY(0) scale(1);
        /* Initial state */
        color: inherit;
        /* Initial color */
    }

    50% {
        transform: translateY(-10px) scale(1.2);
        /* Midway jump and scale */
        color: red;
        /* Midway color change */
    }

    100% {
        transform: translateY(0) scale(1);
        /* Back to initial state */
        color: inherit;
        /* Back to initial color */
    }
}

.img {
    margin: 100px 0px 0px 100px;
}


html {
    --zoom: 120;
    /* declaring variable here */
    --black: #000;
    --white: #fff;
    --red: #d34747;
    --green: #1c6f1c;
    --blue: #2a2aaa;
    --yellow: yellow;
    --grey: grey;
    --violet: violet;
    --purple: purple;
    --pink: pink;
    --bg: #202020;
  }
  :root {
    --unit: 1vmin;
    --available-screen-min: 665;
    --px: calc(var(--zoom) * (var(--unit) / var(--available-screen-min)));
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
     font-size: 16px;
  }
  *::after,
  *::before {
    content: "";
    display: block;
    position: relative;
  }
  head::before,
  head::after,
  body::before,
  body::after,
  html::before,
  html::after {
    content: "";
    position: absolute;
    background-repeat: no-repeat;
  
    /* to make the animation smoother in chrome */
    filter: blur(0);
  }
  body {
    all: unset;
    background-color: var(--bg);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  
    --space-animation-time: 40s;
    --moon-animation-time: 20s;
  }
  
 
  .moon {
    background-color: var(--grey);
    height: calc(200 * var(--px));
    width: calc(200 * var(--px));
    border-radius: 50%;
    box-shadow: 0px 0px calc(70 * var(--px)) calc(5 * var(--px)) #fff;
    background-image: url("https://svs.gsfc.nasa.gov/vis/a000000/a004700/a004720/lroc_color_poles_1k.jpg");
    background-size: calc(430 * var(--px));
    background-position: left;
    background-repeat: no-repeat;
    animation: animation var(--moon-animation-time) linear infinite;
    margin-left: 400px;
  }
  
  @keyframes animation {
    to {
      background-position: right;
    }
  }
</style>
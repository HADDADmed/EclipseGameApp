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

        <div class="text">
            <p v-for="word in text.split(' ')" class="word">
                <span v-for="letter in word.split('')" class="letter">{{ letter }}</span>
                <span>&nbsp;</span>
            </p>
        </div>

    </div>
    <div class="img">
        <div style="margin-top: 50px; ">
            <RouterLink   class="btn btn-light rounded rounded-pill m-5" style=" font-size: 25px; font-weight: 900; width: 200px;" :to="{ name: 'level2' }"
         >      Next    
         </RouterLink> 
           

        </div>
    </div>
</template>


<style>
#app {
    display: flex;
    justify-content: space-between;
    color: white;
    font: italic small-caps bold 25px/1.4 cursive;
    /* the gap between words */
    word-spacing: 0px;
    /* the gap between letters */

    letter-spacing: 1px;
    text-align: center;
}

.text {
    width: 700px;
    margin: 0px 0px 0px -200px;
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
}</style>
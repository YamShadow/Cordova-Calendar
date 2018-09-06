<template>
    <Calendar/>

    <main>



  <section id="app">
    <!-- <HelloWorld/> -->
        <div id="full" class="app-container">
            <div id="slider">
                <div class="slide">

                    <div class="left">
                        <div class="top">
                            <p class="hour">11:00</p>

                        </div>
                        <div class="bottom">
                            <p class="hour">14:00</p>

                        </div>
                    </div>

                    <div class="right">
                        <p>Cours de Management Agile</p>
                        <p>Richard Coffre</p>
                    </div>

                </div>

                <div class="slide">

                    <div class="left">
                        <div class="top">
                            <p class="hour">14:30</p>

                        </div>
                        <div class="bottom">
                            <p class="hour">16:00</p>

                        </div>
                    </div>

                    <div class="right">
                        <p>Cours de CORDOVA</p>
                        <p>Anthony Baillard</p>
                    </div>

                </div>

                <div class="slide">

                    <div class="left">
                        <div class="top">
                            <p class="hour">16:30</p>

                        </div>
                        <div class="bottom">
                            <p class="hour">19:00</p>

                        </div>
                    </div>

                    <div class="right">
                        <p>Cours de IoT</p>
                        <p>Mystère</p>
                    </div>
                </div>

            </div>

            <div id="nav">
                <div class="item active"></div>
                <div class="item"></div>
                <div class="item"></div>
            </div>
        </div>

        <div id="empty" class="app-container hidden">
            <img src="./assets/empty.png" alt="empty">
            <p>Rien à faire aujourd'hui :-)</p>
        </div>

    </section>

    </main>
</template>


<script>
  import HelloWorld from './components/HelloWorld'
  import NotificationService from './js/services/notification.service'
  import Calendar from './components/Calendar'
  // import * as script from './js/script.js';

  // script();
  console.log(NotificationService);
  export default {
    name: 'App',
    components: {
      HelloWorld,
      Calendar
    }
  }
</script>


<style lang="scss">
  @import './scss/style';

    $blue: #3C57FE;
    $grey: #b7b5b5;
    $orange: #FFB828;
    $sizeSlide: 25vw;

    #app #full {
        background-color: #F6F6FE;

        #slider {
            position: absolute;
            top: 40%;
            left: 50%;
            transform: translate(-50%, -50%);
            height: calc(100% - (30px * 3));

            overflow: hidden;

            // pour utiliser des varaibles dans une calcul
            width: calc((#{$sizeSlide} + 40px) * 4);
            max-width: calc((480px + 40px) * 4);

            font-size: 0;


            .slide {
                font-size: initial;
                max-width: 480px;
                width: calc(#{$sizeSlide} - 40px);
                height: 100%;
                background-color: yellow;
                display: inline-block;
                vertical-align: middle;
                font-size: 0;
                line-height: 125px;
                background-color: $blue;
                border-radius: 10px;
                margin: 0 20px;


                .left {
                    display: inline-block;
                    font-size: initial;
                    width: 80px;
                    vertical-align: middle;
                    position: relative;
                    z-index: 0;

                    &:after {
                        content: "";
                        position: absolute;
                        left: auto;
                        right: 5px;
                        top: 5px;
                        bottom: 5px;
                        width: 1px;
                        z-index: 0;
                        background-color: $grey;
                    }

                    .hour {
                        width: 100%;
                        color: #fff;
                        position: relative;
                        display: inline-block;
                        margin: 0;
                        z-index: 1;

                        &::after {
                            position: absolute;
                            right: 0;
                            left: auto;
                            top: 50%;
                            transform: translateY(-50%);
                            background-color: $orange;
                            content: '';
                            width: 10px;
                            height: 10px;
                            border-radius: 100%;
                            z-index: 2;
                        }
                    }

                    .top {
                        margin-bottom: 20px;
                    }
                }

                .right {
                    display: inline-block;
                    font-size: initial;
                    width: calc(100% - 80px);
                    vertical-align: middle;
                    color: #fff;

                    p {
                            margin: 0;
                    }
                }

            }
        }

        #nav {
            text-align: center;
            font-size: 0;

            position: absolute;
            bottom: 20px;
            top: auto;

            width: 100%;

            .item {
                height: 10px;
                width: 10px;
                border-radius: 10px;
                margin-left: 20px;
                display: inline-block;
                border: 1px solid $grey;

                &:first-child {
                    margin-left: 0;
                }

                &.active {
                    width: 30px;
                    background-color: $blue;
                    border-width: 0;
                }
            }
        }
    }




    #app {
        width: 100%;
        height: 40vh;
        // à enlever une fois le code des Tom et Vio
        margin-top: 60vh;
        overflow: hidden;
        position: relative;
    }

    #app .app-container {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
    }

    #app .app-container.hidden {
        display: none;
    }


    #app #empty img {
        width: 100%;
        height: 100%;
        // positionner l'image en cover + centrer (=background)
        object-fit: cover;
        object-position: center;
    }

    #app #empty p {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        color: #fff;
    }

</style>

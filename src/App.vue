<template>
  <div id="app">




    <full-page id="fullpage" ref="fullpage">
        <div class="section" id="stuff">





    <div class="phone-viewport" align="center">
      <md-bottom-bar md-type="fixed" :md-theme="'bottom-bar-' + theme" md-sync-route>
        <md-bottom-bar-item md-label="Home" md-icon="home" @click="theme = 'teal'" to="/page3"></md-bottom-bar-item>
        <md-bottom-bar-item md-label="Pages" md-icon="pages" @click="theme = 'orange'"></md-bottom-bar-item>
        <md-bottom-bar-item md-label="Posts" md-icon="/assets/icon-whatshot.svg" @click="theme = 'blue'"></md-bottom-bar-item>
        <md-bottom-bar-item to="/page3"md-label="Favorites" md-icon="favorite" @click="theme = 'red'"></md-bottom-bar-item>
      </md-bottom-bar>
    </div>












<md-speed-dial id="menu" class="md-top-left" md-direction="bottom">
      <md-speed-dial-target class="md-primary">
        <md-icon>menu</md-icon>
      </md-speed-dial-target>

      <md-speed-dial-content>

        <md-button class="md-icon-button">
          <md-icon>directions</md-icon>
          <md-tooltip md-direction="right">Directions</md-tooltip>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>streetview</md-icon>
        </md-button>
      </md-speed-dial-content>
    </md-speed-dial>





<div class="content">
<div class="content2">
<img src="./assets/HyperLoopGradient.png" style="width:666px;height:auto;">
</div>
  <svg class="rl-logo" width="606" height="300" viewBox="0 0 606 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <defs>
          <clipPath id="clipLogo">
            <path d="M 319.1 207 C 328.2 194.9 337.2 183.2 346.2 172 C 372 201.2 397.3 235.6 435.5 250 C 476.4 262.5 524.9 244.1 543.9 205 C 565.6 159.1 560 94 515.8 63.1 C 480.9 39.3 429.8 42.4 398.4 71.1 C 358.3 105.2 331.5 151.5 298.1 192 C 265.7 233.8 228.8 278.1 175.6 293.9 C 122.6 307.2 61.9 287.7 30.1 242 C -17.9 176.4 -3.4 71.7 66.2 26.1 C 105.7 -0.5 160.1 -6.8 201.7 18.1 C 235.4 36.5 261.3 65.2 286 93.1 C 277 105.4 268 117.5 258.9 129.1 C 231.7 98.2 204.7 60.7 162.6 50.1 C 118.3 38.2 70.4 66.2 56.2 109.1 C 41.9 154.2 50.9 212.7 94.3 240 C 134.6 265.8 191.4 253 221.8 217 C 255.7 182.1 280.6 139.4 312.1 102.1 C 342.8 63.9 377.7 24.2 426.5 8.1 C 488.2 -12.6 560.5 21.4 588.1 79.1 C 621.4 145.6 601.4 236 536.9 275.9 C 504.7 295.9 463.1 304.6 426.5 291.9 C 381.7 277.5 348.9 241.2 319.1 207 L 319.1 207 Z" />
          </clipPath>
      </defs>
      <path class="rl-logo__path" d="M 319.1 207 C 328.2 194.9 337.2 183.2 346.2 172 C 372 201.2 397.3 235.6 435.5 250 C 476.4 262.5 524.9 244.1 543.9 205 C 565.6 159.1 560 94 515.8 63.1 C 480.9 39.3 429.8 42.4 398.4 71.1 C 358.3 105.2 331.5 151.5 298.1 192 C 265.7 233.8 228.8 278.1 175.6 293.9 C 122.6 307.2 61.9 287.7 30.1 242 C -17.9 176.4 -3.4 71.7 66.2 26.1 C 105.7 -0.5 160.1 -6.8 201.7 18.1 C 235.4 36.5 261.3 65.2 286 93.1 C 277 105.4 268 117.5 258.9 129.1 C 231.7 98.2 204.7 60.7 162.6 50.1 C 118.3 38.2 70.4 66.2 56.2 109.1 C 41.9 154.2 50.9 212.7 94.3 240 C 134.6 265.8 191.4 253 221.8 217 C 255.7 182.1 280.6 139.4 312.1 102.1 C 342.8 63.9 377.7 24.2 426.5 8.1 C 488.2 -12.6 560.5 21.4 588.1 79.1 C 621.4 145.6 601.4 236 536.9 275.9 C 504.7 295.9 463.1 304.6 426.5 291.9 C 381.7 277.5 348.9 241.2 319.1 207 L 319.1 207 Z"></path>
      <path class="rl-logo__track"  clip-path="url(#clipLogo)" d="M 323.9 178.9 C 344.8 202.5 383.7 245.8 412.2 261.3 C 447.3 282.3 494.3 278 527.7 255.5 C 586.6 217 597.8 127.5 557.2 72.1 C 530.3 33.4 479 17 434.2 28.2 C 389.3 41.5 358.1 79 330.7 114.3 C 318.9 128.6 277.3 185.4 277.3 185.4 C 249.9 220.7 218.7 258.1 173.8 271.5 C 129 282.7 77.7 266.3 50.8 227.6 C 10.2 172.2 21.4 82.7 80.3 44.2 C 113.7 21.6 160.7 17.4 195.8 38.4 C 224.3 53.9 261.2 96.2 282.1 119.7"></path>
  </svg>
</div>









        </div>

        <div class="section" id="stuff2">
            <h3>Section 2</h3>
        </div>       
        <div class="section" id="stuff3">
            <h3>Section 3</h3>
        </div>
        </full-page>
  </div>

</template>


<script>
// Code to export this template as a component.
export default {
  name: 'App'
}
</script>


<style>


.content {
  position: absolute;
  top: 20rem;
  left: 50%;
  width: 606px;
  height: 300px;
  margin-top: -150px;
  margin-left: -303px;
  -webkit-transform: scale(0.6);
          transform: scale(0.6);
}

.content2 {
  -webkit-transform: scale(2);
          transform: scale(2);
  margin-left: 30px
}


.rl-logo {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.rl-logo__track {
  fill: none;
  stroke: #1dbbff;
  stroke-width: 60px;
  stroke-dasharray: 1530;
  stroke-dashoffset: 0;
  -webkit-animation-name: dash;
          animation-name: dash;
  -webkit-animation-duration: 2500ms;
          animation-duration: 2500ms;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
  -webkit-animation-direction: forwards;
          animation-direction: forwards;
  -webkit-animation-timing-function: cubic-bezier(0.205, 0, 0.815, 0.99);
          animation-timing-function: cubic-bezier(0.205, 0, 0.815, 0.99);
}

.rl-logo__path {
  fill: #f5f5f5;
  stroke-width: 2;
  stroke: #1dbbff;
}

@-webkit-keyframes dash {
  0% {
    stroke-dashoffset: 0;
  }
  75% {
    stroke-dashoffset: 3060;
  }
  100% {
    stroke-dashoffset: 3060;
  }
}

@keyframes dash {
  0% {
    stroke-dashoffset: 0;
  }
  75% {
    stroke-dashoffset: 3060;
  }
  100% {
    stroke-dashoffset: 3060;
  }
}
</style>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
#menu{
    position: fixed;
    top: 20px;
    left: 20px;
    color: #fff;
    font-weight: bold;
    z-index: 99;
    font-size: 1.9em;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
}
</style>





<style lang="scss" scoped>
  .phone-viewport {
    width: 100%;
    display: inline-flex;
    overflow: hidden;
    border: 1px solid rgba(#000, .26);
    background: rgba(#000, .06);
  }
</style>




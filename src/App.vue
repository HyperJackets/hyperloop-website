<template>
  <div id="app">
<!--<link rel="stylesheet" type="text/css" href="https://unpkg.com/fullpage.js/dist/fullpage.min.css">-->

    <full-page id="fullpage" ref="fullpage">
        <div class="section" >
              <md-speed-dial id="menu" class="md-top-left" md-direction="bottom">
      <md-speed-dial-target class="md-primary">
        <md-icon>my_location</md-icon>
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
        </div>
        <div class="section">

            Stuff
            <md-icon class="v-scroll-reveal">thumb_up</md-icon>
        </div>
        <div class="section">
            <h3>Section 3</h3>
        </div>
        <div class="section">
        Hello there! General Kenobi
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

#fullpage .reveal {
	transform: translateY(100px);
	opacity: 0;
	transition: opacity 1s, transform 1s;
}

#fullpage .active .reveal {
	transform: translateX(0);
	opacity: 1;
}
</style>
<template>
  <div id="app">



    <full-page id="fullpage" ref="fullpage">
        <div class="section">

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

        <md-button class="md-plain">
        Hello there
        </md-button>
      </md-speed-dial-content>
    </md-speed-dial>


        </div>



        <div class="section">





        </div>       
        <div class="section">
            <h3>Section 3</h3>
        </div>
        </full-page>
  </div>

</template>


<script>

import Logo from './components/Logo.vue'



// Code to export this template as a component.
export default {
  name: 'App',
  	components: {
		Logo
	}
}
</script>



<style>
.mouse{height:50px;width:35px;border-radius:14px;border:2px solid #fff}.mouse:after{content:'';display:block;height:8px;width:2px;margin:10px auto;background:#fff;position:relative;-webkit-animation:a 1.2s ease infinite;animation:a 1.2s ease infinite}.arrow-scroll{width:35px;margin-top:10px}.arrow-scroll>span{font-family:Arial,sans-serif;display:block;width:9px;height:9px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-right:2px solid #fff;border-bottom:2px solid #fff;margin:5px auto 3px;-webkit-animation:b 1s infinite;animation:b 1s infinite;-webkit-animation-delay:.2s;animation-delay:.2s}.arrow-scroll>span:first-child{-webkit-animation-delay:.1s;animation-delay:.1s}.arrow-scroll>span:last-child{-webkit-animation-delay:.3s;animation-delay:.3s}@-webkit-keyframes a{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}to{opacity:0;-webkit-transform:translateY(8px);transform:translateY(8px)}}@keyframes a{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}to{opacity:0;-webkit-transform:translateY(8px);transform:translateY(8px)}}@-webkit-keyframes b{0%{opacity:0}50%{opacity:.5}to{opacity:1}}@keyframes b{0%{opacity:0}50%{opacity:.5}to{opacity:1}}
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

<style>

.header__bg {
  -webkit-order: 3;
  position: absolute;
  top: 100vh;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(#1e2733,#8E2DE2);
  transform: skewY(-10deg);
  transform-origin: top left;
}





</style>
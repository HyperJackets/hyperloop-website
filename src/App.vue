<template>
  <div id="app">
<link rel="stylesheet" type="text/css" href="https://unpkg.com/fullpage.js/dist/fullpage.min.css">
    <full-page :options="options" id="fullpage" ref="fullpage" sectionsColor="#41b883">
        <div class="section" >
        <div class="fp-bg"></div>
            <h1><span>vue-fullpage.js</span></h1>
        </div>
        <div class="section">
            <div class="slide">
            <div class="fp-bg"></div>
                <h3>Slide 2.1</h3>
            </div>
            <div class="slide">
            <div class="fp-bg"></div>
                <h3>Slide 2.2</h3>
            </div>
            <div class="slide">
            <div class="fp-bg"></div>
                <h3>Slide 2.3</h3>
            </div>
        </div>
        <div class="section">
        <div class="fp-bg"></div>
            <h3>Section 3</h3>
        </div>
        </full-page>
  </div>
</template>

<script>
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
  margin-top: 60px;
}
</style>

<style>

#section1 .fp-bg{
    background-image: url('assets/logo.png');
    background-size: cover;
    background-position: center 80%;
}

/* Custom
 * --------------------------------------- */
body {
    font-family: arial, helvetica;
}
.section{
}
#logo{
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
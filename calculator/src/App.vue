<template>
  <div >
      <hearder id="banner"><h1><img src="./logo.png"></h1>
      <h1>Ensino Fundamental 1 e 2 </h1>
      </hearder>
      <div id="app">
      <h1>Calculadora</h1>
      <Calculadora />
      </div>
      </div>
</template>

<script>
import Calculadora from "./main/MainCalculator"

export default {
    components: { Calculadora }
}
</script>

<style>

body{
    margin: 0;
    background: linear-gradient(to right, rgb(83,105,118), rgb(41,46,73))
}

#app{
    display: flex;
    flex-direction: column;
    height: 50%;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;

    
}
img{
    width:5%;
    display: flex;
    

}
#banner{
    width:100%;
    text-align: center;
    text-transform:uppercase;
    font-weight:bold;
    color: white;
    
}
</style>
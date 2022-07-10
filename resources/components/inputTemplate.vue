<template>
  <div>
    
        <label for="textInput">Vous noterez le curseur rouge :</label>
        <input id="textInput" class="custom" :class="type" size="32" placeholder="placeholder"  >
        <button @click="disableTxt"> desactiver</button>
            

  </div>
</template>

<script>
export default {
    props:  ['type','kader'] ,
  
    
     
        methods:{
        disableTxt() {
            document.getElementById("textInput").disabled = true;
            console.log("didi")
    } }
}
</script>

<style  scoped>
    input.custom {
  caret-color: rgb(46, 41, 41);
  font: 16px "Helvetica", "Arial", "sans-serif"
}
     input {
      border-style: solid;
      border: 0.5px solid;
      border-radius: 5px;
        padding: 12px 20px;
  margin: 8px 0;
    }
    input:focus {
  caret-color: rgb(43, 0, 233);
  border-color: blue;
  border: 3px solid rgb(3, 7, 255);

}
.disableddd {
  pointer-events: none;

}
</style>>



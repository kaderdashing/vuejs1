<template>
  <div>
        <div class="fethi">
        <label for="textInput">label</label>
        <br>
        <div class="form-input">
        <input id="textInput" class="custom" :class="[type,error]" size="32" placeholder="placeholder"  >
        <span class="icon"><i class="fa fa-envelope" aria-hidden="true"></i></span> </div>
        <small id="passwordHelpBlock" class="form-text text-muted" >{{explain}}</small>
        
        </div>
            

  </div>
</template>

<script>


export default {
    props:  [ 'type' ,'error', 'explain' ] ,

    methods:{
        disableTxt() {
            document.getElementById("textInput").disabled = true;
            console.log("didi")
                      } 
      },

}
</script>

<style  scoped>
.fethi {

  flex-direction: column;
}
    input.custom {
  caret-color: rgb(46, 41, 41);
  font: 16px "Helvetica", "Arial", "sans-serif"
}
     input {
      border-style: solid;
      border: 0.5px solid;
      border-radius: 5px;
      display: block;
      margin: 8px 0;
      padding: 5px 10px 5px 50px;
    }
    input:focus {
  caret-color: rgb(43, 0, 233);
  border-color: blue;
  border: 3px solid rgb(3, 7, 255);

}
.disableddd {
  pointer-events: none;

}
.error:focus {
  border-color: rgb(255, 0, 6);
  border: 3px solid rgb(255, 0, 0);
}
.form-input {
    margin: 10px auto;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.icon {
    position: absolute;
    left: 5px;
    top: 0;
    font-size: 25px;
    color: #4b00ff;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}


</style>>



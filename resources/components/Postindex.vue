<template> 
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

  <div class="container">
    <div class="total-btn">
      <div class="first">
          <ButtonTemplate color="red" background="yellow" mouseoverBackground="orange" mouseoverColor="#fff">1 </ButtonTemplate>
          <ButtonTemplate >1 </ButtonTemplate>
          </div>
          <div class="first">
          <ButtonTemplate borderWidth="10" @mouseover="true"  >2 </ButtonTemplate>
          <ButtonTemplate >2 </ButtonTemplate>
          </div>
          <div class="first">
          <ButtonTemplate color="yellow" padding="15px">3 </ButtonTemplate>
          <ButtonTemplate >3 </ButtonTemplate>
          </div>
          <div class="first">
          <ButtonTemplate mouseoverBackground="yellow" border-radius="8">4 </ButtonTemplate>
          <ButtonTemplate >4 </ButtonTemplate>

      </div>
    </div>
  </div>
  <div class="container">
     <inputTemplate ></inputTemplate>
    <inputTemplate type="disableddd" />
    <inputTemplate type="error" />
         <inputTemplate explain="cleck me" />

    




  </div>
</template>


<script>
console.log("1")

import ButtonTemplate from './ButtonTemplate.vue'
import inputTemplate from './inputTemplate.vue'
export default {
  name:'PostIndex' ,
  components:{
    ButtonTemplate ,
    inputTemplate ,
  }
}
console.log("1")
</script>
<style scoped>
.total-btn{
  flex-wrap: wrap;
}
.first {
  display: flex;
  margin-top: 30px;
  justify-content: space-around;
}
#passwordHelpBlock {
  font-size: x-small;
  display: block;
}

</style>
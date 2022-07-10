<template> 
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
    <inputTemplate type="disableddd" />
        <inputTemplate ></inputTemplate>

    




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


</style>
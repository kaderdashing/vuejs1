<template>
<div class="total-btn">
<div class="first">
<ButtonTemplate color="red" background="yellow" mouseoverBackground="orange" mouseoverColor="#fff">1 </ButtonTemplate>
<ButtonTemplate >1 </ButtonTemplate>
</div>
<div class="first">
<ButtonTemplate borderWidth="10" mouseoverBackground="red" >2 </ButtonTemplate>
<ButtonTemplate >2 </ButtonTemplate>
</div>
<div class="first">
<ButtonTemplate color="yellow">3 </ButtonTemplate>
<ButtonTemplate >3 </ButtonTemplate>
</div>
<div class="first">
<ButtonTemplate >4 </ButtonTemplate>
<ButtonTemplate >4 </ButtonTemplate>
<span>{{ color }}</span>

</div>
</div>

</template>


<script>
import ButtonTemplate from './ButtonTemplate.vue'
export default {
  name:'PostIndex' ,
  components:{
    ButtonTemplate
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
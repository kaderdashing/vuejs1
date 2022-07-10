
<template>
<button class="button-1" role="button" :style="{color,borderRadius,background,disabled,border,borderColor,mouseoverColor,mouseoverBackground,borderRadius}">
    <slot/> 
</button>


</template>

<script>
import { data } from 'browserslist';

export default {
            props : {
                    color:{  type: String , default:"orange" },
                    background:{ type: String  },
                    disabled:{  type: Boolean  },
                    border:{    type:[ Number,String ] },
                    borderColor:{    type: String  },
                    mouseoverColor:{type: String} ,
                    mouseoverBackground:{type: String ,default: "red"} ,
                    padding:{type:[String,Number]},
                    borderRadius:{type:String,default:"0px"},
                    margin:{type:[String,Number]},
                    corner:{type:[String,Number],default:"8"},

            },


    data()  {   return {  hover: false,  }  ;} ,

    computed : {

            styles() { 
                return {
                        borderWidth: this._border,
                        borderColor: this._borderColor,
                        borderRadius: this._corner,
                        background: this._background,
                        color:this._color,
                        padding:this._padding,
                        margin:this._margin,
                    } ;
            },
            _borderColor() {
                return this.borderColor ;
            },

            _border() {
                if(this.isNumeric(this.border)) {
                return this.border + "px" ;}
                return this.border ;
            },

            _background() {
                return this.isMaousOver ? this.mouseoverBackground : this.background ;
            } ,

            _color() {
                return this.isMaousOver ? this.mouseoverColor : this.background ;
            } ,

           _corner() {
             
                    return this.borderRadius + "px" ;
            },
            _padding() {
                if(this.isNumeric(this.padding)) {
                    return this.padding + "px" ;}
                    return this.padding ;
            },

             _margin() {
                if(this.isNumeric(this.margin)) {
                    return this.margin + "px" ;}
                    return this.margin ;
            },

         },    
         
         methods:{
            isNumeric(value) {
                return /^\d+$/.test(value) ;
            },

            onmouseover(){
                return this.isMaousOver = true ;
            } ,
            onmouseout() {
                return this.isMaousOver = false ;
            } ,
            


         }



};
</script>
<style scoped>
.button-1 {

background-color: #a5a1a3;
 
  border-style: none;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  line-height: 20px;
  list-style: none;
  margin: 0;
  outline: none;
  padding: 10px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}



</style>



  
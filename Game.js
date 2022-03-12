AFRAME.registerComponent('game-play', {
schmea:{
    elementId:{type:'string', default:'#ring1'}
},
isCollide:function(elementId){
    const element = document.querySelector(elementId)
    element.addEventListener('collide', e => {
        if (elementId.includes('#ring')) {
            console.log(elementId+'collision')
        } else if (elementId.includes('#hurdle')){
            console.log()
        }
    } )
},
update:function(){
this.isCollide(this.data.elementId)

}
})

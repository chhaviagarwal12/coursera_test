class Timer{
    constructor(durationInput,startButton,pauseButton,callbacks){
        this.durationInput=durationInput
        this.startButton=startButton
        this.pauseButton=pauseButton
        if(callbacks){
            this.onStart=callbacks.onStart;
            this.onTick=callbacks.onTick;
            this.onComplete=callbacks.onComplete;
        }
        
        this.startButton.addEventListener('click',this.start)
         //this here refers to button with start id
         this.pauseButton.addEventListener('click',this.pause )
    }

start=()=>{         //arrow function returns instance of the class
console.log(this,'start button clicked') 
if(this.onStart){
    this.onStart(this.timeRemaining)
}
this.tick()
this.interval=setInterval(this.tick,50) //in this case 'this' is pointing to timer class so we can use timer anywhere inside class

}

tick=()=>{
/*there are two approaches to write this code-
1.we create a timer instance and attach an event handler to our input for updating thw value.
2.we update input and then update time left in our class  
here we are going to use 2nd approach.it is an older approach
*/
//========================

if(this.timeRemaining<=0){
    this.pause()
    if(this.onComplete){
        this.onComplete()
    }
}
else{
    this.timeRemaining=this.timeRemaining-0.05
    if(this.onTick){
        this.onTick(this.timeRemaining)
    } //this is getter
}
}
//=======================================================
//getters in js
get timeRemaining(){
    return parseFloat(this.durationInput.value)
}
//setters in js
set timeRemaining(time){
    this.durationInput.value=time.toFixed(2) //round off decimal values to 2 decimals
}

pause=()=>{
clearInterval(this.interval)
}
}

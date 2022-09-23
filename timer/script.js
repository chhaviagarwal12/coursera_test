class CarA{
    constructor(wheel,body){
        this.wheel=wheel;
        this.body=body;
    }
    getWheels=()=>{
        console.log(wheels)
        console.log(body)
      }
      printThis=()=>{
        console.log(this) 
    }

}
const car_A=new CarA(4,"sports") 
// class CarB {
//    getWheels(){
//     console.log(wheels)
//     console.log(body)
//   }
// }
//   const car_A=new CarA(4,"sports") 
//   const car_C=new CarA(4,"sports") 
//   const car_B=car_A
//   car_B=car_C
//   car_B.wheel=5
//   car_B['price']=5000
 
console.log("hi there")
const printThis=()=>{
    console.log(this) //this will be the value of this which is valid line above the arrow function
}
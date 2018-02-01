/*class Hello{
    test():void{
        console.log("Hello World");
    }
}

var test1 = new Hello();
let Array1 : Array<string> = ["Priyesh","Karatha","Test"];
Array1.forEach(element => {
    console.log(element);
});
for(var i =0;i<3;i++){
    console.log(Array1[i]);
};
let name1:string ="Priyesh K";
let age:number = 25;
console.log(`${name1} and age ${age}`);
//test1.test();*/
enum Color{red=0,blue=1,black=2,green=3};
let c: Color = Color.blue;
console.log(String(c)+":");
c = 2;
console.log(c);
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
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["blue"] = 1] = "blue";
    Color[Color["black"] = 2] = "black";
    Color[Color["green"] = 3] = "green";
})(Color || (Color = {}));
;
var c = Color.blue;
console.log(String(c) + ":" + c);
c = 2;
console.log(c);

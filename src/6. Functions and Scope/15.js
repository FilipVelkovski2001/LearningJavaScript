// Global Scope

var myGlobal = 10; // Because the var keyword is used this variable is global

function fun1(){
    oopsGlobal = 5; // If we were to put the var word behind this variable it would become global to the function's() scope{}
                    // But because we did not put var it becomes global automatically everywhere in the program
}

function fun2(){
    var output = "";
    if(typeof myGlobal != "undefined"){
        output += "myGlobal: "+ myGlobal;
    }

    if(typeof oopsGlobal != "undefined"){
        output += "oopsGlobal: "+ oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();
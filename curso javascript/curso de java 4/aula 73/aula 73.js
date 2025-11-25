/* "FUNÇÃO DE CALLBACK" */

function rand (min = 1000, max = 3000) {
    const num= Math.random() * (max - min) + min;
   return Math.floor(num);
}




function f1 (CALLBACK) {
    setTimeout (function(){
console.log ('f1');
if (CALLBACK) CALLBACK();
    },rand());
};


function f2 (CALLBACK) {
    setTimeout (function(){
console.log ('f2');
if (CALLBACK) CALLBACK();
    },rand());
};


function f3 (CALLBACK) {
    setTimeout (function(){
console.log ('f3');
if (CALLBACK) CALLBACK();
    },rand());
};

f1(function(){
    f2(function(){
        f3(function(){
            console.log ('Executado');
        });
    });
});








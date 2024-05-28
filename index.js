// console.log("test")
// tempConeverter

var input1 = document.getElementById("input1")
var input2 = document.getElementById("input2")

input1.addEventListener("input", (event)=>{

    
    let val  = event.target.value

    function tempConverter(f){
        return (f - 32) * 5/9
    }
    
    
    var result = tempConverter(val)

    // input2.value = result
    var letters = /^["A-Za-z"]+$/;

    if (input1.value.match(letters) || input1.value === "" ){
        input2.value = ""
    }else{
        input2.value = result
    }
})

input2.addEventListener("input", (event)=>{

    
    let val  = event.target.value

    function celsiusConverter(c){
        return (9/5 * c) + 32
    }
    
    
    var result = celsiusConverter(val)

    // input2.value = result
    var letters = /^["A-Za-z"]+$/;

    if(input2.value.match(letters) || input2.value === ""){
        input1.value = ""
    }else{
        input1.value = result
    }
})



// var result2 = celsiusConverter(88)

// var celcius = document.getElementById("celcius")
// var fahrenheit = document.getElementById("fahrenheit")


// celcius.innerHTML += result
// fahrenheit.innerHTML += result2
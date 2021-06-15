document.getElementById("synchronous").addEventListener("click", function() {

    let number = document.getElementById("number-input").value;

    let ganjilArray = [];
    let genapArray = [];

    let ganjil
    let genap

    // Ganjil
    for (let i = 1; i <= number; i++){
        if(i % 2 != 0){
            ganjilArray.push(i)
            ganjil = ganjilArray.join(' ')
            document.getElementById("ganjil-show").innerHTML = ganjil
        }
    }

    // Genap
    for (let i = 1; i <= number; i++){
        if(i % 2 == 0){
            genapArray.push(i)
            genap = genapArray.join(' ')
            document.getElementById("genap-show").innerHTML = genap
        }
    }

    document.getElementById("number-input").value = ''
});

document.getElementById("asynchronous").addEventListener("click", function() {

    let number = document.getElementById("number-input").value;

    let ganjilArray = [];
    let genapArray = [];

    let ganjil
    let genap

    // Ganjil
    let i = 1
    setInterval(()=>{ 
        if(i <= number){
            if(i % 2 != 0){
                ganjilArray.push(i)
                ganjil = ganjilArray.join(' ')
                document.getElementById("ganjil-show").innerHTML = ganjil
            }
        }
        i++
    }, 500);

    // Genap
    let j = 1
    setInterval(()=>{ 
        if(j <= number){
            if(j % 2 == 0){
                genapArray.push(j)
                genap = genapArray.join(' ')
                document.getElementById("genap-show").innerHTML = genap
            }
        }
        j++
    }, 200);
   
    document.getElementById("number-input").value = ''
    
});
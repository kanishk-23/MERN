document.getElementById("form").addEventListener("submit",function(event){
    event.preventDefault();
    const height = document.querySelector("#height").value;
    const weight = document.querySelector("#weight").value;
    const BMI = weight/(height*height);
    console.log(height,weight,BMI);
    let result = "";
    if (BMI < 18.5)    result = "Underweight";
    else if (BMI < 24.9)    result = "Normal weight";
    else if (BMI < 29.9)    result = "Overweight";
    else    result = "Obese";
    document.getElementById("output").innerText = `Your BMI is ${BMI.toFixed(2)} (${result})`;
});


setInterval(function() {
    let Date_n_time = new Date();
    // console.log(Date_n_time);
    document.getElementById("clock").innerText = Date_n_time.toLocaleString();
},5000);
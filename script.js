


function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    y = document.getElementById("years").value;
    //alert(y)

    document.getElementById("result").innerHTML="newtext,<br><br>";
    // res = document.getElementById("result");
    // res.value = p;
    
}

// var mySlider = document.getElementById("rate");
// var sliderValue = document.getElementById("sliderValue");
// sliderValue.innerHTML = mySlider.value;

// mySlider.oninput = function() {
//         sliderValue.innerHTML = mySlider.value;
//         output.innerHTML = this.value;
// };

function updateRangeInput(val) {
    document.getElementById('sliderValue').value=val; 
  }
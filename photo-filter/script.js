
const inputs = document.querySelectorAll('.filters input');

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    console.log(this.name);
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
   
}

inputs.forEach(input => input.addEventListener('input', handleUpdate));
//inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));


/*
var slider = document.getElementById("blur");
var output = document.getElementById("res_blur");
output.innerHTML=slider.value;

slider.oninput = function(){
    output.innerHTML=this.value;
}
*/

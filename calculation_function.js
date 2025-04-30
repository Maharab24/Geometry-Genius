//triangle calculation
document.getElementById('triangle-calc').addEventListener('click',function(){
    const triangleBase = document.getElementById('triangle-base');
    const triangleHeight = document.getElementById('triangle-height');

    const base = parseFloat(triangleBase.value);
    const height = parseFloat(triangleHeight.value);

    // Input validation
    if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
        alert("Please enter valid positive numbers for base and height.");
        return;
    }

    const area = 0.5 * base * height;


     const calculationArea = document.getElementById('calcuation-area');

     const result =document.getElementById('result')
     result.innerText='Triangle area = ' + area;

    triangleBase.value = '';
    triangleHeight.value='';


})


//rectangle calculation

document.getElementById('rec-calc').addEventListener('click',function(){
    const rectangleWide = document.getElementById('rec-wide');
    const rectangleLength = document.getElementById('rec-length');

    const wide = parseFloat(rectangleWide.value);
    const length = parseFloat(rectangleLength.value);

    // Input validation
    if (isNaN(wide) || isNaN(length) || wide <= 0 || length <= 0) {
        alert("Please enter valid positive numbers for wide and length.");
        return;
    }

    const area = wide * length;


     const calculationArea = document.getElementById('calcuation-area');

     const result =document.getElementById('result')
     result.innerText='Rectangle area = ' + area;

    rectangleLength.value = '';
    rectangleWide.value='';


})



// rhombus calculation
document.getElementById('rhombus-calc').addEventListener('click', function () {
    const d1Input = document.getElementById('rhombus-d1');
    const d2Input = document.getElementById('rhombus-d2');

    const d1 = parseFloat(d1Input.value);
    const d2 = parseFloat(d2Input.value);

    
    if (isNaN(d1) || isNaN(d2) || d1 <= 0 || d2 <= 0) {
        alert("Please enter valid positive numbers for diagonals.");
        return;
    }

    const area = 0.5 * d1 * d2;

    const result = document.getElementById('result');
    result.innerText = 'Rhombus area = ' + area;


    d1Input.value = '';
    d2Input.value = '';
});


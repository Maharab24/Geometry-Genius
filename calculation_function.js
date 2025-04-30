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


// pentagon calculation
document.getElementById('pentagon-calc').addEventListener('click', function () {
    const sideInput = document.getElementById('pentagon-side');
    const apothemInput = document.getElementById('pentagon-apothem');

    const a = parseFloat(sideInput.value);
    const h = parseFloat(apothemInput.value);

    // Input validation
    if (isNaN(a) || isNaN(h) || a <= 0 || h <= 0) {
        alert("Please enter valid positive numbers for side and apothem.");
        return;
    }

    const area = (5 / 2) * a * h;

    const result = document.getElementById('result');
    result.innerText = 'Pentagon area = ' + area;

    // Clear inputs
    sideInput.value = '';
    apothemInput.value = '';
});



// ellipse calculation
document.getElementById('ellipse-calc').addEventListener('click', function () {
    const aInput = document.getElementById('ellipse-a');
    const bInput = document.getElementById('ellipse-b');

    const a = parseFloat(aInput.value);
    const b = parseFloat(bInput.value);

    // Input validation
    if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
        alert("Please enter valid positive numbers for both axes.");
        return;
    }

    const area = Math.PI * a * b;
    const roundedArea = area.toFixed(2);

    const result = document.getElementById('result');
    result.innerText = 'Ellipse area = ' + roundedArea;


    aInput.value = '';
    bInput.value = '';
});


// parallelogram calculation
document.getElementById('parallelogram-calc').addEventListener('click', function () {
    const baseInput = document.getElementById('parallelogram-base');
    const heightInput = document.getElementById('parallelogram-height');

    const base = parseFloat(baseInput.value);
    const height = parseFloat(heightInput.value);

    // Input validation
    if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
        alert("Please enter valid positive numbers for base and height.");
        return;
    }

    const area = base * height;

    const result = document.getElementById('result');
    result.innerText = 'Parallelogram area = ' + area;

    // Clear inputs
    baseInput.value = '';
    heightInput.value = '';
});

//triangle calculation
document.getElementById('triangle-calc').addEventListener('click',function(){
    const triangleBase = document.getElementById('triangle-base').value;
    const triangleHeight = document.getElementById('triangle-height').value;

    const base = parseFloat(triangleBase);
    const height = parseFloat(triangleHeight);

    // Input validation
    if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
        alert("Please enter valid positive numbers for base and height.");
        return;
    }

    const area = 0.5 * base * height;




    //  const result = document.createElement('p');
    //  result.innerText=area;

     const calculationArea = document.getElementById('calcuation-area');

     const result =document.getElementById('result')
     result.innerText='Triangle area = ' + area;








})

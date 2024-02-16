function calculateTriangleArea(){
    // get base from ui
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);

    // get height from ui
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
    

    // calculate area
    const area = 0.5 * base * height;
    console.log(area);
    // display area
    const triangleAreaSpan = document.getElementById('display-span');
    triangleAreaSpan.innerText = area;
}
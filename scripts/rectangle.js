function calculateRectangleArea(){
    // get width from ui
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthText);

    // get height from ui
    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthText);
    

    //calculate area
    const area = width * length;
    // console.log(area);
    // display area
    const rectangleAreaSpan = document.getElementById('display-rectangle');
    rectangleAreaSpan.innerText = area;
}
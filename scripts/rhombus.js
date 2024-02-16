function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    return parseFloat(inputValueText);
}
function setInnerTextById(elementId, area){
    const display = document.getElementById(elementId);
    display.innerText = area;
}
function calculateRhombusArea(){
    const diagonal1 = getInputValueById('rhombus-d1');
    const diagonal2 = getInputValueById('rhombus-d2');

    const area = 0.5 * diagonal1 * diagonal2;
    setInnerTextById('display-rhombus', area);
}
function calculatePentagonArea(){
    const perimeter = getInputValueById('pentagon-perimeter');
    const apothem = getInputValueById('pentagon-apothem');

    const area = 0.5 * perimeter * apothem;
    setInnerTextById('display-pentagon', area);
}
function calculateEllipseArea(){
    const major = getInputValueById('ellipse-major');
    const minor = getInputValueById('ellipse-major');

    const area = 3.14 * major * minor;
    setInnerTextById('display-ellipse', area);
}
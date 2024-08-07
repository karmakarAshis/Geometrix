function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    return parseFloat(inputValueText);
}
function setInnerTextById(elementId, area){
    const display = document.getElementById(elementId);
    display.innerText = area;
}

function calculateParallelogramArea() {
    const base = getInputValueById('parallelogram-base');
    const height = getInputValueById('parallelogram-height');

    const area = base * height;
    setInnerTextById('display-parallelogram', area)
}

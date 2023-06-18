let finalCode = document.querySelector("#css-code");
let sliders = document.querySelectorAll("input[type='range']");
// let sliders = document.querySelectorAll(".slider");

sliders.forEach(function (slider) {
    slider.addEventListener("input", genBlob);
});

let input = document.querySelectorAll("input[type='number']");
input.forEach(function(inp) {
    inp.addEventListener("change", genBlob);
});

function genBlob() {
    let rOne = sliders[0].value;
    let rTwo = sliders[1].value;
    let rThree = sliders[2].value;
    let rFour = sliders[3].value;

    let bHeight = input[0].value;
    let bWidth = input[1].value;

    let borderRadius = `${rOne}% ${100 - rOne}% ${100 - rThree}% ${rThree}% / ${rFour}% ${rTwo}% ${100 - rTwo}% ${100 - rFour}%`
    document.getElementById("blob").style.cssText = `border-radius: ${borderRadius}; height: ${bHeight}px; width: ${bWidth}px;`

    finalCode.value = `border-radius: ${borderRadius};`
}

document.getElementById("copy").addEventListener("click", function () {
    finalCode.select();
    document.execCommand('copy');
    alert("code copied!");
})
genBlob();
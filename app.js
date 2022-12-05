const inputHexadecimalColor = document.querySelector('#colorHexadecimal')
const inputColorR = document.querySelector('#colorR')
const inputColorG = document.querySelector('#colorG')
const inputColorB = document.querySelector('#colorB')
const inputsColorRGB = document.querySelectorAll('.inputRGB');
const body = document.querySelector('body')

const initialColor = '#5DADE2'
const [initialR, initialG, initialB] = hexToRGB(initialColor)
const hexadecimalInitial = initialColor

body.style.backgroundColor = initialColor
inputColorR.value = initialR
inputColorG.value = initialG
inputColorB.value = initialB
inputHexadecimalColor.value = hexadecimalInitial

inputsColorRGB.forEach((input) => {
  input.addEventListener('input', (e) => {
    body.style.backgroundColor = `rgb(${inputColorR.value}, ${inputColorG.value}, ${inputColorB.value})`

    inputHexadecimalColor.value = RGBToHex(inputColorR.value, inputColorG.value, inputColorB.value)
  })
})

inputHexadecimalColor.addEventListener('input', (e) => {

  const {value} = e.target

  body.style.backgroundColor = value

  const [R, G, B] = hexToRGB(value)

  inputColorR.value = R
  inputColorG.value = G
  inputColorB.value = B
})

// Functions
function hexToRGB(HexColor) {
  const redRGB = parseInt( HexColor[1] + HexColor[2], 16)
  const greenRGB = parseInt(HexColor[3] + HexColor[4], 16)
  const blueRGB = parseInt(HexColor[5] + HexColor[6], 16)

  return [redRGB, greenRGB, blueRGB]
}

function componentToHex(c) {
  const number = parseInt(c)
  var hex = number.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function RGBToHex(r, g, b) {
  return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`.toUpperCase()
}
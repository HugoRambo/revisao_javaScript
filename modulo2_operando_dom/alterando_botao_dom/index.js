function useLightTheme(){
  document.body.style.color = '#212529'
  document.body.style.backgroundColor = 'f1f5f9'
}

function userDarkTheme(){
  document.body.style.color = '#f1f5f9'
  document.body.style.backgroundColor = '#212529'
}

document.getElementByid('lightBtn').addEventListener('click', useLightTheme)
document.getElementByid('darkBtn').addEventListener('click', userDarkTheme)
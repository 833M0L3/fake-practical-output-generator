const user = document.getElementById('user');
const file = document.getElementById('file');
const output = document.getElementById('outputs');

function sendData(){
    let username = document.getElementById('username').value
    let filename = document.getElementById('filename').value
    let textfield = document.getElementById('textfield').value
    user.innerHTML = username
    file.innerHTML = filename
    output.innerHTML = textfield
}

function captureDivAsImage() {
    var element = document.getElementById('captureme');
    let filename = document.getElementById('filename').value
    html2canvas(element).then(function(canvas) {
      var link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = filename;
      link.click();
    });
  }
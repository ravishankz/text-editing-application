function bold(){
    document.execCommand('bold', false, null)
}

function underline(){
    document.execCommand('underline', false, null)
}

function italic(){
    document.execCommand('italic', false, null)
}

function changeColor() {
    document.querySelectorAll('.fontColor').forEach(function(element){
        element.addEventListener('click', function(){
            var textSelec = window.getSelection().toString()
            var span = "<span style='color: red'>" + textSelec + "</span>"
            var textGet = document.getElementById('textarea').innerHTML
            document.getElementById('textarea').innerHTML = textGet.replace(textSelec, span)
        })
    })
}

function textAlign(alignment){
   document.getElementById('textarea').style.textAlign = alignment;
}
var envoyer = document.querySelector('#envoyer')
var select = document.querySelector('#select')
var yoName = document.querySelector('.yo-name')
envoyer.addEventListener('click',function(e) {
    var code = 'ToKy'
    if(yoName.value != 'ToKy'){
        alert('Incorect password!')
        e.preventDefault()
    }
    if(select.value < 256){
        alert('Can\'t support this system')
        e.preventDefault()
    }
})
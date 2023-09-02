const addUp = () => {
    let r = parseInt(Math.random() * 256)
    let g = parseInt(Math.random() * 256)
    let b = parseInt(Math.random() * 256)

    let x = document.getElementsByClassName('box')[0].children[0]
    if (x.value == null || x.value == '') {
        x.style.background = 'rgb(255, 46, 46)'
    } else {
        x.style.background = 'rgb(219, 196, 165)'
        let _do = document.createElement('div')
        _do.innerHTML = `<i class="bi-circle icon" onclick="done(this)"></i><span>${x.value}</span>`
        x.value = ''
        document.getElementById('list').appendChild(_do)
        _do.style.background = 'rgb(' + r + ',' + g + ',' + b + ')'
        x.focus()
    }
}
function done(s) {
        let parent = s.parentElement
        parent.classList.toggle('toggle')     
    }

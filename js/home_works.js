/// Gmail validation
const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailSpan = document.querySelector('#gmail_result')

const regExp = /^[\w-\.]+@gmail.com$/

gmailButton.onclick = () =>{
    if(regExp.test(gmailInput.value)){
        gmailSpan.innerHTML = 'OK'
        gmailSpan.style.color = 'green'
    }
    else{
        gmailSpan.innerHTML = 'not ok'
        gmailSpan.style.color = 'red'
    }
}


/// Recursion

let count = 0
const block = document.querySelector('.child_block')

const position = () =>{
    count++
    console.log(count);
    if (count < 449) {
        block.style.left = `${count}px`
        requestAnimationFrame(position)
    }
}
position()
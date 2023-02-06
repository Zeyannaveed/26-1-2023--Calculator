let string = ''
const btn = document.querySelectorAll('.btn')
Array.from(btn).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string)
            document.querySelector('.result').innerHTML=string
        }
        else if (e.target.innerHTML=='ac'){
            document.querySelector('.result').innerHTML='123'

        }
        else{
        console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector('.result').innerHTML = string
    }
    })

})
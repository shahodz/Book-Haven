console.log(":(")


const url = window.location.href
console.log(url)

const user_input = document.getElementById('bar')

const csrf = document.getElementsByName('csrfmiddlewaretoken')

const Searchinput = (book) => {
    $.ajax({
        type: 'POST',
        url: 'ser/',
        data:{
            'csrfmiddlewaretoken': csrf,
            'book': book,
        },
        success: function(res){
            console.log(res)
        },
        error: function(err){
            console.log(err)
        }
    })
}

user_input.addEventListener('keyup',e=>{
    console.log(e.target.value)

    Searchinput(e.target.value)
})


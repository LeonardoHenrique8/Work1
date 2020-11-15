const menu = document.querySelector('.header .nav-bar .nav-list .menu')
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul')
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a')
const header = document.querySelector('.header.container')

menu.addEventListener('click', () => {
	menu.classList.toggle('active')
	mobile_menu.classList.toggle('active')
})

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY
	if (scroll_position > 250) {
		header.style.backgroundColor = '#131516'
	} else {
		header.style.backgroundColor = 'transparent'
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		menu.classList.toggle('active')
		mobile_menu.classList.toggle('active')
	})
})

document.getElementById("button").addEventListener("click", displayForm)
function displayForm() {
    document.getElementById("form").style.display = 'block'
}

function commentAdd() {
    alert("Comentário Adicionado!");
}

/*
Não finalizado

const comment = document.getElementById('comment')
const btn = document.querySelector('.btn_envi')

function sendComment() {
    if(btn) {
        btn.addEventListener('click', function() {
            var poster = {
                post: comment.value
            }
			fetch("Adicionar LINK",
				{
                    method: 'post',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(poster)
                })
                .then(results => results.json())
        })
    }

}

function commentsMade() {

    fetch("ADICIONAR LINK")
    .then(function(response) {
        return response.json();
    })

}
*/

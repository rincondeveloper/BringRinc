// //USERNAME GREATING
// let username = document.getElementById('username')
// let usernameValue = username.textContent

// let msg = document.getElementById('msg')
// msg.innerHTML = `Hello, ${usernameValue}`;


// //CONST
// const aside = document.getElementById('aside')

// const container = document.getElementById('container')
// const header = document.getElementById('header')
// const gallery = document.getElementById('gallery')
// const head = document.getElementById('head')
// const album = document.getElementById('album')
// const img = document.getElementsByClassName('img')

// const left = document.getElementById('left')
// const right = document.getElementById('right')

// const sun = document.getElementById('sun')
// const moon = document.getElementById('moon')
// const on = document.getElementById('on')
// const off = document.getElementById('off')


// const words = document.getElementsByClassName('word')

// //BUTTONS FUNCTIONS

// //HOME

// const home = document.getElementById('home')

// home.addEventListener('click', function(event) {
//     event.preventDefault()
    
//     header.scrollIntoView({behavior: 'smooth'})
// })


// //NEW RELEASES
// const newReleases = document.getElementById('new-releases')

// newReleases.addEventListener('click', function(event) {
//     event.preventDefault()
    
//     const newReleasesSection = document.getElementById('new-releases-section')
//     newReleasesSection.scrollIntoView({behavior: 'smooth'})
// })


// //BEST ALBUMS
// const bestAlbums = document.getElementById('best-albums')

// bestAlbums.addEventListener('click', function(event) {
//     event.preventDefault()
    
//     const bestAlbumsSection = document.getElementById('best-albums-section')
//     bestAlbumsSection.scrollIntoView({behavior: 'smooth'})
// })









// //AGRANDAR IMAGENES Y MOVER A LA IZQUIERDA
// function upHeightImg () {
//     for (let i = 0; i < img.length; i++) {
//         img[i].style.height = '19.5em'
//     }
// }

// left.addEventListener('click', function() {
//     aside.style.transform = 'translate(-20em, 0)'
//     container.style.paddingLeft = '0'
//     upHeightImg()
//     head.style.margin = '0 3.5em'

//     left.style.display = 'none'
//     right.style.display = 'block'
//     right.style.transform = 'translate(0, 0)'
// })

// //ACHICAR IMAGENES Y MOVER A LA DERACHA

// function downHeightImg () {
//     for (let i = 0; i < img.length; i++) {
//         img[i].style.height = '16.5em'
//     }
// }

// right.addEventListener('click', function() {
//     aside.style.transform = 'translate(0, 0)'
//     container.style.paddingLeft = '13.5%'
//     downHeightImg()
//     head.style.margin = '0 3.5em'

//     right.style.display = 'none'
//     left.style.display = 'block'
//     left.style.transform = 'translate(0, 0)'
// })




// // on.addEventListener('click', function() {
// //     on.style.display = 'none'
// //     off.style.display = 'block'
// //     moon.style.color = 'var(--font-gray-dark-mode-secundary)'
// //     sun.style.color = 'var(--highlight)'
// //     main.style.backgroundColor = 'var(--menu-light-mode)'
// //     aside.style.backgroundColor = 'var(--menu-light-mode)'

// //     changeWord()

// // })



// // off.addEventListener('click', function() {
// //     on.style.display = 'block'
// //     off.style.display = 'none'
// //     sun.style.color = 'var(--font-gray-dark-mode-secundary)'
// //     moon.style.color = 'var(--highlight)'
// // })


// // sun.addEventListener('click', function() {
// //     sun.style.color = 'var(--highlight)'
// //     moon.style.color = 'var(--font-gray-dark-mode-secundary)'
// //     off.style.display = 'block'
// //     on.style.display = 'none'
// // })
// // moon.addEventListener('click', function() {
// //     moon.style.color = 'var(--highlight)'
// //     sun.style.color = 'var(--font-gray-dark-mode-secundary)'
// //     on.style.display = 'block'
// //     off.style.display = 'none'
// // })

const activateButton = document.querySelectorAll('.menu-button')

activateButton.forEach((button) => {
    button.addEventListener('click', () => {
        activateButton.forEach((btn) => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
    })
})


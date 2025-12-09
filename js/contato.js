document.addEventListener('DOMContentLoaded', () => {

    const git = document.querySelector('.add_icon')

        function menuAction () {
            git.classList.toggle ('show')
        }
    
        git.addEventListener('click', menuAction)

    })

    document.addEventListener('DOMContentLoaded', () => {
        const link = document.querySelector('.add_icon_l')

        function menuAction(){
            link.classList.toggle ('show')
        }

        link.addEventListener('click', menuAction)

    })


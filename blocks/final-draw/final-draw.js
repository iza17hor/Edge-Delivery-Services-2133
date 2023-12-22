export default function decorate(block) {
    const cols = [...block.children];
    const final_draw = document.querySelector('.final-draw')


    const div = final_draw.querySelectorAll('div')

   
    final_draw.children[0].classList.add('final-draw-title')

    const first_text = final_draw.children[0].firstElementChild
    first_text.classList.add('part-first')
    const span = document.createElement('p')
    first_text.append(span)

    span.textContent = "draw"

    const logo = document.createElement('img')
    final_draw.children[0].append(logo)
    logo.setAttribute('src', '/icons/logo_Euro.jpeg')
    logo.classList.add('final-logo')
    logo.style.width = "45%"


    final_draw.children[1].classList.add('final-draw-cards')
    const divs = final_draw.children[1].querySelectorAll('div')

    divs.forEach( e => {
    e.classList.add('card-group')
    e.firstElementChild.classList.add('items')
    })

    const all_li = document.querySelector('.final-draw-card')
    const card_group = document.querySelectorAll('.card-group')

    card_group.forEach(element => {
  
        const ul_list = element.lastElementChild
        ul_list.classList.add('list-items')
        const list = ul_list.querySelectorAll('li')

        list.forEach(li => {
            const flag_img = document.createElement('img')
            li.insertBefore(flag_img, li.firstChild);
            flag_img.classList.add('img-flag')
            flag_img.style.width="20px"
            flag_img.setAttribute('src', `/icons/flag/${li.textContent}-svgrepo-com.svg`)

            
            if(li.textContent == 'play-off winner A' || li.textContent == 'play-off winner B' || li.textContent == 'play-off winner C'){
               
                flag_img.setAttribute('src', `/icons/flag/play-off-winner-A-svgrepo-com.svg`)
               
            }
            else {
               

                li.insertBefore(flag_img, li.firstChild);
                flag_img.classList.add('img-flag')
                flag_img.style.width="20px"
                flag_img.setAttribute('src', `/icons/flag/${li.textContent}-svgrepo-com.svg`)
            }
        })

    
    })

}
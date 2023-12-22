export default function decorate(block) {
    const events = document.querySelector('.events');

    if (events) {
        events.firstElementChild.classList.add('events-list');

        const eventList = document.querySelector('.events-list');

        if (eventList) {
            const divs = eventList.querySelectorAll('div');

            divs.forEach(div => {
                div.classList.add('event-item');
            });

            const eventItems = document.querySelectorAll('.event-item');

            eventItems.forEach(eventItem => {
                const p = eventItem.querySelector('p');
                console.log(eventItem.children[1])
                eventItem.children[1].classList.add('group-matchday')

                if (p) {
                    p.classList.add('event-data');

                    const uls = eventItem.querySelectorAll('ul');

                    uls.forEach(ul => {
                        if (ul.nextElementSibling) {
                            ul.nextElementSibling.classList.add('group-list');
                    
                            ul.nextElementSibling.lastElementChild.classList.add('group-time')
                            const a = document.createElement('a')
                            a.textContent = "See more"
                            ul.nextElementSibling.lastElementChild.append(a)
                            a.setAttribute('href' ,'https://www.uefa.com/euro2024/match/2036166--serbia-vs-england/')
                            const groupItems = ul.nextElementSibling.querySelectorAll('ul');

                            groupItems.forEach(groupItem => {
                                
                                groupItem.firstElementChild.classList.add('group-item');
                                
                             
                                const ulLists = groupItem.children[0].querySelectorAll('ul');

                                ulLists.forEach(ulList => {
                                    ulList.children[0].classList.add('ul-list');
                                    ulList.children[1].classList.add('ul-list');

                                });
                            });
                        }
                    });
                }
            });
        }
    }

    const groupItems = document.querySelectorAll('.ul-list');
    
    groupItems.forEach(groupItem => {
    
        const itemFlag = document.createElement('img');
        const group_item = groupItem.querySelectorAll('img')

        group_item.forEach(img => {
            img.classList.add('img-icon')
        })

       
        groupItem.insertBefore(itemFlag, groupItem.firstChild);
        itemFlag.setAttribute('src', `/icons/flag/${groupItem.textContent}-svgrepo-com.svg`);
    });
    
   
}

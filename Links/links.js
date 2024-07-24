const nameInput = document.getElementById('nameinput')
const urlInput = document.getElementById('urlinput')
const linkBtn = document.getElementById('linkbtn')
const linkList = document.getElementById('linklist')

linkBtn.addEventListener('click', () => {
    const name = nameInput.value
    const url = urlInput.value
    const link = { name, url }
    addNewLink(link)
    saveLink(link)
    nameInput.value = ''
    urlInput.value = ''
})

const saveLink = (link) => { //guardar link en localStorage
    let linkLocalStorage = loadLinkLocalStorage();
    linkLocalStorage.push(link);
    localStorage.setItem('links', JSON.stringify(linkLocalStorage));
}

const loadLinkPage = () => {  //cargar link desde localstorage y mostrar
    const linkLocalStorage = loadLinkLocalStorage();
    linkLocalStorage.forEach(link => {
        addNewLink(link);
    });
}

const loadLinkLocalStorage = () => {  //cargar links del localStorage
   const linkLocalStorage = JSON.parse(localStorage.getItem('links')) || [];
   return linkLocalStorage; 
}

const addNewLink = (link) => { //pintar links en el documento
    const li = document.createElement('li');
    li.innerHTML = 
        `
        ${link.name}
        <button class="removelink"><img src='./Assets/delete-svgrepo-com.svg' alt='delete' /></button>
        `
        li.addEventListener('click', (e) => {
            // Evitar que el clic en el botón de eliminar active este evento
            if (e.target.tagName !== 'button') {
                window.open(link.url, '_blank');
            }
        });

    linkList.appendChild(li)
    addDeleteListener(li, link)
}

const addDeleteListener = (li, link) => {  //agregar evento eliminar link
    const removeBtn = li.querySelector('.removelink')
    removeBtn.addEventListener('click', () => {
        deleteLink(link, li)
    })
}

const deleteLink = (link, li) => {  //borrar link de localStorage y documento
    let links = loadLinkLocalStorage()
    const index = links.findIndex(storedLink => storedLink.name === link.name && storedLink.url === link.url)
    if (index !== -1) {
        links.splice(index, 1)
        localStorage.setItem('links', JSON.stringify(links))
        li.remove()
    }
}

loadLinkPage()

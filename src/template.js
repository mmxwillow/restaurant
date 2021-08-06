function printHeader() {
    let content = document.getElementById('content');
    let header = document.createElement('header');
    let home = document.createElement('button');
    let menu = document.createElement('button');
    let contact = document.createElement('button');
    home.id = "home";
    menu.id = "menu";
    contact.id = "contact";
    home.innerHTML = "Home";
    menu.innerHTML = "Menu";
    contact.innerHTML = "Contact";
    header.appendChild(home);
    header.appendChild(menu);
    header.appendChild(contact);
    content.appendChild(header);
}


export {printHeader};
function printHeader() {
    let content = document.getElementById('content');
    let header = document.createElement('header');
    let home = document.createElement('a');
    let menu = document.createElement('a');
    let contact = document.createElement('a');
    home.href = "#";
    menu.href = "#";
    contact.href = "#";
    home.innerHTML = "Home";
    menu.innerHTML = "Menu";
    contact.innerHTML = "Contact";
    header.appendChild(home);
    header.appendChild(menu);
    header.appendChild(contact);
    content.appendChild(header);
}


export {printHeader};
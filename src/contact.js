/*
<header>
            <button>Home</button>
            <button>Menu</button>
            <button>Contact</button>

        </header>
        <div id="main" class="contact">
            <form>
                <div class="header_contact">
                    Contact us
                </div>
                <label for="email">E-mail address</label>
                <input type="email" name="email" placeholder="user@email.com">
                <label for="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                <input type="submit" value="Submit">
            </form>
            <div class="contact_info">
                <div class="header_contact">
                    Call us
                </div>
                <div class="description">
                    Don't like e-mail? Call us at:<br>123-456-789
                </div>
            </div>
        </div>
        */

function printContact(){
    let content = document.getElementById("content");
    let main = document.createElement('div');
    main.id="main";
    main.className = "contact";

    let form = document.createElement('form');
    let header_contact = document.createElement('div');
    header_contact.className = "header_contact";
    header_contact.innerHTML = "Contact us";

    let email_label = document.createElement('label');
    email_label.for = "email";
    email_label.innerHTML = "E-mail address";

    let email = document.createElement('input');
    email.type = "email";
    email.name = "email";
    email.placeholder = "user@email.com";

    let message_label = document.createElement('label');
    message_label.for = "message";
    message_label.innerHTML = "Message";

    let message = document.createElement('textarea');
    message.id = "message";
    message.name = "message";
    message.placeholder="Write something..";

    let submit = document.createElement('input');
    submit.type = "submit";
    submit.value = "Submit";

    let contact_info = document.createElement('div');
    contact_info.className = "contact_info";

    let header_contactinfo = document.createElement('div');
    header_contactinfo.className = "header_contact";
    header_contactinfo.innerHTML = "Call us";

    let description = document.createElement('div');
    description.className = "description";
    description.innerHTML = "Don't like e-mail? Call us at:<br>123-456-789";

    form.appendChild(header_contact);
    form.appendChild(email_label);
    form.appendChild(email);
    form.appendChild(message_label);
    form.appendChild(message);
    form.appendChild(submit);

    contact_info.appendChild(header_contactinfo);
    contact_info.appendChild(description);

    main.appendChild(form);
    main.appendChild(contact_info);
    content.appendChild(main);
}
export {printContact};
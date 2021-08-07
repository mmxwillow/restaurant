function printMenu() {
    let content = document.getElementById("content");
    let main = document.createElement('div');
    main.id = "main";
    main.className = "menu";

    let menuItems = [
        ["Chicken Bulgogi", "Spicy Cauliflower", "Chilli Tofu", "Scones", "Mango Chutney","Hommos"],
        ["12$", "13$", "18$", "5$", "4$","9$"],
        ["onion, garlic, sesame oil, cayenne, chicken breast, soy sauce",
            "cauliflowerettes, diced pepper, onion, hot sauce",
            "tofu cubes, pepper, onions, chilli, garlic gravy",
            "clotted cream, lemon curd, strawberry jam",
            "sweet and sour chutney with spices",
        "chickpea puree, sesame paste, lemon"]
    ];

    console.log(menuItems);

    for (let i = 0; i < 6; i++) {
        let item = document.createElement('div');
        let header = document.createElement('div');
        let itemname = document.createElement('div');
        let price = document.createElement('div');
        let description = document.createElement('div');

        item.className = "item";
        header.className = "header_menu";
        itemname.className = "itemname";
        price.className = "price";
        description.className = "description";

        itemname.innerHTML = menuItems[0][i];
        price.innerHTML = menuItems[1][i];
        description.innerHTML = menuItems[2][i];

        header.appendChild(itemname);
        header.appendChild(price);
        item.appendChild(header);
        item.appendChild(description);

        main.appendChild(item);
    }
    content.appendChild(main);
}

export { printMenu };
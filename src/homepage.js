function printHomepageContent(){
    let data = [
        ["About","Location","Hours"],
        ["Here goes some extremely interesting about section that you'll totally not regret reading whatsoever.<br>Like seriously it's so fun.", "4190 Duke Street,<br>Montreal H3C 5K4", "Monday-Friday:<br>11am-12am<br><br>Weekend:<br>11am-11pm"]
    ]
    
    let content = document.getElementById('content');
    let main = document.createElement('div');
    main.id="main";
    main.className = "homepage";
    
    for(let i=0; i<3; i++){
        let column = document.createElement('div');
        let columnheader = document.createElement('div');
        let columncontent = document.createElement('div');
    
        column.id = data[0][i];
        column.className = "column";
        columnheader.className="header_homepage";
        columncontent.className="columncontent";
    
        columnheader.innerHTML = data[0][i];
        columncontent.innerHTML=data[1][i];
    
        column.appendChild(columnheader);
        column.appendChild(columncontent);
    
        main.appendChild(column);
    }
    
    content.appendChild(main);
}

export {printHomepageContent};


function generate_mythic_items(){
    for (i in all_items){
        document.getElementById("gen_mythic").insertAdjacentHTML("beforeend", `
        <div id="${all_items_str[i]}_icon" class="mythic_icon">
            <div><img src="./assets/items/${all_items_str[i]}.png"></div>
            <div id="${all_items_str[i]}_price">${all_items[i]["price"]}</div>
        </div>
        `)
    }
}
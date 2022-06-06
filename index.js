function generate_mythic_items(){
    for (let k in items["mythic_items"]){
        document.getElementById("gen_mythic").insertAdjacentHTML("beforeend", `
        <div id="${k}_icon" class="mythic_icon">
            <div><img src="./assets/items/${items["mythic_items"][k]["id"]}.png"></div>
            <div id="${k}_price">${items["mythic_items"][k]["price"]}</div>
        </div>
        `)
    }
}

function filter_stat(){
    if (filter.length == 0){
        for (let k in items){
            for (let i in items[k])
                document.getElementById(`${i}_icon`).style.display = "";
        }
    }
    else{
        for (let k in items){
            for (let x in items[k])
                for (let i in filter){
                    if (Object.keys(items[k][x]["stats"]).includes(filter[i])){
                        document.getElementById(`${x}_icon`).style.display = "";
                    }
                    else{
                        document.getElementById(`${x}_icon`).style.display = "none";
                        break;
                    }
                }
        }
    }
}

function filter_list(stat){
    if (filter.includes(stat)){
        for (let i in filter){
            if (filter[i] === stat){
                filter.splice(i, 1);
                document.getElementById(`${stat}_filter`).style.color = ""
                document.getElementById(`${stat}_filter`).style.boxShadow = ""
            }
        }
    }
    else{
        filter.push(stat)
        document.getElementById(`${stat}_filter`).style.color = "#93b2c6"
        document.getElementById(`${stat}_filter`).style.boxShadow = "2px 4px #000000"
    }

    filter_stat()
}

function search_bar_filter(){
    search = document.getElementById("search_bar_in").value
    for (let i in all_items){
        if (all_items[i]["name"].includes(search)){
            document.getElementById(`${all_items[i]["name"]}_icon`).style.display = "";
        }
        else{
            document.getElementById(`${all_items[i]["name"]}_icon`).style.display = "none";
        }
    }
}
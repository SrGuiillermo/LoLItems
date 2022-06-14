const filter = []
const current_bund = []

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

function generate_champions_dropdown(){
    for (let k in champions["data"]){
        document.getElementById("champion_dropdown").insertAdjacentHTML("beforeend",`
        <div id="${k}_selector">${k}</div>
        `)
    }
}

function stats_filter(stat){
    if (filter.includes(stat)){
        for (let i in filter){
            if (filter[i] === stat){
                filter.splice(i, 1);
                document.getElementById(`${stat}_filter`).style.color = "";
                document.getElementById(`${stat}_filter`).style.boxShadow = "";
                document.getElementById(`${stat}_filter`).style.backgroundColor = "";
            }
        }
    }
    else{
        filter.push(stat)
        document.getElementById(`${stat}_filter`).style.color = "#93b2c6";
        document.getElementById(`${stat}_filter`).style.boxShadow = "2px 4px #000000";
        document.getElementById(`${stat}_filter`).style.backgroundColor = "#182d41";
    }

    if (filter.length == 0){
        for (let k in items){
            for (let x in items[k]){
                if (current_bund.length > 0){
                    if (bundle.includes(x)){
                        document.getElementById(`${x}_icon`).style.display = "";
                    }
                    else{
                        document.getElementById(`${x}_icon`).style.display = "none";
                    }
                }
                else{
                    document.getElementById(`${x}_icon`).style.display = "";
                }
            }
        }
    }
    else{
        for (let k in items){
            for (let x in items[k])
                for (let i in filter){
                    if (Object.keys(items[k][x]["stats"]).includes(filter[i])){
                        if (current_bund.length > 0){
                            if (current_bund[0].includes(x)){
                                document.getElementById(`${x}_icon`).style.display = "";
                            }
                            else{
                                document.getElementById(`${x}_icon`).style.display = "none";
                                break
                            }
                        }
                        else{
                            document.getElementById(`${x}_icon`).style.display = "";
                        }
                    }
                    else{
                        document.getElementById(`${x}_icon`).style.display = "none";
                        break;
                    }
                }
        }
    }
}

function search_bar_filter(){
    search = document.getElementById("search_bar_in").value.toLowerCase()
    for (let k in items){
        for (let x in items[k])
            if (x.includes(search)){
                if (filter.length === 0){
                    document.getElementById(`${x}_icon`).style.display = "";
                }
                else{
                    for (let i in filter){
                        if (Object.keys(items[k][x]["stats"]).includes(filter[i])){
                            if (current_bund.length > 0){
                                if (bundle.includes(x)){
                                    document.getElementById(`${x}_icon`).style.display = "";
                                }
                                else{
                                    document.getElementById(`${x}_icon`).style.display = "none";
                                }
                            }
                            else{
                                document.getElementById(`${x}_icon`).style.display = "";
                            }
                        }
                        else{
                            document.getElementById(`${x}_icon`).style.display = "none";
                            break;
                        } 
                    }
                }
            }
            else{
                document.getElementById(`${x}_icon`).style.display = "none";
            }
    }
}

function class_filter(bundle){
    if (current_bund.length > 0){
        if (current_bund[0] === bundle){
            document.getElementById(current_bund[0]).style.color = "";
            document.getElementById(current_bund[0]).style.boxShadow = "";
            document.getElementById(current_bund[0]).style.backgroundColor = "";
            current_bund.pop();
            if (filter.length > 0){
                for (let i in filter){
                    if (Object.keys(items[k][x]["stats"]).includes(filter[i])){
                        document.getElementById(`${x}_icon`).style.display = "";
                    }
                    else{
                        document.getElementById(`${x}_icon`).style.display = "none";
                    }
                }
            }
            else{
                for (let k in items){
                    for (let x in items[k]){
                        document.getElementById(`${x}_icon`).style.display = "";
                    }
                }
            }
        }
        else{

            let old_bund = current_bund[0]
            current_bund[0] = bundle

            document.getElementById(old_bund).style.color = "";
            document.getElementById(old_bund).style.boxShadow = "";
            document.getElementById(old_bund).style.backgroundColor = "";

            document.getElementById(current_bund[0]).style.color = "#93b2c6";
            document.getElementById(current_bund[0]).style.boxShadow = "2px 4px #000000";
            document.getElementById(current_bund[0]).style.backgroundColor = "#182d41";
        }
    }
    else{
        current_bund[0] = bundle
        document.getElementById(current_bund[0]).style.color = "#93b2c6";
        document.getElementById(current_bund[0]).style.boxShadow = "2px 4px #000000";
        document.getElementById(current_bund[0]).style.backgroundColor = "#182d41";
    }
    if (current_bund.length > 0){
        for (let k in items){
            for (let x in items[k]){
                if (Object.keys(items[k][x]).includes(bundle)){
                    if (filter.length > 0){
                        for (let i in filter){
                            if (Object.keys(items[k][x]["stats"]).includes(filter[i])){
                                document.getElementById(`${x}_icon`).style.display = "";
                            }
                            else{
                                document.getElementById(`${x}_icon`).style.display = "none";
                            }
                        }
                    }
                    else{
                        document.getElementById(`${x}_icon`).style.display = "";
                    }
                }
                else{
                    document.getElementById(`${x}_icon`).style.display = "none";
                }
            }
        }
    }
}

function champion_select_toggle(){
    let champ = document.getElementById("champion_dropdown").style
    if (champ.display === ""){
        champ.display = "block";
    }
    else{
        champ.display = "";
    }
}
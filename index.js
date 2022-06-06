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
    search = document.getElementById("search_bar_in").value
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

function class_filter(bundle, f){
    if (current_bund.length > 0){
        if (current_bund[0] === bundle){
            document.getElementById(f).style.color = "";
            document.getElementById(f).style.boxShadow = "";
            document.getElementById(f).style.backgroundColor = "";
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
            current_bund[0] = bundle
            for (let p in all_bund){
                document.getElementById(all_bund[p]).style.color = "";
                document.getElementById(all_bund[p]).style.boxShadow = "";
                document.getElementById(all_bund[p]).style.backgroundColor = "";
            }
            document.getElementById(f).style.color = "#93b2c6";
            document.getElementById(f).style.boxShadow = "2px 4px #000000";
            document.getElementById(f).style.backgroundColor = "#182d41";
        }
    }
    else{
        current_bund[0] = bundle
        for (let p in all_bund){
            document.getElementById(all_bund[p]).style.color = "";
            document.getElementById(all_bund[p]).style.boxShadow = "";
            document.getElementById(all_bund[p]).style.backgroundColor = "";
        }
        document.getElementById(f).style.color = "#93b2c6";
        document.getElementById(f).style.boxShadow = "2px 4px #000000";
        document.getElementById(f).style.backgroundColor = "#182d41";
    }
    if (current_bund.length > 0){
        for (let k in items){
            for (let x in items[k]){
                if (bundle.includes(x)){
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
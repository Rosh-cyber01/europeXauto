const locations = [

    "Paris Charles de Gaulle Airport",
    "Paris Orly Airport",
    "Lyon Airport",
    "Nice Airport",
    "Marseille Airport",
    "Barcelona Airport",
    "Madrid Airport",
    "Rome Airport",
    "Milan Airport",
    "Berlin Airport",
    "Munich Airport",
    "Amsterdam Airport",
    "Brussels Airport",
    "Lisbon Airport"

];

function autocomplete(inputId, listId){

    const input = document.getElementById(inputId);
    const list = document.getElementById(listId);

    input.addEventListener("input", function(){

        let value = this.value.toLowerCase();

        list.innerHTML = "";

        if(value.length < 1) return;

        const filtered = locations.filter(location =>
            location.toLowerCase().includes(value)
        );

        filtered.forEach(item=>{

            const div = document.createElement("div");

            div.classList.add("suggestion-item");

            div.innerText = item;

            div.onclick = function(){

                input.value = item;

                list.innerHTML = "";
            };

            list.appendChild(div);

        });

    });

}

autocomplete("pickup","pickup-list");
autocomplete("dropoff","dropoff-list");

document.getElementById("searchBtn").addEventListener("click", ()=>{

    alert(
        "Search feature will connect to API later."
    );

});

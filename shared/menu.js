const nav_buttons = document.getElementsByClassName("nav_button");
let search_users = document.getElementById("search_user_global");
const url = "http://localhost:5255/";

search_users.oninput = async function (event) {
    let search_loader = document.getElementById("search_loader");
    if (event.currentTarget.value.length > 2) {
        clearSearchList();
        changeLoaderVisibility(search_loader, 1);
        await searchUsers(event)
        changeLoaderVisibility(search_loader, 0);
    }
    else {
        document.getElementById("search_result").style.visibility = "hidden";
    }
}

for (let i = 0; i < nav_buttons.length; i++){
    let value = nav_buttons[i];
    if(!value.classList.contains("active")){
        value.addEventListener("mouseover", menuHoverChangeColor);
        value.addEventListener("mouseleave", menuBackToDefault)
    }
}

export async function searchUsers(event) {
    let input = event.currentTarget;
    let resultBox = document.getElementById("search_result");
    let nameSearched = input.value.toString()
    resultBox.style.visibility = "visible";
    //Lança a query pro backend, para cada resultado do meu json criar um elemento div, se não tiver nenhum, retorna cant find
    /*const response = await fetch(`${url}users`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "Username": nameSearched,
        })
    })
    let data = await response.json();
    if(response.ok){*/
    let response = `
    {
        "users":
        [
            {
                "id": 1,
                "username": "marina.lifts",
                "profile_pic": "../shared/guest.svg"
            },
            {
                "id": 3,
                "username": "bia.gym",
                "profile_pic": "../shared/guest.svg"
            },
            {
                "id": 2,
                "username": "caio_strength",
                "profile_pic": "../shared/guest.svg"
            }
        ]
    }`
    if(event.currentTarget.value.length < 5 /* response.ok*/){
        let data = JSON.parse(response);
        let listResult = new DocumentFragment();
        data.users.forEach(user => {
            let searchResult = document.getElementById("tpl_ok").content.cloneNode(true);
            searchResult.querySelector(".log_profile_pic").src = `${user.profile_pic}`;
            searchResult.querySelector(".username_result").textContent = `${user.username}`;
            searchResult.firstElementChild.style.display = '';
            listResult.append(searchResult);
        })
        resultBox.append(listResult);
        return true;
    }
    else if(event.currentTarget.value.length >= 5 /* response.status === 404*/){
        let cNameSearched = document.getElementById("tpl_not_found").content.cloneNode(true);
        cNameSearched.children[0].textContent = `Can't find "${nameSearched}"`
        resultBox.append(cNameSearched);
        return false;
    }
    else{
        return false;
    }
}
export function clearSearchList(){
    document.body.querySelectorAll(".results").forEach(result => {
        result.remove();
    });
}
export function changeLoaderVisibility(loader, status){
    status === 1 ? loader.style.display = '' : loader.style.display = 'none';
}
export function menuHoverChangeColor(event){
    let hoveredElement = event.currentTarget;
    hoveredElement.style.backgroundColor = "rgba(39,39,39,0.29)"
}
export function menuBackToDefault(event){
    let element = event.currentTarget;
    element.style.backgroundColor = "rgba(255,255,255,0)";
}
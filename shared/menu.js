import Cookies from "https://esm.sh/universal-cookie";

const url = "http://localhost:5255/";
let cookies = new Cookies();
const menuHtml = `
    <template id="tpl_ok"><div class="results" style="display: none">
        <img class="log_profile_pic" src="../shared/guest.svg">
        <span class="username_result" style="color: white">austinperkins</span>
    </div></template>
    <template id="tpl_not_found"><span class="results" style="color: white; font-size: 15px;"><br><span style="font-size: 12px">Maybe they aren't on Heavy yet</span></span></template>
    <div class="left_panel">
        <div class="logo_panel">
            <a class="logo" href="../index/home.html">HEAVY</a>
        </div>
        <div class="search_panel">
            <input class="search_users" id="search_user_global" type="search" placeholder="Search users" >
            <svg
                    width="225"
                    viewBox="0 0 280.37793 50.156532"
                    version="1.1"
                    id="svg5"
                    xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
                    xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:svg="http://www.w3.org/2000/svg">
                <sodipodi:namedview
                        id="namedview7"
                        pagecolor="#505050"
                        bordercolor="#eeeeee"
                        borderopacity="1"
                        inkscape:showpageshadow="0"
                        inkscape:pageopacity="0"
                        inkscape:pagecheckerboard="0"
                        inkscape:deskcolor="#505050"
                        inkscape:document-units="mm"
                        showgrid="false"
                        showguides="true"
                        inkscape:zoom="0.5"
                        inkscape:cx="1005"
                        inkscape:cy="491"
                        inkscape:window-width="1912"
                        inkscape:window-height="1036"
                        inkscape:window-x="4"
                        inkscape:window-y="4"
                        inkscape:window-maximized="0"
                        inkscape:current-layer="layer1" />
                <defs
                        id="defs2" />
                <g
                        inkscape:label="Layer 1"
                        inkscape:groupmode="layer"
                        id="layer1"
                        transform="translate(26.452889,-123.59374)">
                    <rect
                            style="display:inline;fill:#25272a;fill-opacity:1;stroke-width:0.291034"
                            id="rect111"
                            width="280.37793"
                            height="50.156528"
                            x="-26.452888"
                            y="123.59374"
                            ry="10.167753"
                            inkscape:export-filename="rect111.svg"
                            inkscape:export-xdpi="96"
                            inkscape:export-ydpi="96" />
                    <ellipse
                            style="fill:#b3b3b3;stroke-width:0.197979"
                            id="path275"
                            cx="-0.73099238"
                            cy="147.93251"
                            rx="12.781861"
                            ry="11.584472" />
                    <rect
                            style="fill:#b3b3b3;stroke-width:0.129299"
                            id="rect537"
                            width="16.34779"
                            height="1.5078448"
                            x="-118.49252"
                            y="-96.067467"
                            transform="matrix(-0.62939253,-0.77708754,0.66583001,-0.74610347,0,0)" />
                    <ellipse
                            style="fill:#25272a;fill-opacity:1;stroke-width:0.43417"
                            id="path539"
                            ry="10.49427"
                            rx="11.500798"
                            cy="147.88008"
                            cx="-0.74324042"
                            inkscape:export-filename="rect111.svg"
                            inkscape:export-xdpi="96"
                            inkscape:export-ydpi="96" />
                </g>
            </svg>
        </div>
        <div id="search_result" class="search_result" style="visibility: hidden">
            <div class="loader" id="search_loader"></div>
        </div>
        <div class="nav_panel">
                <a href="../index/home.html" class="nav_button">
                    <svg class="nav_icons" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" tint="#21272f" type="home" dark="#21272f" light="#21272f" style="width: 24px; height: 24px;"><path d="M3 11V20C3 21.1046 3.89543 22 5 22H10V18M21 11V20C21 21.1046 20.1046 22 19 22H14V17.5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"></path><path d="M14 19L14 16C14 15.4477 13.5523 15 13 15L11 15C10.4477 15 10 15.4477 10 16L10 19" stroke="currentColor" stroke-width="1.5"></path><path d="M1 13L11.2929 2.70711C11.6834 2.31658 12.3166 2.31658 12.7071 2.70711L23 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg>
                    <p class="nav_text">Feed</p></a>
                <a href="../routines/routines.html" class="nav_button"><svg class="nav_icons" width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" tint=" #FFFFFF" type="routine" dark=" #FFFFFF" light=" #FFFFFF" style="width: 24px; height: 24px;"><path d="M7.998 4h-1a3 3 0 00-3 3v11a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3h-1" stroke=" #FFFFFF" stroke-width="1.5"></path><path d="M16.002 15h-8m8-4h-8" stroke=" #FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><rect x="8.002" y="2" width="8" height="4" rx="0.5" stroke=" #FFFFFF" stroke-width="1.5"></rect></svg><p class="nav_text">Routines</p></a>
                <a href="../exercises/exercises.html" class="nav_button">
                    <svg class="nav_icons" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m19.4 9.375l-.688-.688l.904-.948l-3.354-3.354l-.948.904l-.714-.714l1.612-1.661l4.85 4.85zM2.989 16.212L4.6 14.6l.714.714l-.91.903l3.379 3.38l.903-.91l.714.713l-1.611 1.612zm15.163-2.635l2.002-2.002l-7.729-7.729l-2.002 2.002zm-6.577 6.577l2.021-2.027l-7.723-7.723l-2.027 2.021zm-.265-5.715l3.134-3.13l-1.753-1.753l-3.13 3.135zm3.713 3.707l-3.448 3.41l-9.13-9.131l3.409-3.448l2.994 3l3.135-3.135l-2.981-2.994l3.442-3.442l9.15 9.15l-3.442 3.442l-2.994-2.98l-3.135 3.134z"/></svg>
                    <p class="nav_text">Exercises</p></a>
                <a href="../profile/profile.html" class="nav_button">
                    <svg class="nav_icons" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" tint=" #FFFFFF" type="profile" dark=" #FFFFFF" light=" #FFFFFF" style="width: 24px; height: 24px;"><path d="M12 12C14.4853 12 16.5 9.98528 16.5 7.5C16.5 5.01472 14.4853 3 12 3C9.51472 3 7.5 5.01472 7.5 7.5C7.5 9.98528 9.51472 12 12 12Z" stroke=" #FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 22C21 18.134 16.9706 15 12 15C7.02944 15 3 18.134 3 22" stroke=" #FFFFFF" stroke-width="1.5" stroke-linecap="round"></path></svg>
                    <p class="nav_text">Profile</p></a>
                <a href="../settings/settings.html" class="nav_button">
                    <svg class="nav_icons" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" tint=" #FFFFFF" type="settings" dark=" #FFFFFF" light=" #FFFFFF" style="width:24px;height:24px"><path d="M8.5 12C8.5 10.0665 10.0665 8.5 12 8.5C13.9335 8.5 15.5 10.0665 15.5 12C15.5 13.9335 13.9335 15.5 12 15.5C10.0665 15.5 8.5 13.9335 8.5 12Z" stroke=" #FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21.1958 9.6216L20.3115 10.3663C19.3018 11.2117 19.3018 12.7883 20.3115 13.6337L21.1958 14.3784C21.5125 14.6401 21.5917 15.0963 21.3871 15.4586L19.6384 18.5448C19.4338 18.9004 19.0049 19.0614 18.6221 18.9138L17.5465 18.5045C16.3191 18.0349 14.9795 18.8266 14.7617 20.1416L14.5703 21.2955C14.5043 21.7048 14.1546 22 13.752 22H10.248C9.83882 22 9.49567 21.6981 9.42968 21.2955L9.2383 20.1416C9.02054 18.8266 7.68093 18.0416 6.45351 18.5045L5.37787 18.9138C4.99513 19.0614 4.56619 18.9004 4.36162 18.5448L2.61288 15.4586C2.40831 15.103 2.48749 14.6468 2.80425 14.3784L3.68852 13.6337C4.69817 12.7883 4.69817 11.2117 3.68852 10.3663L2.80425 9.6216C2.48749 9.35995 2.40831 8.90372 2.61288 8.54143L4.36162 5.45522C4.56619 5.09963 4.99513 4.93861 5.37787 5.08621L6.45351 5.49547C7.68093 5.96511 9.02054 5.17343 9.2383 3.85844L9.42968 2.70446C9.49567 2.2952 9.84542 2 10.248 2H13.752C14.1612 2 14.5043 2.30191 14.5703 2.70446L14.7617 3.85844C14.9795 5.17343 16.3191 5.9584 17.5465 5.49547L18.6221 5.08621C19.0049 4.93861 19.4338 5.09963 19.6384 5.45522L21.3871 8.54143C21.5917 8.89701 21.5125 9.35324 21.1958 9.6216Z" stroke=" #FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    <p class="nav_text">Settings</p></a>
        </div>
        <div class="user_panel">
            <a href="">
                <img class="user_img" src="../shared/guest.svg"></a>
            <a href=""><p class="user_name">everton.dev</p></a>
            <a><svg cursor="pointer" id="exit" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" tint=" #FFFFFF" style="width:24px;height:24px;padding-top:4px" type="logout"><path d="M16.5 17L21.5 12M21.5 12L16.5 7M21.5 12H9.5M9.5 3H8.3C6.61984 3 5.77976 3 5.13803 3.32698C4.57354 3.6146 4.1146 4.07354 3.82698 4.63803C3.5 5.27976 3.5 6.11984 3.5 7.8V16.2C3.5 17.8802 3.5 18.7202 3.82698 19.362C4.1146 19.9265 4.57354 20.3854 5.13803 20.673C5.77976 21 6.61984 21 8.3 21H9.5" stroke=" #FFFFFF" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"></path></svg></a>
        </div>
    </div>
`;

//monta o menu lateral no início do body; toda página com menu só precisa chamar essa função
export function renderMenu(){
    document.body.insertAdjacentHTML("afterbegin", menuHtml);
    let nav_buttons = document.getElementsByClassName("nav_button");
    for (let i = 0; i < nav_buttons.length; i++){
        let value = nav_buttons[i];
        //páginas fora do menu, como a de workout, não marcam nenhum botão
        if(value.pathname === window.location.pathname){
            value.classList.add("active");
        }
        if(!value.classList.contains("active")){
            value.addEventListener("mouseover", menuHoverChangeColor);
            value.addEventListener("mouseleave", menuBackToDefault)
        }
    }
    document.getElementById("search_user_global").oninput = async function (event) {
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
    document.getElementById("exit").addEventListener("click", () => {
        cookies.remove('jwt_authorization', {path: '/'});
        window.location = "http://localhost:63342/WorkoutHeavyFront/login/login.html";
    });
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
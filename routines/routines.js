import {initMenu} from "../shared/menu.js";
/*import Cookies from "https://esm.sh/universal-cookie";

const url = "http://localhost:5255/";
let cookies = new Cookies();
const token = cookies.get('jwt_authorization'); codigo oficial*/

initMenu();

let response;
//response = await getRoutines(); desativado para mock

/*async function getRoutines(){
    return await fetch(`${url}routines`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    });
} codigo oficial*/

response = `
{
    "folders":
    [
        {
            "id": 1,
            "name": "Full Body ABC 5/3/1",
            "routines":
            [
                {
                    "id": 1,
                    "name": "Full Body A",
                    "exercises": ["Squat (Barbell)", "Pull Up (Weighted)", "Chest Dip (Weighted)", "Overhead Press (Barbell)", "Romanian Deadlift (Barbell)"]
                },
                {
                    "id": 2,
                    "name": "Full Body B",
                    "exercises": ["Deadlift (Barbell)", "Incline Bench Press (Barbell)", "Chest Supported Incline Row (Dumbbell)", "Leg Press"]
                },
                {
                    "id": 3,
                    "name": "Full Body C",
                    "exercises": ["Bench Press (Barbell)", "Bulgarian Split Squat (Dumbbell)", "Standing Calf Raise (Smith)", "Lateral Raise (Dumbbell)"]
                }
            ]
        },
        {
            "id": 2,
            "name": "My Routines",
            "routines": []
        },
        {
            "id": 3,
            "name": "Full Body ABC 5/3/1",
            "routines":
            [
                {
                    "id": 1,
                    "name": "Full Body A",
                    "exercises": ["Squat (Barbell)", "Pull Up (Weighted)", "Chest Dip (Weighted)", "Overhead Press (Barbell)", "Romanian Deadlift (Barbell)"]
                },
                {
                    "id": 2,
                    "name": "Full Body B",
                    "exercises": ["Deadlift (Barbell)", "Incline Bench Press (Barbell)", "Chest Supported Incline Row (Dumbbell)", "Leg Press"]
                },
                {
                    "id": 3,
                    "name": "Full Body C",
                    "exercises": ["Bench Press (Barbell)", "Bulgarian Split Squat (Dumbbell)", "Standing Calf Raise (Smith)", "Lateral Raise (Dumbbell)"]
                },
                {
                    "id": 3,
                    "name": "Full Body C",
                    "exercises": ["Bench Press (Barbell)", "Bulgarian Split Squat (Dumbbell)", "Standing Calf Raise (Smith)", "Lateral Raise (Dumbbell)"]
                },
                {
                    "id": 3,
                    "name": "Full Body C",
                    "exercises": ["Bench Press (Barbell)", "Bulgarian Split Squat (Dumbbell)", "Standing Calf Raise (Smith)", "Lateral Raise (Dumbbell)"]
                },
                {
                    "id": 3,
                    "name": "Full Body C",
                    "exercises": ["Bench Press (Barbell)", "Bulgarian Split Squat (Dumbbell)", "Standing Calf Raise (Smith)", "Lateral Raise (Dumbbell)"]
                }
            ]
        }
    ]
}`;

if(1 === 1){ //response.ok desativado para mock
    //let routines = await response.json(); desativado para mock
    let routines = JSON.parse(response);
    renderFolders(routines.folders);
}

function renderFolders(folders){
    let column = document.querySelector(".routines_column");
    folders.forEach((folder, index) => {
        if (index > 0) {
            column.appendChild(document.getElementById("break_line").content.cloneNode(true));
        }
        column.appendChild(renderFolder(folder));
    });
}

function renderFolder(folder){
    let folder_template = document.getElementById("folder").content.cloneNode(true);
    folder_template.querySelector('.folder').id = folder.id;
    folder_template.querySelector('.folder_name').textContent = `${folder.name} (${folder.routines.length})`;
    let folderRoutines = folder_template.querySelector('.folder_routines');
    folder.routines.forEach(routine => folderRoutines.appendChild(renderRoutine(routine)));
    return folder_template;
}

function renderRoutine(routine){
    let routine_template = document.getElementById("routine").content.cloneNode(true);
    routine_template.querySelector('.routine').id = routine.id;
    routine_template.querySelector('.routine_name').textContent = routine.name;
    routine_template.querySelector('.routine_exercises').textContent = routine.exercises.join(", ");
    return routine_template;
}

document.querySelector(".routines_column").addEventListener("click", (event) => {
    let arrow = event.target.closest(".folder_arrow");
    let folder_name = event.target.closest(".folder_name");
    if (arrow) {
        toggleFolder(arrow.closest(".folder"));
    }
    if(folder_name){
        toggleFolder(folder_name.closest(".folder"));
    }
});
document.querySelector('.new_routine').addEventListener("click", () => null);
document.querySelector('.new_folder').addEventListener("click", async () => {
    await createFolder();
});
//oculta/exibe as rotinas da pasta; a classe "closed" também gira a arrow para a direita
function toggleFolder(folder) {
    folder.classList.toggle("closed");
}
async function createFolder(){
    const folder = document.getElementById("folder_modal");
    renderFolderCreation(folder);
    folder.querySelector(".create_button").onclick = async (event) => {
        let create_button = event.currentTarget;
        if (!create_button.disabled) {
            let response = await postFolder(create_button, folder);
            let folder_template = renderFolder(response);
            folder_template.appendChild(document.getElementById("break_line").content.cloneNode(true));
            addFolderToList(folder_template);
            hideModal(folder, folder.querySelector(".modal_overlay"));
        }
    }
}

function renderFolderCreation(folder){
    folder.style.display = "";
    folder.querySelector(".modal_input").oninput = (event) => {
        folder.querySelector(".create_button").disabled = event.currentTarget.value.length === 0;
    }
    folder.querySelector(".modal_overlay").onclick = (event) => {
        hideModal(folder, event.target);
    }
}

function addFolderToList(folder){
    document.querySelector(".routines_column .title").after(folder);
    document.querySelector(".create_button").disabled = true;
}

async function postFolder(create_button, folder){
    let input = folder.querySelector(".modal_input");
    /*const response = await fetch(`${url}folder`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            "Folder": input.value.toString(),
        })
    })
    let data = await response.json();
    if(response.ok){*/
    // faz o fetch para o backend
    //mock vvvvv
    response = `
        {
            "id": 21,
            "name": "${input.value.toString()}",
            "routines": []
        }`
    input.value = '';
    return JSON.parse(response);
}
function hideModal(folder, modal_overlay){
    if(modal_overlay.closest(".modal") &&
        !modal_overlay.closest(".cancel_button") &&
        !modal_overlay.closest(".modal_close")) return;
    folder.querySelector(".create_button").disabled = true;
    folder.querySelector(".modal_input").value = "";
    folder.style.display = "none";
}

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
        //linha separando uma pasta da outra, não vai antes da primeira
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

//delegação no container: funciona também para as pastas que vêm do template
document.querySelector(".routines_column").addEventListener("click", (event) => {
    let arrow = event.target.closest(".folder_arrow");
    if (arrow) {
        toggleFolder(arrow.closest(".folder"));
    }
});

//oculta/exibe as rotinas da pasta; a classe "closed" também gira a arrow para a direita
function toggleFolder(folder) {
    folder.classList.toggle("closed");
}

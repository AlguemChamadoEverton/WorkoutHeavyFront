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
                    "id": 4,
                    "name": "Full Body A",
                    "exercises": ["Squat (Barbell)", "Pull Up (Weighted)", "Chest Dip (Weighted)", "Overhead Press (Barbell)", "Romanian Deadlift (Barbell)"]
                },
                {
                    "id": 5,
                    "name": "Full Body B",
                    "exercises": ["Deadlift (Barbell)", "Incline Bench Press (Barbell)", "Chest Supported Incline Row (Dumbbell)", "Leg Press"]
                },
                {
                    "id": 6,
                    "name": "Full Body C",
                    "exercises": ["Bench Press (Barbell)", "Bulgarian Split Squat (Dumbbell)", "Standing Calf Raise (Smith)", "Lateral Raise (Dumbbell)"]
                },
                {
                    "id": 7,
                    "name": "Full Body C",
                    "exercises": ["Bench Press (Barbell)", "Bulgarian Split Squat (Dumbbell)", "Standing Calf Raise (Smith)", "Lateral Raise (Dumbbell)"]
                },
                {
                    "id": 8,
                    "name": "Full Body C",
                    "exercises": ["Bench Press (Barbell)", "Bulgarian Split Squat (Dumbbell)", "Standing Calf Raise (Smith)", "Lateral Raise (Dumbbell)"]
                },
                {
                    "id": 9,
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
    addMockCreatedRoutines(routines.folders); //só mock: o GET /routines real já traz as rotinas novas
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
    response = JSON.stringify({
        "id": 21,
        "name": input.value.toString(),
        "routines": []
    });
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
//mock: rotinas criadas no create-routine ficam no sessionStorage e entram na pasta My Routines
function addMockCreatedRoutines(folders){
    let created = JSON.parse(sessionStorage.getItem("mock_created_routines") ?? "[]");
    let myRoutines = folders.find(folder => folder.name === "My Routines");
    if(myRoutines) myRoutines.routines.push(...created);
}

// ---------- mover rotina entre pastas (drag and drop) ----------
//delegação na coluna: funciona também nas pastas criadas depois pelo modal
const routinesColumn = document.querySelector(".routines_column");
let dragged = null; //rotina sendo arrastada: { element, fromFolder, fromIndex, originNext, dropped }

routinesColumn.addEventListener("dragstart", (event) => {
    let routine = event.target.closest(".routine");
    if(!routine) return;
    dragged = {
        element: routine,
        fromFolder: routine.closest(".folder"),
        fromIndex: [...routine.parentElement.children].indexOf(routine),
        originNext: routine.nextElementSibling, //para voltar ao lugar se soltar fora
        dropped: false
    };
    event.dataTransfer.effectAllowed = "move";
    //no próximo frame: o navegador tira a "foto" da rotina antes de ela ficar apagada
    requestAnimationFrame(() => routine.classList.add("dragging"));
});

//enquanto arrasta, a rotina já vai sendo encaixada onde vai cair
routinesColumn.addEventListener("dragover", (event) => {
    let folder = event.target.closest(".folder");
    if(!dragged || !folder) return;
    event.preventDefault(); //sem isso o navegador não deixa soltar aqui
    highlightFolder(folder);
    let list = folder.querySelector(".folder_routines");
    let after = getRoutineAfter(list, event.clientY) ?? null;
    if(dragged.element.parentElement !== list || dragged.element.nextElementSibling !== after){
        list.insertBefore(dragged.element, after); //after null = vai para o fim
    }
});

routinesColumn.addEventListener("drop", async (event) => {
    let folder = event.target.closest(".folder");
    if(!dragged || !folder) return;
    event.preventDefault();
    let move = dragged; //guardo a referência: o dragend zera o dragged antes do await terminar
    move.dropped = true;
    let toIndex = [...folder.querySelector(".folder_routines").children].indexOf(move.element);
    if(folder === move.fromFolder && toIndex === move.fromIndex) return; //soltou onde já estava
    updateFolderCount(move.fromFolder);
    updateFolderCount(folder);
    if(!await patchRoutineFolder(move.element.id, folder.id, toIndex)){
        returnToOrigin(move);
    }
});

//dispara sempre no fim, tendo soltado numa pasta ou não
routinesColumn.addEventListener("dragend", () => {
    if(!dragged) return;
    if(!dragged.dropped) returnToOrigin(dragged); //soltou fora de uma pasta ou apertou Esc
    dragged.element.classList.remove("dragging");
    highlightFolder(null);
    dragged = null;
});

//devolve a rotina que vai ficar logo DEPOIS da arrastada, de acordo com a altura do mouse (y).
//null = a arrastada vai para o fim da pasta
function getRoutineAfter(list, y){
    // TODO(human)
}

function returnToOrigin(move){
    let currentFolder = move.element.closest(".folder");
    move.fromFolder.querySelector(".folder_routines").insertBefore(move.element, move.originNext);
    updateFolderCount(currentFolder);
    updateFolderCount(move.fromFolder);
}

function highlightFolder(folder){
    routinesColumn.querySelectorAll(".folder.drag_over").forEach(other => {
        if(other !== folder) other.classList.remove("drag_over");
    });
    folder?.classList.add("drag_over");
}

//o nome da pasta termina com "(quantidade)"; troca só o número
function updateFolderCount(folder){
    let name = folder.querySelector(".folder_name");
    let count = folder.querySelectorAll(".routine").length;
    name.textContent = name.textContent.replace(/\(\d+\)$/, `(${count})`);
}

async function patchRoutineFolder(routineId, folderId, position){
    /*const response = await fetch(`${url}routines/${routineId}/folder`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            "FolderId": Number(folderId),
            "Position": position
        })
    });
    return response.ok; codigo oficial*/
    return true; //mock: troque para false para ver a rotina voltar para a pasta de origem
}

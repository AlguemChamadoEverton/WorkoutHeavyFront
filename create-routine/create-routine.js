import {initMenu} from "../shared/menu.js";
/*import Cookies from "https://esm.sh/universal-cookie";

const url = "http://localhost:5255/";
let cookies = new Cookies();
const token = cookies.get('jwt_authorization'); codigo oficial*/

initMenu();

const homePage = "../index/home.html";
const routinesPage = "../routines/routines.html";

let library = [];           //exercícios vindos do backend; busca e filtros rodam em cima dessa lista
let routineExercises = [];  //exercícios adicionados: { uid, exercise, sets: [{ kg, reps }] }
let nextUid = 1;            //o mesmo exercício pode entrar duas vezes, então cada card tem seu próprio uid

const titleInput = document.getElementById("routine_title");
const saveButton = document.querySelector(".save_button");
const customModal = document.getElementById("custom_modal");
const customName = document.getElementById("custom_name");
const customEquipment = document.getElementById("custom_equipment");
const customMuscle = document.getElementById("custom_muscle");
const customSave = customModal.querySelector(".create_button");
const customType = document.getElementById("custom_type");
const customOtherMuscles = document.getElementById("custom_other_muscles");
const imageInput = customModal.querySelector(".image_input");
let otherMuscles = [];      //músculos secundários escolhidos no modal

if(!await authorize()){
    window.location.replace(homePage);
}
else{
    library = await getExercises();
    library.sort((a, b) => a.name.localeCompare(b.name));
    fillFilters(library);
    fillCustomSelects();
    renderLibrary();
}

// ---------- requisições ----------

async function authorize(){
    /*if(!token) return false;
    const response = await fetch(`${url}routines/create`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    });
    return response.ok; codigo oficial*/
    return true; //mock: troque para false para testar o redirecionamento ao home
}

async function getExercises(){
    /*const response = await fetch(`${url}exercises`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    });
    if(!response.ok) return [];
    let data = await response.json();
    return data.exercises; codigo oficial*/
    const response = `
    {
        "exercises":
        [
            { "id": 1, "name": "21s Bicep Curl", "muscle": "Biceps", "equipment": "Barbell", "image": null, "custom": false },
            { "id": 2, "name": "aaa", "muscle": "Hamstrings", "equipment": "None", "image": null, "custom": true },
            { "id": 3, "name": "Ab Scissors", "muscle": "Abdominals", "equipment": "None", "image": null, "custom": false },
            { "id": 4, "name": "Ab Wheel", "muscle": "Abdominals", "equipment": "Other", "image": null, "custom": false },
            { "id": 5, "name": "Aerobics", "muscle": "Cardio", "equipment": "None", "image": null, "custom": false },
            { "id": 6, "name": "Air Bike", "muscle": "Cardio", "equipment": "Machine", "image": null, "custom": false },
            { "id": 7, "name": "Arnold Press (Dumbbell)", "muscle": "Shoulders", "equipment": "Dumbbell", "image": null, "custom": false },
            { "id": 8, "name": "Around The World", "muscle": "Chest", "equipment": "Dumbbell", "image": null, "custom": false },
            { "id": 9, "name": "Bench Press (Barbell)", "muscle": "Chest", "equipment": "Barbell", "image": "https://raw.githubusercontent.com/everkinetic/data/master/src/images-web/bench-press-2.png", "custom": false },
            { "id": 10, "name": "Bulgarian Split Squat (Dumbbell)", "muscle": "Quadriceps", "equipment": "Dumbbell", "image": null, "custom": false },
            { "id": 11, "name": "Chest Dip (Weighted)", "muscle": "Chest", "equipment": "Other", "image": null, "custom": false },
            { "id": 12, "name": "Deadlift (Barbell)", "muscle": "Hamstrings", "equipment": "Barbell", "image": "https://raw.githubusercontent.com/everkinetic/data/master/src/images-web/barbell-dead-lifts-2.png", "custom": false },
            { "id": 13, "name": "Lateral Raise (Dumbbell)", "muscle": "Shoulders", "equipment": "Dumbbell", "image": null, "custom": false },
            { "id": 14, "name": "Leg Press (Machine)", "muscle": "Quadriceps", "equipment": "Machine", "image": null, "custom": false },
            { "id": 15, "name": "Overhead Press (Barbell)", "muscle": "Shoulders", "equipment": "Barbell", "image": null, "custom": false },
            { "id": 16, "name": "Pull Up (Weighted)", "muscle": "Lats", "equipment": "Other", "image": null, "custom": false },
            { "id": 17, "name": "Romanian Deadlift (Barbell)", "muscle": "Hamstrings", "equipment": "Barbell", "image": null, "custom": false },
            { "id": 18, "name": "Squat (Barbell)", "muscle": "Quadriceps", "equipment": "Barbell", "image": "https://raw.githubusercontent.com/everkinetic/data/master/src/images-web/barbell-squat-2.png", "custom": false },
            { "id": 19, "name": "Standing Calf Raise (Smith)", "muscle": "Calves", "equipment": "Machine", "image": null, "custom": false }
        ]
    }`;
    return JSON.parse(response).exercises;
}

async function postCustomExercise(){
    //FormData porque vai um arquivo junto; sem Content-Type, o navegador monta o multipart sozinho
    const body = new FormData();
    body.append("Name", customName.value.trim());
    body.append("Type", customType.value);
    body.append("Equipment", customEquipment.value);
    body.append("Muscle", customMuscle.value);
    otherMuscles.forEach(muscle => body.append("OtherMuscles", muscle));
    if(imageInput.files[0]) body.append("Image", imageInput.files[0]);
    /*const response = await fetch(`${url}exercise`, {
        method: "POST",
        headers: {
            'Authorization': `Bearer ${token}`
        },
        body: body
    });
    if(!response.ok) return null;
    return await response.json(); codigo oficial*/
    //mock vvvvv: o backend devolve o exercício salvo, já com id, url da imagem e marcado como custom
    const response = JSON.stringify({
        "id": Date.now(),
        "name": body.get("Name"),
        "type": body.get("Type"),
        "muscle": body.get("Muscle"),
        "other_muscles": body.getAll("OtherMuscles"),
        "equipment": body.get("Equipment"),
        "image": imageInput.files[0] ? URL.createObjectURL(imageInput.files[0]) : null,
        "custom": true
    });
    return JSON.parse(response);
}

async function postRoutine(){
    const body = {
        "Name": titleInput.value.trim(),
        "Exercises": routineExercises.map(item => ({
            "ExerciseId": item.exercise.id,
            "Sets": item.sets.map(set => ({ "Weight": Number(set.kg) || 0, "Reps": Number(set.reps) || 0 }))
        }))
    };
    /*const response = await fetch(`${url}routine`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(body)
    });
    return response.ok; codigo oficial*/

    //mock vvvvv: o backend salvaria a rotina na pasta My Routines e o GET /routines já traria ela.
    //Sem backend, guardo no sessionStorage para o routines.js mockado conseguir exibir.
    const response = JSON.stringify({
        "id": Date.now(),
        "name": body.Name,
        "exercises": routineExercises.map(item => item.exercise.name)
    });
    let created = JSON.parse(sessionStorage.getItem("mock_created_routines") ?? "[]");
    created.push(JSON.parse(response));
    sessionStorage.setItem("mock_created_routines", JSON.stringify(created));
    return true;
}

// ---------- biblioteca ----------

function fillFilters(exercises){
    fillSelect(document.getElementById("filter_equipment"), exercises.map(e => e.equipment));
    fillSelect(document.getElementById("filter_muscle"), exercises.map(e => e.muscle));
}

function fillSelect(select, values){
    [...new Set(values)].sort().forEach(value => select.add(new Option(value, value)));
}

function getFilters(){
    return {
        equipment: document.getElementById("filter_equipment").value, //"" = All Equipment
        muscle: document.getElementById("filter_muscle").value,       //"" = All Muscles
        search: document.getElementById("search_exercises").value
    };
}

function filterExercises(exercises, filters){
    let filteredExercises = [];
    exercises.forEach(exercise => {
        if(checkFilters(exercise, filters)) filteredExercises.push(exercise);
    });
    return filteredExercises;
}

function checkFilters(exercise, filters){
    return (exercise.name.toLowerCase().indexOf(filters.search.toLowerCase().trim()) !== -1) &&
    (exercise.muscle.indexOf(filters.muscle) !== -1) &&
    (exercise.equipment === filters.equipment || filters.equipment === "");
}

function renderLibrary(){
    let items = document.querySelector(".library_items");
    let filtered = filterExercises(library, getFilters());
    items.replaceChildren(...filtered.map(renderLibraryItem));
    document.querySelector(".library_empty").style.display = filtered.length === 0 ? "" : "none";
}

function renderLibraryItem(exercise){
    let item_template = document.getElementById("library_item").content.cloneNode(true);
    let item = item_template.querySelector(".library_item");
    item.dataset.id = exercise.id;
    if(exercise.image) item.querySelector(".exercise_img").src = exercise.image;
    item.querySelector(".library_name").textContent = exercise.name;
    item.querySelector(".library_muscle").textContent = exercise.muscle;
    if(exercise.custom) item.querySelector(".custom_badge").style.display = "";
    return item;
}

document.getElementById("filter_equipment").addEventListener("change", renderLibrary);
document.getElementById("filter_muscle").addEventListener("change", renderLibrary);
document.getElementById("search_exercises").addEventListener("input", renderLibrary);

document.querySelector(".library_items").addEventListener("click", (event) => {
    let item = event.target.closest(".library_item");
    if(!item) return;
    let exercise = library.find(e => e.id === Number(item.dataset.id));
    routineExercises.push({ uid: nextUid++, exercise, sets: [{ kg: "", reps: "" }] });
    renderRoutine();
});

// ---------- custom exercise ----------

//as opções do modal são as mesmas dos filtros (vindas do backend), sem o "All ..."
function fillCustomSelects(){
    copyOptions(document.getElementById("filter_equipment"), customEquipment);
    copyOptions(document.getElementById("filter_muscle"), customMuscle);
    copyOptions(document.getElementById("filter_muscle"), customOtherMuscles);
}

function copyOptions(from, to){
    [...from.options].slice(1).forEach(option => to.add(new Option(option.text, option.value)));
}

function openCustomModal(){
    customModal.style.display = "";
    customName.focus();
}

function closeCustomModal(){
    customName.value = "";
    customType.value = "";
    customEquipment.value = "";
    customMuscle.value = "";
    otherMuscles = [];
    renderOtherMuscles();
    imageInput.value = "";
    renderImagePreview();
    customSave.disabled = true;
    customModal.style.display = "none";
}

function updateCustomSave(){
    customSave.disabled = customName.value.trim() === "" || customType.value === "" ||
        customEquipment.value === "" || customMuscle.value === "";
}

function renderImagePreview(){
    let file = imageInput.files[0];
    let preview = customModal.querySelector(".image_selected");
    preview.style.display = file ? "" : "none";
    customModal.querySelector(".image_icon").style.display = file ? "none" : "";
    if(file) preview.src = URL.createObjectURL(file);
}

function renderOtherMuscles(){
    let chips = otherMuscles.map(muscle => {
        let chip_template = document.getElementById("muscle_chip").content.cloneNode(true);
        let chip = chip_template.querySelector(".muscle_chip");
        chip.dataset.muscle = muscle;
        chip.querySelector(".chip_name").textContent = muscle;
        return chip;
    });
    customModal.querySelector(".other_muscles").replaceChildren(...chips);
}

function addCustomToLibrary(exercise){
    updateLibrary(exercise);
    renderLibrary();
}

function updateLibrary(exercise){
    library.push(exercise);
    library.sort((a, b) => a.name.localeCompare(b.name));
}

document.querySelector(".custom_exercise").addEventListener("click", openCustomModal);
customModal.addEventListener("input", updateCustomSave);
customModal.addEventListener("change", updateCustomSave);

//fecha no X ou clicando fora do modal
customModal.addEventListener("click", (event) => {
    if(event.target.classList.contains("modal_overlay") || event.target.closest(".modal_close")){
        closeCustomModal();
    }
    else if(event.target.closest(".remove_chip")){
        let muscle = event.target.closest(".muscle_chip").dataset.muscle;
        otherMuscles = otherMuscles.filter(m => m !== muscle);
        renderOtherMuscles();
    }
    else if(event.target.closest(".add_image")){
        imageInput.click();
    }
});

imageInput.addEventListener("change", renderImagePreview);

//cada músculo escolhido vira um chip e o select volta para "Select..."
customOtherMuscles.addEventListener("change", () => {
    let muscle = customOtherMuscles.value;
    if(muscle && !otherMuscles.includes(muscle)) otherMuscles.push(muscle);
    customOtherMuscles.value = "";
    renderOtherMuscles();
});

document.addEventListener("keydown", (event) => {
    if(event.key === "Escape" && customModal.style.display !== "none") closeCustomModal();
});

customSave.addEventListener("click", async () => {
    if(customSave.disabled) return;
    customSave.disabled = true; //evita POST duplicado com clique duplo
    let exercise = await postCustomExercise();
    if(exercise){
        addCustomToLibrary(exercise);
        closeCustomModal();
    }
    else{
        updateCustomSave();
    }
});

// ---------- rotina ----------

function renderRoutine(){
    let list = document.querySelector(".routine_exercises");
    list.replaceChildren(...routineExercises.map(renderRoutineExercise));
    document.getElementById("no_exercises").style.display = routineExercises.length === 0 ? "" : "none";
    updateSummary();
    updateSaveButton();
}

function renderRoutineExercise(item){
    let exercise_template = document.getElementById("routine_exercise").content.cloneNode(true);
    let card = exercise_template.querySelector(".routine_exercise");
    card.dataset.uid = item.uid;
    if(item.exercise.image) card.querySelector(".exercise_img").src = item.exercise.image;
    card.querySelector(".exercise_name").textContent = item.exercise.name;
    let sets = card.querySelector(".sets");
    item.sets.forEach((set, index) => sets.appendChild(renderSet(set, index)));
    return card;
}

function renderSet(set, index){
    let set_template = document.getElementById("set_row").content.cloneNode(true);
    let row = set_template.querySelector(".set_row");
    row.dataset.index = index;
    row.querySelector(".set_number").textContent = index + 1;
    row.querySelector('[data-field="kg"]').value = set.kg;
    row.querySelector('[data-field="reps"]').value = set.reps;
    return row;
}

function findRoutineExercise(element){
    let uid = Number(element.closest(".routine_exercise").dataset.uid);
    return routineExercises.find(item => item.uid === uid);
}

document.querySelector(".routine_exercises").addEventListener("click", (event) => {
    if(event.target.closest(".remove_exercise")){
        let item = findRoutineExercise(event.target);
        routineExercises = routineExercises.filter(i => i !== item);
        renderRoutine();
    }
    else if(event.target.closest(".add_set")){
        findRoutineExercise(event.target).sets.push({ kg: "", reps: "" });
        renderRoutine();
    }
    else if(event.target.closest(".remove_set")){
        let index = Number(event.target.closest(".set_row").dataset.index);
        findRoutineExercise(event.target).sets.splice(index, 1);
        renderRoutine();
    }
});

//digitar no kg/reps só atualiza o estado, sem re-renderizar (senão o input perderia o foco)
document.querySelector(".routine_exercises").addEventListener("input", (event) => {
    let input = event.target.closest(".set_input");
    if(!input) return;
    let index = Number(input.closest(".set_row").dataset.index);
    findRoutineExercise(input).sets[index][input.dataset.field] = input.value;
});

function updateSummary(){
    document.getElementById("summary_exercises").textContent = routineExercises.length;
    document.getElementById("summary_sets").textContent =
        routineExercises.reduce((total, item) => total + item.sets.length, 0);
}

function updateSaveButton(){
    saveButton.disabled = titleInput.value.trim().length === 0 || routineExercises.length === 0;
}

titleInput.addEventListener("input", updateSaveButton);

saveButton.addEventListener("click", async () => {
    if(saveButton.disabled) return;
    saveButton.disabled = true; //evita POST duplicado com clique duplo
    if(await postRoutine()){
        window.location.replace(routinesPage); //replace: o "voltar" do navegador não reabre o formulário
    }
    else{
        updateSaveButton();
    }
});

document.querySelector(".back_button").addEventListener("click", () => {
    window.location = routinesPage;
});

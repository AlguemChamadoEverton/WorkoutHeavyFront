import {getCommentIconByList, renderCommentOverlay, updateCommentIcon, setLikeCount, changeLikeColor, checkLike}
    from "../shared/social.js";
/*import Cookies from "https://esm.sh/universal-cookie";

const url = "http://localhost:5255/";
let cookies = new Cookies();
const token = cookies.get('jwt_authorization'); codigo oficial*/

let response;
//response = await getWorkout(); desativado para mock

/*async function getWorkout(){
    let id = new URLSearchParams(window.location.search).get("id");
    return await fetch(`${url}workouts/${id}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    });
} codigo oficial*/

response = `
{
    "id": 1,
    "like": 48,
    "liked": 1,
    "comments": 4,
    "exercises":
    [
        {
            "image": "https://raw.githubusercontent.com/everkinetic/data/master/src/images-web/barbell-squat-2.png",
            "name": "5 sets Squat (Barbell)",
            "sets":
            [
                { "type": "warmup", "weight": 60, "reps": 10, "records": [] },
                { "type": "warmup", "weight": 80, "reps": 6, "records": [] },
                { "type": "normal", "weight": 120, "reps": 5, "records": [] },
                { "type": "normal", "weight": 130, "reps": 4, "records": ["Best Weight", "Best 1 Rep Max"] },
                { "type": "failure", "weight": 130, "reps": 3, "records": [] }
            ]
        },
        {
            "image": "https://raw.githubusercontent.com/everkinetic/data/master/src/images-web/barbell-dead-lifts-2.png",
            "name": "5 sets Deadlift (Barbell)",
            "sets":
            [
                { "type": "warmup", "weight": 80, "reps": 8, "records": [] },
                { "type": "normal", "weight": 150, "reps": 5, "records": [] },
                { "type": "normal", "weight": 170, "reps": 3, "records": ["Best Weight"] },
                { "type": "normal", "weight": 180, "reps": 1, "records": ["Best 1 Rep Max", "Best Volume"] },
                { "type": "drop", "weight": 120, "reps": 8, "records": [] }
            ]
        },
        {
            "image": "https://raw.githubusercontent.com/everkinetic/data/master/src/images-web/barbell-dead-lifts-2.png",
            "name": "4 sets Romanian Deadlift (Barbell)",
            "sets":
            [
                { "type": "normal", "weight": 90, "reps": 10, "records": [] },
                { "type": "normal", "weight": 100, "reps": 8, "records": [] },
                { "type": "normal", "weight": 100, "reps": 8, "records": [] },
                { "type": "failure", "weight": 100, "reps": 6, "records": [] }
            ]
        },
        {
            "image": "https://raw.githubusercontent.com/everkinetic/data/master/src/images-web/barbell-dead-lifts-2.png",
            "name": "4 sets Bent Over Row (Barbell)",
            "sets":
            [
                { "type": "warmup", "weight": 40, "reps": 12, "records": [] },
                { "type": "normal", "weight": 70, "reps": 10, "records": [] },
                { "type": "normal", "weight": 80, "reps": 8, "records": ["Best Volume"] },
                { "type": "drop", "weight": 50, "reps": 15, "records": [] }
            ]
        },
        {
            "image": "https://raw.githubusercontent.com/everkinetic/data/master/src/images-web/barbell-squat-2.png",
            "name": "3 sets Barbell Shrug",
            "sets":
            [
                { "type": "normal", "weight": 100, "reps": 12, "records": [] },
                { "type": "normal", "weight": 110, "reps": 10, "records": [] },
                { "type": "failure", "weight": 110, "reps": 8, "records": [] }
            ]
        },
        {
            "image": "https://raw.githubusercontent.com/everkinetic/data/master/src/images-web/bench-press-2.png",
            "name": "1 set Bench Press (Barbell)",
            "sets":
            [
                { "type": "failure", "weight": 105, "reps": 1, "records": ["Best 1 Rep Max"] }
            ]
        }
    ],
    "commentaries":
    [
        {
            "image": "../shared/guest.svg",
            "username": "marina.lifts",
            "time": "Today at 7:40 AM",
            "commentary": "100kg no supino?! Que evolução, monstro 🔥"
        },
        {
            "image": "../shared/guest.svg",
            "username": "caio_strength",
            "time": "Today at 8:02 AM",
            "commentary": "4 PRs num treino só, respeita 💪"
        },
        {
            "image": "../shared/guest.svg",
            "username": "julia.fit",
            "time": "Today at 8:15 AM",
            "commentary": "Bora treinar junto semana que vem!"
        },
        {
            "image": "../shared/guest.svg",
            "username": "rodrigo.pr",
            "time": "Today at 9:30 AM",
            "commentary": "Consistência pura. Inspiração demais!"
        }
    ]
}`;

if(1 === 1){ //response.ok desativado para mock
    //let workout = await response.json(); desativado para mock
    let workout = JSON.parse(response);
    renderWorkout(workout);
    renderSocial(workout);
}
else{
    renderSessionNotFound();
}

function renderWorkout(workout){
    let workout_template = document.querySelector(".workout_template").content.cloneNode(true);
    //o perfil é um template dentro do template do card, então também precisa ser clonado
    let profile_template = workout_template.querySelector("template");
    profile_template.replaceWith(profile_template.content.cloneNode(true));
    let exercisesSummary = workout_template.querySelector('#exercises_summary');
    workout.exercises.forEach(exercise => exercisesSummary.appendChild(renderSession(exercise)));
    document.querySelector(".page_main").appendChild(workout_template);
}

function renderSession(exercise){
    let session_template = document.getElementById("session").content.cloneNode(true);
    session_template.querySelector('.exercise_img').src = exercise.image;
    session_template.querySelector('.exercise_name').textContent = exercise.name;
    let session = session_template.querySelector('.session');
    //só as séries normais são numeradas; aquecimento, falha e drop usam letra
    let labels = {warmup: "W", failure: "F", drop: "D"};
    let normalCount = 0;
    exercise.sets.forEach(set => {
        let set_template = document.getElementById("set_info").content.cloneNode(true);
        let status = set_template.querySelector('.set_status');
        status.className = `set_status ${set.type}_set`;
        status.textContent = set.type === "normal" ? ++normalCount : labels[set.type];
        set_template.querySelector('.weight_reps').textContent = `${set.weight}kg x ${set.reps} reps`;
        set.records.forEach(record => {
            let best_template = document.getElementById("best").content.cloneNode(true);
            best_template.querySelector('.best').textContent = `🏅 ${record}`;
            set_template.querySelector('.sets_records').appendChild(best_template);
        });
        session.appendChild(set_template);
    });
    return session_template;
}

function renderSessionNotFound(){
    let not_found_template = document.querySelector(".not_found_template").content.cloneNode(true);
    document.querySelector(".page_main").appendChild(not_found_template);
}

function renderSocial(workout){
    let log = document.querySelector(".workout_log");
    log.id = workout.id;
    //comentários e caixa de comentar só no overlay; no card ficam ocultos pelo css
    let commentariesList = log.querySelector('#comment');
    getCommentIconByList(commentariesList).onclick = function () {
        renderCommentOverlay(commentariesList, workout);
    };
    updateCommentIcon(workout.commentaries.length, commentariesList);
    setLikeCount(log, workout.like);
    changeLikeColor(log, workout.liked);
    checkLike(log, workout, false);
}
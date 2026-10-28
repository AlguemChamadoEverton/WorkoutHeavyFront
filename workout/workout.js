import {getCommentIconByList, renderCommentOverlay, updateCommentIcon, setLikeCount, changeLikeColor, checkLike}
    from "../shared/social.js";

let response = `
{
    "id": 1,
    "like": 48,
    "liked": 1,
    "comments": 4,
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

let workout = JSON.parse(response);
renderWorkout();
renderSocial(workout);

function renderWorkout(){
    let workout_template = document.querySelector(".workout_template").content.cloneNode(true);
    //o perfil é um template dentro do template do card, então também precisa ser clonado
    let profile_template = workout_template.querySelector("template");
    profile_template.replaceWith(profile_template.content.cloneNode(true));
    document.querySelector(".page_main").appendChild(workout_template);
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

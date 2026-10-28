import Cookies from "https://esm.sh/universal-cookie";
import {showComments, getCommentIconByList, renderCommentOverlay, updateCommentIcon, renderViewAllButton,
    changeLikeColor, checkLike, checkCommentInput} from "../shared/social.js";

let response;
const url = "http://localhost:5255/";
let cookies = new Cookies();
const token = cookies.get('jwt_authorization');
window.addEventListener("pageshow", (event) => {
    if(!token){
        window.location.replace("http://localhost:63342/WorkoutHeavyFront/login/login.html");
    }
});

/*const response = await fetch(`${url}workouts`, {
    method: "GET",
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    },
}) codigo oficial*/

response = `
{
    "workouts": 
    [
        {
            "id": 1,
            "image": "../shared/guest.svg",
            "username": "everton.dev",
            "data": "Oct 27, 2026, 7:12 AM",
            "name": "Push Day - Peito e Tríceps",
            "duration": "1h 12m",
            "volume": "12,480 kg",
            "records": 4,
            "like": 48,
            "liked": 1,
            "comments": 5,
            "exercises": 
            [
                {
                    "image": "https://raw.githubusercontent.com/everkinetic/data/master/src/images-web/bench-press-2.png",
                    "name": "4 sets Bench Press (Barbell)"
                },
                {
                    "image": "https://raw.githubusercontent.com/everkinetic/data/master/src/images-web/bench-press-2.png",
                    "name": "4 sets Incline Bench Press (Barbell)"
                },
                {
                    "image": "https://raw.githubusercontent.com/everkinetic/data/master/src/images-web/bench-press-2.png",
                    "name": "3 sets Close Grip Bench Press"
                },
                {
                    "image": "https://raw.githubusercontent.com/everkinetic/data/master/src/images-web/bench-press-2.png",
                    "name": "3 sets Decline Bench Press"
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
                },
                {
                    "image": "../shared/guest.svg",
                    "username": "bia.gym",
                    "time": "Today at 10:05 AM",
                    "commentary": "Esse volume tá absurdo 👏"
                }
            ]
        },
        {
            "id": 2,
            "image": "../shared/guest.svg",
            "username": "marina.lifts",
            "data": "Oct 26, 2026, 6:45 PM",
            "name": "Leg Day - Força",
            "duration": "1h 28m",
            "volume": "18,920 kg",
            "records": 2,
            "like": 31,
            "liked": 0,
            "comments": 2,
            "exercises": 
            [
                {
                    "image": "https://raw.githubusercontent.com/everkinetic/data/master/src/images-web/barbell-squat-2.png",
                    "name": "5 sets Squat (Barbell)"
                },
                {
                    "image": "https://raw.githubusercontent.com/everkinetic/data/master/src/images-web/barbell-dead-lifts-2.png",
                    "name": "4 sets Romanian Deadlift (Barbell)"
                }
            ],
            "commentaries":
            [
                {
                    "image": "../shared/guest.svg",
                    "username": "everton.dev",
                    "time": "Oct 26, 2026, 7:10 PM",
                    "commentary": "Agachamento impecável! 🦵"
                },
                {
                    "image": "../shared/guest.svg",
                    "username": "caio_strength",
                    "time": "Oct 26, 2026, 7:32 PM",
                    "commentary": "Quase 19 toneladas, absurdo"
                }
            ]
        },
        {
            "id": 3,
            "image": "../shared/guest.svg",
            "username": "caio_strength",
            "data": "Oct 25, 2026, 9:20 AM",
            "name": "Pull Day - Costas e Bíceps",
            "duration": "1h 05m",
            "volume": "10,350 kg",
            "records": 1,
            "like": 22,
            "liked": 1,
            "comments": 1,
            "exercises": 
            [
                {
                    "image": "https://raw.githubusercontent.com/everkinetic/data/master/src/images-web/barbell-dead-lifts-2.png",
                    "name": "5 sets Deadlift (Barbell)"
                },
                {
                    "image": "https://raw.githubusercontent.com/everkinetic/data/master/src/images-web/barbell-dead-lifts-2.png",
                    "name": "4 sets Bent Over Row (Barbell)"
                },
                {
                    "image": "https://raw.githubusercontent.com/everkinetic/data/master/src/images-web/barbell-squat-2.png",
                    "name": "3 sets Barbell Shrug"
                }
            ],
            "commentaries":
            [
                {
                    "image": "../shared/guest.svg",
                    "username": "julia.fit",
                    "time": "Oct 25, 2026, 10:01 AM",
                    "commentary": "Terra de 180kg é outro nível 🏆"
                }
            ]
        }
    ]
}`;

const noActivity = document.getElementById("no_activity");
if(1 === 1){
    //let data = await response.json(); desativado para mock
    let data = JSON.parse(response);
    data.workouts.forEach(workout => renderWorkout(workout));
}

else if(response.status === 404){
    noActivity.style.display = "";
}
else{
    noActivity.style.display = "";
}

export function renderWorkout(workout){
    let workout_template = document.getElementById("workout").content.cloneNode(true);
    workout_template.querySelector('.log_profile_pic').src = workout.image;
    workout_template.querySelector('#workout_log_username').textContent = workout.username;
    workout_template.querySelector('.workout_data').textContent = workout.data;
    workout_template.querySelector('.workout_routine_name').textContent = workout.name;
    workout_template.querySelector('#duration_value').textContent = workout.duration;
    workout_template.querySelector('#volume_value').textContent = workout.volume;
    workout_template.querySelector('#records_value').textContent = workout.records;
    workout_template.querySelector('#like').textContent = workout.like;
    workout_template.querySelector('#comments_count').textContent = workout.comments;
    let exercises = workout.exercises;
    let exerciseLength = exercises.length;
    let m = exerciseLength < 3 ? exerciseLength : 3;
    for (let i = 0; i < m; i++) {
        let exercise_template = document.getElementById("exercises").content.cloneNode(true);
        exercise_template.querySelector('.exercise_img').src = exercises[i].image;
        exercise_template.querySelector('.exercise_text').textContent = exercises[i].name;
        workout_template.querySelector('#exercises_summary').appendChild(exercise_template);
    }
    if (exerciseLength > 3) {
        let seeMoreEx = document.getElementById('see_more_ex').content.cloneNode(true);
        seeMoreEx.querySelector('#exercises_more_ex').textContent = `See ${exerciseLength - 3} more exercises`;
        workout_template.querySelector('#exercises_summary').appendChild(seeMoreEx);
    }
    let commentaries = workout.commentaries;
    let commentariesLength = commentaries.length;
    let n = commentariesLength < 2 ? commentariesLength : 2;
    let commentariesList = workout_template.querySelector('#comment');
    commentariesList.appendChild(showComments(n, commentaries));
    getCommentIconByList(commentariesList).onclick = function () {
        renderCommentOverlay(commentariesList, workout);
    };
    updateCommentIcon(commentariesLength, commentariesList);
    if(commentariesLength > 2){
        renderViewAllButton(commentariesList, commentariesLength, workout);
    }
    let home = document.querySelector(".home");
    let actualLog = home.appendChild(workout_template.firstElementChild);
    actualLog.id = workout.id;
    changeLikeColor(actualLog, workout.liked);
    checkLike(actualLog, workout, false);
    checkCommentInput(workout, actualLog, false);
}
document.getElementById("exit").addEventListener("click", () => {
    cookies.remove('jwt_authorization', {path: '/'});
    window.location = "http://localhost:63342/WorkoutHeavyFront/login/login.html";
});

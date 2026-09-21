import Cookies from "https://esm.sh/universal-cookie";

let response;
const url = "http://localhost:5255/";
let cookies = new Cookies();
const token = cookies.get('jwt_authorization');
window.addEventListener("pageshow", (event) => {
    if(!token){
        window.location.replace("http://localhost:63342/MeuPrimeiroFront/login/login.html");
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
            "image": "https://i.pinimg.com/736x/b4/0c/c5/b40cc599980b8b0a944d304e205c6fa0.jpg",
            "username": "Xestro",
            "data": "Dec 30, 2025, 11:23PM",
            "name": "Maluquisse",
            "duration": "1h30m",
            "volume": "8000kg",
            "records": 3,
            "like": 3,
            "comments": 3,
            "exercises": 
            [
                {
                    "image": "https://barbend.com/wp-content/uploads/2025/01/Sitko-1.jpg",
                    "name": "Deadlift"
                },
                {
                    "image": "https://barbend.com/wp-content/uploads/2025/01/Sitko-1.jpg",
                    "name": "Squat"
                },
                {
                    "image": "https://barbend.com/wp-content/uploads/2025/01/Sitko-1.jpg",
                    "name": "Bench Press"
                },
                {
                    "image": "https://barbend.com/wp-content/uploads/2025/01/Sitko-1.jpg",
                    "name": "Bench Press"
                }
            ],
            "commentaries":
            [
                {
                    "image": "https://d2l9nsnmtah87f.cloudfront.net/profile-images/rafinhapiercer-ae12c85a-1e7f-440f-b20e-e890c4a15f61-thumbnail.jpg",
                    "username": "rafinha",
                    "time": "Yesterday at 6:07 AM",
                    "commentary": "Oiiiiiiiiiiiiiiiii"
                },
                {
                    "image": "https://d2l9nsnmtah87f.cloudfront.net/profile-images/sofi_brandao-bb65b81c-44df-4ae9-9937-8b696da82a93.jpg",
                    "username": "sofi",
                    "time": "Dec 25, 2024, 12:30PM",
                    "commentary": "legal"
                },
                {
                    "image": "https://d2l9nsnmtah87f.cloudfront.net/profile-images/yllanao-60d81e5a-f969-431d-99a4-4c52e4f8ee9f.jpg",
                    "username": "b",
                    "time": "Dec 25, 2024, 12:30PM",
                    "commentary": "macaco"
                },
                {
                    "image": "https://d2l9nsnmtah87f.cloudfront.net/profile-images/yllanao-60d81e5a-f969-431d-99a4-4c52e4f8ee9f.jpg",
                    "username": "k",
                    "time": "Dec 30, 2024, 12:38PM",
                    "commentary": "tigre"
                },
                {
                    "image": "https://d2l9nsnmtah87f.cloudfront.net/profile-images/rafinhapiercer-ae12c85a-1e7f-440f-b20e-e890c4a15f61-thumbnail.jpg",
                    "username": "rafinha",
                    "time": "Yesterday at 6:07 AM",
                    "commentary": "Oiiiiiiiiiiiiiiiii"
                },
                {
                    "image": "https://d2l9nsnmtah87f.cloudfront.net/profile-images/sofi_brandao-bb65b81c-44df-4ae9-9937-8b696da82a93.jpg",
                    "username": "sofi",
                    "time": "Dec 25, 2024, 12:30PM",
                    "commentary": "legal"
                },
                {
                    "image": "https://d2l9nsnmtah87f.cloudfront.net/profile-images/yllanao-60d81e5a-f969-431d-99a4-4c52e4f8ee9f.jpg",
                    "username": "b",
                    "time": "Dec 25, 2024, 12:30PM",
                    "commentary": "macaco"
                },
                {
                    "image": "https://d2l9nsnmtah87f.cloudfront.net/profile-images/yllanao-60d81e5a-f969-431d-99a4-4c52e4f8ee9f.jpg",
                    "username": "k",
                    "time": "Dec 30, 2024, 12:38PM",
                    "commentary": "tigre"
                },
                {
                    "image": "https://d2l9nsnmtah87f.cloudfront.net/profile-images/rafinhapiercer-ae12c85a-1e7f-440f-b20e-e890c4a15f61-thumbnail.jpg",
                    "username": "rafinha",
                    "time": "Yesterday at 6:07 AM",
                    "commentary": "Oiiiiiiiiiiiiiiiii"
                },
                {
                    "image": "https://d2l9nsnmtah87f.cloudfront.net/profile-images/sofi_brandao-bb65b81c-44df-4ae9-9937-8b696da82a93.jpg",
                    "username": "sofi",
                    "time": "Dec 25, 2024, 12:30PM",
                    "commentary": "legal"
                },
                {
                    "image": "https://d2l9nsnmtah87f.cloudfront.net/profile-images/yllanao-60d81e5a-f969-431d-99a4-4c52e4f8ee9f.jpg",
                    "username": "b",
                    "time": "Dec 25, 2024, 12:30PM",
                    "commentary": "macaco"
                },
                {
                    "image": "https://d2l9nsnmtah87f.cloudfront.net/profile-images/yllanao-60d81e5a-f969-431d-99a4-4c52e4f8ee9f.jpg",
                    "username": "k",
                    "time": "Dec 30, 2024, 12:38PM",
                    "commentary": "tigre"
                }
            ]
        },
        {
            "id": 2,
            "image": "https://i.pinimg.com/736x/b4/0c/c5/b40cc599980b8b0a944d304e205c6fa0.jpg",
            "username": "Xestro",
            "data": "Dec 30, 2025, 11:23PM",
            "name": "Maluquaisse",
            "duration": "1h35m",
            "volume": "8005kg",
            "records": 10,
            "like": 2,
            "comments": 2,
            "exercises": 
            [
                {
                    "image": "https://pump-app.s3.eu-west-2.amazonaws.com/exercise-thumbnails/00251201-Barbell-Bench-Press_Chest_thumbnail@3x.jpg",
                    "name": "Deadlift"
                },
                {
                    "image": "https://barbend.com/wp-content/uploads/2025/01/Sitko-1.jpg",
                    "name": "Squat"
                }
            ],
            "commentaries":
            [
            ]
        },
        {
            "id": 3,
            "image": "https://i.pinimg.com/736x/b4/0c/c5/b40cc599980b8b0a944d304e205c6fa0.jpg",
            "username": "Xestro",
            "data": "Dec 30, 2025, 11:23PM",
            "name": "Maluquaisse",
            "duration": "1h35m",
            "volume": "8005kg",
            "records": 10,
            "like": 1,
            "comments": 1,
            "exercises": 
            [
                {
                    "image": "https://barbend.com/wp-content/uploads/2025/01/Sitko-1.jpg",
                    "name": "Deadlift"
                },
                {
                    "image": "https://barbend.com/wp-content/uploads/2025/01/Sitko-1.jpg",
                    "name": "Squat"
                },
                {
                    "image": "https://barbend.com/wp-content/uploads/2025/01/Sitko-1.jpg",
                    "name": "Squat"
                },
                {
                    "image": "https://barbend.com/wp-content/uploads/2025/01/Sitko-1.jpg",
                    "name": "Squat"
                },
                {
                    "image": "https://barbend.com/wp-content/uploads/2025/01/Sitko-1.jpg",
                    "name": "Squat"
                }
            ],
            "commentaries":
            [
                {
                    "image": "https://d2l9nsnmtah87f.cloudfront.net/profile-images/rafinhapiercer-ae12c85a-1e7f-440f-b20e-e890c4a15f61-thumbnail.jpg",
                    "username": "rafinha",
                    "time": "Yesterday at 6:07 AM",
                    "commentary": "Oiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii"
                },
                {
                    "image": "https://d2l9nsnmtah87f.cloudfront.net/profile-images/sofi_brandao-bb65b81c-44df-4ae9-9937-8b696da82a93.jpg",
                    "username": "sofi",
                    "time": "Dec 25, 2024, 12:30PM",
                    "commentary": "legal"
                },
                {
                    "image": "https://lh3.googleusercontent.com/a/ACg8ocLVkw5rPXMrpfIPv12qQp9tCNPj7Au1yNkVEEbESWRxy4rRDndkeA=s96-c",
                    "username": "b",
                    "time": "Dec 25, 2024, 12:30PM",
                    "commentary": "macaco"
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
    checkLike();
    checkCommentInput(workout, actualLog, false);
}
export function checkCommentInput(workout, actualLog, overlay = false){
    let inputComment = actualLog.querySelector('#comentario');
    let postButton = actualLog.querySelector('.post_comment');
    inputComment.addEventListener("input", (event) => {
        let inputComment = event.currentTarget.value;
        let postStyle = postButton.style;
        if(inputComment.length > 0) {
            postStyle.cursor = "pointer";
            postStyle.color = "blue";
            postButton.onclick = async function(event) {await postComment(event, workout, overlay);}
        }
        else{
            disablePost(postButton, postStyle);
        }
    })
}

export async function postComment(event, workout, overlay){
        let postButton = event.currentTarget;
        let input = postButton.parentElement.querySelector("#comentario");
        let commentary = input.value;
        /*response = await fetch(`${url}commentary`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                commentary: `${commentary}`
            })
        })desativado para mock*/
        let response = `
        {
            "image": "https://i.pinimg.com/736x/b4/0c/c5/b40cc599980b8b0a944d304e205c6fa0.jpg",
            "username": "pl",
            "commentary": ${JSON.stringify(commentary)}
        }`
        let responseParse = JSON.parse(response);

        //se tiver resposta boa executa (mockado pq não tem o endpoint)
        if(1===1) {
            clearInput(input);
            disablePost(postButton, postButton.style);
            let comment_template = document.getElementById("tpl_comment").content.cloneNode(true);
            let commentaries = workout.commentaries;
            commentaries.push({image: responseParse.image, username: responseParse.username, time: "Today at 08:00 PM", commentary: responseParse.commentary});
            comment_template.querySelector("#comment_profile_pic").src = responseParse.image;
            comment_template.querySelector("#comment_user").textContent = responseParse.username;
            comment_template.querySelector("#comment_text").textContent = responseParse.commentary;
            let commentariesList = event.currentTarget.parentElement.parentElement.querySelector('#comment');
            updateCommentary(overlay, comment_template, commentariesList, commentaries.length, workout);
        }
}
export function renderCommentOverlay(commentariesElementList, workout){
    const body = document.body;
    body.style.overflowY = "hidden";
    let allComments = workout.commentaries;
    let workoutDone = commentariesElementList.parentElement.parentElement.cloneNode(true);
    clearInput(workoutDone.querySelector('#comentario'));
    workoutDone.querySelector('#exercises_summary').remove();
    if(workoutDone.querySelector('.link') !== null) workoutDone.querySelector('.link').remove();
    workoutDone.prepend(document.getElementById("close_scroll").content.cloneNode(true));
    let commentList = workoutDone.querySelector('#comment');
    getCommentIconByList(commentList).parentElement.remove();
    while(commentList.firstChild) commentList.removeChild(commentList.firstChild);
    if(allComments.length > 7) commentList.style.overflowY = "scroll";
    commentList.appendChild(showComments(allComments.length, allComments));
    commentList.after(workoutDone.querySelector('.break_line'),workoutDone.querySelector('#reactions'));
    let commentOverlay = document.getElementById("comment_overlay").content.cloneNode(true);
    commentOverlay.querySelector('#comment_box_overlay').appendChild(workoutDone);
    let overlayPage = body.prependChild(commentOverlay.firstElementChild);
    document.getElementById("comment_box_background").addEventListener("click", closeOverlay);
    workoutDone.querySelector("#x_button").addEventListener("click", closeOverlay);
    checkCommentInput(workout, overlayPage, true);

}
export function showComments(n, commentaries){
    let commentsList = document.createDocumentFragment();
    for(let j = 0; j < n; j++){
        let comment_template = document.getElementById("tpl_comment").content.cloneNode(true);
        comment_template.querySelector('#comment_user').textContent = commentaries[j].username;
        comment_template.querySelector('#comment_profile_pic').src = commentaries[j].image;
        comment_template.querySelector('.time_ago').textContent = commentaries[j].time;
        comment_template.querySelector('#comment_text').textContent = commentaries[j].commentary;
        commentsList.appendChild(comment_template);
    }
    return commentsList;
}

export function closeOverlay(){
    document.body.querySelector('.overlay').remove();
    document.body.style.overflowY = "scroll";
}

export function updateCommentary(overlay, comment_template, commentariesList, commentariesLength, workout){
    if(overlay === true) {
        addCommentary(commentariesList, comment_template.cloneNode(true));
        checkOverflow(workout, commentariesList);
        let home_list = searchLogByWorkout(workout).querySelector('#comment');
        updateCommentIcon(commentariesLength, home_list);
        updateHomeComments(home_list, comment_template, commentariesLength, workout);
    }
    else{
        updateCommentIcon(commentariesLength, commentariesList);
        if(commentariesList.childElementCount < 2) addCommentary(commentariesList, comment_template)
        else renderViewAllButton(commentariesList, commentariesLength, workout);
    }
}
export function renderViewAllButton(commentariesElementList, commentariesLength, workout){
    if (commentariesElementList.querySelector('#exercises_more') === null){
        let seeMore = document.getElementById('see_more').content.cloneNode(true);
        seeMore.querySelector('#exercises_more').textContent = `View all ${commentariesLength} comments`;
        commentariesElementList.appendChild(seeMore);
        getViewAllBtn(commentariesElementList).onclick = function () {
            renderCommentOverlay(commentariesElementList, workout);
        };
    }
    else {
        commentariesElementList.querySelector('#exercises_more').textContent = `View all ${commentariesLength} comments`;
    }
}
export function clearInput(input){
    input.value = '';
}
export function disablePost(postButton, postStyle){
    postButton.onclick = false;
    postStyle.cursor = "";
    postStyle.color = "gray";
}
export function addCommentary(commentariesList, comment_template){
    commentariesList.appendChild(comment_template);
}
export function checkOverflow(workout, commentariesList){
    if(workout.commentaries.length > 7) {commentariesList.style.overflowY = "scroll"}
}
export function updateCommentIcon(commentariesLength, home_list){
    home_list.parentElement.querySelector('#comments_count').textContent = `${commentariesLength}`;
}
export function searchLogByWorkout(workout){
    let workout_List = document.getElementsByClassName('workout_log');
    for(let n = 0; n < workout_List.length; n++){
        if (parseInt(workout_List[n].id) === workout.id){
            return workout_List[n];
        }
    }
}
export function getCommentIconByList(commentariesList){
    return commentariesList.parentElement.getElementsByClassName("emote")[1];
}
export function getViewAllBtn(node){
    return node.querySelector('.link');
}
export function updateHomeComments(home_list, comment_template, commentariesLength, workout){
    if(home_list.childElementCount < 2){
        addCommentary(home_list, comment_template);
    }
    else{
        renderViewAllButton(home_list, commentariesLength, workout);
    }
}
export async function postLike(workout, like){
    /*let response = await fetch(`${url}workout/like`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                id: `${workout.id}`,
                action:`${like}`
            })
        })desativado para mock*/
    if (1===1) return true;
    return false;
}
export function updateLikes(log, workout, overlay, like) {
    let likes_count = like ? workout.like + 1 : workout.like - 1;
        if (overlay) addLike(searchLogByWorkout(workout), likes_count);
        addLike(log, likes_count);
}
export function addLike(log, likes_count){
    log.querySelector('#like').textContent = likes_count;
}
export function checkLike(log, workout, overlay, like){
    //criando a funcionalidade do like, notei que vou precisar de um toggle para saber se foi clicado ou não, tenho que criar em css e ele deve ser ativado de acordo com o que for retornado no json quando carregar a página
    log.querySelector("#reactions").firstChild.onclick = async function (event) {
        event.currentTarget.
        if (await postLike(log, workout)) updateLikes(log, workout, overlay, like);
        else console.log("Erro");
    };
}
document.getElementById("exit").addEventListener("click", () => {
    cookies.remove('jwt_authorization', {path: '/'});
    window.location = "http://localhost:63342/MeuPrimeiroFront/login/login.html";
});

Element.prototype.prependChild = function(newElement) {
    return this.insertBefore(newElement, this.firstChild);
};

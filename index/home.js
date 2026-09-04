import Cookies from "https://esm.sh/universal-cookie";

let response;
const url = "http://localhost:5255/";
let cookies = new Cookies();
const token = cookies.get('jwt_authorization');

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
                {
                    "image": "https://d2l9nsnmtah87f.cloudfront.net/profile-images/rafinhapiercer-ae12c85a-1e7f-440f-b20e-e890c4a15f61-thumbnail.jpg",
                    "username": "rafi",
                    "time": "Yesterday at 6:07 AM",
                    "commentary": "Oiiiiiiiiiiiiiiiii"
                }
            ]
        },
        {
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
    let workout_template = document.getElementById("workout").content.cloneNode(true);
    let exercises;
    let seeMoreEx;
    let seeMore;
    data.workouts.forEach(workout => {
        workout_template = document.getElementById("workout").content.cloneNode(true);
        workout_template.querySelector('.log_profile_pic').src = workout.image;
        workout_template.querySelector('#workout_log_username').textContent = workout.username;
        workout_template.querySelector('.workout_data').textContent = workout.data;
        workout_template.querySelector('.workout_routine_name').textContent = workout.name;
        workout_template.querySelector('#duration_value').textContent = workout.duration;
        workout_template.querySelector('#volume_value').textContent = workout.volume;
        workout_template.querySelector('#records_value').textContent = workout.records;
        workout_template.querySelector('#like').textContent = workout.like;
        workout_template.querySelector('#comments_count').textContent = workout.comments;
        exercises = workout.exercises;
        let exerciseLength = exercises.length;
        let m = exerciseLength < 3 ? exerciseLength : 3;
        for(let i = 0; i < m; i++){
            let exercise_template = document.getElementById("exercises").content.cloneNode(true);
            exercise_template.querySelector('.exercise_img').src = exercises[i].image;
            exercise_template.querySelector('.exercise_text').textContent = exercises[i].name;
            workout_template.querySelector('#exercises_summary').appendChild(exercise_template);
        }
        if(exerciseLength > 3){
            seeMoreEx = document.getElementById('see_more_ex').content.cloneNode(true);
            seeMoreEx.querySelector('#exercises_more_ex').textContent = `See ${exerciseLength-3} more exercises`;
            workout_template.querySelector('#exercises_summary').appendChild(seeMoreEx);
        }
        let commentaries = workout.commentaries;
        let commentariesLength = commentaries.length;
        let n = commentariesLength < 2 ? commentariesLength : 2;
        workout_template.querySelector('#comment').appendChild(showComments(n, commentaries));
        
        if(commentariesLength > 2){
            seeMore = document.getElementById('see_more').content.cloneNode(true);
            seeMore.querySelector('#exercises_more').textContent = `View all ${commentariesLength} comments`;
            workout_template.querySelector('#comment').appendChild(seeMore);
        }
        document.getElementsByClassName("home")[0].appendChild(workout_template);
    });
    let moreComments = document.getElementsByClassName("link");
    //02/06 - preciso finalizar essa logica esse for vai ter que se transformar em foreach porque o moreComments não aceita foreach
    for(let button of moreComments){
        let workoutLogs = document.getElementsByClassName("workout_log");
        let actualLog = button.parentElement.parentElement.parentElement.parentElement;
        for(let o=0; o < workoutLogs.length ; o++){
            if(actualLog.isEqualNode(workoutLogs[o])){
                button.allComments = data.workouts[o].commentaries;
            }
        }
        button.addEventListener("click", showCommentOverlay);
    }
    checkCommentInput(data.workouts);
}
else if(response.status === 404){
    noActivity.style.display = "";
}
else{
    noActivity.style.display = "";
}
export function checkCommentInput(data){
    let postButtons = document.getElementsByClassName("post_comment");
    for(let k = 0; k < postButtons.length; k++){
        let inputComment = postButtons[k].parentElement.querySelector('#comentario');
        inputComment.addEventListener("input", (event) => {
            let inputComment = event.currentTarget.value;
            let postStyle = postButtons[k].style;
            if(inputComment.length > 0) {
                postStyle.cursor = "pointer";
                postStyle.color = "blue";
                postButtons[k].addEventListener("click", postComment)

            }
            else{
                postButtons[k].removeEventListener("click", postComment)
                postStyle.cursor = "";
                postStyle.color = "gray";
            }
        })
    }
}

export async function postComment(event){
        //preciso criar um fetch para o front e, ao mesmo tempo, adicionar o valor no html para reproduzir sem precisar recarregar a pagina
        //para fazer isso posso criar um objeto diretamente (não sei como faz) ou posso colocar direto no mock(ñão sei como faz)
        //pensei em criar variaveis e usar tanto para fazer o fetch quanto para exbir no html
        let postButton = event.currentTarget;
        let commentary = postButton.parentElement.querySelector("#comentario").value;
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
            "commentary": "macaco"
        }`
        let data = JSON.parse(response);
        
        if(1===1) {
            let comment_template = document.getElementById("tpl_comment").content.cloneNode(true);

            comment_template.querySelector("#comment_profile_pic").src = data.image;
            comment_template.querySelector("#comment_user").textContent = data.username;
            comment_template.querySelector("#comment_text").textContent = data.commentary;

            event.currentTarget.parentElement.parentElement.querySelector('#comment').appendChild(comment_template); //usar para adicionar comentário depois

        }
}
export function showCommentOverlay(event){
    const body = document.body;
    body.style.overflowY = "hidden";
    let moreComments = event.currentTarget;
    let allComments = moreComments.allComments;
    let workoutDone = moreComments.parentElement.parentElement.parentElement.cloneNode(true);
    workoutDone.querySelector('#exercises_summary').remove();
    workoutDone.querySelector('.link').remove();
    workoutDone.prepend(document.getElementById("close_scroll").content.cloneNode(true));
    let commentList = workoutDone.querySelector('#comment');
    while(commentList.firstChild) commentList.removeChild(commentList.firstChild);
    if(allComments.length > 7) commentList.style.overflowY = "scroll";
    commentList.appendChild(showComments(allComments.length, allComments));
    commentList.after(workoutDone.querySelector('.break_line'),workoutDone.querySelector('#reactions'));
    let commentOverlay = document.getElementById("comment_overlay").content.cloneNode(true);
    commentOverlay.querySelector('#comment_box_overlay').appendChild(workoutDone);
    body.prepend(commentOverlay);
    document.getElementById("comment_box_background").addEventListener("click", closeOverlay);
    workoutDone.querySelector("#x_button").addEventListener("click", closeOverlay);
    checkCommentInput();
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
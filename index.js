var questionText = document.getElementById("question");
var fetchedQuestion;



async function getQuestion() {
    fetch ("https://api.truthordarebot.xyz/api/wyr")
    .then(function (response) {
        return response.json();
        
    })
    .then(function (data) {
        fetchedQuestion = data['question'];
        console.log(fetchedQuestion);
        questionText.innerHTML = JSON.stringify(fetchedQuestion);
    })
    .catch(function (error) {
        console.log(error);
    });
}
getQuestion()
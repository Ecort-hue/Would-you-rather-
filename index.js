const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");

var fetchedQuestion;

function getOptions() {
    let question = fetchedQuestion;
    question = question.replace(/^Would you rather\s*/i, "");
    let options = question.split(/\s+or\s+/i);
    return {
        option1: options[0]?.trim(),
        option2: options[1]?.trim().replace(/\?$/, "")
    };
}

async function getQuestion() {
    fetch("https://api.truthordarebot.xyz/api/wyr")
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function (data) {
        fetchedQuestion = data['question'];

        const options = getOptions();
        option1.innerHTML = options.option1;
        option2.innerHTML = options.option2;
    })
    .catch(function (error) {
        console.log(error);
    });
}

getQuestion();

const option1Button = document.getElementById("option1");

option1Button.addEventListener('click', () => {
    window.location.href = 'option1.html';
});
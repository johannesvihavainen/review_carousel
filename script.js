var moveLeftButton = document.querySelector('.move-left');
var moveRightButton = document.querySelector('.move-right');
var surpriseButton = document.querySelector('.surprise-me');

var userName = document.querySelector('.name');
var role = document.querySelector('.role');
var userDescription = document.querySelector('.user-description');
var profilePicture = document.getElementById('profile-picture');

const people = [
    {
        name: "Adjudicator",
        role: "High Table Enforcer",
        description: "In a world governed by rules, the Adjudicator wields power with unyielding authority. As a relentless enforcer of the High Table's will, they navigate the treacherous landscape of loyalty and betrayal. Every decision reflects a balance of justice and consequence, reminding us that in this realm, no one is truly safe.",
        photo: "adjudicator.png"

    },
    {
        name: "John Wick",
        role: "The Baba Yaga",
        description: "In a world of shadows, John Wick stands resolute, a master of precision and strategy. His journey is not just about vengeance; it’s a quest for peace. With every challenge, he showcases an unwavering spirit, reminding us that true strength lies in the heart, not just the blade.",
        photo: "john_wick.png"
    },
    {
        name: "Caine",
        role: "Professional Assassin",
        description: "Caine, a formidable warrior with a past entwined in loyalty and sacrifice, embodies the duality of strength and vulnerability. His journey reveals the complexities of friendship, showcasing a willingness to fight for those he loves. In every confrontation, Caine proves that honor can exist even amidst chaos and conflict.",
        photo: "caine.png"
    },
    {
        name: "Elder",
        role: "Leader of the High Table Crime Lord",
        description: "The Elder stands as a wise figure in a world fraught with danger and ambition. Their knowledge of the past and present guides those who seek redemption. With a deep understanding of the code that governs assassins, the Elder embodies the importance of choices and the weight of consequence.",
        photo: "elder.png"
    },
    {
        name: "Vincent Bisset de Gramont",
        role: "Aristocrat Senior Member of the High Table",
        description: "Vincent, a master assassin in the shadows, navigates the fine line between loyalty and betrayal. His cunning and resourcefulness make him a formidable adversary. As he faces challenges, Vincent's journey unfolds, illustrating the complexities of human nature and the struggles between ambition, survival, and the bonds of brotherhood.",
        photo: "vincent.png"
    }
]

function handleButtons() {
    var counter = 0;

    function updateDisplay() {
        if (counter < 0) {
            counter = people.length - 1;
        } else if (counter >= people.length) {
            counter = 0;
        }

        userName.innerHTML = people[counter]["name"];
        role.innerHTML = people[counter]["role"];
        userDescription.innerHTML = people[counter]["description"];
        profilePicture.src = `photos/${people[counter]["photo"]}`;
    }

    moveLeftButton.addEventListener('click', function () {
        counter--;
        updateDisplay();
    })
    moveRightButton.addEventListener('click', function () {
        counter++;
        updateDisplay();
    })
    surpriseButton.addEventListener('click', function () {
        var randomNumber = Math.floor(Math.random() * people.length)
        if (randomNumber === counter) {
            counter--;
            updateDisplay();
            console.log(counter);
        } else {
            counter = randomNumber;
            updateDisplay();
            console.log(counter);
        }
    });

    updateDisplay();
}




handleButtons();




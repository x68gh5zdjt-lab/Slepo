/****************************************************
 * Global Game State Flags
 ****************************************************/
let playing = false;          // Game has started
let pause = false;            // Game is paused
let gaming = true;            // Player is "gaming" vs "school"
let died = false;             // Player death state
let score = 0;                // Current score
let highestScore = 0;         // Highest score achieved
let movementSpeed = 0.25;     // Horizontal movement speed of characters
let edgeTime = 0;             // Time spent gaming
let overlay = true;           // Whether an overlay is currently visible
 
/****************************************************
 * Difficulty Caps
 ****************************************************/
const MAX_SPAWN_ODDS = 0.5;        // Maximum total spawn rate
const MAX_TEACHER_CHANCE = 0.65;   // Maximum teacher spawn ratio
 
/****************************************************
 * DOM Elements
 ****************************************************/
const computer = document.getElementById("computer");
const scoreDiv = document.getElementById("score_div");
const edgeDiv = document.getElementById("time_div");
 
/****************************************************
 * Overlay Elements
 ****************************************************/
const deathOverlay = document.getElementById("deathOverlay");
const startOverlay = document.getElementById("startOverlay");
const pauseOverlay = document.getElementById("pauseOverlay");
 
/****************************************************
 * Overlay Controls
 ****************************************************/
const playAgainButton = document.getElementById("playAgain");
const playButton = document.getElementById("play_div");
let finalScore = document.getElementById("finalScore");
let finalEdge = document.getElementById("finalEdge");
 
/****************************************************
 * Audio Assets
 ****************************************************/
const minecraftAudio = new Audio("audio/background.mp3");
const click = new Audio("audio/minecraft_click.mp3");
const gameOverAudio1 = new Audio("audio/gameOver.mp3");
const gameOverAudio2 = new Audio("audio/gameOver2.mp3");
 
/****************************************************
 * Restart Button Handler
 ****************************************************/
playAgainButton.addEventListener("click", function (event) {
    deathOverlay.style = "display: none;";
    click.play();
    window.location.reload();
});
 
/****************************************************
 * Utility: Async Delay
 ****************************************************/
function wait(ms) {
    return new Promise(r => setTimeout(r, ms));
}
 
/****************************************************
 * Randomize Fake Student Images
 ****************************************************/
const fakeStudents = document.querySelectorAll(".student_fake");
fakeStudents.forEach(student => {
    const randomNumber = Math.floor(Math.random() * 16) + 1;
    student.src = "images/students/student" + randomNumber + ".png";
});
 
/****************************************************
 * Player Student Setup
 ****************************************************/
const student_player = document.getElementById("student_player");
const randomNumber = Math.floor(Math.random() * 16) + 1;
student_player.src = "images/students/student" + randomNumber + ".png";
 
/****************************************************
 * Start Game Button
 ****************************************************/
playButton.addEventListener("click", function (event) {
    playing = true;
    overlay = !overlay;
 
    click.play();
    minecraftAudio.volume = 0.2;
    minecraftAudio.play();
 
    startOverlay.style = "display: none;";
});
 
/****************************************************
 * Keyboard Controls
 ****************************************************/
document.addEventListener("keypress", function (event) {
    const keyName = event.key;
 
    // Toggle gaming state (space bar)
    if (keyName == " ") {
        if (playing) {
            click.play();
            gaming = !gaming;
 
            computer.src = gaming
                ? "images/computer_minecraft.png"
                : "images/computer_school.png";
 
            if (gaming) {
                minecraftAudio.play();
            } else {
                minecraftAudio.pause();
            }
        }
    }
 
    // Pause toggle (P key)
    if (keyName == "p" || keyName == "P") {
        if (!died && !overlay) {
            click.play();
            pause = !pause;
 
            if (pause) {
                minecraftAudio.pause();
                pauseOverlay.style = "display: flex;";
            } else {
                minecraftAudio.play();
                pauseOverlay.style = "display: none;";
            }
            playing = !playing
        }
    }
});
 
/****************************************************
 * Score & Edge Time Handler
 ****************************************************/
async function handleScore() {
    while (true) {
        await wait(1000);
 
        if (playing) {
            score += gaming ? 1 : -0.5;
 
            if (gaming) {
                edgeTime += 1;
                edgeDiv.textContent = "Edge: " + edgeTime;
            }
 
            if (score > highestScore) {
                highestScore = score;
            }
 
            scoreDiv.textContent = "Aura: " + score.toFixed(1);
        }
    }
}
 
/****************************************************
 * Character Management
 ****************************************************/
const allPeople = [];
 
/**
 * Spawns a student or teacher character
 */
function summonCharacter(isStudent) {
    const person = document.createElement("img");
    const randomNumber = Math.floor(Math.random() * 16) + 1;
 
    if (isStudent) {
        person.src = "images/students/student" + randomNumber + ".png";
        person.classList.add("student");
    } else {
        person.src = "images/teachers/teacher" + randomNumber + ".png";
        person.classList.add("teacher");
    }
 
    document.body.appendChild(person);
 
    const startsLeft = Math.random() < 0.5;
    const currentX = startsLeft ? -2.5 : 100;
 
    person.style.left = `calc(${currentX}% - 20px)`;
 
    allPeople.push({
        p: person,
        isPositive: startsLeft,   // Current movement direction
        x: currentX,              // X position
        isStudent: isStudent,
        pauseTimer: 0,            // Time paused so far
        pauseDuration: 0,         // Total pause duration
        isPaused: false,          // Currently paused
        hasPaused: false          // Has paused before
    });
}
 
/****************************************************
 * Move All Characters & Handle Collisions
 ****************************************************/
function movePeople() {
    const deadPeople = [];
 
    for (let i = 0; i < allPeople.length; i++) {
        const person = allPeople[i];
 
        // Mid-screen interaction logic
        if (person.x >= 35 && person.x <= 55) {
            if (person.isStudent) {
                if (gaming) {
                    score += 0.025;
 
                    if (score > highestScore) {
                        highestScore = score;
                    }
 
                    scoreDiv.textContent = "Aura: " + score.toFixed(1);
                }
            } else {
                if (gaming) {
                    died = true;
                    playing = false;
 
                    minecraftAudio.pause();
 
                    finalScore.innerHTML = "High Score: " + highestScore.toFixed(1);
                    finalEdge.innerHTML = "Edge Time: " + edgeTime;
 
                    deathOverlay.style = "display: flex;";
                    gameOverAudio1.play();
                    gameOverAudio2.play();
                }
            }
        }
 
        // Pause behavior
        if (person.isPaused) {
            person.pauseTimer++;
 
            if (person.pauseTimer >= person.pauseDuration) {
                person.isPositive = Math.random() < 0.5;
                person.isPaused = false;
                person.pauseTimer = 0;
                person.hasPaused = true;
            }
        } else {
            if (!person.hasPaused && Math.random() < 0.003) {
                person.isPaused = true;
                person.pauseDuration = Math.floor(Math.random() * 100) + 50;
            }
        }
 
        // Movement
        if (!person.isPaused) {
            const x = person.x + movementSpeed * (person.isPositive ? 1 : -1);
            person.x = x;
            person.p.style.left = `calc(${x}% - 20px)`;
        }
 
        // Off-screen cleanup
        if (person.x <= -10 || person.x >= 100.5) {
            deadPeople.push(i);
        }
    }
 
    // Remove dead characters
    for (let i = deadPeople.length - 1; i >= 0; i--) {
        const deadI = deadPeople[i];
        allPeople[deadI].p.remove();
        allPeople.splice(deadI, 1);
    }
}
 
/****************************************************
 * Spawn Logic Loop
 ****************************************************/
async function handlePeople() {
    let ticks = 0;
    let spawnOdds = 0.12;
    let teacherChance = 0.05;
 
    while (true) {
        await wait(25);
 
        if (playing) {
            ticks++;
            movePeople();
 
            if (ticks === 40) {
                ticks = 0;
 
                spawnOdds = Math.min(spawnOdds + 0.002, MAX_SPAWN_ODDS);
                teacherChance = Math.min(teacherChance + 0.0025, MAX_TEACHER_CHANCE);
 
                const roll = Math.random();
 
                if (roll < spawnOdds) {
                    const isStudent = Math.random() > teacherChance;
                    summonCharacter(isStudent);
                }
            }
        }
    }
}
 
/****************************************************
 * Player Animation
 ****************************************************/
let bounceTime = 0;
 
function animateStudent() {
    if (gaming && playing && !pause && !died) {
        bounceTime += 0.15;
        const bounce = Math.sin(bounceTime) * 25;
        student_player.style.transform = `translateY(${bounce}px)`;
    } else {
        student_player.style.transform = "translateY(0px)";
        bounceTime = 0;
    }
 
    requestAnimationFrame(animateStudent);
}
 
/****************************************************
 * Start Game Loops
 ****************************************************/
animateStudent();
handleScore();
handlePeople();

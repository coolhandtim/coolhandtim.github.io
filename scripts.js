let meals = [];
fetch('meals.json')
    .then(response => response.json())
    .then(data => {
        meals = data;
    });

//const monDif = document.getElementById("monDif");
//const monTime = document.getElementById("monTime");
//const result = document.getElementById("result");

//function submit() {
//value1 = monDif.value;
//value2 = monTime.value;
//const obj = JSON.parse('{"name":' Math.random() '"difficulty":' value1 ', "time":' value2 '}');
//result.textContent = obj.name;
//}
function test(day) {
    const mealEl = document.querySelector('#meal' + day);
    mealEl.textContent = "peepee"
}

function randomizeMeal(day) {
    const mealEl = document.querySelector('#meal' + day);
    const difficulty = document.querySelector('#difficulty' + day).value;
    const time = document.querySelector('#time' + day).value;
    let availableMeals = meals;

    if (difficulty !== '') {
        availableMeals = availableMeals.filter(meal => meal.difficulty === difficulty);
    }

    if (time !== '') {
        availableMeals = availableMeals.filter(meal => meal.time === time);
    }

    if (availableMeals.length === 0) {
        mealEl.textContent = 'No matching meals 😞';
    } else {
        let meal;
        do {
            meal = availableMeals[Math.floor(Math.random() * availableMeals.length)];
        } while (mealEl.textContent === meal.name && availableMeals.length > 1);
        mealEl.textContent = meal.name + '?';
    }
}

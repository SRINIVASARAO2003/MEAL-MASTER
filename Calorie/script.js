document.addEventListener("DOMContentLoaded", function() {
    // Calculate BMI
    document.getElementById("calculate-bmi").addEventListener("click", function() {
        var height = parseFloat(document.getElementById("height").value);
        var weight = parseFloat(document.getElementById("weight").value);

        if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
            alert("Please enter valid height and weight.");
            return;
        }

        var bmi = weight / ((height / 100) * (height / 100));
        var bmiStatus;

        if (bmi < 18.5) {
            bmiStatus = "Underweight";
        } else if (bmi >= 18.5 && bmi < 25) {
            bmiStatus = "Normal weight";
        } else {
            bmiStatus = "Overweight";
        }

        document.getElementById("bmi-result").innerHTML = "Your BMI: " + bmi.toFixed(2) + " (" + bmiStatus + ")";
    });

    // Calculate Calories
    document.getElementById("calculate-calories").addEventListener("click", function() {
        var targetWeight = parseFloat(document.getElementById("target-weight").value);
        var duration = parseInt(document.getElementById("duration").value);

        if (isNaN(targetWeight) || isNaN(duration) || targetWeight <= 0 || duration <= 0) {
            alert("Please enter valid target weight and duration.");
            return;
        }

        var currentWeight = parseFloat(document.getElementById("weight").value);
        var dailyCalories = (targetWeight - currentWeight) * 7700 / (duration * 7); // 7700 calories per kg

        document.getElementById("calories-result").innerHTML = "Daily Calories to Reach Target Weight: " + dailyCalories.toFixed(2);
        
        // Food Suggestions
        var foodList = document.getElementById("food-list");
        foodList.innerHTML = ""; // Clear previous suggestions

        var foodItems = [
            { name: "Chicken Breast (100g)", calories: 165 },
            { name: "Salmon (100g)", calories: 206 },
            { name: "Brown Rice (100g)", calories: 111 },
            { name: "Quinoa (100g)", calories: 120 },
            { name: "Avocado (100g)", calories: 160 },
            { name: "Broccoli (100g)", calories: 34 },
            { name: "Almonds (30g)", calories: 164 },
            { name: "Greek Yogurt (100g)", calories: 59 },
            { name: "Eggs (1 large)", calories: 72 }
        ];

        foodItems.forEach(function(item) {
            var portionSize = (dailyCalories / item.calories).toFixed(2);
            var listItem = document.createElement("li");
            listItem.textContent = item.name + " - " + portionSize + " servings";
            foodList.appendChild(listItem);
        });
    });
});

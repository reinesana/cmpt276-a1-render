//
// Calculator.js
// Name: Shana Kesia Nursoo
// Course: CMPT 276 Bobby Chan
//
//

let activityCount = 1;

function addRow() {
    activityCount++;

    let table = document.getElementById("table").getElementsByTagName('tbody')[0];
    
    // Creating a row using the insertRow() method and
    let row = table.insertRow(-1); 
  
    let name = row.insertCell(0);
    let short_name = row.insertCell(1);
    let weight = row.insertCell(2);
    let grade = row.insertCell(3);
    let percentage = row.insertCell(4);

    name.innerText = "Activity " + activityCount;
    short_name.innerText = "A" + activityCount;
    weight.innerHTML = '<input type="text" id="weight' + activityCount + '">';
    grade.innerHTML = '<input type="text" id="student-score' + activityCount + '" oninput="updatePercentage(' + activityCount + ')"> / <input type="text" id="total-score' + activityCount + '" oninput="updatePercentage(' + activityCount + ')">';
    percentage.id = "percent" + activityCount;
}

function updatePercentage(activityNumber) {
    let studentScore = document.getElementById('student-score' + activityNumber).value;
    let totalScore = document.getElementById('total-score' + activityNumber).value;
    let percentCell = document.getElementById('percent' + activityNumber);

    if (studentScore && totalScore) {
        let percentage = (studentScore / totalScore) * 100;
        percentCell.innerText = percentage.toFixed(2) + "%";
    } else {
        percentCell.innerText = "";
    }
}


function weightedGrade() {
    let total = 0;
    let totalWeight = 0;  

    for (let i = 1; i <= activityCount; i++) {
        let studentScore = parseFloat(document.getElementById('student-score' + i).value);
        let totalScore = parseFloat(document.getElementById('total-score' + i).value);
        let weight = parseFloat(document.getElementById('weight' + i).value);

        if (studentScore && totalScore && weight) {
            let scorePercentage = (studentScore / totalScore);
            let weightedScore = scorePercentage * weight;
            total += weightedScore;
            totalWeight += weight;
        }
    }

    let weightedGradeResult = (total / totalWeight) * 100 ; 
    document.getElementById('result').textContent = weightedGradeResult.toFixed(2) + '%'; 
}


function meanGrade() {
    let total = 0;
    let totalCount = 0;


    for (let i = 1; i <= activityCount; i++) {
        let studentScore = parseFloat(document.getElementById('student-score' + i).value);
        let totalScore = parseFloat(document.getElementById('total-score' + i).value);
       

        if (studentScore && totalScore) {
            let scorePercentage = (studentScore / totalScore);
            total += scorePercentage;
            totalCount++;
        }
    }

    let meanGradeResult = (total / totalCount) * 100 ; 
    document.getElementById('result').textContent = meanGradeResult.toFixed(2) + '%'; 
}










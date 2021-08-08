function getdata() {
    var users = document.getElementById("users").value;

    firebase.database().ref('users/' + users).once('value').then(function (snapshot) {

        var age1 = snapshot.val().age;
        var firstname1 = snapshot.val().firstName;
        var lastname1 = snapshot.val().lastName;
        var bPressure = snapshot.val().bPressure;
        var hRate = snapshot.val().hRate;
        var temp = snapshot.val().temp;

        document.getElementById("age1").innerHTML = age1;
        document.getElementById("firstname1").innerHTML = firstname1;
        document.getElementById("lastname1").innerHTML = lastname1;


        document.getElementById("bPressure").innerHTML = bPressure;
        document.getElementById("hRate").innerHTML = hRate;
        document.getElementById("temp").innerHTML = temp;
    });

}

var userID, age, firstName, lastName, bPressure, hRate, temp;
function Ready() {
    userID = document.getElementById('userID').value;
    age = document.getElementById('age').value;
    firstName = document.getElementById('firstName').value;
    lastName = document.getElementById('lastName').value;
    bPressure = document.getElementById('bPressure').value;
    hRate = document.getElementById('hRate').value;
    temp = document.getElementById('temp').value;
}

document.getElementById('insert').onclick = function () {
    Ready();
    document.write("Successfully inserted");
    firebase.database().ref('users/' + userID).set({
        userID: userID,
        age: age,
        firstName: firstName,
        lastName: lastName,
        bPressure: bPressure,
        hRate: hRate,
        temp: temp
    });
}
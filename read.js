function getdata() {
    var Patients = document.getElementById("Patients").value;

    firebase.database().ref('Patients/' + Patients).once('value').then(function (snapshot) {

        var age1 = snapshot.val().age;
        var bloodpressure1 = snapshot.val().bloodPressure;
        var firstname1 = snapshot.val().firstName;
        var heartrate1 = snapshot.val().heartRate;
        var lastname1 = snapshot.val().lastName;
        var notes1 = snapshot.val().notes;
        var severity1 = snapshot.val().severity;
        var temperture1 = snapshot.val().temperature;


        document.getElementById("age1").innerHTML = age1;
        document.getElementById("bloodpressure1").innerHTML = bloodpressure1;
        document.getElementById("firstname1").innerHTML = firstname1;
        document.getElementById("heartrate1").innerHTML = heartrate1;
        document.getElementById("lastname1").innerHTML = lastname1;
        document.getElementById("notes1").innerHTML = notes1;
        document.getElementById("severity1").innerHTML = severity1;
        document.getElementById("temperture1").innerHTML = temperture1;
    });

}
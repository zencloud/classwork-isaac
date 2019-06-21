


// Firebase Config Setup
const firebaseConfig = {
   
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();




// Submit Function
function app_input_submit() {
    event.preventDefault();

    // Get Input
    let inputName = $('#input-name').val();
    let inputRole = $('#input-role').val();
    let inputDate = $('#input-date').val();
    let inputRate = $('#input-rate').val();

    let sendPackage = {
        name: inputName,
        role: inputRole,
        date: inputDate,
        rate: inputRate
    }

    // Send package to database
    db.ref().push(sendPackage);

    db.ref().on('child_added', function (packageResponse) {
        console.table(packageResponse);
    });
}
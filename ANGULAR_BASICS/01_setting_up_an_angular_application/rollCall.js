function rollCall(students, max) {
    max = max || students.length;
    var attendence = students.slice(undefined, max);
    console.log(attendence);
}
rollCall(['Jack', 'Jill']);

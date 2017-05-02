function rollCall(students: any[], max?: number) {
  max = max || students.length;
  const attendence = students.slice(undefined, max);
  console.log(attendence);
}

rollCall(['Jack', 'Jill']);

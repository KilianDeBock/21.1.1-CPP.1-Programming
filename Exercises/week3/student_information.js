function generateStringForStudent(student) {
  return String(student);
}

function generateStringForGender(gendercode) {
  switch (gendercode) {
    case 0:
      gendercode = 'Not known.';
    case 1:
      gendercode = 'Male';
    case 2:
      gendercode = 'Female';
    case 9:
      gendercode = 'Not applicable.';
    default:
      gendercode = 'Invalid!';
  }
  return `Gender ${gendercode}`;
}


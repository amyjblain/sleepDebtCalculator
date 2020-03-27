const getSleepHours = day => {
  if (day === 'monday') {
    return 5;
  } else if (day === 'tuesday') {
    return 5;
  } else if (day === 'wednesday') {
    return 8;
  } else if (day === 'thursday') {
    return 8;
  } else if (day === 'friday') {
    return 8;
  } else if (day === 'saturday') {
    return 9;
  } else if (day === 'sunday') {
    return 9;
  } else {
      return 'Error!';
    } 
};
const getActualSleepHours = () =>
  getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

const getIdealSleepHours = () => {
  const idealHours = 7;
  return idealHours * 7;
}
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  
  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep!')
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You got more than enough sleep!')
  } else {
    console.log('You should get some sleep!')
  }
};
calculateSleepDebt();
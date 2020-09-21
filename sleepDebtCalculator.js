const getSleepHours = (day) => { 
  switch (day) {
  case 'Monday':
    return (8);
    break;
  case 'Tuesday':
    return (8);
    break;
  case 'Wednesday':
    return (8);
    break;
  case 'Thursday':
    return (8);
    break;
  case 'Friday':
    return (8);
    break; 
  case 'Saturday':
    return (8);
    break;
  case 'Sunday':
    return (8);
    break;
  default:
    return ('Enter a day silly!');
    break;
  }
};

const getActualSleepHours = () => 
  getSleepHours('Monday') +
  getSleepHours('Tuesday') +
  getSleepHours('Wednesday') +
  getSleepHours('Thursday') +
  getSleepHours('Friday') +
  getSleepHours('Saturday') +
  getSleepHours('Sunday'); 

/* This code above is concise body syntax but using implicit return! Notice there is no curly brackets encasing getSleepHours and the word return is also removed. If we logged getActualSleepHours to the console we would still get an answer because of implicit return. */

const getIdealSleepHours = () => {
  const idealHours = 8.5;
  return (idealHours * 7);
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log('Perfect Sleep BRO!');
  }
  else if (actualSleepHours > idealSleepHours) {
    console.log('You had ' + (actualSleepHours - idealSleepHours) + ' extra hours of sleep this week. Thats too much!');
  }
  else {
    console.log('You need an extra ' + (idealSleepHours - actualSleepHours) + ' hours of sleep this week. You should get some rest!');
  }
};

calculateSleepDebt();



  

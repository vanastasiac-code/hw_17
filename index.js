const summary = prompt('Enter the invoice amount');
const interest = prompt('Enter the tip percentage');

if (summary === null) {
  alert('Canceled');
} else if (interest === null) {
  alert('Canceled');
} else if (Number.isNaN(summary)) {
  alert('Invalid input data');
} else if (summary <= 0) {
  alert('Invalid input data');
} else if (Number.isNaN(interest)) {
  alert('Invalid input data');
} else if (interest < 0) {
  alert('Invalid input data');
} else if (interest > 100) {
  alert('Invalid input data');
} else {
  const sum = Number(summary);
  const rate = Number(interest);
  const tip = (sum * rate) / 100;
  const total = sum + tip;

  alert(`
    Check sum: ${sum}
    Tip: ${rate}
    Tip amount: ${tip}
    Total sum to pay: ${total}`);
}

const summary = prompt('Enter the invoice amount');
const interest = prompt('Enter the tip percentage');

if (summary === null) {
  alert('Canceled');
} else if (interest === null) {
  alert('Canceled');
} else {
  const summaryTrim = summary.trim();
  const interestTrim = interest.trim();
  let sum = Number(summaryTrim);
  const rate = Number(interestTrim);

  if (summaryTrim === '') {
    alert('Invalid input data');
  } else if (Number.isNaN(sum)) {
    alert('Invalid input data');
  } else if (sum <= 0) {
    alert('Invalid input data');
  } else if (interestTrim === '') {
    alert('Invalid input data');
  } else if (Number.isNaN(rate)) {
    alert('Invalid input data');
  } else if (rate < 0) {
    alert('Invalid input data');
  } else if (rate > 100) {
    alert('Invalid input data');
  } else {
    let tip = (sum * rate) / 100;
    let total = sum + tip;
    sum = sum.toFixed(2);
    tip = tip.toFixed(2);
    total = total.toFixed(2);

    alert(
      `Check sum: ${sum}\n\nTip: ${rate}\n\nTip amount: ${tip}\n\nTotal sum to pay: ${total}`
    );
  }
}

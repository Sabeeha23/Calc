// Function to append a number to the input field
function appendNumber(num) {
    document.getElementById('result').value += num;
  }
  
  // Function to append an operation to the input field
  function appendOperation(op) {
    document.getElementById('result').value += op;
  }
  
  // Function to clear the input field
  function clearResult() {
    document.getElementById('result').value = '';
  }
  
  // Function to calculate the result
  function calculate() {
    try {
      // Replace '%' with '/100' for calculation, because eval doesn't interpret '%' as a division by 100
      var expression = document.getElementById('result').value.replace(/%/g, '/100');
      document.getElementById('result').value = eval(expression);
    } catch(err) {
      document.getElementById('result').value = 'Error';
    }
  }
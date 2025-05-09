function append(value) {
    document.getElementById('display').value += value;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function deleteLast() {
    let current = document.getElementById('display').value;
    document.getElementById('display').value = current.slice(0, -1);
  }
  
  function calculate() {
    try {
      let result = eval(document.getElementById('display').value);
      if (result % 1 !== 0) {
        result = result.toFixed(4); // Show up to 4 decimal places if it's a fraction
      }
      document.getElementById('display').value = result;
    } catch (error) {
      document.getElementById('display').value = 'Error';
    }
  }
  
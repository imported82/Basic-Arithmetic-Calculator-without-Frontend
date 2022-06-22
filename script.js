const calculator = () => {
    let firstNumber = parseFloat(prompt('Enter first number', 0));
    if (isNaN(firstNumber)) return alert('Invalid input');
  
    let operator = prompt('Enter operator ( either +, -, * or / ): ', '+');
    if (operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/') return alert('Invalid input');
  
    let secondNumber = parseFloat(prompt('Enter second number', 0));
    if (isNaN(secondNumber)) return alert('Invalid input');
  
    let result
  
    switch (operator) {
      case '+':
        result = firstNumber + secondNumber
        break
      case '-':
        result = firstNumber - secondNumber
        break
      case '*':
        result = firstNumber * secondNumber
        break
      case '/':
        result = firstNumber / secondNumber
        break
      default:
        result = 'Invalid operator/operand(s)'
        return alert(result)
    }
  
    return alert(`${firstNumber} ${operator} ${secondNumber} = ${result}`)
  }
  
  calculator()
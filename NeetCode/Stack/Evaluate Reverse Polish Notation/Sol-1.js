// ! https://leetcode.com/problems/evaluate-reverse-polish-notation/

var evalRPN = function (tokens = []) {
  const stack = [];
  for (let i = 0; i < tokens.length; i++) {
    if (!isNaN(Number(tokens[i]))) {
      stack.push(+tokens[i]);
      continue;
    }

    const element2 = stack.pop();
    const element1 = stack.pop();
    stack.push(Operator(tokens[i], element1, element2));
  }
  return stack[0];
};

function Operator(operation, num1, num2) {
  if (operation === "+") return num1 + num2;
  if (operation === "-") return num1 - num2;
  if (operation === "*") return num1 * num2;
  if (operation === "/") return Math.trunc(num1 / num2);
}

console.log(evalRPN(["4", "-2", "/", "2", "-3", "-", "-"]));

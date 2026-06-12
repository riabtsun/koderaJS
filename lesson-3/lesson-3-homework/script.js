function classifyInputIfElse(value) {
  if (value === null || value === undefined) return "null or undefined";
  if (value === "") return "empty string";
  if (value === 0) return "zero";

  if (!Number.isNaN(value) > 0) {
    return "positive number";
  }
  if (!Number.isNaN(value) < 0) {
    return "negative number";
  }

  if (typeof value === "string") {
    return "text";
  }

  return "unknown";
}

function classifyInputSwitch(value) {
  if (value === null || value === undefined) return "null or undefined";
  if (value === "") return "empty string";
  if (value === 0) return "zero";

  switch (typeof value) {
    case "number":
      return value > 0 ? "positive number" : "negative number";
    case "string":
      return "text";
    default:
      return "unknown";
  }
}

function classifyInputTernary(value) {
  if (value === null || value === undefined) return "null or undefined";
  if (value === "") return "empty string";
  if (value === 0) return "zero";

  const isNumber = typeof value === "number";
  const isString = typeof value === "string";

  return isNumber
    ? value > 0
      ? "positive number"
      : "negative number"
    : isString
      ? "text"
      : "unknown";
}

// Приклади використання:
console.log(classifyInputIfElse(0));
console.log(classifyInputIfElse(""));
console.log(classifyInputIfElse(null));
console.log(classifyInputIfElse(10));
console.log(classifyInputIfElse(-5));
console.log(classifyInputIfElse("hello"));

console.log(classifyInputSwitch(0));
console.log(classifyInputSwitch(""));
console.log(classifyInputSwitch(null));
console.log(classifyInputSwitch(10));
console.log(classifyInputSwitch(-5));
console.log(classifyInputSwitch("hello"));

console.log(classifyInputTernary(0));
console.log(classifyInputTernary(""));
console.log(classifyInputTernary(null));
console.log(classifyInputTernary(10));
console.log(classifyInputTernary(-5));
console.log(classifyInputTernary("hello"));

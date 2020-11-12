const task3Element = document.getElementById('task-3');

function greet() {
  alert('Hey there!');
}

function greetUser(userName) {
  alert('Hey ' + userName);
}

function combine(str1, str2, str3) {
  const combinedText = `${str1} ${str2} ${str3}`;
  return combinedText;
}

greetUser('Michael');

task3Element.addEventListener('click', greet);

const combinedString = combine('Hey', 'there', '!');
alert(combinedString);
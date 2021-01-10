fetch('http://localhost:3000/test.json').then((response) =>
  response.json().then((data) => {
    let jsonContent = JSON.parse(data);
    let str =
      'Value of response = ' +
      jsonContent.value +
      ' and the name is = ' +
      jsonContent.name;
    let target = document.getElementById('target');
    let resText = document.createTextNode(str);
    target.appendChild(resText);
  })
);

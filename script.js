const createdButtons = [];
const commitedAnswers = [];

const textField = document.getElementById("text_0");



function onButtonClick(event)
{
  commitedAnswers.push(event.target.textContent);

  let resObj = {};
  let sToChange = "";

  for (const commitedAnswer of commitedAnswers)
  {
    sToChange += `["answer_list"]["${commitedAnswer}"]`;
  }

  eval("resObj = ANSWERS_DATA" + sToChange);
  
  console.log(resObj);

  textField.textContent = resObj.text;
  delAllButtons();
  addButtons(getObjKeys(resObj.answer_list));
}

function getObjKeys(obj)
{
  const list = [];

  for (const item in obj)
    list.push(item);

  return list;
}

function delAllButtons()
{
  for (const createdButton of createdButtons)
  {
    createdButton.remove();
  }
  createdButtons.length = 0;
}

function addButtons(buttons)
{
  for (const button of buttons)
  {
    const newButton = document.createElement("button");
    newButton.textContent = button;
    document.body.appendChild(newButton);

    createdButtons.push(newButton);
    newButton.addEventListener("click", onButtonClick);
  }
}


function main()
{
  textField.textContent = ANSWERS_DATA.text;
  addButtons(getObjKeys(ANSWERS_DATA.answer_list));
}

console.log(ANSWERS_DATA);

main();

var ratings = [
  'That\'s somewhere around Jersey.',
  'That\'s somewhere around Bournemouth.',
  'That\'s somewhere around London.',
  'That\'s somewhere around Oxford.',
  'That\'s somewhere around Wolverhampton.',
  'That\'s somewhere around Nottingham.',
  'That\'s somewhere around Doncaster.',
  'That\'s somewhere around Hull.',
  'That\'s somewhere around York.',
  'That\'s somewhere around Middlesbrough.',
  'That\'s somewhere around Newcastle.'
];

var height = 50;
var questions =
  [{
    "q": "When did you last eat chips and gravy?",
    "a0": "This week",
    "e0": 10,
    "a1": "This year",
    "e1": 5,
    "a2": "Longer, if ever",
    "e2": -10
  },
    {
      "q": "Wheear 'ast tha bin sin' ah saw thee?\n",
      "a0": "On Ilkla Mooar baht 'at\n",
      "e0": 10,
      "a1": "Wheear t'ducks play football",
      "e1": 7,
      "a2": "What?",
      "e2": -10
    },
    {
      "q": "What's an oatcake?",
      "a0": "It's like an oaty pancake",
      "e0": 5,
      "a1": "It's like oaty flatbread",
      "e1": 5,
      "a2": "It's like porridge",
      "e2": -5
    },
    {
      "q": "When do you wear a coat?",
      "a0": "When it's cold",
      "e0": -5,
      "a1": "When there's an R in the month",
      "e1": -3,
      "a2": "When hell freezes over",
      "e2": 10
    },
    {"q": "In the evening, do you have...", "a0": "Dinner", "e0": -5, "a1": "Supper", "e1": -2, "a2": "Tea", "e2": 5},
    {
      "q": "Pie barm!",
      "a0": "Gerrit in yer.",
      "e0": 10,
      "a1": "Death on a plate",
      "e1": 5,
      "a2": "I have no idea what that is",
      "e2": -10
    },
    {
      "q": "Someone talks to you on a bus. Do you...",
      "a0": "Assume they want money",
      "e0": -5,
      "a1": "Politely ignore them",
      "e1": -3,
      "a2": "Chat back",
      "e2": 10
    },
    {"q": "What are you drinking?", "a0": "Bitter", "e0": 5, "a1": "Mild", "e1": 3, "a2": "Pear cider", "e2": -10},
    {
      "q": "In the playground, did you play...",
      "a0": "Tig or tiggy",
      "e0": 5,
      "a1": "Tag or tap",
      "e1": -5,
      "a2": "Had, hit or it",
      "e2": -10
    }];

var question = {};

function panel(id) {
  $('.panel').css({display: 'none'});
  $('#' + id).css({display: 'table'});
}

function startTest() {
  height = 50;
  setThermo();
  nextQuestion();
  panel('game');
}

function setThermo() {
  $('#map-pointer').stop().animate(
    {
      'top': (100 - height).toString() + '%'
    },
    2000, "easeOutElastic");
}

function nextQuestion() {
  question = questions.shift();
  $('#game h2').text(question.q);
  $('#game button:eq(0)').text(question.a0);
  $('#game button:eq(1)').text(question.a1);
  $('#game button:eq(2)').text(question.a2);
}

function handleAnswer(id) {
  height += question['e' + id.toString()];
  if (height > 100) {
    height = 100;
  }

  if (height < 0) {
    height = 0;
  }

  setThermo();

  if (questions.length > 0) {
    nextQuestion();
  } else {
    gameOver();
  }
}

function gameOver() {
  $('.height').text(height.toString());
  $('#rating').text(ratings[Math.min(Math.floor(height / 10), 10)]);
  panel('results');
}


$(document).ready(function () {
  setThermo();
});
Feature('Login');


for (const item of ['honey', 'cream', 'sugar']) {
  Scenario(`test something

  ${item}

item`, ({ I }) => {
    I.say('fine');
  });
}


function saturdayFun(task = "roller-skate") {
  return `This Saturday, I want to ${task}!`;
}

const mondayWork = function (task = 'go to the office') {
    return `This Monday, I will ${task}.`;
}

function wrapAdjective(wrapper = "*"){
    return function(adj = "special"){
    return `You are ${wrapper}${adj}${wrapper}!`
    }

    }


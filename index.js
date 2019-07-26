function saturdayFun(activity="roller-skate"){
    return 'This Saturday, I want to ' + `${activity}` + '!'
}

function mondayWork(activity="go to the office"){
    return "This Monday, I will " + `${activity}` + "."
}

function wrapAdjective(idk="*"){
    return function(param="special"){
        return "You are " + `${idk}` + `${param}` + `${idk}` + "!"
    }
}

let Calculator = {
    add: function(x, y){return (x+y)},
    subtract: function(x, y){return (x-y)},
    multiply: function(x, y){return (x*y)},
    divide: function(x, y){return (x/y)}
}

function actionApplyer(integer, array){
    if (array === []){
        return integer
    } else if (array !== []){
        return array.map( func => func(integer))
    }

//     let a = start

//   for (let i = 0; i < ray.length; i++ ){
//     a = ray[i](a)
//   }

//   return a
}


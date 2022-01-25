document.getElementById('enter').addEventListener('click',exprSolver);

Precedence = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2,
    '^': 3
}

function exprSolver(e){
    let origExpr = document.getElementById('inputExpr').value;
    let formattedExpr = removeSpaces(origExpr);
    let postFixList  = infixToPostfix(formattedExpr);
    
    let i = 0;
    let op2;
    let op1;
    let result;

    let solStack = new Array();
    
    while(i<postFixList.length){
        if(postFixList[i].type == 'element'){
            solStack.push(postFixList[i].value);
        }
        else{
            op2 = solStack.pop();
            op1 = solStack.pop();
            if(postFixList[i].value == '+'){
                result = op1 + op2; 
            }
            else if(postFixList[i].value == '-'){
                result = op1 - op2; 
            }
            else if(postFixList[i].value == '*'){
                result = op1 * op2; 
            }
            else if(postFixList[i].value == '/'){
                result = op1 / op2; 
            }
            else if(postFixList[i].value == '^'){
                result = op1 ** op2; 
            }
            solStack.push(result);
        }
        i++;
    }
    
    let solution = document.getElementById('solution');
    solution.innerHTML = 'Ans = ' + solStack.pop();
}

function removeSpaces(str){
    return str.split(' ').join('');
    // return str.replace(/\s+/g, '');
}

function infixToPostfix(str){
    let stack = new Array();
    let postFixList = new Array();
    let number;
    let operator;

    let operMatch;
    let numMatch;
    let top = -1;
    
    numRegex = /(-|\+)?[0-9]+/;
    operRegex = /[-^+*\/]/;
    i = 0;
    while(str.length){
        // console.log("Str: " + str);
        numMatch = numRegex.exec(str);
        operMatch = operRegex.exec(str)
        
        if(i%2 == 0){
            number = parseFloat(numMatch[0])
            // console.log(number);
            postFixList.push({type:'element',value:number});
            str = str.slice(numMatch.index+numMatch[0].length,) 
        }
        else{
            // console.log(operMatch);
            operator = operMatch[0];
            // console.log(operator);
            str = str.slice(operMatch.index+1,)

            if(stack.length == 0){
                stack.push({type:'operator',value:operator})
                top++;
            }
            else if(Precedence[operator] > Precedence[stack[top].value]){
                stack.push({type:'operator',value:operator})
                top++;
            }
            else{
                while(1){
                    if(stack.length == 0)
                        break;
                    if(Precedence[operator]>Precedence[stack[top].value])
                        break;
                    postFixList.push(stack.pop());
                    top--;
                }
                stack.push({type:'operator',value:operator})
                top++;
            }
        }

        i++;
    }  
    
    while(stack.length){
        postFixList.push(stack.pop())
    }
    return postFixList;
}
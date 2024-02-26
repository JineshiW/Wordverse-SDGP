

export function attempts_Number(result){
    return result.filter(r=>r !==undefined).length;
}

export function earnPoints_Number(result, answers, point){
    // iterate over the results
    return result.map((element, i) => answers[i]=== element).filter(i => i).map(i=>point).reduce((prev, curr) => prev + curr,0);
}

export function flagResult(totalPoints, earnPoints){
    // if marks are less than 50% the failed or passed
    return (totalPoints* 50/100)<earnPoints
}
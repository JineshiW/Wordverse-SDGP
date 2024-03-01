

/** get all questions */
export async function getQuestions(req, res){
    res.json("questions api get request");
}

/** insert all questinos */
export async function insertQuestions(req, res){
    res.json("questions api post request")
}

/** Delete all Questions */
export async function dropQuestions(req, res){
    res.json("questions api delete request");
}
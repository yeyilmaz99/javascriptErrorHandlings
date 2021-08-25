
//referenceError
// TypeError
//SyntaxError
//URIError

var user = {
    name: 'yunus emre'
}

try{
    // console.log(myFunction());
    console.log(user.name);
    if(!user.email){
        throw new SyntaxError('User has no email');
    }
    console.log(user.email);
}
catch(e){
    console.log(e);
    console.log(e.message);
    console.log(e.name);
    console.log(e instanceof ReferenceError);
    console.log(e instanceof TypeError);
    console.log(typeof e);
}
finally{
    console.log('finally block');
}


var friendsList = {
    steve: {
        firstName: "Steve",
        lastName: "Dude",
        email: "steve@email.com"
    },

    john: {
        firstName: "John",
        lastName: "Johnson",
        email: "jjohnson@email.com"
    }
};

var list = function(object)
{
    for(var key in object){
        console.log(key);
    }
};

var search = function(name) {
    for (var prop in friendsList) {
        if(friendsList[prop].firstName.toLowerCase() === name){
            console.log(friendsList[prop]);
            return friendsName;
        }
    }
};
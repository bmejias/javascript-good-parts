// Create a maker function calle quo. It makes an object with a get_status
// method and a private status property.
// Note that the status attribute is define as an argument parameter.

var quo = function (status) {
    return {
        get_status: function () {
            return status;
        }
    };
};

var myQuo = quo("amazed");
console.log(myQuo.get_status());
console.log(myQuo.status);

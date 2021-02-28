var name = 'zero';
function log() {
    console.log(name);
}

function wrapper() {
    var name = 'nero';
    log();
}


wrapper();

var obj = {
    x : 'local',
    y : function() {
        alert(this.x);
    }
}

var another = function() {
    var x = 'local';
    function y() {
        console.log(x);
    }

    return {y : y};
}

var newScope = another();

var newScope2 = (function() {
    var x = 'local';
    return {
        y : function() {
            console.log(x);
        }
    }
})();

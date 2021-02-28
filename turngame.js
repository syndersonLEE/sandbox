var TurnGame = (function() {
    var instance;
    var initiate = function(heroName) {
        var hero = {
            name : heroName,
            lev: 1,
            maxHp : 100,
            hp : 100,
            xp : 0,
            att : 10
        };
        return {
            showLevel : function () {
                console.log(hero.lev);
                return this;
            },
            showXp : function() {
                var self = this;
                if(hero.xp > 15 * hero.lev) {
                    hero.xp -= 15;
                    hero.maxHp += 10;
                    hero.hp =hero.lev;
                    hero.lev++;
                }
                return this.showLevel().showXp();
            },
            showHp : function() {
                if(hero.hp < 0) {
                    return this.gameOver();
                }
            }
        }
    };
    return {
        getInstance : function(name) {
            if(!instance) {
                instance : initiate(name);
            }
            return instance;
        }
    }
})();
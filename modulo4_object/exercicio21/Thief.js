const Character = require('./Character')
class Thief extends Character {
    attack(targetCharacter){
        targetCharacter.lifePts -= (this.attackPts - targetCharacter.defensePts) * 2
    }
}

module.export = Thief
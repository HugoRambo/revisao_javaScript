module.exports = class Character {
    constructor(name, lifePts, attackPts, defenderPts){
        this.name = name;
        this.lifePts = lifePts;
        this.attackPts = attackPts;
        this.defenderPts = defenderPts;
    }

    attack(targetCharacter){
        targetCharacter.lifePts -= this.attackPts - targetCharacter.defensePts
    }
}
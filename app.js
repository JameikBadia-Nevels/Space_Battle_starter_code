//The ship and will show updates results from the battles
class Ship{
    constructor(hull, power){
        this.hull = hull
        this.power = power
        this.accuracy = Math.random()
    }
}

//The USS Schwarz
class Schwarz extends Ship{
    constructor(hull, power, accuracy){
    super(hull,power,accuracy)
    this.hull = 20
    this.power = 5
    this.accuracy = .7
    }
    //method to attack alien
    attack(target){
        if(this.accuracy >= Math.random()){
            //This means a direct hit
            //Schwarz firepower attack that lowers Opps hull 
            let hit = target.hull -= this.power
            alert ("Direct Hit! Enemy hull is at " + hit)
            return hit
        }
            else{
            //This is if you miss
            alert("You missed, fool!")
            //Going to set time 
                
         }
        
    }
}

//the alien class
class Alien extends Ship {
    constructor(hull,power,accuracy){
        super(hull,power,accuracy)
        this.hull = Math.floor(Math.random() * (6 - 3 + 1)) + 3
        this.power = Math.floor(Math.random() * (4 - 2 + 1)) + 2
        this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10
    }
    //Alien Retalitation method
    alienAttack(target){
        if(this.hull > 0 && this.accuracy >= Math.random()){
            //display your hull health
            let oppAttack = target.hull -= this.power
            alert("You've been hit! Hull is at " + oppAttack)
            return oppAttack
        } 

    }
    //if alien dies method
    alienDeath(){
        if(this.hull <= 0){
        // console.log("This Alien is dead. Move on to the next one, maggot!")
        // alert("This Alien is dead. Move on to the next one, maggot!")
        alert ("This Alien is dead. Move on to the next one, maggot!")
        
         }  
      
    }
}

let hero = new Schwarz
console.log(hero)

let alienArr = []
//Creating Aliens
for(let i = 0; i <= 5 ; i++){
    alienArr.push(new Alien)
}

thaBattle = (tHero, tAlienArr) => {
    //start with the first battle
while (tHero.hull > 0 && tAlienArr.hull > 0){
        //you attack first
        tHero.attack(tAlienArr)

            //if the alien survives 
            if(tAlienArr.hull > 0){

            //alien retalitation
            tAlienArr.alienAttack(tHero)
            }   
                    else{

                    //dead allien
                    tAlienArr.alienDeath()
                    }
    }
}

//for loop for the prompt and battle 
for(let q = 0; q < 6; q++ ){
 //prompt for the user to start the game
 let x = prompt("Welcome to Space Invader! Do you wan to attack or retreat  "," 'attack' or 'bitch' " )
 
 if(x == 'attack'){
    //function to run game
    thaBattle(hero,alienArr[q])
    if(hero.hull <= 0){
    break
    }
    }//to break the loop if they cop out of the fight 
    else if( x == 'bitch'){
        alert ("Stop being a pussboi and grow some cojones wei!")
        break   
    }     
} 


checkForWin = (heroLife, alienLife) => {
   let win = true
    if(heroLife.hull > 0){
        for (let i = 0; i < alienLife.length; i++){
            if(alienLife[i].hull > 0){
                win = false
                alert ("You are a failure, Maggot! You're not allowed to come back home." )
                break
            }
        }
    }
    if (win == true && heroLife.hull > 0){
        alert ("You are Victorioius! Great Work Lil Homie") 
    }
}
document.querySelector("#MainGy").innerHTML = "Hull : " + hero.hull + "<br>"+ "FirePower : " + hero.power + "<br>" + "Accuracy : " + hero.accuracy
document.querySelector("#BadGu").innerHTML = "Hull : " + alienArr[5].hull + "<br>"+ "FirePower : " + alienArr[5].power + "<br>" + "Accuracy : " + alienArr[5].accuracy
console.log(checkForWin(hero, alienArr))
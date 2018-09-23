
var GameState = {
preload: function() {
this.load.image('background', 'assets/images/dodze.png');
this.load.spritesheet('chicken', 'assets/images/chicken_spritesheet.png', 131, 200, 3);
this.load.spritesheet('horse', 'assets/images/horse_spritesheet.png', 212, 200, 3);
this.load.spritesheet('pig', 'assets/images/pig_spritesheet.png', 297, 200, 3);
this.load.spritesheet('sheep', 'assets/images/sheep_spritesheet.png', 244, 200, 3);
this.load.image('arrow', 'assets/images/arrow.png')
this.load.image('kvadrat', 'assets/images/kvadrat.png')
this.load.image('nolik', 'assets/images/nolik.png')
this.load.image('krestik', 'assets/images/krestik.png')
this.load.image('gamename', 'assets/images/gamename.png')
this.load.image('krestikiWin', 'assets/images/krestikiWin.png')
this.load.image('nolikWin', 'assets/images/nolikWin.png')
this.load.image('restartButton', 'assets/images/restartButton.png')

// Загрузка аудио
// this.load.audio('chickenSound', ['assets/audio/chicken.ogg', 'assets/audio/chicken.mp3']);
// this.load.audio('horseSound', ['assets/audio/horse.ogg', 'assets/audio/horse.mp3']);
// this.load.audio('pigSound', ['assets/audio/pig.ogg', 'assets/audio/pig.mp3']);
// this.load.audio('sheepSound', ['assets/audio/sheep.ogg', 'assets/audio/sheep.mp3']);
this.load.audio('music', 'assets/audio/music.mp3');
},

init: function() { 
this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
this.scale.pageAlignHorizontally = true;
this.scale.pageAlignVertically = true;
},

create: function() {
this.sound.play('music')
this.background = this.game.add.sprite(0,0,'background')
this.gamename = this.game.add.sprite(0,0,'gamename')
this.restartButton = this.game.add.sprite(640, this.game.world.centerY+300-20,'restartButton')
this.restartButton.anchor.setTo(0.5)
this.restartButton.inputEnabled = true
this.restartButton.input.pixelPerfectClick = true
this.restartButton.events.onInputDown.add(this.restart, this)

// Подключение всех ассетов (1 урок), удаляем остальное
// this.animal = this.game.add.sprite(this.game.width/2, this.game.world.centerY,'chicken')
// this.animal.anchor.setTo(0.5)
// this.animal.inputEnabled = true
// this.animal.input.pixelPerfectClick = true
// Создание массива из животных что бы дальше с ним взаимодействовать
// var animalData = [
// {key: 'horse', text:'HORSE', audio: 'horseSound'},
// {key: 'chicken', text:'CHIKEN', audio: 'chickenSound'},
// {key: 'pig', text:'PIG', audio: 'pigSound'},
// {key: 'sheep', text:'SHEEP', audio: 'sheepSound'},
// ]

// this.animals = this.game.add.group()

var self = this



// Добавление свойств анимации каждому элементу
// animalData.forEach((element) => {
// animal = self.animals.create(-10000, this.game.world.centerY, element.key)
// animal.customParams = {text: element.text, sound: self.game.add.audio(element.audio)}
// animal.anchor.setTo(0.5)
// animal.animations.add('animate', [0,1,2,1,0], 3, false)
// animal.inputEnabled = true
// animal.input.pixelPerfectClick = true
// animal.events.onInputDown.add(this.animateAnimal, self)
// })

// this.currentAnimal = this.animals.next()
// this.currentAnimal.position.set(this.game.world.centerX, this.game.world.centerY)
// // Показ текста, делается после добавление функции показывания текста
// this.showText(this.currentAnimal)

//
// var kvadratData = [
// {key: 'one'},
// {key: 'two'},
// {key: 'three'},
// {key: 'four'},
// {key: 'five'},
// {key: 'six'},
// {key: 'seven'},
// {key: 'eight'},
// {key: 'nine'},
// ]
// this.kvadrats = this.game.add.group()

// kvadratData.forEach((element) => {
// kvadrat = self.kvadrats.create(-10000, this.game.world.centerY, element.key)
// kvadrat.anchor.setTo(0.5)
// kvadrat.inputEnabled = true
// kvadrat.input.pixelPerfectClick = true
// kvadrat.events.onInputDown.add(this.paint, self)
// })


this.kvadratOne = this.game.add.sprite(550, this.game.world.centerY-90-20,'kvadrat')
this.kvadratOne.anchor.setTo(0.5)
this.kvadratOne.inputEnabled = true
this.kvadratOne.input.pixelPerfectClick = true
this.kvadratOne.events.onInputDown.add(this.paintOne, this)


this.kvadratTwo = this.game.add.sprite(640, this.game.world.centerY-90-20,'kvadrat')
this.kvadratTwo.anchor.setTo(0.5)
this.kvadratTwo.inputEnabled = true
this.kvadratTwo.input.pixelPerfectClick = true
this.kvadratTwo.events.onInputDown.add(this.paintTwo, this)

this.kvadratThree = this.game.add.sprite(730, this.game.world.centerY-90-20,'kvadrat')
this.kvadratThree.anchor.setTo(0.5)
this.kvadratThree.inputEnabled = true
this.kvadratThree.input.pixelPerfectClick = true
this.kvadratThree.events.onInputDown.add(this.paintThree, this)

this.kvadratFour = this.game.add.sprite(550, this.game.world.centerY-20,'kvadrat')
this.kvadratFour.anchor.setTo(0.5)
this.kvadratFour.inputEnabled = true
this.kvadratFour.input.pixelPerfectClick = true
this.kvadratFour.events.onInputDown.add(this.paintFour, this)

this.kvadratFive = this.game.add.sprite(640, this.game.world.centerY-20,'kvadrat')
this.kvadratFive.anchor.setTo(0.5)
this.kvadratFive.inputEnabled = true
this.kvadratFive.input.pixelPerfectClick = true
this.kvadratFive.events.onInputDown.add(this.paintFive, this)

this.kvadratSix = this.game.add.sprite(730, this.game.world.centerY-20,'kvadrat')
this.kvadratSix.anchor.setTo(0.5)
this.kvadratSix.inputEnabled = true
this.kvadratSix.input.pixelPerfectClick = true
this.kvadratSix.events.onInputDown.add(this.paintSix, this)

this.kvadratSeven = this.game.add.sprite(550, this.game.world.centerY+90-20,'kvadrat')
this.kvadratSeven.anchor.setTo(0.5)
this.kvadratSeven.inputEnabled = true
this.kvadratSeven.input.pixelPerfectClick = true
this.kvadratSeven.events.onInputDown.add(this.paintSeven, this)

this.kvadratEight = this.game.add.sprite(640, this.game.world.centerY+90-20,'kvadrat')
this.kvadratEight.anchor.setTo(0.5)
this.kvadratEight.inputEnabled = true
this.kvadratEight.input.pixelPerfectClick = true
this.kvadratEight.events.onInputDown.add(this.paintEight, this)

this.kvadratNine = this.game.add.sprite(730, this.game.world.centerY+90-20,'kvadrat')
this.kvadratNine.anchor.setTo(0.5)
this.kvadratNine.inputEnabled = true
this.kvadratNine.input.pixelPerfectClick = true
this.kvadratNine.events.onInputDown.add(this.paintNine, this)

// this.rightArrow = this.game.add.sprite(1200, this.game.world.centerY,'arrow')
// this.rightArrow.anchor.setTo(0.5)
// this.rightArrow.customParams = {direction: -1}
// this.rightArrow.inputEnabled = true
// this.rightArrow.input.pixelPerfectClick = true
// this.rightArrow.events.onInputDown.add(this.switchAnimal, this)

// this.leftArrow = this.game.add.sprite(60, this.game.world.centerY,'arrow')
// this.leftArrow.scale.x = -1
// this.leftArrow.anchor.setTo(0.5)
// this.leftArrow.customParams = {direction: 1}
// this.leftArrow.inputEnabled = true
// this.leftArrow.input.pixelPerfectClick = true
// this.leftArrow.events.onInputDown.add(this.switchAnimal, this)

},

// showText: function (animal) {
// if(!this.animalText) {
// var style = {
// font: 'bold 30px Arial',
// fill: 'red',
// align: 'center'
// }
// this.animalText = this.game.add.text(this.game.width/2, this.game.height * 0.85, '', style);
// this.animalText.anchor.setTo(0.5)
// }

// this.animalText.setText(animal.customParams.text)
// this.animalText.visible = true
// },

// switchAnimal: function(sprite, event) {

// if(this.isMoving) {
// return false
// } 

// this.isMoving = true
// this.animalText.visible = false
// var newAnimal, endX

// if(sprite.customParams.direction > 0) {
// newAnimal = this.animals.next()
// newAnimal.x = -newAnimal.width/2
// endX = 1280 + this.currentAnimal.width/2
// } else {
// newAnimal = this.animals.previous()
// newAnimal.x = 1280 + newAnimal.width/2
// endX = -this.currentAnimal.width/2
// }

// var newAnimalMovement = game.add.tween(newAnimal)
// newAnimalMovement.to({x: this.game.world.centerX}, 1000)
// newAnimalMovement.onComplete.add(() => {
// this.isMoving = false
// this.showText(newAnimal)
// }, this)
 
// newAnimalMovement.start()

// var currentAnimalMovement = this.game.add.tween(this.currentAnimal)
// currentAnimalMovement.to({x: endX}, 1000)
// currentAnimalMovement.start()

// this.currentAnimal = newAnimal

// },


paintOne: function(){


	if(!this.krest){
	this.krestik = this.game.add.sprite(550, this.game.world.centerY-90-20,'krestik')
this.krestik.anchor.setTo(0.5)
this.krest = true
this.one = true
} else {
		this.nolik = this.game.add.sprite(550, this.game.world.centerY-90-20,'nolik')
this.nolik.anchor.setTo(0.5)
this.krest = false
this.one = false
}
this.kvadratOne.inputEnabled = false
this.winner();
},

paintTwo: function(){

	if(!this.krest){
	this.krestik = this.game.add.sprite(640, this.game.world.centerY-90-20,'krestik')
this.krestik.anchor.setTo(0.5)
this.krest = true
this.two = true
} else {
		this.nolik = this.game.add.sprite(640, this.game.world.centerY-90-20,'nolik')
this.nolik.anchor.setTo(0.5)
this.krest = false
this.two = false
}
this.kvadratTwo.inputEnabled = false
this.winner();
},

paintThree: function(){
	if(!this.krest){
	this.krestik = this.game.add.sprite(730, this.game.world.centerY-90-20,'krestik')
this.krestik.anchor.setTo(0.5)
this.krest = true
this.three = true
} else {
		this.nolik = this.game.add.sprite(730, this.game.world.centerY-90-20,'nolik')
this.nolik.anchor.setTo(0.5)
this.krest = false
this.three = false
}
this.kvadratThree.inputEnabled = false
this.winner();
},

paintFour: function(){
	if(!this.krest){
	this.krestik = this.game.add.sprite(550, this.game.world.centerY-20,'krestik')
this.krestik.anchor.setTo(0.5)
this.krest = true
this.four = true
} else {
		this.nolik = this.game.add.sprite(550, this.game.world.centerY-20,'nolik')
this.nolik.anchor.setTo(0.5)
this.krest = false
this.four = false
}
this.kvadratFour.inputEnabled = false
this.winner();
},

paintFive: function(){
	if(!this.krest){
	this.krestik = this.game.add.sprite(640, this.game.world.centerY-20,'krestik')
this.krestik.anchor.setTo(0.5)
this.krest = true
this.five = true
} else {
		this.nolik = this.game.add.sprite(640, this.game.world.centerY-20,'nolik')
this.nolik.anchor.setTo(0.5)
this.krest = false
this.five = false
}
this.kvadratFive.inputEnabled = false
this.winner();
},

paintSix: function(){
	if(!this.krest){
	this.krestik = this.game.add.sprite(730, this.game.world.centerY-20,'krestik')
this.krestik.anchor.setTo(0.5)
this.krest = true
this.six = true
} else {
		this.nolik = this.game.add.sprite(730, this.game.world.centerY-20,'nolik')
this.nolik.anchor.setTo(0.5)
this.krest = false
this.six = false
}
this.kvadratSix.inputEnabled = false
this.winner();
},

paintSeven: function(){
	if(!this.krest){
	this.krestik = this.game.add.sprite(550, this.game.world.centerY+90-20,'krestik')
this.krestik.anchor.setTo(0.5)
this.krest = true
this.seven = true
} else {
		this.nolik = this.game.add.sprite(550, this.game.world.centerY+90-20,'nolik')
this.nolik.anchor.setTo(0.5)
this.krest = false
this.seven = false
}
this.kvadratSeven.inputEnabled = false
this.winner();
},

paintEight: function(){
	if(!this.krest){
	this.krestik = this.game.add.sprite(640, this.game.world.centerY+90-20,'krestik')
this.krestik.anchor.setTo(0.5)
this.krest = true
this.eight = true
} else {
		this.nolik = this.game.add.sprite(640, this.game.world.centerY+90-20,'nolik')
this.nolik.anchor.setTo(0.5)
this.krest = false
this.eight = false
}
this.kvadratEight.inputEnabled = false
this.winner();
},

paintNine: function(){
	if(!this.krest){
	this.krestik = this.game.add.sprite(730, this.game.world.centerY+90-20,'krestik')
this.krestik.anchor.setTo(0.5)
this.krest = true
this.nine = true

} else {
		this.nolik = this.game.add.sprite(730, this.game.world.centerY+90-20,'nolik')
this.nolik.anchor.setTo(0.5)
this.krest = false
this.nine = false
}
this.kvadratNine.inputEnabled = false
this.winner();
},

restart: function(){
	location.reload();
},

winner: function(){
	if(((!this.one)&&(!this.kvadratOne.inputEnabled) && (!this.kvadratTwo.inputEnabled) && (!this.two)&&(!this.kvadratThree.inputEnabled)&&(!this.three))||((!this.two)&&(!this.kvadratTwo.inputEnabled) && (!this.kvadratFive.inputEnabled) && (!this.five)&&(!this.kvadratEight.inputEnabled)&&(!this.eight))||((!this.one)&&(!this.kvadratOne.inputEnabled) && (!this.kvadratFour.inputEnabled) && (!this.four)&&(!this.kvadratSeven.inputEnabled)&&(!this.seven))||((!this.four)&&(!this.kvadratFour.inputEnabled) && (!this.kvadratFive.inputEnabled) && (!this.five)&&(!this.kvadratSix.inputEnabled)&&(!this.six))||((!this.one)&&(!this.kvadratOne.inputEnabled) && (!this.kvadratFive.inputEnabled) && (!this.five)&&(!this.kvadratNine.inputEnabled)&&(!this.nine))||((!this.three)&&(!this.kvadratThree.inputEnabled) && (!this.kvadratSix.inputEnabled) && (!this.six)&&(!this.kvadratNine.inputEnabled)&&(!this.nine))||((!this.three)&&(!this.kvadratThree.inputEnabled) && (!this.kvadratFive.inputEnabled) && (!this.five)&&(!this.kvadratSeven.inputEnabled)&&(!this.seven))||((!this.seven)&&(!this.kvadratSeven.inputEnabled) && (!this.kvadratEight.inputEnabled) && (!this.eight)&&(!this.kvadratNine.inputEnabled)&&(!this.nine))){
		this.nolikWin = this.game.add.sprite(640, this.game.world.centerY-20,'nolikWin')
		this.nolikWin.anchor.setTo(0.5)
	} 
	if (((this.one)&&(!this.kvadratOne.inputEnabled) && (!this.kvadratTwo.inputEnabled) && (this.two)&&(!this.kvadratThree.inputEnabled)&&(this.three))||((this.two)&&(!this.kvadratTwo.inputEnabled) && (!this.kvadratFive.inputEnabled) && (this.five)&&(!this.kvadratEight.inputEnabled)&&(this.eight))||((this.one)&&(!this.kvadratOne.inputEnabled) && (!this.kvadratFour.inputEnabled) && (this.four)&&(!this.kvadratSeven.inputEnabled)&&(this.seven))||((this.four)&&(!this.kvadratFour.inputEnabled) && (!this.kvadratFive.inputEnabled) && (this.five)&&(!this.kvadratSix.inputEnabled)&&(this.six))||((this.one)&&(!this.kvadratOne.inputEnabled) && (!this.kvadratFive.inputEnabled) && (this.five)&&(!this.kvadratNine.inputEnabled)&&(this.nine))||((this.three)&&(!this.kvadratThree.inputEnabled) && (!this.kvadratSix.inputEnabled) && (this.six)&&(!this.kvadratNine.inputEnabled)&&(this.nine))||((this.three)&&(!this.kvadratThree.inputEnabled) && (!this.kvadratFive.inputEnabled) && (this.five)&&(!this.kvadratSeven.inputEnabled)&&(this.seven))||((this.seven)&&(!this.kvadratSeven.inputEnabled) && (!this.kvadratEight.inputEnabled) && (this.eight)&&(!this.kvadratNine.inputEnabled)&&(this.nine))){
		this.krestikiWin = this.game.add.sprite(640, this.game.world.centerY-20,'krestikiWin')
		this.krestikiWin.anchor.setTo(0.5)
}
},



update: function() {

},

rightClick: function() {
console.log('Right')
},

leftClick: function() {
console.log('Left')
},

// animateAnimal: function(sprite, event) {
// sprite.play('animate')
// sprite.customParams.sound.play()
// },

};
var game = new Phaser.Game(1280, 720, Phaser.AUTO);

game.state.add('GameState', GameState);
game.state.start('GameState');
 
function introSequence() {

  scene.setBackgroundImage(assets.image`myTile`);
  game.waitAnyButton()
  game.showLongText("PIONEIR MARS IS DEAGREOUS PLACE. STORM IS COMING QUICKLI! YOU HAVE 60 sec TO COLECT SAMPLES AND ESCAPE TO THE HUB.", DialogLayout.Center)
 
    
    
}
introSequence();

//--------------------------------------------------------------

let kosmonaut = sprites.create(sp.images.Kosmonaut,SpriteKind.Kosmonaut); 
let hub = sprites.create(sp.images.Hub,SpriteKind.Hub);

let sample1 = sprites.create(sp.images.Sample,SpriteKind.Sample);
let sample2 = sprites.create(sp.images.Sample,SpriteKind.Sample);
let sample3 = sprites.create(sp.images.Sample,SpriteKind.Sample);
let sample4 = sprites.create(sp.images.Sample,SpriteKind.Sample);
let sample5 = sprites.create(sp.images.Sample,SpriteKind.Sample);
let sample6 = sprites.create(sp.images.Sample,SpriteKind.Sample);
let sample7 = sprites.create(sp.images.Sample,SpriteKind.Sample);
let sample8 = sprites.create(sp.images.Sample,SpriteKind.Sample);
let sample9 = sprites.create(sp.images.Sample,SpriteKind.Sample);
let sample10 = sprites.create(sp.images.Sample,SpriteKind.Sample);
let sample11 = sprites.create(sp.images.Sample,SpriteKind.Sample);
let sample12 = sprites.create(sp.images.Sample,SpriteKind.Sample);
let sample13 = sprites.create(sp.images.Sample,SpriteKind.Sample);
let sample14 = sprites.create(sp.images.Sample,SpriteKind.Sample);
let samplesCollected = 0;

//-------------------------------------------------------------------------
// kosmonaut controller img ->

controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    kosmonaut.setImage(assets.image`Kosmonaut2`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    kosmonaut.setImage(assets.image`Kosmonaut`)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    kosmonaut.setImage(assets.image`Kosmonaut1`)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    kosmonaut.setImage(assets.image`Kosmonaut`)
})



//-------------------------------------------------------------------------
game.onUpdate(function() {
    
})
controller.moveSprite(kosmonaut);
scene.cameraFollowSprite(kosmonaut);

info.score()
info.startCountdown(60)

//-------------------------------------------------------------------------
//Ovrelapses ->
sprites.onOverlap(SpriteKind.Kosmonaut, SpriteKind.Sample, function (mainSprite, hitSprite) {
    samplesCollected++;
    
    
    info.changeScoreBy(1)
    hitSprite.destroy(effects.rings);
})
sprites.onOverlap(SpriteKind.Kosmonaut, SpriteKind.Hub, function (mainSprite, hitSprite) {
   if(samplesCollected == 14)
   {
    game.splash("Good job!");
    mainSprite.destroy();

    game.over(true)
   }
   else
   {
    
    kosmonaut.say("I don't have all samples",1500)
    kosmonaut.setPosition(kosmonaut.x - 10,kosmonaut.y - 20);
   }
}) 

//-------------------------------------------------------------------------   
    
function setuplv1()
{
  scene.setTileMapLevel(tilemap`level0`)
  
  
  kosmonaut.setPosition(6, 6)
  hub.setPosition(160, 120)
  sample1.setPosition(120,167)
  sample2.setPosition(49,167)
  sample3.setPosition(122,24)
  sample4.setPosition(68,144)
  sample5.setPosition(3,242)
  sample6.setPosition(144,103)
  sample7.setPosition(253,103)
  sample8.setPosition(97,246)
  sample9.setPosition(48,180)
  sample10.setPosition(245,181)
  sample11.setPosition(115,107)
  sample12.setPosition(136,78)
  sample13.setPosition(170,165)
  sample14.setPosition(69,73)
}
setuplv1()

function lv2()
{

}



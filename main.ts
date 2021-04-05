 
function introSequence() {

  scene.setBackgroundImage(assets.image`myTile`);
  game.waitAnyButton()
  game.showLongText("PIONEIR MARS IS DEAGREOUS PLACE. STORM IS COMING QUICKLI! YOU HAVE 30 sec TO COLECT SAMPLES AND ESCAPE TO THE HUB.", DialogLayout.Center)
 
    
    
}
introSequence();
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
controller.moveSprite(kosmonaut);
scene.cameraFollowSprite(kosmonaut);
info.score()
sprites.onOverlap(SpriteKind.Kosmonaut, SpriteKind.Sample, function (mainSprite, hitSprite) {
    samplesCollected++;
    
    info.changeScoreBy(1)
    hitSprite.destroy();
})
sprites.onOverlap(SpriteKind.Kosmonaut, SpriteKind.Hub, function (mainSprite, hitSprite) {
   
    
    mainSprite.destroy();

    game.over()
})

function lv1()
{
  scene.setTileMapLevel(tilemap`level3`)
  
  
  kosmonaut.setPosition(6, 6)
  hub.setPosition(160, 120)
  sample1.setPosition(115,50)
  sample2.setPosition(111,111)
  sample3.setPosition(100,33)
  sample4.setPosition(90,32)
  sample5.setPosition(84,56)
  sample6.setPosition(115,145)
  sample7.setPosition(75,123)
  sample8.setPosition(60,79)
  sample9.setPosition(55,7)
  sample10.setPosition(43,88)
  sample11.setPosition(40,4)
  sample12.setPosition(24,110)
  sample13.setPosition(16,87)
  sample14.setPosition(11,66)
}
lv1()

function lv2()
{

}



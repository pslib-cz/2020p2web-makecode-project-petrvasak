scene.setBackgroundColor(4)

let myCosmonaut = sprites.create(img`
     . . . . . . . . . . . . . . . .
     . . . . . 1 1 1 1 1 . . . . . .
     . . . . . 1 f f 1 f . . . . . .
     . . . . . 1 f f f 1 . . . . . .
     . . . . . 1 f f f f . . . . . .
     . . . . 1 1 1 1 1 1 . . . . . .
     . . . 1 1 1 1 1 1 1 1 . . . . .
     . . . 1 1 1 2 1 8 1 1 . . . . .
     . . . 1 1 1 1 1 1 1 1 . . . . .
     . . . 1 1 1 1 1 1 1 1 . . . . .
     . . . . 1 1 1 1 1 1 . . . . . .
     . . . . . 1 1 1 1 . . . . . . .
     . . . . . 1 1 1 1 . . . . . . .
     . . . . . 1 1 1 1 . . . . . . .
     . . . . . 1 1 1 1 . . . . . . .
     . . . . . . . . . . . . . . . .
 `)

controller.moveSprite(myCosmonaut,100,100)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . d d d d . . . .
    . . . . . . d d d d d d . . . .
    . . . . . d d d e d e d . . . .
    . . . . d d e d e e e d . . . .
    . . . . d e e d e e e e . . . .
    . . . . d e e e e e e e . . . .
    . . . . d e e e e e e d . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`,rock)


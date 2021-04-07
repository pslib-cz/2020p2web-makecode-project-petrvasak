// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000402020202020300000000000000000007010101010106000000000000000000070101010101060000000000000000000701010101010600000000000000000007010101010106000000000000000000070101010101060000000000000000000701010101010600000000000000000007010101010106000000000000000000050909090909080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.floorLight0,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouth1], TileScale.Sixteen);
            case "level0":
            case "level3":return tiles.createTilemap(hex`1000100001010101010101020201020202020101010102010201010101010101010101010101010101010101010201010101010101010101010101010101020101010101010101020101010101010201010101010101010101010202010101010101010101010101010102010102010201010101010102010101010101010101010101010101020101010101010101010101010101010101010101020201010102010101010101010102020101010101020101010101020101010101010201010101010101010201020101010102010101020101010101010101010101010101010201010102020101010101010101010101010101010101010101010101010101010101`, img`
. . . . . . . 2 2 . 2 2 2 2 . . 
. . 2 . 2 . . . . . . . . . . . 
. . . . . . . . . 2 . . . . . . 
. . . . . . . . . . 2 . . . . . 
. . . 2 . . . . . . 2 . . . . . 
. . . . . . 2 2 . . . . . . . . 
. . . . . . 2 . . 2 . 2 . . . . 
. . 2 . . . . . . . . . . . . . 
. . 2 . . . . . . . . . . . . . 
. . . . . . . 2 2 . . . 2 . . . 
. . . . . 2 2 . . . . . 2 . . . 
. . 2 . . . . . . 2 . . . . . . 
. . 2 . 2 . . . . 2 . . . 2 . . 
. . . . . . . . . . . . . 2 . . 
. 2 2 . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile2,myTiles.tile3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.

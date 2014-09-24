ig.module( 'game.levels.main' )
.requires( 'impact.image','game.entities.torch','game.entities.chains' )
.defines(function(){
LevelMain=/*JSON[*/{
	"entities": [
		{
			"type": "EntityTorch",
			"x": 72,
			"y": 112
		},
		{
			"type": "EntityTorch",
			"x": 144,
			"y": 112
		},
		{
			"type": "EntityChains",
			"x": 56,
			"y": 64
		},
		{
			"type": "EntityChains",
			"x": 200,
			"y": 20
		}
	],
	"layer": [
		{
			"name": "main",
			"width": 30,
			"height": 20,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "media/maintiles.png",
			"repeat": false,
			"preRender": true,
			"distance": "1",
			"tilesize": 8,
			"foreground": false,
			"data": [
				[8,8,10,10,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,10,10,8,8,8,8,8,8],
				[8,8,8,8,8,8,8,8,8,8,8,8,8,10,10,10,10,8,8,8,8,8,8,8,10,8,8,8,8,8],
				[10,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
				[8,8,8,10,10,8,8,10,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
				[8,8,8,8,10,10,10,10,8,10,8,10,10,8,8,8,8,10,10,10,10,10,8,8,8,8,8,8,8,8],
				[8,8,8,8,8,8,8,8,8,8,9,8,10,8,10,8,8,10,8,8,1,1,1,8,10,10,10,8,8,8],
				[8,10,8,8,8,8,8,10,8,8,8,8,8,8,8,8,8,8,10,8,1,2,1,8,8,8,8,8,8,8],
				[8,10,8,8,8,8,8,10,8,8,8,8,8,8,8,8,8,10,8,10,1,2,1,8,10,8,8,8,8,8],
				[8,10,8,8,8,8,10,10,10,8,10,1,1,8,8,9,10,8,8,8,1,1,1,8,8,8,8,10,8,8],
				[8,10,8,8,8,10,10,8,10,8,9,1,1,8,8,8,8,8,8,8,10,10,8,8,8,8,8,8,8,8],
				[8,8,8,10,8,10,8,8,8,8,9,1,1,10,8,8,8,8,8,8,10,10,10,8,8,8,8,8,8,8],
				[8,8,8,8,8,8,8,8,8,8,8,1,2,8,8,9,10,8,8,8,8,10,8,8,8,10,8,8,8,8],
				[8,8,10,8,8,8,9,8,8,8,8,1,1,8,8,8,10,10,8,8,8,8,8,8,10,10,8,8,8,8],
				[8,10,10,8,8,8,8,8,8,8,8,2,1,8,8,8,10,8,8,8,10,10,8,8,10,8,8,8,8,8],
				[8,10,8,8,8,10,8,8,8,8,8,8,9,8,8,10,8,10,8,8,8,10,8,8,8,8,8,8,8,8],
				[8,8,8,8,8,8,10,8,8,8,10,8,10,10,8,9,8,10,8,8,8,8,8,8,8,10,8,8,8,8],
				[1,1,1,5,1,4,1,1,1,5,1,3,1,1,1,10,10,10,1,1,1,1,1,1,4,1,1,1,1,1],
				[8,8,8,8,1,1,8,8,8,8,8,3,1,8,8,8,8,8,10,8,8,8,8,1,4,8,10,8,8,8],
				[8,8,8,8,1,1,8,8,8,10,10,5,1,10,8,8,8,8,8,8,8,8,8,5,1,10,8,8,8,8],
				[8,8,8,8,5,1,10,10,8,10,10,5,1,10,8,8,8,8,8,8,8,8,8,1,1,8,8,8,8,8]
			]
		},
		{
			"name": "collision",
			"width": 30,
			"height": 20,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "",
			"repeat": false,
			"preRender": false,
			"distance": 1,
			"tilesize": 8,
			"foreground": false,
			"data": [
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1],
				[0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0],
				[0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0],
				[0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0]
			]
		}
	]
}/*]JSON*/;
LevelMainResources=[new ig.Image('media/maintiles.png')];
});
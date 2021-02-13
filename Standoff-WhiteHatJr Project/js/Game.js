class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }


 
     async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
  
      
      
  
      player1a = createSprite(100,200);
      player1a.addImage("Player1",player1apng);
      player2a = createSprite(300,200);
      player2a.addImage("Player2",player2apng);
      player3a = createSprite(500,200);
      player3a.addImage("Player3",player3apng);
      player4a = createSprite(700,200);
      player4a.addImage("Player4",player4apng);
      player5a = createSprite(700,200);
      player5a.addImage("Player5",player5apng);
      playera = [player1a, player2a, player3a, player4a, player5a];
  
      player1b = createSprite(100,200);
      player1b.addImage("Player6",player1bpng);
      player2b = createSprite(300,200);
      player2b.addImage("Player7",player2bpng);
      player3b = createSprite(500,200);
      player3b.addImage("Player8",player3bpng);
      player4a = createSprite(700,200);
      player4b.addImage("Player9",player4bpng);
      player5b = createSprite(700,200);
      player5b.addImage("Player10",player5bpng);
      playerb = [player1b, player2b, player3b, player4b, player5b];
    }
  }
 
 
      play(){
      form.hide();
      
      player.getPlayerInfo();
      
      if(allPlayers !== undefined){
        background(rgb(249,219,5));
        image(x, 0,-displayHeight*4,displayWidth, displayHeight*5);
        
       var index = 0;

       

       
       drawSprites();
      }
        for(var plr in allPlayers){
          
          index = index + 1 ;
  
          y = displayHeight - allPlayers[plr].distance;
          cars[index-1].x = x;
          cars[index-1].y = y;
       
           if (index === player.index){
            cars[index - 1].shapeColor = "#f21a3f";
            camera.position.x = displayWidth/2;
            camera.position.y = cars[index-1].y;
            
          }
        }

bControls(){
        if(gameState===2){
          if(keyDown("UPARROW")&&player1b.mousePressed()){
           player1b.velocityY=5;
 
           
          }}
         if(gameState===2){
           if(keyDown("UPARROW")&&player2b.mousePressed()){
            player2b.velocityY=5;
            
           }
          }
 
          if(gameState===2){
           if(keyDown("UPARROW")&&player3b.mousePressed()){
            player3b.velocityY=5;
            
           }
          }
         
          if(gameState===2){
           if(keyDown("UPARROW")&&player4b.mousePressed()){
            player4b.velocityY=5;
           }
           }
           if(gameState===2){
             if(keyDown("UPARROW")&&player5b.mousePressed()){
              player5b.velocityY=5;
              
             }
            }

           if(gameState===2){
          if(keyDown("RIGHTARROW")&&player1b.mousePressed()){
           player1b.velocityX=5;
 
           
          }}
         if(gameState===2){
           if(keyDown("RIGHTARROW")&&player2b.mousePressed()){
            player2b.velocityX=5;
            
           }
          }
 
          if(gameState===2){
           if(keyDown("RIGHTARROW")&&player3b.mousePressed()){
            player3b.velocityX=5;
            
           }
          }
         
          if(gameState===2){
           if(keyDown("RIGHTARROW")&&player4b.mousePressed()){
            player4b.velocityX=5;
           }
           }
           if(gameState===2){
             if(keyDown("RIGHTARROW")&&player5b.mousePressed()){
              player5b.velocityX=5;
              
             }
            }


            if(gameState===2){
              if(keyDown("LEFTARROW")&&player1b.mousePressed()){
               player1b.velocityX=-5;
     
               
              }}
             if(gameState===2){
               if(keyDown("LEFTARROW")&&player2b.mousePressed()){
                player2b.velocityX=-5;
                
               }
              }
     
              if(gameState===2){
               if(keyDown("LEFTARROW")&&player3b.mousePressed()){
                player3b.velocityX=-5;
                
               }
              }
             
              if(gameState===2){
               if(keyDown("LEFTARROW")&&player4b.mousePressed()){
                player4b.velocityX=-5;
               }
               }
               if(gameState===2){
                 if(keyDown("LEFTARROW")&&player5b.mousePressed()){
                  player5b.velocityX=-5;
                  
                 }
                }
}
aControls(){
      if(gameState===1){
        if(keyDown("UPARROW")&&player1a.mousePressed()){
         player1a.velocityY=5;

         
        }}
       if(gameState===1){
         if(keyDown("UPARROW")&&player2a.mousePressed()){
          player2a.velocityY=5;
          
         }
        }

        if(gameState===1){
         if(keyDown("UPARROW")&&player3a.mousePressed()){
          player3a.velocityY=5;
          
         }
        }
       
        if(gameState===1){
         if(keyDown("UPARROW")&&player4a.mousePressed()){
          player4a.velocityY=5;
         }
         }
         if(gameState===1){
           if(keyDown("UPARROW")&&player5a.mousePressed()){
            player5a.velocityY=5;
            
           }
          }



          if(gameState===1){
        if(keyDown("RIGHTARROW")&&player1a.mousePressed()){
         player1a.velocityX=5;

         
        }}
       if(gameState===1){
         if(keyDown("RIGHTARROW")&&player2a.mousePressed()){
          player2a.velocityX=5;
          
         }
        }

        if(gameState===1){
         if(keyDown("RIGHTARROW")&&player3a.mousePressed()){
          player3a.velocityX=5;
          
         }
        }
       
        if(gameState===1){
         if(keyDown("RIGHTARROW")&&player4a.mousePressed()){
          player4a.velocityX=5;
         }
         }
         if(gameState===1){
           if(keyDown("RIGHTARROW")&&player5a.mousePressed()){
            player5a.velocityX=5;
            
           }
          }


          if(gameState===1){
            if(keyDown("LEFTARROW")&&player1a.mousePressed()){
             player1a.velocityX=-5;
   
             
            }}
           if(gameState===1){
             if(keyDown("LEFTARROW")&&player2a.mousePressed()){
              player2a.velocityX=-5;
              
             }
            }
   
            if(gameState===1){
             if(keyDown("LEFTARROW")&&player3a.mousePressed()){
              player3a.velocityX=-5;
              
             }
            }
           
            if(gameState===1){
             if(keyDown("LEFTARROW")&&player4a.mousePressed()){
              player4a.velocityX=-5;
             }
             }
             if(gameState===1){
               if(keyDown("LEFTARROW")&&player5a.mousePressed()){
                player5a.velocityX=-5;
                
               }
              }
        
    
}

aDestroy(){
  if(player1a.isTouching(player1b)){
    player1b.hide;
  }
  if(player1a.isTouching(player2b)){
    player2b.hide;
  }
  if(player1a.isTouching(player3b)){
    player3b.hide;
  }
  if(player1a.isTouching(player4b)){
    player4b.hide;
  }
  if(player1a.isTouching(player5b)){
    player5b.hide;
  }

  if(player2a.isTouching(player1b)){
    player1b.hide;
  }
  if(player2a.isTouching(player2b)){
    player2b.hide;
  }
  if(player2a.isTouching(player3b)){
    player3b.hide;
  }
  if(player2a.isTouching(player4b)){
    player4b.hide;
  }
  if(player2a.isTouching(player5b)){
    player5b.hide;
  }

  if(player3a.isTouching(player1b)){
    player1b.hide;
  }
  if(player3a.isTouching(player2b)){
    player2b.hide;
  }
  if(player3a.isTouching(player3b)){
    player3b.hide;
  }
  if(player3a.isTouching(player4b)){
    player4b.hide;
  }
  if(player3a.isTouching(player5b)){
    player5b.hide;
  }

  if(player4a.isTouching(player1b)){
    player1b.hide;
  }
  if(player4a.isTouching(player2b)){
    player2b.hide;
  }
  if(player4a.isTouching(player3b)){
    player3b.hide;
  }
  if(player4a.isTouching(player4b)){
    player4b.hide;
  }
  if(player4a.isTouching(player5b)){
    player5b.hide;
  }

  if(player5a.isTouching(player1b)){
    player1b.hide;
  }
  if(player5a.isTouching(player2b)){
    player2b.hide;
  }
  if(player5a.isTouching(player3b)){
    player3b.hide;
  }
  if(player5a.isTouching(player4b)){
    player4b.hide;
  }
  if(player5a.isTouching(player5b)){
    player5b.hide;
  }
}
bDestroy(){
  if(player1b.isTouching(player1a)){
    player1a.hide;
  }
  if(player1b.isTouching(player2a)){
    player2a.hide;
  }
  if(player1b.isTouching(player3a)){
    player3a.hide;
  }
  if(player1b.isTouching(player4a)){
    player4a.hide;
  }
  if(player1b.isTouching(player5a)){
    player5a.hide;
  }

  if(player2b.isTouching(player1a)){
    player1a.hide;
  }
  if(player2b.isTouching(player2a)){
    player2a.hide;
  }
  if(player2b.isTouching(player3a)){
    player3a.hide;
  }
  if(player2b.isTouching(player4a)){
    player4a.hide;
  }
  if(player2b.isTouching(player5a)){
    player5a.hide;
  }

  if(player3b.isTouching(player1a)){
    player1a.hide;
  }
  if(player3b.isTouching(player2a)){
    player2a.hide;
  }
  if(player3b.isTouching(player3a)){
    player3a.hide;
  }
  if(player3b.isTouching(player4a)){
    player4a.hide;
  }
  if(player3b.isTouching(player5a)){
    player5a.hide;
  }

  if(player4b.isTouching(player1a)){
    player1a.hide;
  }
  if(player4b.isTouching(player2a)){
    player2a.hide;
  }
  if(player4b.isTouching(player3a)){
    player3a.hide;
  }
  if(player4b.isTouching(player4a)){
    player4a.hide;
  }
  if(player4b.isTouching(player5a)){
    player5a.hide;
  }

  if(player5b.isTouching(player1a)){
    player1a.hide;
  }
  if(player5b.isTouching(player2a)){
    player2a.hide;
  }
  if(player5b.isTouching(player3a)){
    player3a.hide;
  }
  if(player5b.isTouching(player4a)){
    player4a.hide;
  }
  if(player5b.isTouching(player5a)){
    player5a.hide;
  }
}
  }
      


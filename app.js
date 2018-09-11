
//java script code for pig game
var scores, roundscores, activePlayer,  dice, gamePlaying;

init();
//document.querySelector('#current-'+activePlayer).textContent = dice;

//var x = document.querySelector('#score-0').textContent;


document.querySelector('.btn-roll').addEventListener('click', function()
{
    if(gamePlaying)
    {
            //random number
        dice = Math.floor(Math.random()*6)+1;

        //display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display='block';
        diceDOM.src = 'dice-'+ dice +'.png';
        
        if(dice!==1)
        {
            roundscores+=dice;
            document.querySelector('#current-'+activePlayer).textContent = roundscores;
        }
        else
        {
            //next player
            nextPlayer();
        }
    }
    
});

    document.querySelector('.btn-hold').addEventListener('click', function(){
        if(gamePlaying)
        {
            if(dice)
        scores[activePlayer]+=roundscores;
    document.querySelector('#score-'+ activePlayer).textContent = scores[activePlayer];
    if(scores[activePlayer]>=100)
    {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-'+ activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-'+ activePlayer + '-panel').classList.remove('active');
        gamePlaying =  false;
    }
    else
    {
    nextPlayer();
    }
        }
});
function nextPlayer()
{
    activePlayer=== 0? activePlayer = 1 : activePlayer = 0;
    roundscores=0;

    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    
    document.querySelector('.dice').style.display = 'none';
}
document.querySelector('.btn-new').addEventListener('click', init);

function init()
{
    scores=[0, 0];
    roundscores=0;
    activePlayer=0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent='Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

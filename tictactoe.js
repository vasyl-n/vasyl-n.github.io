var one_pl = true
$(document).on('click','#two', function(){
  window.one_pl = false
  replay()})
$(document).on('click','#one', function(){
  window.one_pl = true
  replay()})

$(document).ready(function(){
$('.cell').hover(
  function(){
  $(this).addClass('a');
  },
  function(){
  $(this).removeClass('a');
  });
})

$(document).ready(function(){
$('#new_game').click(function(){
  $(this).fadeOut("fast")
$('.grid').css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 'fast')
displ_1_2_pl_options()
display_marker_options()
displ_1_2_pl_options()
display_score(score_x, score_o)
$('#replay').remove()
var replay = $('<button>Restart Game</button>').attr('class', 'button').attr('id', 'replay')
$('body').append(replay)
})})

$(document).on('click','#replay', function(){
replay()
})


function replay(){
    $('#winner').remove()
    $('.grid').show()
    $('.cell').empty()
    if(window.play_as_o){
      window.m = 'O'
    }
    displ_1_2_pl_options()
    display_marker_options()
    board = [".", ".", ".",
             ".", ".", ".",
             ".", ".", "."]
}



board = [".", ".", ".",
         ".", ".", ".",
         ".", ".", "."]


function print_board(board){
console.log(board[0], board[1], board[2])
console.log(board[3], board[4], board[5])
console.log(board[6], board[7], board[8])
}
score_x = 0
score_o = 0
function score_count(m){
    if(m=="X"){
      score_x += 1
    }
    if(m=="O"){
      score_o +=1
    }
}


function display_score(x,o){
    $(document).ready(function(){
      $('.score').remove()
      $('body').append("<div class='score'><span id='xscore'>X ---- "+ x + "</span><span id='oscore'>O ---- " + o + "</span></div>")
    })}
function display_whos_turn(){
  if(m == "X"){
      $('#whos_turn').remove()
      $('body').append("<div id='whos_turn'>X - Turn</div>")
    }
    else if(m == "O"){
        $('#whos_turn').remove()
        $('body').append("<div id='whos_turn'>O - Turn</div>")
      }}

function user_marker(m){
    if(m == "X"){
        window.m = "O"
        display_whos_turn()
        }
    else if(m == "O"){
        window.m = "X"
        display_whos_turn()
        }
    return m
  }

function place_marker(board, position, marker){
    window.board[position] = marker
  }

function check_if_win(marker){
    if(board[0] == marker && board[1] == marker && board[2] == marker || board[3] == marker && board[4] == marker &&
                    board[5] == marker || board[6] == marker && board[7] == marker && board[8] == marker || board[
        0] == marker && board[4] == marker && board[8] == marker || board[0] == marker && board[3] == marker &&
                    board[6] == marker || board[1] == marker && board[4] == marker && board[7] == marker || board[
        2] == marker && board[5] == marker && board[8] == marker || board[0] == marker && board[1] == marker &&
                    board[2] == marker || board[2] == marker && board[4] == marker && board[6] == marker){
        console.log("CONGRATULATIONS -- " + marker + " -- WIN")
        return true
      }
    else{
      return false
    }
    }

function is_draw(board){
    if(!board.includes(".") && check_if_win(m) == false){
      console.log("It's draw")
      return true
    }
      else{
        return false
      }

    }

function game_over(m){
  $(document).ready(function(){
  var replay = $('<button>Restart Game</button>').attr('class', 'button').attr('id', 'replay')
  $('body').append('<button id="winner"><span class="win_marker">'+ m + '</span><br><span class="word_winner">WINNER</span></button>')
  $('body').append(replay)
  // window.m = 'X'
})}

function game_over_draw(){
  $(document).ready(function(){
  $('#winner').remove()
  $('#replay').remove()
  var replay = $('<button>Restart Game</button>').attr('class', 'button').attr('id', 'replay')
  $('body').append('<button id="winner"><span class="win_marker"> X - O </span><br><span class="word_winner">DRAW!</span></button>')
  $('body').append(replay)
  // window.m = 'X'
})}

function display_marker_options(){
  $('#playAsX').remove()
  $('#playAsO').remove()
  $('body').append("<button class='choose_player' id='playAsX'>X goes first</button>")
  $('body').append("<button class='choose_player' id='playAsO'>O goes first</button>")
}

function displ_1_2_pl_options(){
  $('#one').remove()
  $('#two').remove()
  $('body').append("<button class='choose_player' id='one'>One Player</button>")
  $('body').append("<button class='choose_player' id='two'>Two Players</button>")
}

function is_free(p){
    p = Number(p)
    if(window.board[p] == ".")
        {return true}
    if(window.board[p] == "X" || board[p] == "O"){
        return false}}

function set_m_to_x(){
  replay()
  window.m = 'X'
  window.play_as_x = true
  window.play_as_o = false
}
function set_m_to_o(){
  replay()
  window.m = 'O'
  window.play_as_o = true
  window.play_as_x = false
}

function fade_out_board(){
  $(document).ready(function(){
    $('.grid').hide('fast')
})}

function gui_marker(){
    if(window.m=="X"){
      var img = $('<img src="./x.png" /> ').addClass('x');
      $('#' + id).empty()
      $('#' + id).prepend(img)}
    if(window.m == "O"){
      var img = $('<img src="./o.png" /> ').addClass('o');
      $('#' + id).empty()
      $('#' + id).prepend(img)
    }}

combinations = [[0,1,2,], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8],[2,4,6]]

function make_computer_move(board, m){
  num = 0
  console.log(board)
  for(var i=0; i<=7; i++){
    console.log(combinations[i])
    var count = 0
    var block = false
    var attack = false
    var attack_count = 0
    for(var j=0; j<3; j++){
      // console.log(m + "  M")
      // console.log(j+ "  J")
      console.log(board[combinations[i][j]]+ "   board comb I J")
      console.log(combinations[i][j]+ " comb I J")
      if(board[combinations[i][j]]!=m && board[combinations[i][j]]!="."){
          count+=1
          console.log(count + "count")
        }
      if(board[combinations[i][j]]==m){
          attack_count+=1
          console.log(count + "attack count")
        }
      var prior_moves = [4,0,6,2,8,5,1,3,7]
      if(count<2){
        for(w = 0; w < 9; w++) {
          if (is_free(prior_moves[w]) == true) {
            num = prior_moves[w]
            break;}
            }
          }
      if(attack_count >=2){
        for(q=0; q<3; q++){
          if (is_free(combinations[i][q]) == true) {
            num = combinations[i][q]
            attack = true
            console.log(num + "in attack if")
            break}
        }
      }
      if(count >=2){
        for(q=0; q<3; q++){
          if (is_free(combinations[i][q]) == true) {
            num = combinations[i][q]
            block = true
            console.log(num + "in blocking if")
            break}
        }
      }
    }if(block==true || attack==true){break}

    }
    console.log(num+"num")
 return num
}


var m = "X"
$(document).on('click', '#playAsX', function(){
    set_m_to_x()
    display_whos_turn()

})
$(document).on('click', '#playAsO', function(){
      set_m_to_o()
    display_whos_turn()

    })
var $id = ""
$(document).on('click', '.cell', function () {
  id = (this.id)
  place_marker(window.board, id, m)

    print_board(board)
    if(check_if_win(m)){
      game_over(m)
      score_count(m)
      display_score(score_x, score_o)
      fade_out_board()
    }
    else if(is_draw(window.board)){
      game_over_draw()
      fade_out_board()
    }
    var if_win = check_if_win(m)
    gui_marker()
    user_marker(window.m)
if(if_win==false && is_draw(window.board) == false){
    if(one_pl == true){
      id = make_computer_move(board, m)
          place_marker(board, id, window.m)
          print_board(board)

          if(check_if_win(m)){
            game_over(m)
            score_count(m)
            display_score(window.score_x, window.score_o)
            fade_out_board()
          }
          else if(is_draw(board)){
            game_over_draw()
            fade_out_board()
          }

          gui_marker()
          user_marker(m)
      }
    }
})
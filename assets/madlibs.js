//make sure browser is reading js
window.onload=function(){
  //capture the submit event
  document.f.onsubmit = processForm;

  //capture the reset event
  document.f.onreset = resetPage;

  //define process functions
  function processForm() {

    //store user inputs in variables
    weekday = document.f.weekday.value;

    if (weekday=="") {
      alert("fill in a weekday!");
      return false;
    }

    rabbitLike = document.f.rabbitLike.value;

    if (rabbitLike=="") {
      alert("what would a rabbit like?!");
      return false;
    }

    celeb = document.f.celeb.value;

    if (celeb=="") {
      alert("type the name of a celebrity!");
      return false;
    }

    food1 = document.f.food1.value;

    if (food1=="") {
      alert("name a food!");
      return false;
    }

    albumName = document.f.albumName.value;

    if (albumName=="") {
      alert("type the name of an album!");
      return false;
    }

    bandName = document.f.bandName.value;

    if (bandName=="") {
      alert("who is the artist of the album you just typed?");
      return false;
    }

    //capture the msg element to change its text and html
    myMsg = document.getElementById("myMsg");

    myMsg.innerHTML = "Early on <em>" + weekday + "</em> morning Rabbit noticed that Patrice wasn’t home, \
    so he hopped out of his hutch and began his day. First, Rabbit checked his email (<em>" + rabbitLike + "</em>@carrotweb.net). \
    He logged in, and noticed six new messages from <em>" + celeb + "</em>. He rolled his eyes, logged out, \
    and went to the kitchen to get some breakfast. Rabbit scanned the cupboard and eventually decided to eat \
    some <em>" + food1 + "</em>. “Breakfast of champions,” he thought as he ate. Next, Rabbit put on his favorite album, \
    <em>" + albumName + "</em> by <em>" + bandName + "</em>. Suddenly, he heard footsteps on the stairs outside. “Oh no!” he thought. \
    The front door opened and in walked Patrice. Rabbit tried his best not to look suspicious as \
    Patrice glanced perplexedly at the record player.";

    //animate madlib section in
    $('#output').animate({width:'toggle'},900);

    //prevent page from reloading
    return false;
  }

  //animate madlib section out
  function resetPage() {
    $("#output").animate({width:'toggle'},900);

    myMsg.innerHTML = "";
  }
}

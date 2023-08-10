function shuffle(array: string[]) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const string =
  "Let's go about typing, fast typing is here. What about you? Well yes, you have to type right about this, and then, you later get point. Now, start typing right now, if you type faster at lower than seconds, you are master, this will be challenging, 1 2 3 4 5 6 7 8 9 10, Stop about slow typing. You should this for your points if you didn't logged up/sign in yet, you should sign in for your account, right now. No two fingers, only ten fingers, ten fingers make this more perfect, if you type this with your two fingers, you should probably slower than me, but if your WPM is higher than me, you are master of the typist. Right now, stopping the type test right now, just kidding, ok now, you can stop there right now, sorry for the long text.";

export const TYPE_THIS = 
// shuffle(
  (string.split(" "))
// )

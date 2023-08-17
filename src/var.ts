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
  array[0] = array[0][0].toUpperCase() + array[0].slice(1);
  return array;
}

export let _TYPE_THIS = 
shuffle(["the", "be", "of", "and", "a", "to", "in", "he", "have", "it", "that", "for", "they", "I", "with", "as", "not", "on", "she", "at", "by", "this", "we", "you", "do", "but", "from", "or", "which", "one", "would", "all", "will", "there", "say", "who", "make", "when", "can", "more", "if", "no", "man", "out", "other", "so", "what", "time", "up", "go", "about", "than", "into", "could", "state", "only", "new", "year", "some", "take", "come", "these", "know", "see", "use", "get", "like", "then", "first", "any", "work", "now", "may", "such", "give", "over", "think", "most", "even", "find", "day", "also", "after", "way", "many", "must", "look", "before", "great", "back", "through", "long", "where", "much", "should", "well", "people", "down", "own", "just", "because", "good", "each", "those", "feel", "seem", "how", "high", "too", "place", "little", "world", "very", "still", "nation", "hand", "old", "life", "tell", "write", "become", "here", "show", "house", "both", "between", "need", "mean", "call", "develop", "under", "last", "right", "move", "thing", "general", "school", "never", "same", "another", "begin", "while", "number", "part", "turn", "real", "leave", "might", "want", "point", "form", "off", "child", "few", "small", "since", "against", "ask", "late", "home", "interest", "large", "person", "end", "open", "public", "follow", "during", "present", "without", "again", "hold", "govern", "around", "possible", "head", "consider", "word", "program", "problem", "however", "lead", "system", "set", "order", "eye", "plan", "run", "keep", "face", "fact", "group", "play", "stand", "increase", "early", "course", "change", "help", "line"])

// const string =
//   "let's go about typing, fast typing is here. What about you? Well yes, you have to type right about this, and then, you later get point. Now, start typing right now, if you type faster at lower than seconds, you are master, this will be challenging, 1 2 3 4 5 6 7 8 9 10, Stop about slow typing. You should this for your points if you didn't logged up/sign in yet, you should sign in for your account, right now. No two fingers, only ten fingers, ten fingers make this more perfect, if you type this with your two fingers, you should probably slower than me, but if your WPM is higher than me, you are master of the typist. Right now, stopping the type test right now, just kidding, ok now, you can stop there right now, sorry for the long text.";

// let numbers = ['great','wow','hii','hello','heyy'];
// numbers = numbers.map((val)=>{
// let c=Math.floor(Math.random()*2)
// 	if(c)
//     	return val + '+';
//     else
//     	return val + '/';
// });
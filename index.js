function theBeatlesPlay(musicians, instruments) { 
  const arr=[];
  for (let i=0; i < musicians.length; i++){
   arr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return arr;
}
function johnLennonFacts(facts) {
  const excitedFacts = [];
  let i = 0;
  while (i<facts.length) {
  excitedFacts.push(`${facts[i]}!!!`);
  i++;
}
return excitedFacts;
}



 	function iLoveTheBeatles(n) {

		const arr = [];

 	do {
		arr.push('I love the Beatles!');
		n++;

	} 
	while (n > 15 );
	
 	return arr;
}
  
   
  // describe('iLoveTheBeatles', function() {
  //   it("returns an array of 'I love the Beatles!' 8 times when passed the parameter 7 ", function() {
  //     expect(iLoveTheBeatles(7)).toEqual(["I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!"]);
  //   });

  //   it("returns an array of 'I love the Beatles!' once when passed the parameter 17", function() {
  //     expect(iLoveTheBeatles(17)).toEqual(["I love the Beatles!"]);
  //   });
  // });

// });
const letter = [ 'a', 'b ', 'c' ];

for (let index = 0; index < letter.length; index++) {
    console.log('for', letter[index]);
}

letter.forEach(item => console.log('forEach', item));


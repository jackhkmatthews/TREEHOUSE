const expect = require('chai').expect;

function titleCase(title){
    let words = title.split(' ');
    words = words.map(word => {
        return word[0].toUpperCase() + word.substring(1);
    });
    return words.join(' ');
    //    return title[0].toUpperCase() + title.substring(1);
}

expect(titleCase('the great mouse detective')).to.be.a('string');

expect(titleCase('a')).to.equal('A');

expect(titleCase('vertigo')).to.equal('Vertigo');

expect(titleCase('the great mouse detective')).to.equal('The Great Mouse Detective');

function getLowerCase(str) {
   return str.toLowerCase()
}

function getUpperCase(str) {
   return str.toUpperCase()
}

function getSentenceCase(str) {
   return str[0].toUpperCase() + str.slice(1).toLowerCase();

}

function getProperCase(str) {
   return str.toLowerCase().split(' ').map((word) => {
      return word[0].toUpperCase() + word.slice(1).toLowerCase()

   }).join(" ")
}

module.exports = {
   getLowerCase,
   getSentenceCase,
   getProperCase,
   getUpperCase
}


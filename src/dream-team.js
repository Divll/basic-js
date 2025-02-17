const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let name = [];
  for (let index = 0; index < members.length; index++) {
    if (typeof members[index] === 'string') {
      let x = '';
      x = members[index].replace(/\s/g, "");
      name.push(x.replace(/(^.).*/, '$1'));
    }
  }
  return name.map(x=>x.toUpperCase()).sort().join('');
}

module.exports = {
  createDreamTeam
};

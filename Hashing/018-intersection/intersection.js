//O(a+b) time and O(a+b) space where 
  const elements = {}; 
  const dups = [];
  for (let ele of a) {
    if(!(ele in elements)) elements[ele] = true;
  }

  for (let ele of b) {
    if (ele in elements) dups.push(ele);
  }

  return dups;
};

module.exports = {
  intersection,
};

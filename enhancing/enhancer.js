module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  const result = item;

  if(result.enhancement 
      && typeof result.enhancement !== 'number' 
      && isNaN(Number(result.enhancement))) {
        
    throw new Error;

  } else {
    if(Number(result.enhancement) < 20) {
      result.enhancement += 1;
    } 
  }

  return result;
}

function fail(item) {
  // let result = {
  //   ...item
  // }
  
  //result.enhancement >= 15 ? result.durability -= 10 : result.durability -= 5;
  if(item.enhancement > 16) {
    return {
      ...item,
      durability: item.durability - 10,
      enhancement: item.enhancement - 1
    }
  } else if(item.enhancement >= 15) {
    return {
      ...item,
      durability: item.durability - 10
    }
  } else {
    return {
      ...item,
      durability: item.durability - 5
    }
  }
}

function repair(item) {
  const result = { ...item };

  if(result.durability) {

    if(typeof result.durability !== 'number' && isNaN(Number(result.durability))) {
      console.log('test')
      throw new Error;
    } else {
      result.durability = 100;
    }
  }

  return result;
}

function get(item) {

  if(item.enhancement === 0 
    || typeof item.enhancement !== 'number') {

      return { ...item };
  } else {
    item.name = `[+${item.enhancement}]${item.name}`

    return { ...item };
  }
}

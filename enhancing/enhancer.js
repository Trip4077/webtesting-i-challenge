module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  return { ...item };
}

function fail(item) {
  return { ...item };
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
  return { ...item };
}

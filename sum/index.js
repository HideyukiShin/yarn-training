
function add(numbers)
{
  let result = 0;
  for(const value of numbers) result+=value;
  return result;
}

module.exports = {
  add:add
};
function printMap(map) {
  let output = 'Map {\n';
  map.forEach((value, key) => {
    output += `  '${key}' => ${value},\n`;
  });
  output += '}';
  return output;
}

function groceriesList() {
  const groceriesMap = new Map([
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ]);

  return printMap(groceriesMap);
}

export default groceriesList;

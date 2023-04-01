export function returnArrayOfObjects(obj: any) {
  const inputArray: any = convertObjToArray(obj);
  const perChunk: any = 3; // items per chunk

  const result = inputArray.reduce(
    (resultArray: any, item: any, index: any) => {
      const chunkIndex = Math.floor(index / perChunk);

      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = []; // start a new chunk
      }

      resultArray[chunkIndex].push(item);

      return resultArray;
    },
    []
  );

  let resultObj = {
    fixed: result.map((item: any) => {
      return {
        [item[0].includes("itemName")
          ? item[0].slice(0, 8)
          : item[0].includes("price")
          ? item[0].slice(0, 5)
          : item[0].slice(0, 10)]: obj[item[0]],
        [item[1].includes("itemName")
          ? item[1].slice(0, 8)
          : item[1].includes("price")
          ? item[1].slice(0, 5)
          : item[1].slice(0, 11)]: obj[item[1]],
        [item[2].includes("itemName")
          ? item[2].slice(0, 8)
          : item[2].includes("price")
          ? item[2].slice(0, 5)
          : item[2].slice(0, 11)]: obj[item[2]],
      };
    }),
  };
  function convertObjToArray(obj: any) {
    let indexes = Object.keys(obj);
    let obj1 = indexes.filter((item) => {
      return item.includes("_0");
    });
    let obj2 = indexes.filter((item) => {
      return item.includes("_1");
    });
    let obj3 = indexes.filter((item) => {
      return item.includes("_2");
    });
    return obj1.concat(obj2, obj3);
  }

  return resultObj;
}

export default returnArrayOfObjects;

export const returnFlattenObject = (arr: any): any => {
  const flatObject: any = {};
  for (let i = 0; i < arr.length; i++) {
    for (const property in arr[i]) {
      flatObject[`${property}_${i}`] = arr[i][property];
    }
  }
  return flatObject;
};

export default returnFlattenObject;

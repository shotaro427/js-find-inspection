import { geneTestArray } from "./utils";

export const testGet = (N: number): void => {
  // create test case
  const origins: {
    name: string;
    id: number;
  }[] = geneTestArray(N);

  // to Map
  const originMaps: Map<string, { name: string; id: number }> = new Map();

  origins.forEach((origin) => {
    originMaps.set(origin.name, origin);
  });

  const targets: {
    name: string;
    id: number;
  }[] = geneTestArray(N);

  // 20万 x 20万
  targets.forEach((target) => {
    const found = originMaps.get(target.name);
    if (found) {
      // do somethind
      // console.log(found);
    }
  });
};

// time("[TEST] Array Find");
// test();
// timeEnd("[TEST] Array Find");

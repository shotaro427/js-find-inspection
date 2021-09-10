import { geneTestArray } from "./utils";

export const testObject = (N: number): void => {
  // create test case
  const origins: {
    name: string;
    id: number;
  }[] = geneTestArray(N);

  // to Map
  const originMaps: Record<string, { name: string; id: number }> = {};

  origins.forEach((origin) => {
    originMaps[origin.name] = origin;
  });

  const targets: {
    name: string;
    id: number;
  }[] = geneTestArray(N);

  // 20万 x 20万
  targets.forEach((target) => {
    const found = originMaps[target.name];
    if (found) {
      // do somethind
    }
  });
};

// time("[TEST] Array Find");
// test();
// timeEnd("[TEST] Array Find");

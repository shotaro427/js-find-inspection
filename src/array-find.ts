import { geneTestArray } from "./utils";

export const testFind = (N: number): void => {
  // create test case
  const origins: {
    name: string;
    id: number;
  }[] = geneTestArray(N);

  const targets: {
    name: string;
    id: number;
  }[] = geneTestArray(N);

  // 20万 x 20万
  targets.forEach((target) => {
    const found = origins.find((origin) => origin.name === target.name);
    if (found) {
      // do somethind
    }
  });
};

// time("[TEST] Array Find");
// test();
// timeEnd("[TEST] Array Find");

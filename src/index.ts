import { info, table } from "console";
import { testFind } from "./array-find";
import { testGet } from "./map-get";
import { testObject } from "./object-get";

const main = () => {
  const N = 100000;
  const result: Record<string, { time: string; compare: number }> = {};

  let now = Date.now();
  testFind(N);
  const baseTime = Date.now() - now;
  result["array-find"] = {
    time: `${baseTime}ms`,
    compare: baseTime / baseTime,
  };
  info("[DONE] array-find");

  now = Date.now();
  testGet(N);
  const mapGetTime = Date.now() - now;
  result["map-get"] = {
    time: `${mapGetTime}ms`,
    compare: Math.round(baseTime / mapGetTime),
  };

  now = Date.now();
  testObject(N);
  const objectKeyTime = Date.now() - now;
  result["object-key"] = {
    time: `${objectKeyTime}ms`,
    compare: Math.round(baseTime / objectKeyTime),
  };
  info("[DONE] object-key");

  info("\n\n");
  info(`N = ${N}`);
  table(result);
};

main();

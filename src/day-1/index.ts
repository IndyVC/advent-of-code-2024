import { readFile, readFileSync } from "fs";

const main = () => {
  console.log("hello!");

  const input = readFileSync("src/day-1/input.txt").toString();

  const column1: string[] = [];
  const column2: string[] = [];

  for (const line of input.split("\n")) {
    const cols = line.split("   ");
    console.log({ cols });
    column1.push(cols[0]);
    column2.push(cols[1]);
  }

  const sorter = (a: string, b: string) => {
    return parseFloat(a) - parseFloat(b);
  };

  const sortedColumn1 = column1.sort(sorter);
  const sortedColumn2 = column2.sort(sorter);

  const length = sortedColumn1.length;

  let differences = 0;
  for (let i = 0; i < length; i++) {
    const difference = Math.abs(
      parseFloat(sortedColumn1[i]) - parseFloat(sortedColumn2[i])
    );
    differences += difference;
  }

  console.log(differences);
};

main();

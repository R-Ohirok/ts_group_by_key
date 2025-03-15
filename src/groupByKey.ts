type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T, K extends keyof T>(
  items: T[],
  key: K,
): GroupsMap<T> {
  const groopedObj: GroupsMap<T> = {};

  items.forEach((item: T): void => {
    const sortedValue = item[key] as string;

    if (!groopedObj[sortedValue]) {
      groopedObj[sortedValue] = [];
    }

    groopedObj[sortedValue].push(item);
  });

  return groopedObj;
}

import { RedisKeyPrefix } from '../enums/redis-key-prefix.enum';
import { BaseEntityModel } from '../BaseEntityModel';

export function flatArrToTree(flatArr) {
  const result = [];
  const itemMap = {};
  for (const item of flatArr) {
    const id = item.id;
    const pid = item.parentId;
    if (!itemMap[id]) {
      itemMap[id] = {
        children: [],
      };
    }
    itemMap[id] = {
      ...item,
      children: itemMap[id]['children'],
    };
    const treeItem = itemMap[id];

    if (item.parentId === 'root') {
      result.push(treeItem);
    } else {
      if (!itemMap[pid]) {
        itemMap[pid] = {
          children: [],
        };
      }
      itemMap[pid].children.push(treeItem);
    }
  }
  return result;
}

export function getRedisKey(
  moduleKeyPrefix: RedisKeyPrefix,
  id: string | number
): string {
  return `${moduleKeyPrefix}${id}`;
}

export const clone = <T extends BaseEntityModel, S, K extends keyof T>(
  target: T,
  source: S,
  exclude?: K[]
): T => {
  if (!exclude) {
    exclude = exclude
      ? exclude.push(...(['createTime', 'updateTime'] as any))
      : (['createTime', 'updateTime'] as any);
  }
  for (const key of Object.keys(source)) {
    if (exclude?.includes(key as any)) continue;
    const val = source[key];
    target[key] = val ?? target[key];
  }
  return target;
};

import { createJSONStorage } from "jotai/utils";
import { SyncStorage } from "jotai/vanilla/utils/atomWithStorage";
import SecureLS from "secure-ls";

const ls = new SecureLS();
class SecureStorage implements Storage {
  clear = (): void => ls.clear();
  getItem = (key: string): string | null => ls.get(key);
  key = (index: number): string | null => ls.getAllKeys()[index];
  length = ls.getAllKeys().length;
  removeItem = (key: string): void => ls.remove(key);
  setItem = (key: string, value: string): void => ls.set(key, value);
}
export const storage: SyncStorage<any> = createJSONStorage(
  () => new SecureStorage(),
);

export const StorageService = {
    getItem(storageKey) {
      let value = JSON.parse(localStorage.getItem(storageKey));
      return value;
    },

    setItem(storageKey, value) {
      return localStorage.setItem(storageKey, JSON.stringify(value));
    },
  };
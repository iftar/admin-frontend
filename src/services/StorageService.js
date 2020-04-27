class StorageService {
  set(key, value) {
    return window.sessionStorage.setItem(key, value);
  }

  get(key) {
    return window.sessionStorage.getItem(key);
  }
}

export default StorageService;

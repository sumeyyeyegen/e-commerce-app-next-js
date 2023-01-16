
class storage {

  static set(key: string, cartItems: any) {
    localStorage.setItem(key, JSON.stringify(cartItems))
  }

  static get(key: string) {
    if (process.browser && typeof window !== "undefined" && localStorage.getItem(key) !== null && localStorage.getItem(key) !== undefined && localStorage.getItem(key)) {
      var nextData: any = localStorage.getItem(key);

      return JSON.parse(nextData)
    }
  }
}

export default storage
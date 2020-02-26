export class HelperProvider {
  public makeArray(size: number) {
    if (typeof size === 'string') {
      return new Array(parseInt(size));
    }
    return new Array(size);
  }

  public makeArrayCounted(size: number) {
    let s = size;
    let arr = [];
    if (typeof size === 'string') {
      s = parseInt(size);
    }
    for(let i = 1; i <= s; i++) {
      arr.push(i);
    }
    return arr;
  }
}


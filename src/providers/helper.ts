export class HelperProvider {
  public makeArray(size: number) {
    if (typeof size === 'string') {
      return new Array(parseInt(size));
    }
    return new Array(size);
  }
}


export function normaliseValue(value) {
    if (value != undefined && value.length > 0) {
      var new_value = value.toString().replace(".", "").replace(",", "");

      new_value = new_value.slice(0, new_value.length - 2) +
        "." +
        new_value.slice(new_value.length - 2)

      return (new_value);
    }
  }
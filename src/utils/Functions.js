export function normaliseValue(value) {
    if (value != undefined && value.length > 0) {
      var new_value = value.toString().replace(".", "").replace(",", "");

      new_value = new_value.slice(0, new_value.length - 2) +
        "." +
        new_value.slice(new_value.length - 2)

      return (new_value);
    }
  }

  export const formatNumber = (
    amount,
    decimalCount = 2,
    decimal = ".",
    thousands = ","
  ) => {
    try {
      decimalCount = Math.abs(decimalCount);
      decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
  
      const negativeSign = amount < 0 ? "-" : "";
  
      let i = parseInt(
        (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
      ).toString();
      let j = i.length > 3 ? i.length % 3 : 0;
  
      return (
        negativeSign +
        (j ? i.substr(0, j) + thousands : "") +
        i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
        (decimalCount
          ? decimal +
          Math.abs(amount - i)
            .toFixed(decimalCount)
            .slice(2)
          : "")
      );
    } catch (e) {
      console.log(e);
    }
  };
  
  export const formatMoneyNew = (value, sign) => {
    try {
      //console.log('FORMAT', value)
      if(value != undefined){
        let newValue = value.toFixed(2).replace('.', ',').replace(/\d(?=(\d{3})+\,)/g, '$&.');
        return sign ? "R$ " + newValue : newValue;
      }else{
        return 0;
      }
      
    } catch (err) {
      console.log('ER_FORMATNUMBER', value, err)
    }
  }
  
  export const formatMoney = (//retorna string 
    amount,
    sign = false,
    decimalCount = 2,
    decimal = ",",
    thousands = "."
  ) => {
    try {
  
      amount = amount + "";
      amount = parseInt(amount.replace(/[\D]+/g, ""));
      amount = amount + "";
      amount = amount.replace(/([0-9]{2})$/g, decimal + "$1");
  
      if (amount != undefined && amount.length > 6) {
        amount = amount.replace(
          /([0-9]{3}),([0-9]{2}$)/g,
          thousands + "$1" + decimal + "$2"
        );
      }
  
      //console.log('DEPOIS', amount);
      //console.log("amount", typeof amount)
      return sign ? "R$ " + amount : amount;
  
    } catch (e) {
      console.log(e);
      return 0;
    }
  };
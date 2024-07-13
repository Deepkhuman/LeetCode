
  var maxProfit = function(prices) {
    let profit = 0;

      for(var i=1; i<prices.length; i++) {
        let curent = prices[i];
        let prev = prices[i-1];

        if(curent > prev) {
          profit += curent - prev;
        }
      }
     return profit;
  };

// tickets are considered lucky if the left and right side from the median equate
// this function checks to see if any number is considered lucky
//please try yourself and happy coding.


function luckCheck(ticket) {
   if (/^[0-9]+$/.test(ticket)) {
    let arr = ticket.split("");
    let numarr = [];
    arr.map((elem) => {
      numarr.push(parseInt(elem));
    });
    let finalres = false;

    if (numarr.length % 2 === 0) {
      let rs = numarr.splice(numarr.length / 2, numarr.length / 2 + 1);
      let ls = numarr;
      let rightres = 0;
      rs.map((num) => {
        rightres += num;
      });
      let leftres = 0;
      ls.map((num) => {
        leftres += num;
      });
      if (rightres === leftres) {
        return (finalres = true);
      } else {
        return finalres;
      }
    } else {
      let median = Math.ceil(numarr.length / 2);
      let rs = numarr.splice(median);
      numarr.pop();
      let ls = numarr;
      let rightres = 0;
      rs.map((num) => {
        rightres += num;
      });
      let leftres = 0;
      ls.map((num) => {
        leftres += num;
      });
      if (rightres === leftres) {
        return (finalres = true);
      } else {
        return finalres;
      }
    }
  } else {
    return null;
  }
}

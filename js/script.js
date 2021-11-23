(function() {

    const callSum = (num1 = 0) => {
        return num2 => {
            return num1 += num2;
        }
    }

    const sum = callSum();

    console.log(sum(4));
    console.log(sum(5));
    console.log(sum(-3));
    console.log(sum(10));
    console.log(sum(0));
    console.log(sum(12));
    console.log(sum(2));

}());
let countBits = function(n) {
	let bit = 0;
  n.toString(2).split('').forEach(item => {
		if(item === '1') {
			bit++;
		}
	});;
	console.log(bit)
	return bit;
};

countBits(0);
countBits(4);
countBits(7);
countBits(9);
countBits(10);
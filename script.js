function indexOfIgnoreCase(s1, s2) {
  // write your code here
	str1 = s1.toLowerCase();
	str2 = s2.toLowerCase();
	return str1.indexOf(str2);
	// let m = str2.length;
	// let n = str1.length;
	// for(let i = 0; i < n-m; i++){
	// 	if(str1.substring(i, i+n+1)===str2)
	// 		return i;
	// }
	// return -1;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
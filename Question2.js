function findNum(nums, n) {
  let i;
  let temp = [];
  for (i = 0; i < n; i++) {
    temp[i] = 0;
  }

  for (i = 0; i < n; i++) {
    temp[nums[i] - 1] = 1;
  }

  let arr = 0;
  for (i = 0; i < n; i++) {
    if (temp[i] == 0) arr = i + 1;
  }
  console.log(arr);
}

let list = prompt('Enter a list of items separated by commas:');
let nums = list.split(',');

let n = nums.length;

findNum(nums, n);

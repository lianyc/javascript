let Queue = require('./011.队列Queue')
// 基数排序，先排个位，再排十位，适合0-99排序

let queues = []
for(let i = 0; i <10; i++) {
  queues[i] = new Queue()
}

let nums = []
for(let i = 0; i <10; i++) {
  nums[i] = Math.floor(Math.random() * 100)
}

function distribute(nums, queues, n, digit) {
  for (let i = 0; i < n; i++) {
    if (digit === 1) {
      queues[nums[i]%10].enqueue(nums[i])
    } else {
      queues[Math.floor(nums[i]/10)].enqueue(nums[i])
    }
  }
}

function collect(queues, nums) {
  let i = 0
  for (let digit = 0; digit < 10; digit++) {
    while (!queues[digit].empty()) {
      nums[i++] = queues[digit].dequeue()
    }
  }
}

console.log(nums)
distribute(nums, queues, 10, 1)
console.log(queues)
collect(queues, nums)
console.log(nums)

distribute(nums, queues, 10, 10)
console.log(queues)
collect(queues, nums)
console.log(nums)



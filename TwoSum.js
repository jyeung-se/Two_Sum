const twoSum = function(nums, target) {
    let table = {}

    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]
        if (diff in table) {
            return ([table[diff], i])
        }
        table[nums[i]] = i
    }
    return table
}

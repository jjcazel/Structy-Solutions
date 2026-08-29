def pair_sum(numbers, target_sum):
  prev_nums = {}
  for i in range(len(numbers)):
    diff = target_sum - numbers[i]
    if diff in prev_nums:
      return [prev_nums[diff], i]

    prev_nums[numbers[i]] = i;
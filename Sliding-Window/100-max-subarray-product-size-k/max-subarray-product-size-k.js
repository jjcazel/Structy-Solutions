
// O(n) time and O(1) space
const maxSubarrayProductSizeK = (nums, k) => {
  let product = 1;
  for (let i = 0; i < k; i++) {
    product *= nums[i];
  }

  let maxProduct = product;
  for (let i = 0; i < nums.length - k; i++) {
    product = product / nums[i];
    product *= nums[i + k];

    maxProduct = Math.max(product, maxProduct);
  }

  return maxProduct;
};

module.exports = {
  maxSubarrayProductSizeK,
};

function merge(nums1, m, nums2, n) {

  nums1.splice(m,n,...nums2)

  console.log(nums1)


  nums1.sort((a,b)=>a-b)

  console.log(nums1)
 
}


let nums1 = [1,3]; 
let m = nums1.length; 
let nums2 = [2,5,8,9]; 
let n = nums2.length; 

merge(nums1, m, nums2, n);


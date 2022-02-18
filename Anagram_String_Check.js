function checkAnagram(s1,s2) {
  let sCheck1 = s1.toLowerCase().split("").sort().join("").trim();
  let sCheck2 = s2.toLowerCase().split("").sort().join("").trim();
  
  console.log(sCheck1 === sCheck2 ? "Anagram" : "Not Anagram");
}

checkAnagram(" Mumbai","mumbai ");
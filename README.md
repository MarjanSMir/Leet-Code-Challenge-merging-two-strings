# Leet-Code-Challenge-merging-two-strings
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.  Return the merged string.   

# Intuition
Anytime I face a problem which needs to make changes on string and merge it with another string I change its type to array and change it with for loop.

# Approach
Define empty arrays
Define "counter" variable for my loop repitation
in loop get every letter of my string and assign it to a variable then push that to specific array.
check if "i" is odd index of arrays our even. then base on that deside to push first arrays element or second arrays element to my result array(that defines first word or second word)
At the end when my loop finishs I will join all elements of result array as a single element and change its type to string then return it.

# Complexity
Time complexity: O(n)

Space complexity: O(n)

/**
 * @param {string} s
 * @return {string}
 */
let longestPalindrome = function (s) {
    if (s.length == 0) {
        return "";
    }

    let longestSubstring = "";

    for (let i = 0; i < s.length; i++) {
        let currentPalindrome = s[i];
        let currentPalindrome2 = s[i];

        if (s[i + 1] && s[i] == s[i + 1]) {
            // AABBCC 模式

            // 先重複自己一次
            currentPalindrome += s[i];

            for (let shift = 1; i - shift >= 0 && i + shift + 1 < s.length; shift++) {
                if (s[i - shift] == s[i + shift + 1]) {
                    currentPalindrome = s[i - shift] + currentPalindrome + s[i - shift];
                } else {
                    break;
                }
            }
        }

        // ABCBA 模式
        for (let shift = 1; i - shift >= 0 && i + shift < s.length; shift++) {
            if (s[i - shift] == s[i + shift]) {
                currentPalindrome2 = s[i - shift] + currentPalindrome2 + s[i - shift];
            } else {
                break;
            }
        }

        if (currentPalindrome.length > longestSubstring.length) {
            longestSubstring = currentPalindrome;
        }

        if (currentPalindrome2.length > longestSubstring.length) {
            longestSubstring = currentPalindrome2;
        }
    }

    return longestSubstring;
};


// -------------------------
console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("ccc"));
console.log(longestPalindrome("azwdzwmwcqzgcobeeiphemqbjtxzwkhiqpbrprocbppbxrnsxnwgikiaqutwpftbiinlnpyqstkiqzbggcsdzzjbrkfmhgtnbujzszxsycmvipjtktpebaafycngqasbbhxaeawwmkjcziybxowkaibqnndcjbsoehtamhspnidjylyisiaewmypfyiqtwlmejkpzlieolfdjnxntonnzfgcqlcfpoxcwqctalwrgwhvqvtrpwemxhirpgizjffqgntsmvzldpjfijdncexbwtxnmbnoykxshkqbounzrewkpqjxocvaufnhunsmsazgibxedtopnccriwcfzeomsrrangufkjfzipkmwfbmkarnyyrgdsooosgqlkzvorrrsaveuoxjeajvbdpgxlcrtqomliphnlehgrzgwujogxteyulphhuhwyoyvcxqatfkboahfqhjgujcaapoyqtsdqfwnijlkknuralezqmcryvkankszmzpgqutojoyzsnyfwsyeqqzrlhzbc"));
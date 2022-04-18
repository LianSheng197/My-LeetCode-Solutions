import fetch from "node-fetch";

const data = {
	"operationName": "questionData",
	"variables": {
		"titleSlug": "kth-largest-element-in-a-stream"
	},
	"query": `query questionData($titleSlug: String!) {
    question(titleSlug: $titleSlug) {
      questionFrontendId
      title
      content
      difficulty
      likes
      dislikes
      similarQuestions
      exampleTestcases
      categoryTitle
      topicTags {
        name
        slug
        translatedName
        __typename
      }
      codeSnippets {
        lang
        langSlug
        code
        __typename
      }
      stats
      hints
      solution {
        id
        canSeeDetail
        paidOnly
        hasVideoSolution
        paidOnlyVideo
        __typename
      }
      status
      sampleTestCase
      metaData
      judgerAvailable
      judgeType
      mysqlSchemas
      enableRunCode
      enableTestMode
      enableDebugger
      envInfo
      libraryUrl
      adminUrl
      challengeQuestion {
        id
        date
        incompleteChallengeCount
        streakCount
        type
        __typename
      }
      __typename
    }
  }
  `
};

fetch("https://leetcode.com/graphql", {
  "headers": {
    "content-type": "application/json",
  },
  "body": JSON.stringify(data),
  "method": "POST"
}).then(
  r => r.json()
).then(
  r => console.log(r)
);
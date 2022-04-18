/**
 * @typedef QuestionInfo
 * @property {number} acRate
 * @property {string} difficulty
 * @property {string} frontendQuestionId
 * @property {boolean} hasSolution
 * @property {boolean} isFavor
 * @property {boolean} paidOnly
 * @property {string} status
 * @property {string} title
 * @property {string} titleSlug
 */

 import fetch from "node-fetch";

 export default class Search {
   /**
    * 根據顯示的編號搜尋題目
    * @param {number} fid
    */
   static async byId(fid) {
     const data = {
       "query": `
           query problemsetQuestionList($categorySlug: String, $limit: Int, $skip: Int, $filters: QuestionListFilterInput) {
             problemsetQuestionList: questionList(
               categorySlug: $categorySlug
               limit: $limit
               skip: $skip
               filters: $filters
             ) {
               total: totalNum
               questions: data {
                 acRate
                 difficulty
                 frontendQuestionId: questionFrontendId
                 isFavor
                 paidOnly: isPaidOnly
                 status
                 title
                 titleSlug
                 hasSolution
               }
             }
           }`,
       "variables": {
         "categorySlug": "",
         "skip": 0,
         "limit": 50,
         "filters": {
           "searchKeywords": `${fid}`
         }
       }
     };
 
     const question = await fetch("https://leetcode.com/graphql/", {
       "headers": {
         "content-type": "application/json"
       },
       "body": JSON.stringify(data),
       "method": "POST"
     }).then(
       r => r.json()
     );
 
     return question;
   }
 }
 
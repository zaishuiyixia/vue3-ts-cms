// const info = {
//   name: "why",
//   age: 18
// }

// info.name = "kobe"

// 

type Method = 'GET' | 'POST'
function request(url: string, method: Method) {}

type Request = {
  url: string,
  method: Method
}

// const options: Request = {
//   url: "https://www.coderwhy.org/abc",
//   method: "POST"
// }

const options = {
  url: "https://www.coderwhy.org/abc",
  method: "POST"
} as const

request(options.url, options.method)
// request(options.url, options.method as Method)

export {}

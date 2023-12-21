let baseurl = ''
let url = window.location.href

// 这里的
if (url.includes('http://192.168.1.3') || url.includes('http://localhost')) {
  baseurl = 'http://localhost:5000'
} else if (url.includes('10.205')) {
  baseurl = 'http://localhost:5000'
} else if (url.includes('.net')) {
  baseurl = 'http://localhost:5000'
} else if (url.includes('.cn')) {
  baseurl = 'http://localhost:5000'
} else if (url.includes('.com')) {
  baseurl = 'http://localhost:5000'
} else if (url.includes('.xyz')) {
  baseurl = 'http://localhost:5000'
}


export const BASE_URL = baseurl;
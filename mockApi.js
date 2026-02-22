// Simple client-side mock API returning promises to simulate network latency
import newsData from './news'

export function fetchNews(){
  return new Promise((res) => setTimeout(() => res(newsData), 350))
}

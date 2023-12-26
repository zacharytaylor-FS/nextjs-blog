import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, token, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token,
  perspective: 'published'
})

// Uses GROQ to query content
export async function getPosts() {
  const posts = await client.fetch(`*[_type == 'post']`)
  return posts
}

export async function createPost(post) {
  const result = client.create(post)
  return result
}

export async function updateDocumentTitle(_id, title) {
  const result = client.patch(_id).set({title})
  return result
}
// client
//  .fetch(`*[_type == 'post']{ title}`)
//  .then((data) => console.log({posts: data}))
//  .catch((err) => console.error(err))

import React from 'react'
import Layout from '../components/Layout'
import Detail from '../components/PostDetail'
import date from 'date-and-time'

export default function PostDetail ({}) {
  const post = {
    author: 'cin',
    createdAt: date.format(new Date(), 'MMM, DD'),
    title: 'título cool',
    tags: ['productivity', 'design'],
    description: 'descripción chila'
  }
  return (
    <>
      <Layout>
        <Detail post={post} />
      </Layout>
    </>
  )
}

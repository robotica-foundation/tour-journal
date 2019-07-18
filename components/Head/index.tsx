import Head from 'next/head'
import { DocumentHeadProps } from './types'

function DocumentHead(props: DocumentHeadProps) {
  return (
    <Head>
      <link key="robotfont" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <meta
        name="viewport"
        key="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
      <title key="title">{props.title} | Tour Journal</title>
    </Head>
  )
}

export default DocumentHead

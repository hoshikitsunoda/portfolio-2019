import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const PDFDownload = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `)
  return (
    <a href={data.file.node.publicURL}>
      <button>
        Download<br></br>Resume
      </button>
    </a>
  )
}
export default PDFDownload

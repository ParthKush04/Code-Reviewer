import { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor"
import prism from "prismjs"
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from 'axios'
import './App.css'

export default function App() {
  const [code, setCode] = useState(`function sum() {
  return 1 + 1
}`)

  const [review, setReview] = useState("")
  const [loading, setLoading] = useState(false)

  async function reviewCode() {
    setLoading(true)
    try {
      const response = await axios.post('http://localhost:3000/ai/get-review', { code })
      setReview(response.data)
    } catch (err) {
      setReview("Error fetching review.")
    }
    setLoading(false)
  }

  useEffect(() => {
    prism.highlightAll()
  }, [])

  return (
    <div className="wrapper" style={{ padding: "30px", background: "#0d1117", height: "100vh", color: "white" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Code Reviewer</h1>

      <div className="boxes" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", height: "80%" }}>

        {/* Input Code Box */}
        <div className="panel" style={{ background: "#161b22", padding: "20px", borderRadius: "12px", display: "flex", flexDirection: "column" }}>
          <h2 style={{ marginBottom: "10px" }}>Input Code</h2>

          <div style={{ flex: 1, border: "1px solid #30363d", borderRadius: "10px", overflow: "hidden" }}>
            <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={12}
              style={{
                fontFamily: '"Fira Code", monospace',
                fontSize: 16,
                minHeight: "100%",
                background: "#0d1117",
              }}
            />
          </div>

          <button
            onClick={reviewCode}
            disabled={loading}
            style={{
              marginTop: "20px",
              padding: "12px",
              borderRadius: "8px",
              background: "#238636",
              border: "none",
              color: "white",
              fontSize: "16px",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            {loading ? "Reviewing..." : "Generate Review"}
          </button>
        </div>

        {/* Output Review Box */}
        <div className="panel" style={{ background: "#161b22", padding: "20px", borderRadius: "12px", overflowY: "auto" }}>
          <h2 style={{ marginBottom: "10px" }}>Review Output</h2>

          <div style={{ background: "#0d1117", padding: "15px", borderRadius: "10px", border: "1px solid #30363d", minHeight: "100%" }}>
            <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
          </div>
        </div>
      </div>
    </div>
  )
}
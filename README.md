# **Alle Labs**
### Truth intelligence for the AI era

Alle Labs is an AI powered truth engine that detects deepfakes, verifies media authenticity, and publishes verifiable Knowledge Assets to the OriginTrail Decentralized Knowledge Graph. Built using the DKG Edge Node, MCP agents, and Polkadot x402 micropayments, Alle Labs creates an open trust layer that any AI agent can rely on to confirm what is real.

Alle Labs helps people and machines uncover truth in an internet full of synthetic media. It turns authenticity checks into permanent, queryable truth records that agents can reuse, cite, and trust.

This project is build for **Scaling trust in the age of AI. Global Hackathon - Supported by OriginTrail x Polkadot x Umanitek**

---

## **✨ Key features**

### **Media authenticity verification**
Upload an image or video or provide a URL. Alle Labs runs a deepfake detection pipeline powered by lightweight pre trained models and analytic heuristics.

### **Truth assets on the DKG**
Every authenticity result is converted into a JSON LD Knowledge Asset with provenance including model version, timestamps, media hash, and scoring details.

### **MCP agent integration**
Alle Labs exposes MCP tools so any AI agent or IDE can request verification, fetch proof, or publish assessments through the DKG Agent interface.

### **x402 micropayments with Polkadot**
Basic checks are free. Premium accuracy checks and bulk queries are gated through x402 micropayments on Polkadot to create a sustainable trust economy.

### **Community Notes for media**
Authenticity assessments extend the Umanitek Guardian dataset with structured fact checks linked to content.

---

## **🛠️ Architecture**

```
                     +------------------------+
                     |      User or Agent     |
                     |  (DKG Agent UI or MCP) |
                     +-----------+------------+
                                 |
                                 v
                   +-------------+----------------+
                   |      Alle Labs MCP Plugin    |
                   |  Tool invocation and routing |
                   +-------------+----------------+
                                 |
               +-----------------+------------------+
               | verifies premium request using     |
               | Polkadot x402 micropayments        |
               +-----------------+------------------+
                                 |
                                 v
                    +------------+-----------+
                    |   Detection Worker     |
                    | (Python, deepfake models) |
                    +------------+-----------+
                                 |
                                 v
                 +---------------+----------------+
                 | JSON LD Knowledge Asset creator|
                 |   Provenance, hashing, scoring |
                 +---------------+----------------+
                                 |
                                 v
                    +------------+------------+
                    |  OriginTrail DKG Node   |
                    | Stores authenticity data |
                    +------------+------------+
                                 |
                                 v
                       +---------+---------+
                       |  Knowledge Asset  |
                       |     (UAL link)    |
                       +-------------------+
```


---

## **📚 How it works**

### 1
A user uploads media or provides a URL through the DKG Agent or any MCP client.

### 2
The Alle Labs MCP plugin receives the request and checks payment status if premium scanning is requested.

### 3
The plugin passes the media to a Python based detection worker that extracts frames, runs detection models, and returns a structured truth report.

### 4
The report is turned into a JSON LD Knowledge Asset aligned with the hackathon ontologies.

### 5
The Knowledge Asset is published to the DKG with provenance, making it permanently verifiable and retrievable by other agents.

### 6
The result is returned to the user along with the Knowledge Asset UAL for reference.

---

## **📦 Repository structure**
```
alle-labs/
├── packages/
│   ├── alle-mcp-plugin/
│   │   ├── src/
│   │   │   ├── mcpServer.ts
│   │   │   ├── tools/
│   │   │   │   ├── runAuthenticityCheck.ts
│   │   │   │   └── getReportByHash.ts
│   │   │   └── utils/
│   │   │       ├── knowledgeAsset.ts
│   │   │       ├── x402.ts
│   │   │       └── dkgPublish.ts
│   │   └── package.json
│   │
│   └── detection-worker/
│       ├── src/
│       │   ├── main.py
│       │   ├── models/
│       │   │   └── deepfake_model.py
│       │   └── utils/
│       │       ├── media_loader.py
│       │       ├── hashing.py
│       │       └── scoring.py
│       └── requirements.txt
│
├── schemas/
│   ├── authenticity_asset.jsonld
│   └── context.json
│
├── docs/
│   ├── architecture.md
│   └── api-reference.md
│
└── README.md
```

## **📘 Knowledge Asset format**

Example authenticity Knowledge Asset created by Alle Labs:

```json
{
  "@type": "alle:AuthenticityAssessment",
  "alle:mediaHash": "bafy123abc",
  "media:contentUrl": "https://example.com/video.mp4",
  "alle:isAuthentic": false,
  "alle:score": 0.92,
  "alle:confidence": 0.88,
  "alle:modelVersion": "ffv1",
  "alle:checkedAt": "2025-11-20T10:15:00Z",
  "alle:checkedBy": "did:polkadot:allelabs",
  "alle:explanation": "Detected face swap artifacts across 23 frames"
}
````


## **⚙️ MCP tools**

### **run_authenticity_check**

Runs the authenticity pipeline and publishes a Knowledge Asset.

Inputs
mediaUrl
premium (optional)

Outputs
summary
structured report
Knowledge Asset UAL

### **get_report_by_hash**

Fetches an existing authenticity report from the DKG.

Inputs
mediaHash

Outputs
Knowledge Asset contents
human readable summary

---

## **💰 x402 micropayments**

Alle Labs uses Polkadot x402 payments to offer:

Free basic authenticity scans
Paid premium scans with higher resolution analysis
Paid bulk access for journalists, platforms, and AI agents

The MCP plugin verifies receipts before triggering premium detection.

---

## **🚀 Getting started**

### Prerequisites

DKG Edge Node installed and running
Node.js
Python 3
Polkadot wallet
x402 config from hackathon resources

### Start plugin

```
cd packages/alle-mcp-plugin
npm install
npm start
```

### Start worker

```
cd packages/detection-worker
pip install -r requirements.txt
uvicorn src.main:app --reload --port 9400
```

### Connect to DKG Agent

Visit
[http://localhost:9200/chat](http://localhost:9200/chat)
and type:
Check this video with Alle Labs

Your DKG agent will automatically use the MCP tools.

---

## **🎯 Hackathon relevance**

Alle Labs is purpose built for the
Decentralized Community Notes: Misinformation and Deepfakes
track.

It delivers
deepfake detection
truth assessments
structured fact checks
media linked notes
DKG publishing
Polkadot powered micropayments
full agent interoperability

Alle Labs is a truth infrastructure layer for the AI era.

---

## **📄 License**

MIT License


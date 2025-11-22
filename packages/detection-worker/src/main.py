from fastapi import FastAPI
from pydantic import BaseModel
from models.deepfake_model import DeepfakeModel
from utils.media_loader import download_media, extract_frames
from utils.hashing import hash_file
from utils.scoring import compute_score
import datetime

app = FastAPI()
model = DeepfakeModel()

class Input(BaseModel):
    mediaUrl: str

@app.post("/check")
async def check_media(input: Input):
    url = input.mediaUrl

    # Download file
    filepath = download_media(url)

    # Hash file
    media_hash = hash_file(filepath)

    # Extract frames
    frames = extract_frames(filepath)

    # Run model
    score, confidence, explanation = model.predict(frames)

    report = {
        "mediaHash": media_hash,
        "mediaUrl": url,
        "isAuthentic": score < 0.5,
        "score": float(score),
        "confidence": float(confidence),
        "modelVersion": "alle-v1",
        "checkedAt": datetime.datetime.utcnow().isoformat(),
        "explanation": explanation
    }

    return report

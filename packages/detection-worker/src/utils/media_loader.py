import requests, cv2, os, tempfile

def download_media(url: str) -> str:
    response = requests.get(url, stream=True)
    response.raise_for_status()

    tmp = tempfile.NamedTemporaryFile(delete=False, suffix=".mp4")
    for chunk in response.iter_content(chunk_size=8192):
        tmp.write(chunk)

    tmp.close()
    return tmp.name


def extract_frames(filepath: str, max_frames=10):
    frames = []
    cap = cv2.VideoCapture(filepath)

    total = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    step = max(total // max_frames, 1)

    for i in range(0, total, step):
        cap.set(cv2.CAP_PROP_POS_FRAMES, i)
        ret, frame = cap.read()
        if not ret:
            break
        frames.append(frame)

        if len(frames) >= max_frames:
            break

    cap.release()
    return frames

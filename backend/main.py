from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
from groq import Groq
import os

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)

app = FastAPI(
    title="BulletCraft AI API",
    description="Generate ATS-friendly resume bullet points using AI",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ResumeRequest(BaseModel):
    project_description: str
    role: str


@app.get("/")
def root():
    return {
        "message": "BulletCraft AI Backend Running"
    }


@app.post("/generate")
def generate_bullets(data: ResumeRequest):

    try:
        prompt = f"""
You are an expert technical resume writer.

Generate exactly 4 ATS-friendly resume bullet points.

Target Role:
{data.role}

Requirements:
- Start each bullet with a strong action verb.
- Focus on technical impact.
- Use professional resume language.
- Mention technologies when relevant.
- DO NOT invent percentages, metrics, statistics, or achievements.
- Only use information present in the project description.
- Return ONLY bullet points.
- No numbering.

Project Description:
{data.project_description}
"""

        completion = client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=[
                {
                    "role": "user",
                    "content": prompt
                }
            ],
            temperature=0.7,
        )

        bullets = completion.choices[0].message.content

        return {
            "success": True,
            "bullets": bullets
        }

    except Exception as e:
        return {
            "success": False,
            "error": str(e),
            "bullets": ""
        }
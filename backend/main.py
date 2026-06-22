from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import google.generativeai as genai
from dotenv import load_dotenv
import os

load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

model = genai.GenerativeModel("gemini-1.5-flash")

app = FastAPI()

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

@app.post("/generate")
def generate_bullets(data: ResumeRequest):
    prompt = f"""
    You are an expert resume writer.

    Convert the project description into exactly 4 ATS-friendly resume bullet points.

    Requirements:
    - Start each bullet with a strong action verb.
    - Focus on technical impact.
    - Use professional resume language.
    - Tailor bullets for a {data.role}.
    - Return only bullet points.

    Project Description:
    {data.project_description}
    """ 

    response = model.generate_content(prompt)

    return {"bullets": response.text}
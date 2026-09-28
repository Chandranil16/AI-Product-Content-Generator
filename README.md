# AI Product Content Generator

A React-based web application that uses Google's Gemini AI to generate
product card content from a product name and category.

The application generates an engaging product title, short description,
and relevant keywords and displays them in a clean product card.

## Features

- Generate product content using AI
- Product name and category input
- AI-generated product title
- AI-generated product description
- AI-generated keywords
- Loading indicator during AI generation
- Error handling for failed API requests
- Responsive user interface
- Structured JSON response from Gemini
- Component-based React architecture

## Tech Stack

- React
- JavaScript
- CSS
- Google Gemini API
- `@google/genai`

## Design choices

Component-based architecture

- Productform -> handles user input
- Productcard -> display generated content
- loader -> display loading state

## How AI Is Used

The application uses Google's Gemini API to generate product content.

The user provides:

- Product name
- Product category

These values are sent to the Gemini model through a dedicated AI service.

Gemini returns structured JSON containing:

{
"title": "Product title",
"description": "Product description",
"keywords": [
"keyword1",
"keyword2",
"keyword3",
"keyword4",
"keyword5"
]
}

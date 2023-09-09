<p align="center">
AI-Powered News Article Classifier with History    
</p>

## Objective:

The goal of this project is to create a web application that classifies news articles into
categories and keeps track of past classification requests. The application should take a news article
URL as input, scrape the article content, predict its category using an AI model, store the request and
the prediction in a database, and display the predicted category as well as a history of past
classification requests.

## User Interface:

### Home Page:

A landing page with instructions on how to use the application.
Prediction Page: A form where users can enter a news article URL. After the URL is submitted, the
application should display the predicted category as well as a history of past classification requests,
including the article URLs and their predicted categories.

## Back End:

### Scraping Service:

A service that takes a news article URL, scrapes the article content, and returns it.

### Classification Service:

A service that takes the scraped article content and predicts its category
using an AI model.
Data Persistence Service: A service that stores each classification request and its result in a
database and retrieves the history of past requests when needed.

## Architecture
<img src="https://github.com/balaji-sivasakthi/InfoSense/blob/609e776377ce74d248f10bbe77dd35abd6139324/images/arch.png">

## How to Run:

### Client
```
npm install
```
```
npm run dev
```
### Server

```
uvivcorn main:app --reload
```

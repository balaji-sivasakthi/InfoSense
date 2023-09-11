<p align="center">
 <img src="https://github.com/balaji-sivasakthi/InfoSense/blob/7c245e14905c1f408039cd3972ce925f94b9b997/client/src/assets/images/logo.png">
</p>
<h1 align="center"> AI-Powered News Article Classifier</h1>

## **Description**:
This web application classifies news articles into categories, tracks past classification requests, and provides users with insights into article categorization. It takes a news article URL as input, scrapes the article content, predicts its category using an AI model, stores the request and prediction in a database and displays the predicted category along with a history of past classification requests.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [License](#license)

## Getting Started

Begin by setting up and running the project on your local machine.

### Prerequisites

Before you begin, ensure you have the following prerequisites installed:

- Nodejs
- Python

### Installation

Follow these steps to get the project up and running:

1. Server

   ```
     cd server
     pip install -r requirements.txt
     uvicorn main:app --reload
   ```

3. Client
   ```
    cd client
    npm install
    npm run dev
   ```

## Usage

To use the application:

1. Navigate to the application's URL.
2. Input a news article URL and submit the form.
3. The application will scrape the article, predict its category, and display the result.
4. Explore the history section to view past classification requests.

## Features

- **News Classification**: Automatically categorize news articles into predefined categories.
- **Interactive Web Interface**: User-friendly React frontend for input and results.
- **Machine Learning**: Utilizes AI models for article categorization.
- **Database Storage**: Stores article requests and predictions for historical tracking.
- **History Viewer**: Displays a history of past classification requests.

## Architecture

<p align="center">
    <img src="https://github.com/balaji-sivasakthi/InfoSense/blob/2aa3755d1f44f58191c905a471751757d5b9afde/images/arch.png">
</p>

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

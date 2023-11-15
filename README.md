# Currency Converter

## Introduction

This project is a web-based currency converter. It allows users to select currencies, input an amount, and get the converted amount in another currency. The project uses the ExchangeRate-API for fetching current exchange rates.

## Features

- **Currency Selection**: Users can choose from a wide range of currencies for both source and destination.
- **Real-time Conversion**: The conversion happens in real-time as the user types in the amount.
- **Swap Feature**: A convenient swap button to quickly exchange source and destination currencies.
- **Error Handling**: The application handles errors gracefully, particularly in fetching data from the API.
- **Responsive Design**: Styled with CSS for a pleasant user experience across various devices.

## Prerequisites

- A modern web browser.
- Internet access to fetch exchange rates from the ExchangeRate-API.

## Setup

1. Clone the repository or download the source code.
2. Open the `index.html` file in a web browser.

## API Usage

This application uses the ExchangeRate-API to fetch real-time currency exchange rates. Ensure that you have access to the API and replace the API key in the fetch URL if necessary.

## Usage

1. **Select Currencies**: Choose the source and destination currencies from the dropdown menus.
2. **Enter Amount**: Type in the amount you want to convert.
3. **View Result**: The converted amount is displayed automatically.
4. **Swap Currencies**: Click the swap button if you wish to change the direction of conversion.

## HTML Structure

The main HTML elements include:

- Two `<select>` elements for choosing source and destination currencies.
- An `<input>` for entering the amount.
- A `<div>` to display the result.
- A `<button>` to swap the currencies.

## CSS Styling

The provided CSS styles:

- Ensure a clean, minimalist layout centered on the page.
- Style the input fields, select menus, and button for a cohesive look and feel.
- Include hover and focus states for better user interaction.

## JavaScript Functionality

The JavaScript code:

1. Fetches and populates currency data on DOMContentLoaded.
2. Handles user inputs and performs currency conversion.
3. Implements a swap functionality for easy toggling between source and destination currencies.

## Error Handling

Errors, particularly in fetching data from the API, are handled gracefully with error messages logged to the console.

---

**Note**: Replace the API key in the fetch URL with your own key from ExchangeRate-API for the application to work properly.


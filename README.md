# **Orioles Fly - Flight Search Form**

Welcome to the "Orioles Fly" flight search form! This simple web application allows users to search for available flights based on departure and arrival locations, travel date, and the number of people. The form currently uses **dummy data** for testing and displays results based on user input.

## **Features**

- **Flight Search Form**: Input your departure and arrival locations, travel date, and number of people.
- **Flight Results Display**: Once a user submits the form, matching flight data (dummy data) is shown, including flight number, price, and available seats.
- **Responsive Design**: The design adapts to different screen sizes, making it mobile-friendly.

## **Technologies Used**

- **HTML**: For structure and layout of the page.
- **CSS**: For styling the page and form elements.
- **JavaScript**: For handling the form submission and displaying flight results dynamically.

## **Project Structure**

```html
/project-root ├── index.html # Main HTML file with the flight search form ├──
css/ │ └── styles.css # External stylesheet for styling the page ├── img/ │ └──
orioles.jpg # Image used for the logo ├── JavaScript/ │ └── app.js # JavaScript
file for form handling and displaying flight results
```

## **Getting Started**

To view the project in action:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/orioles-fly.git
   ```

2. Open the project folder and start by opening `index.html` in your web browser.

3. If you're using VS Code, you can install the **Live Server** extension to view the changes in real-time as you edit the code.

---

## **How to Use**

1. **Fill out the form**:

   - **Starting Location**: Enter the city or airport you’re flying from.
   - **Ending Location**: Enter the destination city or airport.
   - **Date of Travel**: Choose the travel date.
   - **Number of People**: Enter how many people are traveling.

2. **Submit the form**: Hit the "Search" button to see the flight options based on your inputs.

3. **Results**: The matching flights will appear with the flight number, price, and available seats.

---

## **Development Notes**

- The project uses **dummy data** in the JavaScript file for testing purposes.
- The JavaScript file listens for form submissions and filters the dummy flight data based on the input locations.
- No server-side or database functionality is implemented in this milestone.

---

## **Future Enhancements**

- Integrate with a real flight API to fetch live data.
- Add more complex search features, such as round-trip or flexible dates.
- Implement user authentication for storing flight preferences.

---

## **Contributing**

If you want to contribute to this project, feel free to fork the repository and create a pull request. Make sure to test your changes and write clean, efficient code.

---

## **License**

This project is open-source and available under the [MIT License](LICENSE).
# IT_634_MS_1

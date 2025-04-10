// Wait for the DOM to load before adding event listeners
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('flight-form');
    const resultsContainer = document.getElementById('flight-results');
  
    // Dummy data for testing purposes
    const dummyFlights = [
      { flightNumber: "A123", departure: "Dallas", arrival: "Miami", price: "$150", availableSeats: 30 },
      { flightNumber: "B456", departure: "Dallas", arrival: "New York", price: "$200", availableSeats: 50 },
      { flightNumber: "C789", departure: "Miami", arrival: "Dallas", price: "$180", availableSeats: 25 },
    ];
  
    // Handles the form submission 
    form.addEventListener('submit', function(event) {
      event.preventDefault(); 
  
      // Retrieve data
      const startLocation = document.getElementById('start-location').value.trim();
      const endLocation = document.getElementById('end-location').value.trim();
      const travelDate = document.getElementById('travel-date').value.trim();
      const numPeople = document.getElementById('num-people').value.trim();
  
      // Filter based on start and end location (dummy filter for demo purposes)
      const filteredFlights = dummyFlights.filter(flight => 
        flight.departure.toLowerCase() === startLocation.toLowerCase() &&
        flight.arrival.toLowerCase() === endLocation.toLowerCase()
      );
  
      // Clear previous results
      resultsContainer.innerHTML = '';
  
      // Display  flights or a message if no flights are found
      if (filteredFlights.length > 0) {
        filteredFlights.forEach(flight => {
          const flightItem = document.createElement('div');
          flightItem.classList.add('result-item');
          flightItem.innerHTML = `
            <h3>Flight Number: ${flight.flightNumber}</h3>
            <p>Departure: ${flight.departure} → Arrival: ${flight.arrival}</p>
            <p>Price: ${flight.price}</p>
            <p>Available Seats: ${flight.availableSeats}</p>
          `;
          resultsContainer.appendChild(flightItem);
        });
      } else {
        resultsContainer.innerHTML = '<p>No flights found for the selected route.</p>';
      }
    });
  });
  

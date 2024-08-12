document.addEventListener('DOMContentLoaded', () => {
    const countries = [
        'United States', 'Canada', 'Australia', 'United Kingdom', 'Germany', 
        'France', 'India', 'China', 'Japan', 'South Korea', 'Brazil', 'South Africa'
    ];

    const countrySelect = document.getElementById('country');

    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country;
        option.textContent = country;
        countrySelect.appendChild(option);
    });
});

document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);

    const firstName = formData.get('firstName');
    const middleName = formData.get('middleName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const country = formData.get('country');
    const phone = formData.get('phone');

    console.log('Form Data Submitted:');
    console.log('First Name:', firstName);
    console.log('Middle Name:', middleName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Country:', country);
    console.log('Phone:', phone);

    // Here you can add code to send the form data to your server or API

    alert('Appointment booked successfully!');
});

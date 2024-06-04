<?php
// Establish a connection to the database
$conn = mysqli_connect('localhost', 'root', '', 'sciastra');

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the form data has been submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name1'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $course = $_POST['course'];

    // Insert data into the database
    $sql = "INSERT INTO chatbot_db (name1, email, phone, course) VALUES ('$name', '$email', '$phone', '$course')";

    if ($conn->query($sql) === TRUE) {
        echo "Form submitted successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
} else {
    echo "No data submitted";
}

// Close the database connection
$conn->close();
?>

import React, { useState } from "react";
import "../styles/Selection.css";
import golfers from '.././golfers.js';

export default function Selection() {

    // State hooks for selected golfer, error message, and form submission status
    const [selectedGolfer, setSelectedGolfer] = useState('');
    const [error, setError] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false); // Track form submission status

    // Check if the selected golfer is in the pool
    const isGolferInPool = (golferName) => {
        return golfers.some(golfer => golfer.name === golferName);
    };

    // Handle changes in the input field
    const handleSelectGolfer = (event) => {
        const golferName = event.target.value;
        setSelectedGolfer(golferName); // Update the selectedGolfer state
        setError(''); // Clear error when typing a new golfer
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent form from refreshing the page
        
        setIsSubmitted(true); // Mark the form as submitted

        if (!isGolferInPool(selectedGolfer)) {
            setError('Golfer is not in the player pool.');
        } else {
            setError(''); // Clear any error
        }
    };

    // Clear error and success messages when focusing on the input
    const handleFocus = () => {
        setError(''); // Clear the error
        setIsSubmitted(false); // Reset the submission status
    };

    return (
        <main className="select-golfer">
            <label className="select-golfer-label">
                Select Your Golfer!
            </label>
            <form className="select-golfer-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={selectedGolfer}
                    onChange={handleSelectGolfer}
                    onFocus={handleFocus} // Clear error/success message on focus
                    placeholder="e.g. Tiger Woods"
                    aria-label="Select Golfer"
                />
                <button type="submit" aria-label="Submit Golfer Selection">Select Golfer</button>
                
                {isSubmitted && !error && <p>You successfully selected: {selectedGolfer}</p>} {/* Success message */}
                {isSubmitted && error && <p style={{ color: 'red' }}>{error}</p>} {/* Error message */}
            </form>
        </main>
    );
}

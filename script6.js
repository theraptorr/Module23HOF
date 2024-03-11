

function validateLinkedInProfile(url) {
    // Define the regular expression pattern
    const pattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
  
    // Test the URL against the pattern
    const isValid = pattern.test(url);
  
    // Output the result
    if (isValid) {
      console.log(`${url} is a valid LinkedIn profile URL.`);
    } else {
      console.log(`${url} is not a valid LinkedIn profile URL.`);
    }
  }
  
  // Example usage:
  validateLinkedInProfile('https://princekumar2201-pk/');            // Valid

  validateLinkedInProfile('https://www.linkedin.com/in/invalid*');    // Invalid
  
  
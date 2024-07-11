Introduction 

Accessibility is a fundamental aspect of the design and development process and a priority for every product we create. Accessibility in design ensures that products are usable by as many people as possible, and improves the experience for all users, including those with disabilities.  

Accessibility has been considered and ‘baked in’ to the Design System wherever possible. By following these accessibility guidelines, we ensure that our products are usable and inclusive for all users, regardless of their abilities. 

 These guidelines lay out how we approach design with accessibility as a priority at Energy Saving Trust. 

Simple first 

We always desi 

Colour  

- Use tools like the WCAG Contrast Checker to verify contrast ratios. 

- Ensure a minimum contrast ratio of 4.5:1 for text against background. 

- Use tools to check color contrast and make adjustments as necessary. 

- Text and interactive elements (buttons, links, clickable icons) should have a contrast ratio of at least 4.5:1 against their background. 

- Large text (18pt and above, or 14pt bold) should have a contrast ratio of at least 3:1. 

- Do not use color alone to convey information. Use text labels or patterns in addition to color coding. 

 

Keyboard Navigation 

- Ensure that all interactive elements are reachable via keyboard. 

- Provide clear focus states for elements. 

- Ensure that all interactive elements have visible focus indicators.  

**INSERT EXAMPLE** 

- Use a clear and consistent focus style across the entire system 

  

  

Readability 

- Use clear and simple language. 

- Avoid using all caps for large amounts of text.  

  

Alternative text 

- Provide descriptive alt text for all images, except when images are purely decorative (use alt=""). 

- For complex images, such as charts, provide a detailed description. 

 - Provide captions for all video content. 

- Offer transcripts for audio content. 

  

Animations and Effects 

- Avoid using animations that flash more than three times per second. 

- Provide options to disable animations and other potentially distracting effects. 

  

### 6. Interactive Elements 

#### 6.1. Keyboard Accessibility 

- Ensure that all functionality is accessible via keyboard. 

- Use logical tab order and ensure interactive elements are focusable. 

  

#### 6.2. Button Size and Clickable Areas 

- Ensure buttons and interactive elements are large enough to be easily clickable (minimum size: 44x44 pixels). 

  

#### 6.3. Form Elements 

- Provide clear and descriptive labels for all form fields. 

- Use appropriate input types for form fields (e.g., email, phone number). 

- Provide instructions and error messages to help users complete forms. 

  

### 7. Navigation and Structure 

#### 7.1. Consistent Navigation 

- Ensure consistent navigation across the entire site or application. 

- Provide multiple ways to navigate, such as search functionality and site maps. 

  

#### 7.2. Headings and Landmarks 

- Use headings (H1, H2, etc.) to organize content hierarchically. 

- Use ARIA landmarks to define regions of a page (e.g., navigation, main content). 

  

#### 7.3. Skip Links 

- Provide skip links to allow users to bypass repetitive content. 

  

### 8. ARIA (Accessible Rich Internet Applications) 

Avoid using ARIA if native HTML elements can provide the same functionality. Poorly implemented ARIA will make your site less accessible, so it is better to leave it off if in doubt.   

Accessibility testing  

#### 9.1. Automated Testing 

- Use automated tools to regularly check for accessibility issues (e.g., axe, WAVE). 

  

#### 9.2. Manual Testing 

- Conduct manual testing with screen readers and keyboard navigation. 

- Include users with disabilities in the testing process to gather real-world feedback. 

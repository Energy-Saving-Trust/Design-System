---
title: Accessibility
layout: content
section: guidelines
---

## Introduction to accessibility

At Energy Saving Trust, we make products that are usable by as many people as possible. To do this, we prioritise accessibility in all stages of the design and development process. Accessibility is avpriority for every product we create, and improves the experience for _all_ our users. 

While accessibility has been considered and ‘baked in’ to the Design System wherever possible, the following accessibility guidelines ensure that our products are usable and inclusive for all users, regardless of their abilities. These guidelines lay out how we approach design with accessibility as a priority at Energy Saving Trust. 

**This means we prioritise simpler and less flashy designs to priortise the needs of all users.**

### 1. HTML-First approach
At Energy Saving Trust we can make sure our digital products are accessible just by making sure the correct Hypertext Markup Language elements are used for the correct purpose at all times. 
Read more about [why HTML-first approach is essential to creating accessible products](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML).

### 2. Colour  
- Use tools like the [Adobe Contrast Checker](https://color.adobe.com/create/color-contrast-analyzer) to verify contrast ratios. 
- Ensure a minimum contrast ratio of 4.5:1 for text against background. 
- Use tools to check color contrast and make adjustments as necessary. 
- Text and interactive elements (buttons, links, clickable icons) should have a contrast ratio of at least 4.5:1 against their background. 
- Large text (18pt and above, or 14pt bold) should have a contrast ratio of at least 3:1. 
- Do not use color alone to convey information. Use text labels or patterns in addition to color coding. 

### 3. Keyboard Navigation 

- Ensure that all interactive elements are reachable via keyboard.
- Ensure that all interactive elements have visible focus indicators.
- Use the default focus indicator in the Design System across the entire system (this works against both light and dark colours)

### 4. Readability 

- Use clear and simple language. 
- Avoid using all caps for large amounts of text.  

### 5. Alternative text 

- Provide descriptive alt text for all images, except when images are purely decorative (use alt=""). 
- For complex images, such as charts, provide a detailed description. 
- Provide captions for all video content. 
- Offer transcripts for audio content. 

### 6. Animations and Effects 

- Avoid using animations that flash more than three times per second. 
- Provide options to disable animations and other potentially distracting effects. 

### 7. Interactive Elements 

**Keyboard Accessibility**

- Ensure that all functionality is accessible via keyboard.
- Use logical tab order and ensure interactive elements are focusable. 

**Clickable components**
- Ensure buttons and interactive elements are large enough to be easily clickable
- Minimum size is 44 x 44 pixels.
  
**Form Elements**

- Provide clear and descriptive labels for all form fields. 
- Use appropriate input types for form fields (e.g., email, phone number). 
- Provide instructions and error messages to help users complete forms.

### 8. Navigation and Structure 

**Consistent Navigation** 

- Ensure consistent navigation across the entire site or application. 
- Provide multiple ways to navigate, such as search functionality and site maps.
- Use headings (H1, H2, etc.) to organize content hierarchically. 
- Use ARIA landmarks to define regions of a page (e.g., navigation, main content).

**Skip Links** 

- Provide skip links to allow users to bypass repetitive content.
  
**ARIA (Accessible Rich Internet Applications)** 

- Avoid using ARIA if native HTML elements can provide the same functionality. Poorly implemented ARIA will make your site less accessible, so it is better to leave it off when in doubt.   

## Accessibility testing  
**Automated Testing**

- Use automated tools to regularly check for accessibility issues
- We recommend the use of [Axe](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd) and [WAVE](https://wave.webaim.org/extension/)
- List of [automated tools recommmended by DWP](https://accessibility-manual.dwp.gov.uk/tools-and-resources/automated-accessibility-testing)

**Manual Testing** 

- Check new patterns and designs using the Accessibility Personas set up by Gov.UK
- https://alphagov.github.io/accessibility-personas/
- Conduct manual testing with screen readers and keyboard navigation. 
- Include users with disabilities in the testing process to gather real-world feedback.
- For [agencies that conduct accessibility testing go here.](https://www.applytosupply.digitalmarketplace.service.gov.uk/g-cloud/search?q=accessibility%20testing)

## Additional resources

- [Top tips for product managers and designers](https://www.w3.org/WAI/tips/designing/)
- [Top tips for developers](https://www.w3.org/WAI/tips/developing/)


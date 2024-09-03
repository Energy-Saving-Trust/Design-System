---
title: Introduction to accessibility
layout: documentation-page
---

At Energy Saving Trust, we make products that are usable by as many people as possible. To do this, we prioritise accessibility in all stages of the design and development process. Accessibility is a priority for every product we create, and improves the experience for _all_ our users.

While accessibility has been considered and ‘baked in’ to the Design System wherever possible, the following accessibility guidelines ensure that our products are usable and inclusive for all users, regardless of their abilities. These guidelines lay out how we approach design with accessibility as a priority at Energy Saving Trust.

**Our goal is to provide equal access and usability to everyone. This means we prioritise simpler and less flashy designs that consider the diverse needs and abilities of all users.**

## General accessibility guidelines

[Components](/components) and [patterns](/patterns) included in our Design System provide accessible markup which will serve as a starting point for your application development.

Individually accessible elements and components are part of building accessible products.
To make sure that our digital experiences are accessible more broadly consider the following guidelines.

### Colour and contrast

- Use tools like the [Adobe Contrast Checker](https://color.adobe.com/create/color-contrast-analyzer) to verify contrast ratios.
- Ensure a minimum contrast ratio of 4.5:1 for text against background.
- Use tools to check color contrast and make adjustments as necessary.
- Text and interactive elements (buttons, links, clickable icons) should have a contrast ratio of at least 4.5:1 against their background.
- Large text (18pt and above, or 14pt bold) should have a contrast ratio of at least 3:1.
- Do not use color alone to convey information. Use text labels or patterns in addition to color coding.

### Keyboard navigation

- Ensure that all interactive elements are reachable via keyboard.
- Ensure that all interactive elements have visible focus indicators.
- Use the default focus indicator in the Design System across the entire system (this works against both light and dark colours)

### Readability

- Use clear and simple language.
- Avoid using all caps for large amounts of text.

### Alternative text

- Provide descriptive alt text for all images, except when images are purely decorative (use `alt=""`).
- For complex images, such as charts, provide a detailed description.
- Provide captions for all video content.
- Offer transcripts for audio content.

### Animations and effects

- Avoid using animations that flash more than three times per second.
- Provide options to disable animations and other potentially distracting effects.

### Interactive elements

#### Keyboard accessibility

- Ensure that all functionality is accessible via keyboard.
- Use logical tab order and ensure interactive elements are focusable.

#### Clickable components

- Ensure buttons and interactive elements are large enough to be easily clickable
- Minimum size is 44 x 44 pixels.

#### Form elements

- Provide clear and descriptive labels for all form fields.
- Use appropriate input types for form fields (e.g., email, phone number).
- Provide instructions and error messages to help users complete forms.

### Navigation and structure

#### Consistent navigation

- Ensure consistent navigation across the entire site or application.
- Provide multiple ways to navigate, such as search functionality and site maps.
- Use headings (H1, H2, etc.) to organize content hierarchically.
- Use ARIA landmarks to define regions of a page (e.g., navigation, main content).

#### Skip links

- Provide skip links to allow users to bypass repetitive content.

#### ARIA (Accessible Rich Internet Applications)

- Avoid using ARIA if native HTML elements can provide the same functionality. Poorly implemented ARIA will make your site less accessible, so it is better to leave it off when in doubt.

## Testing for accessibility

#### Automated testing

- Use automated tools to regularly check for accessibility issues
- We recommend the use of [Axe](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd) and [WAVE](https://wave.webaim.org/extension/)
- List of [automated tools recommmended by DWP](https://accessibility-manual.dwp.gov.uk/tools-and-resources/automated-accessibility-testing)

#### Manual testing

- Check new patterns and designs using the Accessibility Personas set up by Gov.UK
- https://alphagov.github.io/accessibility-personas/
- Conduct manual testing with screen readers and keyboard navigation.
- Include users with disabilities in the testing process to gather real-world feedback.
- For [agencies that conduct accessibility testing go here.](https://www.applytosupply.digitalmarketplace.service.gov.uk/g-cloud/search?q=accessibility%20testing)

## Additional resources

- [Top tips for product managers and designers](https://www.w3.org/WAI/tips/designing/)
- [Top tips for developers](https://www.w3.org/WAI/tips/developing/)

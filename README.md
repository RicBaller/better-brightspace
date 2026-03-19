# BetterBrightspace Extension

## Description
This browser extension improves the Brightspace learning management system (LMS) interface by modifying CSS styling within embedded iframes. It adjusts layout elements for better usability, such as resizing panels and making the design more responsive.

## Justification for Host Permissions
The extension requires access to specific Brightspace learning management system (LMS) domains to function effectively. These permissions are limited to certain hosts, which are official Brightspace instances used by various Dutch educational institutions.

The extension injects a content script into pages on these domains to modify the CSS styling within embedded iframes. This improves the user interface by adjusting layout elements. Without access to these hosts, the script cannot interact with the page content or apply the necessary style overrides.

The permissions are strictly necessary and targeted only at Brightspace sites to ensure user privacy and security. No data is collected, stored, or transmitted; the extension only alters visual presentation locally in the browser. If additional hosts are needed in the future, they can be added with justification based on similar educational use cases.

This approach adheres to the principle of least privilege, granting access only where required for the extension's core functionality.

## Installation
1. Download or clone this repository.
2. Load the extension in your browser (e.g., Chrome: go to `chrome://extensions/`, enable Developer mode, and load the unpacked folder).
3. The extension will automatically activate on the specified Brightspace domains.

Or go to https://chromewebstore.google.com/detail/betterbrightspace/cdmajccagekimfaghijjcafkcldmbkik

## Supported Domains
- https://lms.hsleiden.nl/*
- https://brightspace.universiteitleiden.nl/*
- https://brightspace.hhs.nl/*
- https://brightspace.rug.nl/*
- https://brightspace.tudelft.nl/*

## Privacy Policy
This extension ("BetterBrightspace") is designed with user privacy as a top priority. We do not collect, store, or transmit any personal data, browsing history, or user information. The extension operates entirely locally within your browser and only modifies the visual styling of Brightspace pages to improve usability.

### Data Collection and Usage
- **No Data Collection**: The extension does not access, collect, or share any data from your browser, including cookies, form inputs, or page content beyond what is necessary for CSS modifications.
- **Local Operation**: All changes are applied client-side and do not communicate with external servers.
- **Permissions**: The extension only requests access to specific Brightspace domains to inject CSS overrides. No additional permissions are used.

### Third-Party Services
This extension does not integrate with or rely on any third-party services, analytics, or tracking tools.

### Contact
If you have questions about this privacy policy or the extension, please contact the developer via the repository issues.

## License
[Add license if applicable]

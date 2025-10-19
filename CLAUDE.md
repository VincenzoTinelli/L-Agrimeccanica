# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is "L'Agrimeccanica di Tinelli Giuseppe" - a static HTML website for an agricultural machinery company. The project is based on the "Industo" HTML template and contains both the main website and documentation.

## Project Structure

- `industo-package/industo/` - Main website files
  - `index.html`, `index-2.html`, `index-3.html` - Homepage variants
  - `about.html`, `contact.html`, `services.html` - Core pages
  - `agricultural-automation.html`, `mechanical-engineering.html` - Service-specific pages
  - `css/` - Stylesheets (Bootstrap, custom styles, animations)
  - `js/` - JavaScript libraries and custom scripts
  - `images/` - All website images and assets
  - `sendemail.php` - Contact form handler

- `industo-package/industo-doc/` - Template documentation
  - `index.html` - Documentation homepage with setup instructions
  - Static assets for documentation display

- `codebase.md` - Large file containing detailed codebase information

## Technology Stack

- **Frontend**: Static HTML5, CSS3, JavaScript (jQuery-based)
- **CSS Framework**: Bootstrap
- **JavaScript Libraries**: jQuery, Owl Carousel, Magnific Popup, WOW.js animations
- **Backend**: PHP (minimal - only for contact form)
- **Fonts**: Google Fonts (Roboto, Be Vietnam Pro, Poppins, Inter)
- **Icons**: Font Awesome, custom Flaticon set

## Key Features

- Responsive design with mobile-first approach
- Animated preloader and scroll effects
- Image galleries with lightbox functionality
- Contact form with PHP email handling
- Multi-page navigation structure
- Service showcase pages for different machinery types

## Development Notes

- This is a static website - no build process required
- Files can be served directly from a web server
- The PHP contact form requires a server with PHP support
- All assets are self-contained (no CDN dependencies for core functionality)

## Contact Form Configuration

The contact form (`sendemail.php`) requires configuration:
- Update `RECIPIENT_EMAIL` constant with actual email address
- Update `RECIPIENT_NAME` constant with recipient name
- Ensure server has PHP mail functionality enabled

## File Serving

- Main entry points: `index.html`, `index-2.html`, `index-3.html`
- All paths are relative - can be deployed to any web directory
- No special server configuration required beyond PHP support for contact form
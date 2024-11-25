# Reflect on Your action

A Chrome extension that displays custom memes on specified websites. Perfect for adding a dash of humor to your daily web browsing, And in case you are addicted to social media sites, This'll give you a humorous moment to think again if you really want to scroll through feeds?

## Features

- 🎯 Target multiple domains for meme display
- 🖼️ Shows a centered, customizable meme overlay
- ✨ Easy-to-use domain management interface
- 🔄 Persistent storage of domain settings
- ❌ Quick close button for meme overlay
- 🚫 Duplicate domain prevention
- 📱 Responsive design that works on any screen size

## Installation

### Developer Mode Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/meme-domain-injector.git
   ```
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked"
5. Select the cloned repository directory

## Usage

1. Click the extension icon in your Chrome toolbar
2. Enter a domain (e.g., "instagram.com", "facebook.com")
3. Click "Save Domain" to add it to your list
4. Visit any website matching your saved domains
5. The meme will appear automatically!

### Managing Domains
- View all saved domains in the extension popup
- Remove domains using the "Remove" button next to each entry
- Add as many domains as you like
- Duplicate domains are automatically prevented

## Customization

### Changing the Meme
1. Replace `meme.jpg` in the extension directory with your own image
2. Make sure to keep the filename as `meme.jpg`
3. Reload the extension in `chrome://extensions/`

### Technical Details
- Built with Manifest V3
- Uses Chrome Storage API for persistence
- Pure JavaScript implementation
- No external dependencies


## Privacy
- This extension only activates on domains you specify
- No data is collected or transmitted
- All settings are stored locally in your browser
  
---

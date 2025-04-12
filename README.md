
# Spot the Difference - Test Level

This is a simple “Spot the Difference” game built using HTML, CSS, and JavaScript. Players need to find differences between two images by clicking on them.

##  How to Run the Game

1. Open `index.html` in any modern web browser (Chrome, Firefox, Edge, etc).
2. Click on the differences between the two images to highlight them.
3. Once all differences are found, a congratulatory message will appear!

##  How the Game Uses `data.json`

The `data.json` file contains all the configuration for the game, including:

- **Game Title**: Displayed at the top of the page.
- **Images**: Paths to the two images shown side-by-side.
- **Differences**: An array of bounding boxes (`x`, `y`, `width`, `height`) where differences exist.

### Example Structure

```
{
  "gameTitle": "Spot the Difference - Test Level",
  "images": {
    "image1": "image1.jpg",
    "image2": "image2.jpg"
  },
  "differences": [
    { "x": 300, "y": 250, "width": 40, "height": 40 },
    { "x": 60, "y": 120, "width": 120, "height": 120 }
  ]
}
```

You can easily create new levels by changing the image paths and updating the coordinates in the `differences` array.

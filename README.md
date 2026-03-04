# 🐜 Find An Anteater — Interactive Map Website

A web app that helps anteater enthusiasts find the nearest zoo, sanctuary, or conservation facility that houses anteaters. Users enter their zip code or city, and the map zooms to show nearby locations ranked by distance.

---

## Concept & Visual Design

**Aesthetic direction:** Warm, earthy naturalist field-guide meets playful web app. Think vintage wildlife illustration crossed with a modern interactive map. Color palette: warm parchment/cream backgrounds, deep forest green accents, rich browns. Typography should feel like a naturalist's journal — a serif display font paired with a clean readable body font.

**Key interaction:** A hand-drawn-style anteater sits in the corner of the screen. When a user selects a location, the anteater's tongue animates out toward the selected ant marker (tongue is a Bezier curve SVG path that stretches toward that screen position). This is a **placeholder interaction** for now — design the layout and tongue animation scaffold so the owner can swap in illustrated assets later. Use a simple CSS/SVG placeholder anteater for now.

**Map markers:**
- 🐜 **Black ant SVG** = viewing only (no encounter)
- 🐜 **Red ant SVG** = anteater encounter available
- Ants should be small, charming, hand-drawn-style SVG icons (not emoji). On hover/select they slightly scale up. Selected marker gets a pulsing ring.

**Map style:** Use a muted, warm-toned custom map style (Google Maps styling JSON) — desaturated with warm beige/tan land colors so the ant markers pop. The map should feel like a field map, not a navigation app.

---

## Tech Stack

- **Frontend:** Single HTML file (HTML + CSS + vanilla JS). No build step required.
- **Map:** Google Maps JavaScript API (v3)
- **Geocoding:** Google Maps Geocoding API (to convert user zip/city input to lat/lng)
- **Marker rendering:** Custom SVG markers via `google.maps.marker.AdvancedMarkerElement` or `google.maps.Marker` with custom icon
- **No backend required** — all location data is hardcoded in a JS array in the file

---

## File Structure

```
index.html          ← entire app (HTML + embedded CSS + embedded JS)
README.md           ← this file
locations.js        ← (optional) separate location data file if list grows large
assets/
  anteater.svg      ← placeholder; owner will replace with illustrated asset
  ant-black.svg     ← black ant marker icon
  ant-red.svg       ← red ant marker icon
```

---

## API Keys

### Security Note
For static websites like this, **API keys are visible in page source** — this is normal and expected. Google Maps API keys are designed for client-side use and are protected through **restrictions**, not secrecy.

### Setting Up Your API Key Securely

1. **Create API Key** - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project
   - Go to "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "API Key"

2. **Restrict Your API Key** (IMPORTANT)
   
   **Application Restrictions:**
   - Select "HTTP referrers (web sites)"
   - Add these referrers:
     ```
     https://YOUR-USERNAME.github.io/*
     http://localhost/*
     https://your-custom-domain.com/*  (if applicable)
     ```
   
   **API Restrictions:**
   - Select "Restrict key"
   - Enable ONLY these APIs:
     - Maps JavaScript API
     - Geocoding API
     - (Optional) Places API — for search autocomplete
   - Disable all other APIs

3. **Set Up Billing Alerts**
   - Go to "Billing" → "Budgets & alerts"
   - Create alert for unusual usage spikes

4. **Add Key to index.html**
   - Replace `YOUR_API_KEY_HERE` in the script tag (near line 887):
   ```html
   <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_ACTUAL_KEY&callback=initMap"></script>
   ```

### Why This Is Safe
- ✅ Key only works on your specified domains
- ✅ Key can only access Maps/Geocoding APIs
- ✅ Google's free tier covers ~28,000 map loads/month
- ✅ Billing alerts protect against unexpected costs
- ✅ This is standard practice for all public map websites

---

## Location Data Format

Locations are stored as a JavaScript array of objects. The owner will provide data to populate this. The schema is:

```js
const LOCATIONS = [
  {
    id: "zoo-001",
    name: "San Diego Zoo",
    address: "2920 Zoo Dr, San Diego, CA 92101",
    city: "San Diego",
    state: "CA",
    country: "USA",
    lat: 32.7353,
    lng: -117.1490,
    website: "https://zoo.sandiegozoo.org",
    encounter: false,           // true = red ant, false = black ant
    species: ["Giant Anteater", "Silky Anteater"],
    notes: "Giant anteaters viewable daily in the Amazon exhibit.",
    encounter_details: ""       // e.g. "Keeper talk Tuesdays at 2pm" if encounter: true
  },
  // ...
]
```

**Owner will provide:** name, address (or lat/lng), website, encounter (boolean), species, notes, encounter_details.

If lat/lng are not provided, the build process should geocode the address using the Geocoding API once and hardcode the results (to avoid runtime geocoding costs on every page load).

---

## Core Features to Implement

### 1. Search Bar
- Text input: "Enter your city or zip code"
- On submit: geocode the input → pan/zoom map to that location → sort and display the 5 nearest anteater locations in a sidebar list
- Show distance in miles (and km toggle optional) from searched location to each result
- If input is invalid/not found: friendly error message with an ant illustration

### 2. Map
- Loads centered on continental USA by default (or world view if international locations exist)
- Custom warm/muted map style (see styling section below)
- All anteater locations shown as ant markers on load
- Clicking a marker: opens an info panel (not a default Google Maps InfoWindow — use a custom styled side panel instead)
- Map constrained to zoom levels 3–16, no need to show the whole globe

### 3. Location Info Panel
- Slides in from the right (or bottom on mobile) when a marker is selected
- Shows: facility name, city/state, species housed, encounter availability badge, notes, link to website
- "Get Directions" button that opens Google Maps directions in a new tab
- Dismissible with an X button or by clicking elsewhere

### 4. Anteater Corner Character
- Fixed position, bottom-right corner (or bottom-left — wherever it doesn't interfere with Google Maps controls)
- SVG anteater silhouette, roughly 120×80px
- Has a `<path>` for the tongue that is normally tucked in
- When a location is selected: animate the tongue extending outward toward the selected marker's screen position using a Bezier SVG path animation (CSS or GSAP/anime.js)
- When deselected: tongue retracts
- Owner will replace the placeholder SVG with a proper illustration asset later — use a `class="anteater-asset"` wrapper so it's easy to swap
- Include a `<!-- REPLACE WITH ILLUSTRATED ASSET -->` comment

### 5. Encounter vs. Viewing Filter
- Two toggle buttons: "All Locations" | "Encounters Only"
- Filters visible markers on the map and sidebar list

---

## Map Styling (Google Maps JSON)

Apply a custom style that gives a warm, naturalist field-map look:

```json
[
  { "elementType": "geometry", "stylers": [{ "color": "#f5ebe0" }] },
  { "elementType": "labels.text.fill", "stylers": [{ "color": "#4a3728" }] },
  { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#a8c5b5" }] },
  { "featureType": "landscape.natural", "elementType": "geometry", "stylers": [{ "color": "#dde5c8" }] },
  { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#c9b99a" }] },
  { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#c5d9a0" }] },
  { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#8b7355" }, { "weight": 1 }] }
]
```

---

## Ant Marker SVG Design Notes

Design two ant SVGs (black and red) as top-down silhouettes. They should look charming and slightly illustrative, not flat icon-style. Suggested anatomy to include: head, thorax, abdomen (three segments), six legs, two antennae. Size: 32×40px viewBox. The red variant uses `#cc2200` fill; black uses `#1a1a1a`.

On hover: scale 1.2, drop-shadow filter.
On selected: scale 1.3, add a pulsing CSS keyframe ring underneath (circle that fades out, like a ripple).

---

## Mobile Responsiveness

- On screens < 768px: info panel slides up from bottom (full width, 50% screen height)
- Search bar at top, full width
- Anteater character scales down to 80×55px on mobile
- Map takes full screen height minus search bar

---

## Confirmed Decisions

1. **Location data** — Use ~5 real placeholder locations (well-known zoos that actually house anteaters) so the UI looks populated. The owner will replace with a full list later. Use the schema above.
2. **Geographic scope** — North and South America only. Default map center: approximately (5, -80) with zoom level 3 to show both continents. Do not include European/Asian/Australian locations for now.
3. **Google Maps API key** — Owner will insert their own key. Leave `YOUR_API_KEY_HERE` as the placeholder string throughout.
4. **Illustrated assets** — Use CSS/SVG placeholders for both the anteater character and ant markers. Wrap everything in clearly commented, easily swappable classes. Owner will provide final art later.

## Remaining Open Questions for the Owner

5. **Hosting** — Where will this be deployed? (GitHub Pages, Netlify, custom domain?) This affects whether we need any build tooling.
6. **Analytics** — Do you want any tracking (e.g., what zips people search most)?
7. **Species filter** — Should users be able to filter by anteater species (Giant, Silky, Tamandua)?

---

## Stretch Features (Post-MVP)

- Autocomplete on the search input (Google Places API)
- "Nearest to me" button using browser geolocation
- Share a location button (copies URL with location pre-selected via query params)
- Seasonal availability flag (e.g., "encounter only available May–October")
- Fun facts tooltip that appears on the anteater character when idle

---

## Placeholder vs. Final Assets

| Element | Placeholder | Final |
|---|---|---|
| Anteater character | CSS-drawn SVG ellipses/paths | Illustrated SVG/PNG provided by owner |
| Ant markers | Geometric SVG ants | Illustrated ant SVGs (optional) |
| Favicon | 🐜 emoji favicon | Custom ant icon |

All placeholder elements should use clearly marked comments (`<!-- PLACEHOLDER: replace with ... -->`) and wrapper classes (`class="anteater-asset"`, `class="ant-marker-black"`, `class="ant-marker-red"`) to make replacement trivial.

---

## Deliverable

A single `index.html` file (self-contained, with embedded CSS and JS) that:
- Loads the Google Maps API with a provided key
- Renders all anteater locations as ant markers
- Allows zip/city search with distance-sorted results
- Has the anteater corner character with tongue animation scaffold
- Is mobile responsive
- Looks polished, warm, and on-theme out of the box

The owner will populate `LOCATIONS` data and swap in illustrated assets before launch.

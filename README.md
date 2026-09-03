# Sul@s0k List

A cross-platform mobile app for browsing movies, saving favorites, and managing a user profile. Built with **Expo** and **React Native** for the MDEV preliminary project.

## Features

- **Home** — Scrollable movie catalog with poster images, director, duration, cast, and genre details
- **Favorites** — Dedicated tab for saved movies (in progress)
- **Profile** — User info, watch stats, and customizable avatar via the device gallery
- **Modern UI** — Frosted-glass cards and tab bar using `expo-blur`, with light/dark mode support

## Tech Stack

| Category | Tools |
|----------|-------|
| Framework | [Expo](https://expo.dev) 57, [React Native](https://reactnative.dev) 0.86 |
| Language | TypeScript |
| Navigation | [Expo Router](https://docs.expo.dev/router/introduction/) (file-based routing) |
| UI | `@expo/vector-icons`, `expo-blur`, `expo-image` |
| Media | `expo-image-picker` |

## Project Structure

```
movie_list/
├── app/
│   ├── (tabs)/
│   │   ├── index.tsx       # Home — movie list
│   │   ├── favorites.tsx   # Favorites screen
│   │   ├── profile.tsx     # Profile screen
│   │   └── _layout.tsx     # Tab navigation
│   ├── data/
│   │   ├── index.ts        # Movie data
│   │   └── profile.ts      # User profile data
│   ├── styles/             # Screen-specific styles
│   └── _layout.tsx         # Root layout
├── components/             # Reusable UI components
├── constants/              # Theme colors and fonts
└── hooks/                  # Custom React hooks
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm
- [Expo Go](https://expo.dev/go) on a physical device, or Android Studio / Xcode for emulators

### Installation

```bash
cd movie_list
npm install
```

### Run the App

```bash
npx expo start
```

Then choose how to open the app from the Expo dev tools:

- Press `a` for Android emulator
- Press `i` for iOS simulator
- Scan the QR code with Expo Go on your phone

### Home

Displays a list of movies from local data. Each card shows the poster, title, director, runtime, cast, and genre. Tap the star icon to toggle a movie as a favorite, or the play icon to indicate playback (UI placeholder).

### Favorites

Placeholder screen for movies marked as favorites. Favorites are currently stored in local component state on the Home screen.

### Profile

Shows user details (name, email, bio), activity stats (movies watched, favorites, reviews), and action buttons for Edit Profile, Settings, and Logout. Tap the avatar to pick a new profile photo from the gallery.

## Data

Movie and profile data are stored locally in `app/data/` as TypeScript arrays. The catalog includes 10 films such as *Inception*, *The Matrix*, and *Interstellar*.

## Author

**Christian Dave Alicaba**  
christiandave120702@gmail.com

## License

Private — for academic use only.

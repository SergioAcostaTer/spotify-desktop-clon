# Spotify Desktop Clone 🎧

This is a clone of the Spotify desktop application, showcasing a clean and modern user interface. It was created to demonstrate my skills in frontend development and UI/UX design.

## About the Project

- **Purpose**: Recreating Spotify's desktop interface to highlight my attention to detail and ability to replicate real-world applications.
- **Features**: 
  - Interactive playlists and music cards.
  - Modern dark-themed design.
  - Real-time playlists and songs retrieved using the Spotify API.

## API Integration

This project integrates the **Spotify Web API** to fetch real data such as playlists, songs, and user profiles. To access the API, the application:

1. **Retrieves a Bearer Token**: Uses an authentication flow to generate a valid token for each session.
2. **Makes API Requests**: The token is included in the request headers to interact with different Spotify endpoints, such as:
   - Playlists (`/v1/playlists/{playlist_id}`)
   - User Profiles (`/v1/users/{user_id}`)

This allows the clone to display live Spotify data dynamically, giving users an experience similar to the real Spotify desktop app.

## Contact

- **Portfolio**: [sergioacostadev.com](https://sergioacostadev.com)
- **Email**: [sergioacostaquintana@gmail.com](mailto:sergioacostaquintana@gmail.com)

# Anitomo Anime API

Anitomo is an anime API that provides information about various anime series from different sources. It offers endpoints to retrieve anime details, episode information, and more from different anime providers.

## Installation and Usage

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd anitomo`
3. Install dependencies: `npm install`
4. Create a `.env` file based on the provided `.env.example` and fill in the required information.
5. Start the development server: `npm run dev`

## Endpoints

The API provides the following endpoints for retrieving anime information from different providers:

- `GET /v1/animefox`: Retrieve anime information from AnimeFox.
- `GET /v1/animepahe`: Retrieve anime information from AnimePahe.
- `GET /v1/animesaturn`: Retrieve anime information from AnimeSaturn.
- `GET /v1/crunchyroll`: Retrieve anime information from Crunchyroll.
- `GET /v1/enime`: Retrieve anime information from Enime.
- `GET /v1/gogoanime`: Retrieve anime information from GoGoAnime.
- `GET /v1/marin`: Retrieve anime information from Marin.
- `GET /v1/zoro`: Retrieve anime information from Zoro.

For more details about each endpoint, refer to the respective source files in the `src/v1/routes` directory.

## Acknowledgments

Special thanks to the following packages used in this project:

- [Consumet.ts](https://link-to-consumet.ts-package)
- [Website](https://link-to-website-package)
- [Providers Status](https://link-to-providers-status-package)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

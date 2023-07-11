# TaigaUiAdmin

TaigaUi Admin is an admin panel based on the Taiga Ui kit and components library!

## Development server

The current version of angular is 16.1.4.

Run `npm i` and then hit `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Project structure


The project was bootstraped from `main.ts` using AppComponent, and a few components were added to it from `https://taiga-ui.dev/` documentation.

- components folder contains every standalone component separately.
- general folder contains the login/register and dashboard components.
- `tailwindcss 3.3.2` was used for adding designs.

## Contributions 


Contributions are welcome! If you would like to contribute to this project, please follow these steps:

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Make the necessary changes and commit them.
- Push your changes to your fork.
- Submit a pull request describing your changes.

### Hints

You can generate a standalone component in the `components` folder, add it to `app-routing.module.ts` file, and add it to the navbar object in the `dashboard.component.ts` file.

## License
This project is licensed under the [MIT License](https://github.com/AAVision/taiga-ui-admin/blob/main/LICENSE). See the [LICENSE](https://github.com/AAVision/taiga-ui-admin/blob/main/LICENSE) file for details.

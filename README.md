# Azure Web App Deployment with GitHub Actions

This repository demonstrates how to automate the deployment of a Node.js application to Azure Web App using GitHub Actions.

## Workflow Overview

The GitHub Actions workflow defined in `.github/workflows/main_azfaralam.yml` has two main jobs:

1. **Build Job:**
   - Checks out the code using `actions/checkout`.
   - Sets up the Node.js environment with `actions/setup-node`.
   - Installs dependencies, builds the application, and runs tests using `npm`.
   - Zips the application into an artifact using `zip` and uploads it using `actions/upload-artifact`.

2. **Deploy Job:**
   - Downloads the artifact created in the build job using `actions/download-artifact`.
   - Unzips the artifact.
   - Logs into Azure using `azure/login`.
   - Deploys the application to Azure Web App using `azure/webapps-deploy`.

## How to Use

To use this workflow for your own Node.js application and Azure Web App:

1. **Clone Repository:**
   Fork or Clone this repository to your local machine.

   ```bash
   git clone https://github.com/mdazfar2/Azure-WebApp-Github-Actions.git

2. **Configure Azure Secrets:**
   - In your GitHub repository settings, add the following secrets:

      `AZUREAPPSERVICE_CLIENTID_7A31824AC67C4044A30CD0F793814F0F` --> Azure Service Principal Client ID.

      `AZUREAPPSERVICE_TENANTID_3007C81CD6D349A8AA893C70548DC0B7` --> Azure Service Principal Tenant ID.

      `AZUREAPPSERVICE_SUBSCRIPTIONID_7AEB8BB8C759465FB19BFE67DE66C09C` --> Azure Subscription ID.

3. **Modify Azure App Name (if necessary):**
   Update the `app-name` and `slot-name` in the `deploy` job of `main_azfaralam.yml` to match your Azure Web App.
4. **Push Changes:**
   Make any necessary changes to your Node.js application code.

## It's time to check Actions:
Commit and push your changes to trigger the GitHub Actions workflow.
   ```bash
   git add .
   git commit -m "Update application code"
   git push origin main
   ```
- **Monitor Deployment:**
  Visit the `Actions` tab in your GitHub repository to monitor the progress of the deployment workflow. Once completed, your Node.js application will be deployed to Azure Web App.

## Customize Workflow like upload images to DockerHub
Feel free to customize the workflow to suit your specific needs:

   - Modify Node.js version (`node-version`) or build commands in the `build` job.
   - Adjust deployment settings such as `app-name` and `slot-name` in the `deploy` job.

## License
This project is licensed under the [MIT License](https://github.com/mdazfar2/Azure-WebApp-Github-Actions/blob/main/LICENSE).

***if you are facing issues related Azure, don't hesitate to ask me. You can contact with me on-***

- [LinkedIN](https://linkedin.com/in/md-azfar-alam)
- [Discord](https://discordapp.com/users/877531143610708028)
- [Mail Me](mailto:azfaralam.ops@gmail.com)

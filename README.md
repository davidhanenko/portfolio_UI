# About
My personal portfolio [website](https://davidhanenko.com) which includes some of my projects and technical skills. It's a single page, fully responsive, and styled with Styled Components.

### Built with

- Next.js(React.js framework)
- TypeScript
- Styled Components
- Apollo & GraphQL
- Strapi CMS
- Vercel

# Getting Started

To get a local copy up and running follow these steps.

## Prerequisites

- yarn
- node
- git

## Installation

1. Clone the repo

     ```git clone https://github.com/davidhanenko/portfolio_ui.git```

2. Install NPM packages

     ```yarn install```

3. Create configuration file .env with following variables
    
     `NEXT_PUBLIC_API_URL=http://localhost:1337` - Stpapi CMS URI in dev mode. Should be set as ENV variable with actual URI at deployment.
  
## Usage

``` yarn dev ```

Go to http://localhost:8888 for the Next.js frontend application.

The app uses Strapi CMS as a backend, there you will be able to create the content needed for the application. It's located in a [separate repository](https://github.com/davidhanenko/portfolio_cms).
After starting backend will be available at http://localhost:1337/admin.


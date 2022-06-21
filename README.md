# 📒 SMTP Field Manual

The SMTP Field Manual is a collection of raw SMTP server responses from major email service providers and spam filter services.

Check out the ["Why" page](https://smtpfieldmanual.com/why) for more details.

## Contribute

If you plan on making additions or edits to existing SMTP responses, you’ll need to fork the repo and [submit a pull request](https://help.github.com/en/articles/creating-a-pull-request). All of the data is stored as JSON in the [/data](https://github.com/activecampaign/smtp-field-manual/blob/master/data) folder. There's no need to set up the development environment for changes like this.

Feel free to [file an issue](https://github.com/activecampaign/smtp-field-manual/issues/new) if you don’t feel like dealing with code.

Check out the [contribute page](https://smtpfieldmanual.com/contribute) for more details.


## Set up development environment

This is required if you plan on making changes to the website, data structure, or handling deployments. This website uses [GatsbyJS](https://gatsbyjs.org) as a framework for statically generating the pages and [Github pages](https://pages.github.com/) for deployments.

- Set up [Node Version Manager](https://github.com/nvm-sh/nvm)
  - `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash`
  - `nvm install`
  - `nvm use`
- `npm install`
- `npm install gatsby-cli -g`
- **🚨Admins only🚨** Create a file named `.env` in the project root
  - Use [.env.example](https://github.com/activecampaign/smtp-field-manual/blob/master/.env.example) as a boilerplate
  - Reach out to [Derek Rushforth](mailto:drushforth@activecampaign.com) for API keys
- `npm start` - Starts server on [http://localhost:8000](http://localhost:8000)


## Deployments 🚨Admins only🚨

- `nvm use`
- `npm run deploy`

The deploy command does the following:

- Website is compiled by [GatsbyJS](https://gatsbyjs.org)
- Index data is uploaded to [Algolia](https://algolia.com)
- Static website is uploaded via [Github pages](https://pages.github.com/). The code resides on the `gh-pages` branch.


## Issues & Comments
Feel free to contact us if you encounter any issues with the library. Please leave all comments, bugs, requests and issues on the Issues page.

## License
The SMTP Field Manual licensed under the MIT license. Please refer to the [LICENSE](https://github.com/activecampaign/smtp-field-manual/blob/master/LICENSE) for more information.
